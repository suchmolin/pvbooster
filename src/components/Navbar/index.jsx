export default function Navbar() {
    const classA = "h-full px-2 md:px-4 xl:px-10 hidden sm:flex items-center text-base md:text-lg lg:text-xl gotham-bold text-[#004b83]"
    return (
        <section className="w-full h-[40px] sm:h-[70px] lg:h-[150px] bg-white flex justify-center sm:justify-between items-center px-4 sm:px-10 lg:px-20 py-1 sm:py-3 lg:py-7">
            <a className={classA} href="#Etapas">Etapas</a>
            <a className={classA} href="#Caracteristicas">Caracteristicas</a>
            <img src="/img/logoBoostermath.png" alt="logo booster" className="h-full w-auto" />
            <a className={classA} href="#Fechas">Fechas</a>
            <a className={classA} href="#Testimoniales">Testimoniales</a>
        </section>
    )
}