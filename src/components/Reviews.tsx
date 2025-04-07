import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"


export default function Reviews() {
    const reviews = [
        {
            id:"1",
            description:"Tampa Chimney Services saved us! They repaired our cracked chimney crown and stopped water leaks. Professional, fast, and affordable. Highly recommend!",
            name:"Linda",
            location:"Tampa, FL",
        },
        {
            id:"2",
            description:"Tampa Chimney Services saved us! They repaired our cracked chimney crown and stopped water leaks. Professional, fast, and affordable. Highly recommend!",
            name:"Linda",
            location:"Tampa, FL",
        },
        {
            id:"3",
            description:"Tampa Chimney Services saved us! They repaired our cracked chimney crown and stopped water leaks. Professional, fast, and affordable. Highly recommend!",
            name:"Linda",
            location:"Tampa, FL",
        },
        {
            id:"4",
            description:"Tampa Chimney Services saved us! They repaired our cracked chimney crown and stopped water leaks. Professional, fast, and affordable. Highly recommend!",
            name:"Linda",
            location:"Tampa, FL",
        },
        {
            id:"5",
            description:"Tampa Chimney Services saved us! They repaired our cracked chimney crown and stopped water leaks. Professional, fast, and affordable. Highly recommend!",
            name:"Linda",
            location:"Tampa, FL",
        }
    ]
    return(
        <main className="flex flex-col items-center py-10">
             <Carousel
      opts={{
        align: "start",
      }}
      className="w-[1220px]   max-w-[1200px] mx-auto"
    >
      <CarouselContent>
        {reviews.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card className="border-2 border-[#01306E] rounded-xl shadow-xl bg-white">
                <CardContent className="flex flex-col h-[200px]   items-center p-6">
                  {/* <div>{reviews.map((item)=>{
                    return(<div key={item.id} > */}
                        <h1 className="text-center">{item.description}</h1>
                        <h2 className="text-[#01306E] mt-8 font-bold text-3xl">{item.name}</h2>
                        <h3 className="text-[#01306E] ">{item.location}</h3>
                    {/* </div>)
                  })}</div> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
        </main>
    )
}