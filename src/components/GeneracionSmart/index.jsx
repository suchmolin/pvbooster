import CardsEtapas from "../CardsEtapas";

export default function GeneracionSmart() {
    return (
        <section id="Etapas" className="w-full flex flex-col items-center pb-10">
            <div className="w-[290px] xs:w-[370px] sm:w-[630px] md:w-[760px] lg:w-[1030px] xl:w-[1250px] flex flex-col items-center justify-center gap-4">
                <h2 className="w-9/12 rounded-b-4xl bg-gradient-to-r from-[#204594] to-[#2A529A] text-white text-2xl md:text-3xl lg:text-5xl text-center py-3 lg:py-6 gotham-bold">
                    ¿Qué es la Generación {" "}
                    <span className="text-[#ffba03]">S</span>
                    <span className="text-[#7bb141]">M</span>
                    <span className="text-[#a6129f]">A</span>
                    <span className="text-[#4eb7ca]">R</span>
                    <span className="text-[#4eb7ca]">T</span>
                    ?
                </h2>

                <h3 className="text-md md:text-lg lg:text-2xl xl:text-3xl gotham-bold text-center mt-5 text-[#002760]  lg:leading-9 sm:px-12">En estas vacaciones, aprender es sinónimo de jugar, crear y experimentar.
                    La ciencia y la tecnología se convierten en aliadas para divertirse mientras
                    <br />
                    <span className="text-[#a6129f] gotham-black md:whitespace-nowrap">SE DESCUBREN SOLUCIONES, SE ALCANZAN METAS Y SE ACTIVA EL INGENIO</span>
                </h3>
                <CardsEtapas />
                <h3 className="text-md md:text-lg lg:text-2xl xl:text-3xl gotham-bold text-center mt-14 text-[#002760]  lg:leading-9 sm:px-6 md:px-12">
                    El Plan Vacacional de Boostermath da vida a {" "}
                    <span className="text-[#a6129f] gotham-black">LA GENERACIÓN SMART:{" "}</span>
                    niños y adolescentes que se divierten con propósito, exploran con curiosidad y se desarrollan como pensadores críticos.
                </h3>

            </div>

        </section>
    )
}