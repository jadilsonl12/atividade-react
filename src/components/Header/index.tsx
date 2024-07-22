import { Button } from "../Button";
import Image from "next/image"

export function Header() {
    return (
    <div className="flex justify-between max-w-[1128px] m-auto">
        <Image src="/images/logo.png" width={172} height={40} alt={"Logo"}/>
        <Button/>
    </div>
    )
}