export default function JuniorsSecundary() {
    return (
        <section className="bg-[#3cbbcf] px-4 sm:px-8 py-12 lg:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left side - Image placeholder */}
                    <div className="order-2 lg:order-1">
                        <video
                            className="w-full h-auto rounded-lg"
                            src="/img/IMG_5068.MP4" controls />
                    </div>

                    {/* Right side - Content */}
                    <div className="order-1 lg:order-2  gotham-bold">
                        <h1 className=" text-white text-xl sm:text-4xl xl:text-5xl gotham-bold mb-8 text-center ">
                            “Aprenden mientras {" "}
                            <span className="text-[#000c78]">juegan, resuelven y experimentan.”</span>
                        </h1>

                        {/* Activity icons grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8">
                            <div className="flex flex-col items-center text-center">
                                <img src="/img/F.png" alt="Experimento" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Ciencia que
                                    <br />
                                    sorprende
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img src="/img/D.png" alt="Dado" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Retos para<br />
                                    pensar y crear
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img src="/img/E.png" alt="Pintura" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Diseñamos
                                    <br />
                                    y decoramos
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img src="/img/K.png" alt="descubriendo" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Juegos con
                                    <br />
                                    dinero y decisiones
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img src="/img/M.png" alt="carrusel" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Tecnología al servicio
                                    <br />
                                    de nuestras ideas
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img src="/img/G.png" alt="PUZZLE" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Descubrimos cómo<br />
                                    funciona todo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}