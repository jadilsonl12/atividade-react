import { Card, CardGreen } from "@/components/Card";

export function Section() {
    return (
        <main className="max-w-[1128px] m-auto pt-9">
            <div className="grid grid-cols-3 gap-8">
                <Card
                    title="Entradas"
                    valor="R$ 17.400,00"
                    icon="/images/entradas.png"
                />
                 <Card
                    title="Saídas"
                    valor="R$ 1.259,00"
                    icon="/images/saidas.png"
                />
                 <CardGreen
                    title="Total"
                    valor="R$ 16.141,00"
                    icon="/images/total.png"
                />
            </div>
        </main>
    )
}