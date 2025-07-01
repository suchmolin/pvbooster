import { FaRegCheckCircle } from "react-icons/fa";
export default function PorqueEsAtractiva() {
    return (
        <div className="pt-[10%]">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#001675] leading-tight">
                    ¿Por qué es atractiva
                    <br />
                    nuestra generación SMART?
                </h1>
            </div>

            {/* Two column layout with fixed width */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Para los padres - Fixed width container */}
                <div className="w-[300px] sm:w-full max-w-md mx-auto cardsShadow2 rounded-[50px]">
                    <div className="bg-blue-50 rounded-[50px] z-1 p-5 sm:p-8 sm:min-h-[400px] relative shadow-lg">
                        <div className="space-y-6 text-sm sm:text-lg">
                            <div className="flex items-center gap-3">

                                <div className="w-[40px] aspect-square">
                                    <FaRegCheckCircle className="text-2xl text-[#fca100]" />
                                </div>

                                <p className="gotham-bold">
                                    Sus hijos aplican ciencia y tecnología en experiencias útiles y actuales.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">

                                <div className="w-[40px] aspect-square">
                                    <FaRegCheckCircle className="text-2xl text-[#fca100]" />
                                </div>

                                <p className="gotham-bold">
                                    Mejora en la organización, autonomía y confianza de sus hijos.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-[40px] aspect-square">
                                    <FaRegCheckCircle className=" text-2xl text-[#fca100]" />
                                </div>
                                <p className="gotham-bold">
                                    Uso positivo de la tecnología como aliada del aprendizaje.
                                </p>
                            </div>

                            <div className="flex items-center gap-3">

                                <div className="w-[40px] aspect-square">
                                    <FaRegCheckCircle className="text-2xl text-[#fca100]" />
                                </div>

                                <p className="gotham-bold">Desarrollo de competencias clave para el futuro.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#fca100] rounded-b-[50px] p-6 shadow-lg -mt-20 pt-25">
                        <h2 className="text-white text-2xl font-bold text-center">Para los padres</h2>
                    </div>
                </div>

                {/* Para los estudiantes - Fixed width container */}
                <div className="w-[300px] sm:w-full max-w-md mx-auto cardsShadow2 rounded-[50px]">
                    <div className="bg-blue-50 rounded-[50px] z-1 p-5 sm:p-8 sm:min-h-[400px] relative shadow-lg">
                        <div className="space-y-6 text-sm sm:text-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-[40px] aspect-square">
                                    <FaRegCheckCircle className="text-2xl text-[#7cb147]" />
                                </div>
                                <p className="gotham-bold">Aprenden haciendo: experimentos, juegos, retos.</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-[40px] aspect-square">
                                    <FaRegCheckCircle className="text-2xl text-[#7cb147]" />
                                </div>
                                <p className="gotham-bold">Ven sus logros de forma clara y progresiva.</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-[40px] aspect-square">
                                    <FaRegCheckCircle className="text-2xl text-[#7cb147]" />
                                </div>
                                <p className="gotham-bold">Descubren cómo aplicar las ciencias en su día a día.</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-[40px] aspect-square">
                                    <FaRegCheckCircle className="text-2xl text-[#7cb147]" />
                                </div>
                                <p className="gotham-bold">¡Se divierten mientras se vuelven más "SMART"!</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#7cb147] rounded-b-[50px] p-6 shadow-lg -mt-20 pt-25 ">
                        <h2 className="text-white text-2xl font-bold text-center">Para los estudiantes</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}