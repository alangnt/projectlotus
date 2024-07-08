import React, { useState } from 'react';
import { useStatus } from '../../context/context';
import Link from 'next/link';

interface FormData {
    email: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const { status } = useStatus();

    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
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
                    <p className='text-3xl'>Welcome back !</p>
                </div>
            ) : (
                <div className='w-full h-full flex flex-col items-center gap-4'>
                    {status ? (
                        <div className='form-light w-5/6 flex flex-col items-center justify-between pt-6 pr-6 pl-6 rounded-3xl login-height'>
                            <h1 className='text-3xl text-center'>Welcome back ! Login to your account</h1>
                            <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-12 grow text-2xl form-width'>
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
                                <button type="submit" className='hover:scale-110 transition-all'>Login</button>
                            </form>
                        </div>
                    ) : (
                        <div className='form-dark w-5/6 flex flex-col items-center justify-between pt-6 pr-6 pl-6 rounded-3xl login-height'>
                            <h1 className="text-3xl text-center">Welcome back ! Login to your account</h1>
                            <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-12 grow text-2xl form-width'>
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
                                <button type="submit" className='hover:scale-110 transition-all'>Login</button>
                            </form>
                        </div>
                    )}
                    <Link href="/register" className='text-xl text-center underline'>First time here ? Create an account here</Link>
                </div>
            )}
        </main>
    );
};

export default LoginForm;