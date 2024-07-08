import React, { useState } from 'react';
import { useStatus } from '../../context/context';
import Link from 'next/link';

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm: React.FC = () => {
    const { status } = useStatus();

    const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '', confirmPassword: '' });
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        setSubmitted(true);
    };

    return (
        <main className='flex flex-col justify-between text-center grow gap-4'>
            {submitted ? (
                <div className='flex justify-center'>
                    <p className='text-3xl'>Thank you for registering, {formData.name}!</p>
                </div>
            ) : (
                <div className='w-full h-full flex flex-col items-center gap-4'>
                    {status ? (
                        <div className='form-light w-5/6 flex flex-col items-center justify-between pt-6 pr-6 pl-6 rounded-3xl register-height'>
                            <h1 className='text-3xl text-center'>Welcome ! Register your account below</h1>
                            <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow text-xl form-width'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="name">Name:</label>
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
                                    <label htmlFor="confirmPassword">Confirm Password:</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        className='form-text rounded-full text-sm text-black'
                                    />
                                </div>
                                <button type="submit" className='hover:scale-110 transition-all'>Register</button>
                            </form>
                        </div>
                    ) : (
                        <div className='form-dark w-5/6 flex flex-col items-center justify-between pt-6 pr-6 pl-6 rounded-3xl register-height'>
                            <h1 className="text-3xl text-center">Welcome ! Register your account below</h1>
                            <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow text-xl form-width'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="name">Name:</label>
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
                                    <label htmlFor="confirmPassword">Confirm Password:</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        className='form-text rounded-full text-sm text-black'
                                    />
                                </div>
                                <button type="submit" className='hover:scale-110 transition-all'>Register</button>
                            </form>
                        </div>
                    )}
                    <Link href="/login" className='text-xl text-center underline'>Already have an account ? Login here</Link>
                </div>
            )}
        </main>
    );
};

export default RegisterForm;