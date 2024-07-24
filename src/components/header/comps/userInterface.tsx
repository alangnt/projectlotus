"use client";

import React from 'react';
import { useStatus } from "../../../context/context";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const UserInterface: React.FC = () => {

    const { data: session } = useSession();

    return (
        <nav className="flex">

            {session?.user ? (
                <div className='flex flex-col items-center pt-4 pr-2'>
                    <Link
                        href='/profile'
                        prefetch={false}
                        className='flex justify-center items-center'
                    >
                        <img src={session.user.image || '/img/login.png'} alt={session.user.name || ''} className='rounded-full big-mobile'></img>
                    </Link>

                    <p className='hide-mobile'>
                        Enjoy your session !
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
                    <Link
                        href="/login"
                        className='mr-4 pt-1 pb-1 pl-4 pr-4 hover:scale-110 text-l border-2 border-black text-center rounded-full text-black bg-white loginbutton login-big shadow-xl'
                        prefetch={false}
                    >
                        Login
                    </Link>

                    <Link
                        href="/login"
                        className='hover:scale-110 text-black loginbutton login-small shadow-xl'
                        prefetch={false}
                    >
                        <Image src="/img/user.png" alt="Login" width={75} height={75} />
                    </Link>
                </div>
            )}

        </nav>
    );
}

export default UserInterface;