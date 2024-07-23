import Image from "next/image";
import  { Header } from "@/components/Header"
import { Section } from "@/components/Section";
import { TableDetails } from "@/components/Table";

export default function Home() {
  return (
  <div className="font-sans">
      <header className="bg-header w-full h-[212px] pt-9">
        <Header/>
      </header>
      <section className="bg-gray-200 w-full h-[705px]"> 
        <Section/>
        <TableDetails/>
      </section>
  </div>
  );
}
