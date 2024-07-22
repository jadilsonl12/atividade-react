import Image from "next/image";
import  { Header } from "@/components/Header"
import { Section } from "@/components/Section";

export default function Home() {
  return (
  <div className="font-sans">
      <header className="bg-[#5429CC] w-full h-[212px] pt-9">
        <Header/>
      </header>
      <main className="bg-gray-200 w-full"> 
        <Section/>
      </main>
  </div>
  );
}
