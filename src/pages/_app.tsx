import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SessionWrapper from "../components/SessionWrapper";

import { StatusProvider } from '../context/context';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionWrapper>
            <StatusProvider>
                <Component {...pageProps} />
                <Analytics />
                <SpeedInsights />
            </StatusProvider>
        </SessionWrapper>
    );
}

export default MyApp