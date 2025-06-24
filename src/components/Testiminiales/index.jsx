import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiRoundStar } from "react-icons/gi";
import Slider from "react-slick";

export default function Testiminiales() {
    const data = [
        {
            nombre: "Laura M. mamá de Sofía (9 años):",
            color: "#c400a8",
            texto: ["El plan vacacional de Booster Math fue muchísimo más de lo que esperábamos. Sofía aprendió matemáticas, principios de finanzas y hasta hizo experimentos y retos STEAM. Llegaba emocionada cada día contando todo lo que había creado. ", "¡Nunca había visto a mi hija tan motivada por aprender!"]
        },
        {
            nombre: "Andrés R. papá de Diego (11 años):",
            color: "#7CB347",
            texto: ["Fue increíble ver cómo Diego disfrutó el plan vacacional. No solo reforzó sus habilidades en matemáticas, también aprendió sobre dinero, ahorros y participó en actividades STEAM súper divertidas. ", "Para él fue como estar en una aventura de ciencia y números, y para nosotros, una inversión que valió la pena."]
        },
        {
            nombre: "Daniela C, mamá de Lucas (6 años):",
            color: "#FBA400",
            texto: ["Lucas tiene 6 años y no paraba de hablar del plan vacacional de Booster Math. Le encantaron los juegos de lógica, los retos con bloques, y hasta aprendió qué es ahorrar con actividades súper divertidas. Fue increíble ver cómo aprendía sin darse cuenta, mientras se divertía con sus amigos. ", "¡Definitivamente lo volveríamos a inscribir!"]
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear"
    };
    return (
        <section className="py-16 px-4 bg-white sm:pb-40">
            <div className="mx-auto text-center">
                {/* Header */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#059bb0] mb-4">Testimoniales</h2>
                <p className="text-2xl md:text-3xl font-semibold text-[#0e1f75] mb-12 leading-tight">
                    Ellos nos cuentan la experiencia
                    <br />
                    de sus pequeños en Booster
                </p>
                <div className=" w-full flex justify-center slider-container">
                    <Slider {...settings} className="w-[370px] sm:w-[620px] md:w-[720px] lg:w-[1000px] h-fit">

                        {data.map((item) => (
                            // Testimonial Card
                            <div >
                                <div className="relative p-10">

                                    {/* Large quotation marks */}
                                    <div className="absolute top-0 left-14 bg-white z-20">
                                        <img src="/img/comilla.png" alt="Comilla" className="w-34 h-24" />
                                    </div>
                                    <div className="absolute bottom-0 right-14 bg-white z-20">
                                        <img src="/img/comilla2.png" alt="Comilla" className="w-34 h-24" />
                                    </div>

                                    {/* Testimonial content */}
                                    <div style={{ borderColor: item.color }} className="border-4 rounded-3xl px-2 sm:px-5 lg:px-16 py-18 lg:py-12 bg-white relative z-10">
                                        {/* Customer info */}
                                        <div className="mb-6 flex flex-col md:flex-row md:gap-4 items-center justify-center">
                                            <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-[#059bb0] mb-2 px-7 sm:px-0">{item.nombre}</h3>
                                            <div className="flex justify-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <GiRoundStar key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Testimonial text */}
                                        <div className="space-y-4 text-[#0e1f75]">
                                            {item.texto.map((texto, idx) => (
                                                <p key={idx} className="text-sm sm:text-lg md:text-xl leading-relaxed">
                                                    {texto}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}