interface Componentes {
    title: string
    icon: string
    valor: string
} 

export function Card(components: Componentes) {
    return (
        <div className="w-[352px] h-[126px] bg-white rounded">
            <div className="pr-6 pl-8 pt-6">
                <span className="flex justify-between">{components.title} <img src={components.icon} alt="Logo Entradas"/></span>
                <span className="text-[36px]">{components.valor}</span>
            </div>
            
        </div>
    )
}

export function CardGreen(components: Componentes) {
    return (
        <div className="w-[352px] h-[126px] bg-[#33CC95] rounded text-white">
            <div className="pr-6 pl-8 pt-6">
                <span className="flex justify-between">{components.title} <img src={components.icon} alt="Logo Entradas"/></span>
                <span className="text-[36px]">{components.valor}</span>
            </div>
        </div>
    )
}