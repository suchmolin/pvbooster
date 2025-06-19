export default function Header() {
    return (
        <>
            <section className="w-full h-[240px] sm:h-[370px] xl:h-[470px] 2xl:h-[550px] bg-[url(/img/landingboostermd.png)] lg:bg-[url(/img/landingbooster.png)] bg-center lg:bg-right bg-no-repeat bg-cover">
                <div className="w-7/12 h-full hidden lg:flex flex-col justify-center gap-5 px-20">
                    <h1 className="text-white text-[19px] xl:text-2xl">
                        <span className="text-[#3bbdc9]">
                            “No es solo una actividad vacacional:
                        </span>
                        <br />
                        es elpunto de partida de una generación
                        <br />
                        que piensa, crea y se supera”
                    </h1>
                    <a className="rounded-[40px] gotham-bold bg-[#c200aa] text-2xl xl:text-3xl text-white px-20 py-3 w-fit" href="#">¡Inscribe ahora!</a>
                </div>
            </section>
            <section className="w-full flex lg:hidden flex-col items-center text-center justify-center py-5 gap-5 bg-gradient-to-r from-[#204594] to-[#2A529A]">
                <h1 className="text-white text-base sm:text-2xl sm:leading-8">
                    <span className="text-[#3bbdc9]">
                        “No es solo una actividad vacacional:
                    </span>
                    <br />
                    es elpunto de partida de una generación
                    <br />
                    que piensa, crea y se supera”
                </h1>
                <a className="rounded-[40px] gotham-bold bg-[#c200aa] text-xl sm:text-2xl text-white px-20 py-2 sm:py-3 w-fit" href="#">¡Inscribe ahora!</a>
            </section>
        </>
    )
}