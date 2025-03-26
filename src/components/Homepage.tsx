import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";
import { Button } from "./ui/button";
export default function HomePage() {
    return (
        <div>
            <Hero/>
            <Services/>
            <section className="flex py-10 justify-between max-w-[1200px] mx-auto px-4">
                <div> 
                    <h4 className="text-[#01306E] font-bold text-2xl">Why Choose Us</h4>
                    <div className="space-y-3 mt-4">
                    <li className="text-[#01306E] list-none text-xl">Chimney Sweep & Repair</li>
                    <li className="text-[#01306E] list-none text-xl">Same Day Service</li>
                    <li className="text-[#01306E] list-none text-xl">
                    5 Star Rated On Google
                    </li >
                    <li className="text-[#01306E] list-none  text-xl">Licensed And Insured    </li>
                    <li className="text-[#01306E] list-none text-xl">
                    10+ Years of Experience</li>
                    </div>
                    <div className="flex mt-6 gap-x-6">
                    <Button className="bg-[#01306E] rounded-full text-2xl py-6 px-9">(656)245####</Button>
                    <Button className="bg-[#01306E] rounded-full text-2xl py-6 px-9">Get A Quote</Button>
                    </div>
                </div>
                <div>
                    <Image src={"/bg-hero.webp"} alt={"hero"} width={666} height={360}/>
                </div>
            
            </section>
        </div>
    )
}