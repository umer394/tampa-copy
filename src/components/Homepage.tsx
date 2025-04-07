
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";
import { Button } from "./ui/button";
import Excellence from "./Excellence";
import Count from "./Count";
import { FaGreaterThan } from "react-icons/fa";
import Reviews from "./Reviews";
import LeadForm from "./LeadForm";

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
                    <Button className="bg-[#6B9FE4] text-black rounded-full text-2xl py-6 px-9">Get A Quote</Button>
                    </div>
                </div>
                <div>
                    <Image src={"/bg-hero.webp"} alt={"hero"} width={666} height={360}/>
                </div>
            
            </section>
            <Excellence/>
            <Count/>
            <div style={{backgroundImage:"url('/about.jpg')"}} className="relative my-20 bg-cover bg-center  bg-no-repeat h-[330px] max-w-[1200px] mx-auto">
                <div className="absolute inset-0 bg-black/50">
                    <div className="text-white flex flex-col gap-y-5 justify-center  items-center text-center">
                        <h3 className="font-bold text-4xl mt-10">About Tampa Chimney</h3>
                        <p className=" text-xl max-w-7xl px-6">At Chimney Sweep Tampa, we bring 18 years of experience in professional chimney sweeping, inspections, and repairs to Tampa, FL. Our certified technicians are trained to the highest industry standards, ensuring your fireplace and chimney system operates safely and efficiently.</p>
                        <p className=" text-xl max-w-7xl px-6">Certified & Experienced Professionals We are CSIA Certified and NFI Certified and fully insured, providing expert service backed by industry-recognized training. Our team specializes in chimney cleaning, safety inspections, and repairs, helping homeowners prevent fire hazards and improve system performance.</p>
                    </div>
                </div>
            </div>
            <section className="max-w-[1200px] mx-auto flex justify-between relative mb-20">
                <div>
                    <Image src={"/chimney.png"} alt={"chimney"} width={657} height={485}/>
                </div>
                <div className="border-2 justify-center flex flex-col my-10 shadow-xl rounded-xl pl-10 pr-20 pt-4 pb-14 bg-white absolute left-150">
                    <h4 className="text-[#01306E] text-3xl font-bold">Chimney Services Benefits</h4>
                    <ul className="mt-6 space-y-2">
                        <li className="text-[#01306E] list-none text-xl flex items-center gap-3"><span><FaGreaterThan size={14}/></span>Chimney Cleaning</li>
                        <li className="text-[#01306E] list-none text-xl flex items-center gap-3"><span><FaGreaterThan size={14}/></span>Chimney Inspections</li>
                        <li className="text-[#01306E] list-none text-xl flex items-center gap-3"><span><FaGreaterThan size={14}/></span>Chimney Repairs</li>
                        <li className="text-[#01306E] list-none text-xl flex items-center gap-3"><span><FaGreaterThan size={14}/></span>Chimney Caps & Dampers</li>
                        <li className="text-[#01306E] list-none text-xl flex items-center gap-3"><span><FaGreaterThan size={14}/></span>Fireplace Cleaning & Repair</li>
                    </ul>
                    <div className="flex mt-6 gap-x-6">
                        <Button className="bg-[#01306E] rounded-full text-2xl py-6 px-9">(656)245####</Button>
                        <Button className="bg-[#6B9FE4] text-black rounded-full text-2xl py-6 px-9">Get A Quote</Button>
                    </div>
                    
                </div>
            </section>
            <Reviews/>
            <LeadForm/>
        </div>
    )
}