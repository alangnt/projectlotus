import BackgroundVideo from '../components/BackgroundVideo';
import Header from '../components/header/headerHome';
import Main from '../components/main/mainHome';
import Footer from '../components/footer/footerHome';
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col justify-between text-white body-ctn">
            <BackgroundVideo />

            <Header />

            <Main />

            <Footer />
        </div>
    )
};

export default Home;