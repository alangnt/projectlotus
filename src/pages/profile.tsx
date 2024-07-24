"use client"

import { useSession } from "next-auth/react";
import Head from 'next/head';

import BackgroundVideo from '../components/BackgroundVideo';
import BackgroundProfile from '../components/BackgroundProfile';
import HeaderConnect from "../components/header/headerConnect";
import ProfilePage from "../components/main/profilePage";
import Footer from '../components/footer/footer';

import { useStatus } from '../context/context';

export default function Profile() {
    const { status } = useStatus();

    return (
        <div className='text-white flex flex-col w-screen h-screen'>
            < BackgroundVideo />

            <BackgroundProfile />

            <HeaderConnect />

            <ProfilePage />

            <Footer />
        </div >
    )
}