import ButtonNewTrasaction from "@/components/Button";
import Image from "next/image"

export function Header() {
    return (
    <div className="flex justify-between max-w-[1128px] m-auto relative">
        <Image className="max-h-10" src="/images/logo.png" width={172} height={40} alt="Logo"/>
        <ButtonNewTrasaction/>
    </div>
    )
}