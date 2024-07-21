"use client";

import BackgroundVideo from '../components/BackgroundVideo';
import Head from 'next/head';
import HeaderHome from '../components/header/headerHome';
import Main from '../components/main/mainHome';
import Footer from '../components/footer/footer';
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col justify-between text-white body-ctn">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="google-site-verification" content="JNRzwjtOEUwxtu9LWSm1sdHseLr5Jg-FMLKA6LZbphI" />
                <meta name="description" content="Discover Project Lotus, a relaxing platform designed for studying with the Pomodoro Method. Enhance your focus and productivity with soothing backgrounds and a built-in 25-minute timer. Perfect for students and professionals looking to optimize their study sessions. Visit us now!" />
                <title>Project Lotus</title>
                <link rel="icon" href="/icon.ico"></link>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8441329308595760"
                    crossOrigin="anonymous"></script>
            </Head>

            <BackgroundVideo />

            <HeaderHome />

            <Main />

            <Footer />
        </div>
    )
};

export default Home;