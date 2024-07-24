import React, { useState } from 'react';
import { useStatus } from '../../context/context';
import Link from 'next/link';

const RegisterForm: React.FC = () => {
    const { status } = useStatus();

    const [submitted, setSubmitted] = useState<boolean>(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmpassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                // Optionally, you can automatically sign in the user here
            } else {
                alert(data.error || 'Failed to register');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('An error occurred during registration. Please try again.');
        }
    };

    return (
        <main className='flex flex-col justify-between text-center grow gap-4'>
            {submitted ? (
                <div className='flex justify-center'>
                    <p className='text-3xl'>Thank you for registering, {formData.name}!</p>
                </div>
            ) : (
                <div className='w-full h-full flex flex-col items-center gap-4'>
                    <div className={`form-${status ? 'light' : 'dark'} flex flex-col items-center justify-between pt-6 pr-6 pl-6 rounded-3xl register-height`}>
                        <h1 className='text-3xl text-center'>Welcome ! Register your account below</h1>
                        <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow text-xl form-width'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="name">Username:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='form-text rounded-full text-sm text-black'
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='form-text rounded-full text-sm text-black'
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className='form-text rounded-full text-sm text-black'
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="confirmpassword">Confirm Password:</label>
                                <input
                                    type="password"
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    value={formData.confirmpassword}
                                    onChange={handleChange}
                                    required
                                    className='form-text rounded-full text-sm text-black'
                                />
                            </div>
                            <button type="submit" className='hover:scale-110 transition-all'>Register</button>
                        </form>
                    </div>
                    <Link href="/login" className='text-xl text-center underline'>Already have an account ? Login here</Link>
                </div>
            )}
        </main>
    );
};

export default RegisterForm;