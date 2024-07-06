import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StatusProvider } from '../context/context';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StatusProvider>
            <Component {...pageProps} />
        </StatusProvider>
    );
}

export default MyApp