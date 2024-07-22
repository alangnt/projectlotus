import BackgroundVideo from "../components/BackgroundVideo";
import Header from "../components/header/headerConnect";
import ProfilePage from "../components/main/mainProfile";
import Footer from "../components/footer/footer";

export default function Profile() {
    return (
        <div className="flex flex-col justify-between text-white body-ctn">

            <BackgroundVideo />

            <Header />

            <ProfilePage />

            <Footer />

        </div>
    )
}