import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <Analytics />
                    <SpeedInsights />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
