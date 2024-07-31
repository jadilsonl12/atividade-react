import Image from "next/image";
import  { Header } from "@/components/Header"
import { Section } from "@/components/Section";
import { TableDetails } from "@/components/Table";

export default function Home() {
  return (
  <div className="font-sans">
      <header className="bg-header w-full h-[212px] pt-9 absolute">
        <Header/>
      </header>
      <section className="bg-gray-200 h-full min-h-screen pt-28"> 
        <div className="relative">
          <Section/>
          <TableDetails/>
        </div>
      </section>
  </div>
  );
}
