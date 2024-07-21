import '../styles/globals.css'

import type { AppProps } from 'next/app'
import SessionWrapper from "../components/SessionWrapper";

import { StatusProvider } from '../context/context';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionWrapper>
            <StatusProvider>
                <Component {...pageProps} />
            </StatusProvider>
        </SessionWrapper>
    );
}

export default MyApp