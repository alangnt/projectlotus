import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { useStatus } from "../../../context/context";

const UserInterface: React.FC = () => {
    const { status, setStatus } = useStatus();

    const handleStatusChange = () => {
        setStatus((prevStatus: boolean) => !prevStatus);
    };

    return (
        <nav className="flex w-min">
            {status ? (
                <div className="flex">
                    <section className="flex gap-2 h-10">
                        <button className="btns border-white border-2 rounded-full pr-4 pl-4 btn-color-light h-full usr-text-color x-small-dev">Register</button>
                        <button className="btns border-white border-2 rounded-full pr-4 pl-4 btn-color-light h-full usr-text-color x-small-dev">Login</button>
                    </section>

                    <section className="hidden btns rd-btns justify-center items-center border-white border-2 rounded-full w-10 h-10 p-2 btn-color-light">
                        <Link href="" className="relative w-full h-full"><Image fill src="/img/login.png" objectFit="contain" alt="login button" /></Link>
                    </section>

                    <section className="btns rd-btns justify-center items-center border-white border-2 rounded-full w-10 h-10 p-2 btn-color-light big-dev">
                        <button className="relative w-full h-full"><Image fill src="/img/menu.png" objectFit="contain" alt="menu button"></Image></button>
                        <Link href=""></Link>
                        <Link href=""></Link>
                    </section>
                </div>
            ) : (
                <div className="flex">
                    <section className="flex gap-2 h-10">
                        <button className="btns border-white border-2 rounded-full pr-4 pl-4 btn-color-dark h-full usr-text-color x-small-dev">Register</button>
                        <button className="btns border-white border-2 rounded-full pr-4 pl-4 btn-color-dark h-full usr-text-color x-small-dev">Login</button>
                    </section>

                    <section className="hidden btns rd-btns justify-center items-center border-white border-2 rounded-full w-10 h-10 p-2 btn-color-dark">
                        <Link href="" className="relative w-full h-full"><Image fill src="/img/login.png" objectFit="contain" alt="login button" /></Link>
                    </section>

                    <section className="btns rd-btns justify-center items-center border-white border-2 rounded-full w-10 h-10 p-2 btn-color-dark big-dev">
                        <button className="relative w-full h-full"><Image fill src="/img/menu.png" objectFit="contain" alt="menu button"></Image></button>
                        <Link href=""></Link>
                        <Link href=""></Link>
                    </section>
                </div>
            )}
        </nav>
    );
}

export default UserInterface;