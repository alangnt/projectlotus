"use client";

import React from 'react';
import { useStatus } from '../../context/context';
import { signIn, signOut, useSession } from "next-auth/react";

import Countries from "../Countries";

export default function ProfilePage() {
    const { status } = useStatus();

    const { data: session } = useSession();

    return (
        <main className='flex flex-col justify-between text-center grow gap-4'>

            {session ? (
                <>
                    <div className='w-full h-full flex flex-col items-center gap-4'>
                        {status ? (
                            <div className='form-light w-5/6 flex flex-col items-center justify-around pt-6 pr-6 pl-6 rounded-3xl login-height'>
                                <h2>Welcome to your Profile Page, {session.user?.name} !</h2>


                            </div>
                        ) : (
                            <div className='form-dark w-5/6 flex flex-col items-center justify-around p-6 rounded-3xl login-height'>
                                <h2>Welcome to your Profile Page, {session.user?.name} !</h2>

                                <form method='POST' className='flex flex-col text-xl gap-4'>
                                    <div className='flex flex-col'>
                                        <label htmlFor='fname' className='mb-1'>First Name</label>
                                        <input type='text' id='fname' name='fname' className='text-black text-xl pl-2 pr-2 pt-1 pb-1 rounded-full' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label htmlFor='lname' className='mb-1'>Last Name</label>
                                        <input type='text' id='lname' name='lname' className='text-black text-xl pl-2 pr-2 pt-1 pb-1 rounded-full' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <label htmlFor='dob' className='mb-1'>Date of Birth</label>
                                        <input type='date' id='dob' name='dob' className='text-black text-xl pl-2 pr-2 pt-1 pb-1 rounded-full' />
                                    </div>

                                    <div className='flex flex-col'>
                                        <Countries />
                                    </div>

                                    <p>{JSON.stringify(session)}</p>

                                </form>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className='w-full h-full flex flex-col items-center gap-4'>
                    {status ? (
                        <div className='form-light w-5/6 flex flex-col items-center justify-around pt-6 pr-6 pl-6 rounded-3xl login-height'>
                            <h2>Continue below to access your Profile Page</h2>

                            <button
                                onClick={() => signIn("google")}
                            >
                                <img src='/img/logos/ggsignin.png'></img>
                            </button>
                        </div>
                    ) : (
                        <div className='form-dark w-5/6 flex flex-col items-center justify-around pt-6 pr-6 pl-6 rounded-3xl login-height'>
                            <h2>Continue below to access your Profile Page</h2>

                            <button
                                onClick={() => signIn("google")}
                            >
                                <img src='/img/logos/ggsignin.png'></img>
                            </button>
                        </div>
                    )}
                </div>
            )}

        </main>
    )
}