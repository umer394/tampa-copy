import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
export default function HomeForm() {
    return (
        <div className="bg-white rounded-lg  mx-auto px-10 py-10  ">
            <div className="flex flex-col items-center">
            <h1 className="text-[#01306E] font-bold  text-4xl">10% Off Total Price for</h1>
            <h1 className="text-[#01306E] font-bold  text-4xl">Online Booking</h1>
            <h2 className="text-black text-4xl font-bold mt-3">Request a Quote</h2>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="gap-1.5 grid w-full">
                    <Label htmlFor="First Name">First Name</Label>
                    <Input placeholder="First Name"/>
                </div>
                <div className="gap-1.5 grid w-full">
                    <Label htmlFor="Phone Number">Phone Number </Label>
                    <Input placeholder="Phone Number"/>
                </div>
                <div className="gap-1.5 grid w-full">
                <Label htmlFor="Zip Code">Zip Code  </Label>
                <Input placeholder="Zip Code"/>
                </div>
                <div className="gap-1.5 grid w-full">
                <Label htmlFor="Email">Email </Label>
                <Input placeholder="Email"/>
                </div>      
            </div>
            <div className="grid w-full gap-1.5 mt-4">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Type your message here." id="message" rows={4}/>
            </div>
            <Button className="w-full mt-4 bg-[#6B9FE4] hover:bg-[#7093c2] text-xl text-black">GET A QUOTE</Button>
        </div> 
    )
}