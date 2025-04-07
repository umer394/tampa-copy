import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function LeadForm(){
    return (
        <div className="bg-[#01306E] text-white flex gap-y-6 flex-col max-w-[1200px] mx-auto mb-20 mt-10 rounded-xl justify-center items-center py-10">
            <h1 className="text-4xl font-bold">10% Off Total Price for Online Booking</h1>
            <h1 className="text-4xl font-bold">Ask For A Quote Here</h1>
            <div className="flex flex-col gap-y-6">
                <Input placeholder="Name" className="bg-white py-5 w-[1000px] placeholder:text-[#585859]"/>
                <Input placeholder="Email" className="bg-white py-5 w-[1000px] placeholder:text-[#585859]"/>
                <Input placeholder="Phone Number" className="bg-white py-5 w-[1000px] placeholder:text-[#585859]"/>
                <Input placeholder="Zip Code" className="bg-white py-5 w-[1000px] placeholder:text-[#585859]"/>
                <Textarea placeholder="Message" rows={4} className="bg-white pb-18 w-[1000px] placeholder:text-[#585859]" name="" id=""/>
            </div>
            <Button className="bg-white text-black rounded-lg text-2xl py-6 px-5">Get A Quote</Button>
        </div>
    )
}