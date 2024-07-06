import React from "react";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Discover Project Lotus, a relaxing platform designed for studying with the Pomodoro Method. Enhance your focus and productivity with soothing backgrounds and a built-in 25-minute timer. Perfect for students and professionals looking to optimize their study sessions. Visit us now!" />
                <title>Project Lotus</title>
                <link rel="icon" type="image/png" href="../../../public/icon.ico"></link>
            </Head>
            <body className="antialiased">
                {children}
                <Analytics />
            </body>
        </html>
    );
}