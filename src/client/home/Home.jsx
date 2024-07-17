import { FaAndroid, FaAppStore } from "react-icons/fa"

const Home = () => {
    return (
        <div className="home">
            <video
                src="/background.mp4"
                loop
                autoPlay
                muted
                playsInline
                className="background-video"
            >
            </video>
            <div className="home-content">
                <div className="content p-10">
                    <nav>
                        <img
                            className="m-3 mb-5 mt-0"
                            src="/NVIZU.png"
                        >

                        </img>
                    </nav>
                    <section className="grid grid-col gap-2 text-justify w-full">
                            <a
                                className="p-3 rounded-lg flex flex-row justify-start items-center gap-2 bg-primary text-secondary "
                                href="https://play.google.com/store/apps/details?id=br.com.starapp.appbarbercli&pcampaignid=web_share"
                            >
                                Agendar no ANDROID
                                <FaAndroid />
                            </a>
                            <a
                                className="p-3 rounded-lg flex flex-row justify-start items-center gap-2 bg-primary text-secondary "
                                href="https://apps.apple.com/br/app/appbarber-cliente/id6450795073"
                            >
                                
                                Agendar no IOS
                                <FaAppStore />
                            </a>
                           
                    </section>

                </div>
            </div>
        </div>
    )
}

export default Home
