"use client";

import React from 'react';
import { useStatus } from '../../context/context';
import { signIn, signOut, useSession } from "next-auth/react";

const LoginForm: React.FC = () => {
    const { status } = useStatus();

    const { data: session } = useSession();

    return (
        <main className='flex flex-col justify-between text-center grow gap-4'>

            {session ? (
                <>
                    <h1>
                        Welcome back, {session.user?.name}!
                    </h1>

                    <button
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
                </>
            ) : (
                <div className='w-full h-full flex flex-col items-center gap-4'>
                    {status ? (
                        <div className='form-light w-5/6 flex flex-col items-center justify-between pt-6 pr-6 pl-6 rounded-3xl login-height'>
                            <button
                                onClick={() => signIn("google")}
                            >
                                <img src='/img/logos/ggsignin.png'></img>
                            </button>
                        </div>
                    ) : (
                        <div className='form-dark w-5/6 flex flex-col items-center justify-around pt-6 pr-6 pl-6 rounded-3xl login-height'>
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
    );
};

export default LoginForm;