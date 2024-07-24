import Head from 'next/head';
import BackgroundVideo from '../components/BackgroundVideo';
import HeaderRegLog from "../components/header/headerRegLog";
import LoginForm from "../components/main/loginForm";
import Footer from '../components/footer/footer';

const Connect: React.FC = () => {
    return (
        <div className='text-white flex flex-col w-full h-screen'>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="google-site-verification" content="JNRzwjtOEUwxtu9LWSm1sdHseLr5Jg-FMLKA6LZbphI" />
                <meta name="description" content="Discover Project Lotus, a relaxing platform designed for studying with the Pomodoro Method. Enhance your focus and productivity with soothing backgrounds and a built-in 25-minute timer. Perfect for students and professionals looking to optimize their study sessions. Visit us now!" />
                <title>Project Lotus | Login to your Account</title>
                <link rel="icon" href="/icon.ico"></link>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8441329308595760"
                    crossOrigin="anonymous"></script>
            </Head>

            <BackgroundVideo />

            <HeaderRegLog />

            <LoginForm />

            <Footer />
        </div>
    )
}

export default Connect;