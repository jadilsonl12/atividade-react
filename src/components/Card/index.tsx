import ComponentsCard from "@/interfaces/componentsCard"

export function Card(components: ComponentsCard) {
    return (
        <div className="w-[352px] h-[136px] bg-white rounded-lg">
            <div className="pr-6 pl-8 pt-6">
                <span className="flex justify-between text-sm">{components.title} <img src={components.icon} alt="Logo Entradas"/></span>
                <span className="text-[36px]">{components.valor}</span>
            </div>
            
        </div>
    )
}

export function CardGreen(components: ComponentsCard) {
    return (
        <div className="w-[352px] h-[136px] bg-income-value rounded-lg text-white">
            <div className="pr-6 pl-8 pt-6">
                <span className="flex justify-between text-sm">{components.title} <img src={components.icon} alt="Logo Entradas"/></span>
                <span className="text-[36px]">{components.valor}</span>
            </div>
        </div>
    )
}