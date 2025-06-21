export default function Diferenciadores() {
    const features = [
        {
            icon: "/img/reloj.png",
            color: "#00bfcf",
            title: "Horario:",
            subtitle: "Lunes a Viernes",
            description: "Mañana (9 a 12 pm)\nTarde (3 a 6 pm).",
        },
        {
            icon: "/img/ninos.png",
            color: "#fca100",
            title: "según la edad.",
            subtitle: "Grupos adaptados",
            description: "",
            alter: true
        },
        {
            icon: "/img/certificados.png",
            color: "#7cb147",
            title: "Certificado de",
            subtitle: "culminación.",
            description: "",
        },
        {
            icon: "/img/clase.png",
            color: "#c200aa",
            title: "Grupos reducidos",
            subtitle: "y atención",
            description: "personalizada.",
        },
    ]

    return (
        <div className="w-full max-w-6xl mx-auto p-6 py-10 sm:py-30">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img src={IconComponent} className="w-[200px] aspect-square" alt={feature.title} />
                            {/* Texto descriptivo */}
                            <div className="space-y-1">
                                {feature.alter ? (
                                    <>
                                        {feature.subtitle && (
                                            <p className="gotham-bold leading-4 sm:leading-5 text-xs sm:text-xl">{feature.subtitle}</p>
                                        )}
                                        <h3 style={{ color: feature.color }} className="gotham-bold leading-4 sm:leading-5 text-xs sm:text-xl">{feature.title}</h3>
                                    </>
                                ) : (
                                    <>
                                        <h3 style={{ color: feature.color }} className="gotham-bold leading-4 sm:leading-5 text-xs sm:text-xl">{feature.title}</h3>
                                        {feature.subtitle && (
                                            <p className="gotham-bold leading-4 sm:leading-5 text-xs sm:text-xl">{feature.subtitle}</p>
                                        )}
                                    </>
                                )}
                                {feature.description && (
                                    <p className="gotham-bold leading-4 sm:leading-6 text-xs sm:text-xl whitespace-pre-line">{feature.description}</p>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}