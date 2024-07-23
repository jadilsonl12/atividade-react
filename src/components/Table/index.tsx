import "@/app/globals.css";

const tableProps = [
    {
        title: "Desenvolvimento de site",
        price: "R$ 12.000,00",
        category: "Venda",
        date: "13/04/2021",
        credit: true
    },
    {
        title: "Hamburguer",
        price: "- R$ 59,00",
        category: "Alimentação",
        date: "10/04/2021",
        credit: false
    },
    {
        title: "Aluguel de apartamento",
        price: "- R$ 1.200,00",
        category: "Casa",
        date: "27/03/2021",
        credit: false
    },
    {
        title: "Computador",
        price: "R$ 5.400,00",
        category: "Venda",
        date: "15/03/2021",
        credit: true
    }
];

export function TableDetails() {
    return (
        <div className="pt-24 max-w-[1128px] m-auto">
            <div className="flex flex-col">
                <div className="flex text-[#969CB2] mb-5 text-sm">
                    <div className="flex-1 text-left pl-8">Título</div>
                    <div className="flex-1 text-right pl-3">Preço</div>
                    <div className="flex-1 text-center">Categoria</div>
                    <div className="flex-1 text-center">Data</div>
                </div>
                {tableProps.map((item, index) => (
                    <div key={index} className="flex h-16 rounded-md bg-white mb-2 items-center pl-8 text-sm">
                        <div className="flex-1">{item.title}</div>
                        <div className={`flex-1 pl-[320px] ${item.credit ? 'text-income-value' : 'text-outcome'}`}>
                            {item.price}
                        </div>
                        <div className="flex-1">{item.category}</div>
                        <div className="flex-1 text-center">{item.date}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
