export default function TeensSmart() {
    return (
        <div className="flex flex-col items-center pb-20">
            {/* Header */}
            <div className="text-center mt-20">
                <h1 className="text-4xl sm:text-5xl gotham-bold text-[#001479] mb-2">¿A quién va dirigido?</h1>
            </div>
            <div className="w-[340px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col sm:flex-row justify-center pt-20 sm:pl-25 lg:pl-20">

                {/* Left Side Skills */}
                <div className="sm:w-4/12 flex sm:flex-col justify-between text-xs sm:text-sm lg:text-base xl:text-xl sm:-mr-20 lg:-mr-10 pb-20">
                    {/* Colaboración */}
                    <div className="text-center w-[120px] sm:w-[200px] lg:w-[340px] xl:w-[400px] flex flex-col lg:flex-row items-center space-x-1">
                        <div className="flex-shrink-0">
                            <img src="/img/colabo.png" alt="icono diferenciadores" className="w-[70px] lg:w-[80px] aspect-square" />
                        </div>
                        <div>
                            <h3 className="flex lg:inline-block flex-col "><span className="text-sm sm:text-base xl:text-xl text-[#f5d000] gotham-bold">Colaboración:</span> Asumen roles y responsabilidades dentro de equipos de trabajo.</h3>
                        </div>
                    </div>

                    {/* Autonomía */}
                    <div className="text-center w-[120px] sm:w-[200px] lg:w-[340px] xl:w-[400px] flex flex-col lg:flex-row items-center space-x-1 sm:-ml-20 -mt-20 sm:mt-0">
                        <div className="flex-shrink-0">
                            <img src="/img/autonomia.png" alt="icono diferenciadores" className="w-[70px] lg:w-[80px] aspect-square" />
                        </div>
                        <div>
                            <h3 className="flex lg:inline-block flex-col"><span className="text-sm sm:text-base xl:text-xl text-[#f19e00] gotham-bold">Autonomía:</span> Plantean metas personales y toman decisiones dentro de proyectos y dinámicas.</h3>
                        </div>
                    </div>

                    {/* Resiliencia */}
                    <div className="text-center w-[120px] sm:w-[200px] lg:w-[340px] xl:w-[400px] flex flex-col lg:flex-row items-center space-x-1 sm:-ml-20 xl:-ml-10">
                        <div className="flex-shrink-0">
                            <img src="/img/resilencia.png" alt="icono diferenciadores" className="w-[70px] lg:w-[80px] aspect-square" />
                        </div>
                        <div>
                            <h3 className="flex lg:inline-block flex-col"><span className="text-sm sm:text-base xl:text-xl text-[#79af3c] gotham-bold">Resiliencia:</span> Trabajan con problemas reales o complejos, aprendiendo del error y el ensayo.</h3>
                        </div>
                    </div>
                </div>

                {/* Central Image */}
                <div className="relative z-10 -mt-15 sm:mt-10 md:mt-0">
                    <div className="flex items-center justify-center">
                        <img
                            src="/img/TEENS.png"
                            alt="Smart Kids - Niña con casco y planos"
                            className="w-[300px] lg:w-[300px] xl:w-[400px] aspect-square rounded-lg object-contain sm:mt-20"
                        />
                    </div>
                    {/* Smart Kids Label */}
                    <div className="text-center -mt-5">
                        <h2 className="text-4xl xl:text-5xl gotham-black text-[#7cb147] text-nowrap m">SMART TEENS</h2>
                        <p className="text-4xl gotham-bold text-[#001479]">11-15 AÑOS</p>
                    </div>
                </div>

                {/* Right Side Skills */}
                <div className="sm:w-4/12 flex sm:flex-col justify-center sm:justify-between text-xs sm:text-sm lg:text-base xl:text-xl md:ml-5 xl:ml-10 flex-wrap sm:flex-nowrap pb-20">
                    {/* Pensamiento crítico y creativo */}
                    <div className="text-center w-[150px] sm:w-[200px] lg:w-[340px] xl:w-[400px] flex flex-col lg:flex-row items-center space-x-1 sm:-ml-25 xl:-ml-30">
                        <div className="flex-shrink-0">
                            <img src="/img/pensamiento.png" alt="icono diferenciadores" className="w-[70px] lg:w-[80px] aspect-square" />
                        </div>
                        <div>
                            <h3 className="flex lg:inline-block flex-col"><span className="text-sm sm:text-base xl:text-xl text-[#b5159d] gotham-bold">Pensamiento crítico y creativo:</span> Analizan, debaten, diseñan e innovan en actividades práctivas y reflexivas.</h3>
                        </div>
                    </div>

                    {/* Tecnología */}
                    <div className="text-center w-[150px] sm:w-[200px] lg:w-[340px] xl:w-[400px] flex flex-col lg:flex-row items-center space-x-1 sm:-ml-5 md:ml-0">
                        <div className="flex-shrink-0">
                            <img src="/img/tecnologia.png" alt="icono diferenciadores" className="w-[70px] lg:w-[80px] aspect-square" />
                        </div>
                        <div>
                            <h3 className="flex lg:inline-block flex-col"><span className="text-sm sm:text-base xl:text-xl text-[#000c78] gotham-bold">Tecnología:</span> Usan la tecnología como herramienta de investigación, creación y solución.</h3>
                            <p className="text-sm text-gray-700">

                            </p>
                        </div>
                    </div>

                    {/* Motivación */}
                    <div className="text-center w-[150px] sm:w-[200px] lg:w-[340px] xl:w-[400px] flex flex-col lg:flex-row items-center space-x-1 sm:-ml-10 md:ml-0">
                        <div className="flex-shrink-0">
                            <img src="/img/colab.png" alt="icono diferenciadores" className="w-[70px] lg:w-[80px] aspect-square" />
                        </div>
                        <div>
                            <h3 className="flex lg:inline-block flex-col"><span className="text-sm sm:text-base xl:text-xl text-[#50b5cf] gotham-bold">Motivación:</span> Se movilizan por retos personales y metas propias, con propósitos claros.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}