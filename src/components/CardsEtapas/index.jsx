export default function CardsEtapas() {
    const data = [
        {
            title: "SMART Kids",
            img: "/img/11.png",
            etapa: "3 a 5 años",
            fondoFoto: "#c8ecec",
            fondoTexto: "#c200aa",
        },
        {
            title: "SMART Juniors",
            img: "/img/10.png",
            etapa: "6 a 10 años",
            fondoFoto: "#ffffff",
            fondoTexto: "#7cb147",
        },
        {
            title: "SMART Teens",
            img: "/img/09.png",
            etapa: "11 a 15 años",
            fondoFoto: "#d0ecd2",
            fondoTexto: "#5dbfca",
        },
    ]
    return (
        <div className="w-full flex flex-col items-center md:items-start md:flex-row gap-12 lg:gap-20 justify-center pt-10 md:pt-10">
            {data.map((item) => (
                <div key={item.title} className="w-[300px] md:w-[210px] lg:w-[270px] xl:w-[300px] flex flex-col cardsShadow text-white rounded-[35px]">
                    <div style={{ backgroundColor: item.fondoFoto }} className="rounded-[35px] w-full h-[250px] md:h-[190px] lg:h-[230px] xl:h-[250px] relative z-1">
                        <img src={item.img} alt={item.title} className="absolute w-[270px] h-auto object-contain fill object-bottom bottom-0 left-1" />
                    </div>
                    <div style={{ backgroundColor: item.fondoTexto }} className="-mt-8 rounded-b-[35px] pt-10 pb-3 md:pb-0 lg:pb-3 px-6">
                        <p className="text-lg lg:text-xl gotham-black">{item.title}</p>
                        <p className="text-lg lg:text-xl gotham-bold">{item.etapa}</p>
                        <div className="w-full flex justify-center pt-5">

                            <a href="https://wa.me/message/DY3B5QP5KECRN1" className="text-base md:text-sm lg:text-base px-4 lg:px-10 py-2 bg-[#001675] rounded-xl -mb-7 md:-mb-4 lg:-mb-7 text-center">Reserva tu cupo</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}