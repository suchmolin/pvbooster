export default function EligeTuMision() {
    return (
        <div id="Fechas" className="flex items-center justify-center p-4">
            <div className=" w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl gotham-bold text-[#002d60] mb-2">Elige tu misión SMART</h1>
                </div>

                {/* Plans Container */}
                <div className="flex flex-col sm:flex-row gap-10 lg:gap-20 justify-center items-center">
                    {/* 2 Week Plan */}
                    <div className="w-[330px] lg:w-[450px] xl:w-[600px] relative">
                        {/* Spiral binding holes */}
                        <div className="w-full flex justify-center space-x-2 z-10">
                            {[...Array(6)].map((_, i) => (
                                <img key={`IMG${i}`} src="/img/Imagen1.png" alt="aros de calendario" className="w-[30px] lg:w-[50px] xl:w-[60px] h-[20px] lg:h-[30px] object-bottom" />
                            ))}
                        </div>

                        <div className="bg-white rounded-[50px] shadow-lg overflow-hidden  cardsShadow2">
                            {/* Header */}
                            <div className="bg-[#44bfcf] text-white text-center py-6 px-4">
                                <div className="text-lg font-semibold mb-1">PLAN DE</div>
                                <div className="text-3xl font-bold">2 SEMANA</div>
                            </div>

                            {/* Content */}
                            <div className="relative p-3 lg:p-6 h-[220px] xl:h-[240px] text-center bg-[#ecfaff] rounded-b-[50px] z-30">
                                <div className="h-full flex flex-col justify-center items-center text-[#002d60] gotham-bold text-base lg:text-xl xl:text-2xl">
                                    <div>21 de Julio al 1 de Agosto.</div>
                                    <div className="mb-2 w-[230px] lg:w-[280px] h-[4px] bg-[#44bfcf]"></div>
                                    <div>4 de Agosto al 15 de Agosto.</div>
                                    <div className="mb-2 w-[230px] lg:w-[280px] h-[4px] bg-[#44bfcf]"></div>
                                    <div>18 de Agosto al 29 de Agosto.</div>
                                    <div className="mb-2 w-[230px] lg:w-[280px] h-[4px] bg-[#44bfcf]"></div>
                                    <div>1 de Septiembre al 12 de Septiembre.</div>
                                    <div className="mb-2 w-[230px] lg:w-[280px] h-[4px] bg-[#44bfcf]"></div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="w-full flex justify-center items-center bg-[#44bfcf] pt-22 xl:pt-25 -mt-20">

                                <a
                                    href="https://wa.me/message/DY3B5QP5KECRN1"
                                    className="w-full text-white gotham-bold text-lg py-3 text-center hover:scale-105 duration-300 "
                                >
                                    ¡INSCRIBIR AHORA!
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 4 Week Plan */}
                    <div className="w-[330px] lg:w-[450px] xl:w-[600px] relative">
                        {/* Spiral binding holes */}
                        <div className="w-full flex justify-center space-x-2 z-10">
                            {[...Array(6)].map((_, i) => (
                                <img key={`IMG2${i}`} src="/img/Imagen2.png" alt="aros de calendario" className="w-[30px] lg:w-[50px] xl:w-[60px] h-[20px] lg:h-[30px] object-bottom" />
                            ))}
                        </div>

                        <div className="bg-white rounded-[50px] shadow-lg overflow-hidden cardsShadow2">
                            {/* Header */}
                            <div className="bg-[#c200aa] text-white text-center py-6 px-4">
                                <div className="text-lg font-semibold mb-1">PLAN DE</div>
                                <div className="text-3xl font-bold">4 SEMANA</div>
                            </div>

                            {/* Content */}
                            <div className="relative p-4 lg:p-6 h-[220px] xl:h-[240px] text-center bg-[#ecfaff] rounded-b-[50px] z-10">
                                <div className="h-full flex flex-col justify-center items-center text-[#002d60] gotham-bold text-base lg:text-xl xl:text-2xl">
                                    <div>21 de Julio al 15 de Agosto.</div>
                                    <div className="mb-2 w-[230px] lg:w-[280px] h-[4px] bg-[#c200aa]"></div>
                                    <div>18 de Agosto al 12 de Septiembre.</div>
                                    <div className="mb-2 w-[230px] lg:w-[280px] h-[4px] bg-[#c200aa]"></div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="w-full flex justify-center items-center bg-[#c200aa] pt-22 xl:pt-25 -mt-20">

                                <a
                                    href="https://wa.me/message/DY3B5QP5KECRN1"
                                    className="w-full text-white gotham-bold text-lg py-3 text-center hover:scale-105 duration-300 "
                                >
                                    ¡INSCRIBIR AHORA!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}