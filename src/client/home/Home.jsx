import { FaAndroid, FaAppStore, FaGlobe, FaInstagram, FaWhatsapp } from "react-icons/fa"

const Home = () => {
    return (
        <div className="home">
            <video
                src="../../../public/background.mp4"
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
                            src="../../../public/NVIZU.png"
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
                            <a
                                className="p-3 rounded-lg flex flex-row justify-start items-center gap-2 bg-primary text-secondary "
                                href="https://sites.appbarber.com.br/nvizubarbearia-d6um"
                            >
                                Agendar no WEBSITE
                                <FaGlobe />
                            </a>
                    </section>

                    <footer className="">
                        <p className="mt-3 mb-3 text-secondary">NVIZU - Imagem Masculina</p>


                        <section className="flex flex-row justify-around gap-4">
                            <a href="https://wa.me/5575981902637?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20novo%20servi%C3%A7o!" className="text-green-500 hover:text-green-600">
                                <FaWhatsapp size={"45px"} />
                            </a>
                            <a href="https://www.instagram.com/nvizubarbearia/" className="bg-gradient-to-r from-purple-600 via-pink-500
                             to-red-500 text-white rounded-full p-1">
                                <FaInstagram size={"35px"} />
                            </a>
                        </section>

                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Home
