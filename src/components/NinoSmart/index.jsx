export default function NinoSmart() {
    const styleBadge = `text-white px-4 lg:px-6 py-2 lg:py-3 gotham-bold text-2xl xl:text-3xl shadow-md`
    return (

        <div className="relative">
            {/* Left side badges */}
            <div className="absolute left-0 top-20 md:top-1/2 -translate-y-1/2 space-y-4">
                <div className={`${styleBadge} bg-[#fabf00] rounded-e-full pl-15 lg:pl-20 w-fit`}>
                    Colaborativo
                </div>
                <div className={`${styleBadge} bg-[#fca100] rounded-e-full pl-10 lg:pl-15 w-fit`}>Autónomo</div>
                <div className={`${styleBadge} bg-[#7cb147] rounded-e-full pl-18 lg:pl-22 w-fit`}>Resiliente</div>
            </div>

            {/* Right side badges */}
            <div className="absolute right-0 top-[470px] sm:top-[450px] md:top-1/2 -translate-y-1/2 space-y-4 flex flex-col items-end">
                <div className={`${styleBadge} bg-[#c200aa] rounded-l-full pr-4 lg:pr-20 w-fit`}>
                    Crítico y creativo
                </div>
                <div className={`${styleBadge} bg-[#001675] rounded-l-full pr-10 lg:pr-15 w-fit`}>Motivado</div>
                <div className={`${styleBadge} bg-[#5dbfca] rounded-l-full pr-10 lg:pr-17 w-fit`}>Tecnológico</div>
            </div>

            {/* Center content */}
            <div className="text-center sm:px-32 py-[200px] sm:py-[180px] md:py-12">
                <h1 className="text-[#001675] text-2xl text-nowrap sm:text-4xl lg:text-5xl font-bold mb-6">Así es un niño</h1>
                <div className="flex justify-center bebas  text-[140px] lg:text-[200px] items-center space-x-2 leading-[100px] lg:leading-[150px]">
                    <span className="text-[#fabf00] -ml-2">S</span>
                    <span className="text-[#7cb147] -ml-2">M</span>
                    <span className="text-[#c200aa] -ml-2">A</span>
                    <span className="text-[#5dbfca] -ml-2">R</span>
                    <span className="text-[#fca100] -ml-2">T</span>
                </div>
            </div>
        </div>

    )
}