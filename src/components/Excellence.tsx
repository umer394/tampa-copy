import { Button } from "./ui/button";
import Image from "next/image";
export default function Excellence(){
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-[#01306E] text-4xl font-bold">Committed to Excellence</h1>
            <p className="flex  max-w-6xl justify-center items-center text-center text-xl mt-4">We deliver top-quality chimney solutions with precision and care. From cleaning and repairs to expert installations, our skilled team
            ensures safety, comfort, and lasting results for your chimney and fireplace.</p>
            <div className="grid grid-cols-3 gap-4 mt-6">
                <Image src={"/excel1.png"} alt={"pic1"} width={390} height={259}/>
                <Image src={"/excel1.png"} alt={"pic1"} width={390} height={259}/>
                <Image src={"/excel1.png"} alt={"pic1"} width={390} height={259}/>
                <Image src={"/excel1.png"} alt={"pic1"} width={390} height={259}/>
                <Image src={"/excel1.png"} alt={"pic1"} width={390} height={259}/>
                <Image src={"/excel1.png"} alt={"pic1"} width={390} height={259}/>
            </div>
            <div className="flex my-6 gap-x-6">
                    <Button className="bg-[#01306E] rounded-full text-2xl py-6 px-9">(656)245####</Button>
                    <Button className="bg-[#6B9FE4] text-black rounded-full text-2xl py-6 px-9">Get A Quote</Button>
                    </div>
        </div>
    )
}