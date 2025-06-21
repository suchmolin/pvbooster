export default function QueIncluye() {
    const planItems = [
        {
            number: "1.",
            text: "Actividades prácticas.",
            color: "bg-[#00becf]",
        },
        {
            number: "2.",
            text: "Exploración científica y tecnológica.",
            color: "bg-[#fabf00]",
        },
        {
            number: "3.",
            text: "Aprenden habilidades para la vida.",
            color: "bg-[#c100a9]",
        },
        {
            number: "4.",
            text: "Retos que despiertan el pensamiento.",
            color: "bg-[#faa200]",
        },
        {
            number: "5.",
            text: "Ambiente motivador y participativo.",
            color: "bg-[#7cb147]",
        },
    ]

    return (
        <div className="w-full pt-10 md:pt-0">
            <div className="relative w-full">
                <div className="text-center w-full ">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold whitespace-nowrap">
                        <span className="text-[#001675]">¿Qué incluye el </span>
                        <span className="text-[#a10b9d]">Plan Vacacional</span>
                        <span className="text-[#001675]">?</span>
                    </h1>
                </div>
                {/* Background Image - Always on the left */}
                <img
                    src="/img/imagenninos.png"
                    alt="Niños haciendo experimentos científicos"
                    className="hidden md:block object-cover object-center md:object-left w-11/12 lg:w-9/12 xl:w-10/12 md:absolute -top-2 lg:-top-6 md:left-0"
                />
                <img src="/img/imagenninosmd.png" alt="Niños haciendo experimentos científicos" className="w-[350px] sm:w-[500px] block md:hidden mx-auto" />
                <div className="relative z-10 w-full ">
                    <div className="container mx-auto px-4 md:pt-8 lg:pt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center md:justify-items-start">
                            {/* Left side - Space for image visibility */}
                            <div className="hidden md:block"></div>


                            {/* List Items with staggered positioning */}
                            <div className="space-y-5 lg:space-y-2 xl:space-y-6 relative sm:-ml-6 lg:-ml-20 mt-6 lg:mt-0 md:pt-20 lg:pt-0 w-fit">
                                {planItems.map((item, index) => {
                                    // Different left margins for staggered effect
                                    const leftMargins = [
                                        "w-fit ml-0 md:ml-0 lg:ml-0", // Item 1
                                        "w-fit ml-0 md:ml-5 lg:ml-10", // Item 2
                                        "w-fit ml-0 md:ml-8 lg:ml-16", // Item 3
                                        "w-fit ml-0 md:ml-10 lg:ml-18", // Item 4
                                        "w-fit ml-0 md:ml-6 lg:ml-12", // Item 5
                                    ]

                                    return (
                                        <div key={index} className={`flex items-center gap-4 group ${leftMargins[index]}`}>
                                            {/* Number Circle */}
                                            <div
                                                className={`${item.color} text-white rounded-full aspect-square w-7 lg:w-10 xl:w-14 flex items-center justify-center text-base lg:text-lg xl:text-3xl flex-shrink-0 shadow-lg`}
                                            >
                                                {item.number}
                                            </div>

                                            {/* Text */}
                                            <div className="flex-1">
                                                <p className="text-gray-800 font-semibold text-sm sm:text-base lg:text-xl xl:text-2xl gotham-bold leading-tight">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}