import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

export default async function registerHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      // Check if user already exists
      const checkUserQuery = "SELECT * FROM users WHERE email = $1";
      const checkUserResult = await pool.query(checkUserQuery, [email]);

      if (checkUserResult.rows.length > 0) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await hashPassword(password);

      // Insert new user
      const insertUserQuery = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email";
      const insertUserResult = await pool.query(insertUserQuery, [name, email, hashedPassword]);

      const newUser = insertUserResult.rows[0];

      res.status(201).json({ 
        message: 'User registered successfully', 
        user: { id: newUser.id, name: newUser.name, email: newUser.email } 
      });

    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}