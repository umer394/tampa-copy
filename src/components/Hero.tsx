import Image from "next/image";
import { Button } from "./ui/button";
import HomeForm from "./HomeForm";
export default function Hero() {
    return(
        <div style={{backgroundImage: "url(/bg-hero.webp)"}} className="relative bg-cover bg-center  bg-no-repeat h-[800px] ">
            <div className="absolute inset-0 bg-black/70">

            
            <div className="max-w-[1200px] mx-auto py-42 space-x-15 flex">
                <section className="max-w-2xl space-y-3  text-white">
                    <div className="flex space-x-4">
                        <Image src={"/google.png"} alt={"google rating"} width={100} height={34}/>
                        <Image src={"/trustpilot.png"} alt={"google rating"} width={100} height={34}/>
                        <Image src={"/capterra.png"} alt={"google rating"} width={100} height={34}/>
                    </div>
                    <h1 className="text-6xl font-bold ">YOUR LOCAL INSURED AND BONDED</h1>
                    <h2 className="text-6xl font-bold text-[#90D4E1]">CHIMNEY SWEEP SERVICES</h2>
                    <h3 className="text-3xl">Contact Below For Chimney Services</h3>
                    
                    <Button className="bg-[#01306E] rounded-full text-2xl py-6 px-9">(656)245####</Button>
                    <h1 className="text-3xl font-bold">CALL US Today</h1>
            
                </section>
                <section>
                    <HomeForm/>
                </section>

            </div>
            </div>
        </div>
    )
}