export default function TeensSecundary() {
    return (
        <section className="bg-[#7cb147] px-4 sm:px-8 py-12 lg:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left side - Image placeholder */}
                    <div className="order-2 lg:order-1">
                        <video
                            className="w-full h-auto rounded-lg"
                            src="/img/IMG_5067_.webm" controls />
                    </div>

                    {/* Right side - Content */}
                    <div className="order-1 lg:order-2  gotham-bold">
                        <h1 className=" text-white text-xl sm:text-4xl xl:text-5xl gotham-bold mb-8 text-center ">
                            “Se preparan para {" "}
                            <span className="text-[#efdb05]">transformar ideas en soluciones reales.”</span>
                        </h1>

                        {/* Activity icons grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8">
                            <div className="flex flex-col items-center text-center">
                                <img src="/img/F.png" alt="Experimento" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Ciencia
                                    <br />
                                    en acción
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img src="/img/P.png" alt="Dado" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Desafios de lógica<br />
                                    y creatividad
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img src="/img/E.png" alt="Pintura" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Proyectos con
                                    <br />
                                    arte y diseño
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img src="/img/K.png" alt="descubriendo" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Simulamos negocios
                                    <br />
                                    y decisiones reales
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img src="/img/N.png" alt="carrusel" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Resolvemos con
                                    <br />
                                    ingenio y tecnología
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <img src="/img/R.png" alt="PUZZLE" className="w-20 xl:w-25 h-20 xl:h-25 mb-3" />
                                <p className="text-sm lg:text-base font-medium">
                                    Creamos inventos<br />
                                    útiles y originales
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}