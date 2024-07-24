"use client";

import React, { useState } from 'react';
import { useStatus } from '../../context/context';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';

const ProfilePage: React.FC = () => {
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
                    <div className='w-full h-full flex flex-col items-center gap-4'>
                        <div className='flex flex-col items-center justify-between pt-6 pr-6 pl-6 gap-16'>
                            <h1 className='text-3xl text-center'>Welcome to your Account, {session.user?.name || 'User'} !</h1>

                            <section className={`timer-${status ? 'lightmode' : 'darkmode'} border-2 flex flex-col justify-between register-height p-8 form-width`}>
                                <div className='flex flex-col gap-1'>
                                    <h3>Your informations</h3>
                                    <h4>(You'll be able to add/modify them later)</h4>
                                </div>

                                <div className='flex flex-col gap-8 grow justify-center items-start'>
                                    <div className='flex justify-center w-full'>
                                        <Image
                                            src={session.user?.image || '/img/login.png'}
                                            alt={session.user?.name || ''}
                                            width={150}
                                            height={150}
                                            className='rounded-full big-mobile' />
                                    </div>

                                    <div className='flex gap-8 w-full'>
                                        <p className='w-1/2'>Username: </p>
                                        <p>{session.user?.name || '.............................'}</p>
                                    </div>

                                    <div className='flex gap-8 w-full'>
                                        <p className='w-1/2'>First Name: </p>
                                        <p>{session.user?.firstname || '.............................'}</p>
                                    </div>

                                    <div className='flex gap-8 w-full'>
                                        <p className='w-1/2'>Last Name: </p>
                                        <p>{session.user?.lastname || '.............................'}</p>
                                    </div>

                                    <div className='flex gap-8 w-full'>
                                        <p className='w-1/2'>Date of Birth: </p>
                                        <p>{session.user?.dateofbirth || '.............................'}</p>
                                    </div>

                                    <div className='flex gap-8 w-full'>
                                        <p className='w-1/2'>Location: </p>
                                        <p>{session.user?.country || '.............................'}</p>
                                    </div>
                                </div>
                            </section>

                            <form onSubmit={handleSubmit} className='flex flex-col justify-evenly grow form-width gap-8 hidden'>
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
                    </div>
                </>
            ) : (
                <>
                    <div className='flex flex-col justify-center items-center grow'>
                        <Link
                            href={'/login'}
                            prefetch={false}
                            className='text-center text-3xl underline'
                        >
                            Please login first to access your account profile
                        </Link>
                    </div>

                </>
            )}
        </main >
    );
};

export default ProfilePage;