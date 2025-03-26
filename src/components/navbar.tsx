import Link from "next/link";

import Image from "next/image";
import { Button } from "./ui/button";


let pages = ["Tampa", "Chimney", "Tampa 2"]
export default function Navbar() {
    return (
        <div className=" max-w-[1200px] mx-auto">
            <main className="flex justify-between items-center py-4 ">

           
            <Image src={"/Link.png"} alt={"logo"} height={90} width={200} />
            <div className="">
                <ul className="flex justify-center space-x-8 items-center">
                    <Link href={""} className="font-semibold text-2xl hover:text-[#01306E] active:text-[#01306E]">Home</Link>
                    <Link href={""} className="font-semibold text-2xl hover:text-[#01306E] active:text-[#01306E]">Locations</Link>
                    <h4  className="relative group " >
                        <button
                            className="flex items-center space-x-1 font-semibold text-2xl hover:text-[#01306E] active:text-[#01306E]"
                        >
                            <span>Services</span>
                            <span>▼</span>
                        </button>
                        <ul className="absolute left-0 mt-2 w-48 bg-white border  shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                           
                            {pages.map((page,index) => (
                                <Link key={index} href={""} className="px-4 text-xl font-semibold hover:text-white hover:bg-[#01306E] py-1 flex  cursor-pointer">{page}</Link>
                            ) )}
                        </ul>
                    </h4>
                    <Link href={""} className="font-semibold text-2xl hover:text-[#01306E] active:text-[#01306E]">FAQs</Link>
                    <Link href={""} className="font-semibold text-2xl hover:text-[#01306E] active:text-[#01306E]">Contact Us</Link>
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Button className="bg-[#01306E] rounded-full text-2xl py-6 px-9">(656)245####</Button>
                <h1 className="text-2xl font-bold text-[#01306E]">CALL US Today</h1>
            </div>
            </main>
        </div>
    );
}



