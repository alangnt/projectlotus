"use client";

import React, { useState } from 'react';
import { useStatus } from '../../context/context';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';

import Link from 'next/link';

const LoginForm: React.FC = () => {
    const { status } = useStatus();
    const { data: session, status: sessionStatus } = useSession();
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await signIn('credentials', {
                redirect: false,
                email: formData.email,
                password: formData.password,
            });

            if (result?.error) {
                alert(result.error);
            } else {
                router.push('/');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        }
    };

    if (sessionStatus === "loading") {
        return <div>Loading...</div>;
    }

    return (
        <main className='flex flex-col justify-between text-center grow gap-4'>
            {session ? (
                <>
                    <h1>
                        Welcome back, {session.user?.name || 'User'}!
                    </h1>
                    <button onClick={() => signOut()}>
                        Sign Out
                    </button>
                </>
            ) : (
                <div className='w-full h-full flex flex-col items-center gap-4'>
                    <div className={`form-${status ? 'light' : 'dark'} flex flex-col items-center justify-between pt-6 pr-6 pl-6 rounded-3xl register-height`}>
                        <h1 className='text-3xl text-center'>Welcome! Login to your account below</h1>
                        <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow form-width'>
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
                        <div className='w-5/6 flex flex-col items-center justify-around pt-6 pr-6 pl-6 rounded-3xl h-2/6'>
                            <button onClick={() => signIn("google")}>
                                <img src='/img/logos/ggsignin.png' alt="Sign in with Google" />
                            </button>
                        </div>
                    </div>
                    <Link href="/register" className='text-xl text-center underline'>Don't have an account ? Register here !</Link>
                </div>
            )}
        </main>
    );
};

export default LoginForm;