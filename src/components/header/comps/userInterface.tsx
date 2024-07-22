"use client";

import React from 'react';
import { useStatus } from "../../../context/context";

import { signIn, signOut, useSession } from "next-auth/react";

const UserInterface: React.FC = () => {
    const { status } = useStatus();

    const { data: session } = useSession();

    return (
        <nav className="flex">

            {session ? (
                <div className='flex flex-col items-center pt-4 pr-2'>
                    <img src={session.user?.image as string} alt={session.user?.name as string} className='rounded-full big-mobile'></img>

                    <p className='hide-mobile'>
                        Enjoy your session, {session.user?.name}!
                    </p>

                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className='hover:scale-110'
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className='flex items-center'>
                    {status ? (
                        <>
                            <button
                                onClick={() => signIn("google")}
                            >
                                <img src='/img/logos/ggsignin.png' alt='Google Sign In button' className='big'></img>
                            </button>

                            <button
                                onClick={() => signIn("google")}
                            >
                                <img src='/img/logos/ggsigninicon.png' alt='Google Sign In button' className='small'></img>
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => signIn("google")}
                            >
                                <img src='/img/logos/ggsignin.png' alt='Google Sign In button' className='big'></img>

                            </button>

                            <button
                                onClick={() => signIn("google")}
                            >
                                <img src='/img/logos/ggsigninicon.png' alt='Google Sign In button' className='small'></img>
                            </button>
                        </>
                    )}
                </div>
            )}

        </nav>
    );
}

export default UserInterface;