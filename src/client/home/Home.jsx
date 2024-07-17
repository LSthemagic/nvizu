import { FaAndroid, FaAppStore } from "react-icons/fa";

const Home = () => {
    return (
        <div className="home">
            <video
                src="/dom_black.mp4"
                loop
                autoPlay
                muted
                playsInline
                className="background-video"
            ></video>

            <div className="home-content">
                <nav>
                    <img
                        src="/logo2.png"
                        width="175px"
                        alt="Logo"
                    />
                </nav>
                <div className="content p-10">
                    <section className="grid grid-cols-1 gap-2 text-justify w-full">
                        <a
                            className="flex flex-row gap-5 p-3 pl-10 pr-10 rounded-lg items-center bg-primary text-white hover:scale-105 hover:text-secondary"
                            href="https://play.google.com/store/apps/details?id=br.com.starapp.appbarbercli&pcampaignid=web_share"
                        >
                            <FaAndroid />
                            Baixar para ANDROID
                        </a>
                        <a
                            className="flex flex-row gap-5 p-3 pl-10 pr-10 rounded-lg items-center bg-primary text-white hover:scale-105 hover:text-secondary"
                            href="https://apps.apple.com/br/app/appbarber-cliente/id6450795073"
                        >
                            <FaAppStore />
                            Baixar para IOS
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;
