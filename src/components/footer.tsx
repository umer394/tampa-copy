import Image from "next/image";
export default function Footer() {
    return (
        <footer style={{backgroundImage: "url(/bg-footer.webp)" , }} className="bg-cover  bg-center bg-no-repeat">
            <div className="bg-[#11121a]/70">
            <div className="max-w-[1200px] mx-auto py-10 px-4">
                <main className="flex justify-between items-center py-4">
                    <div className="space-y-3">
                        <section className="flex space-x-1">
                            <div className="bg-white w-17 h-17 items-center flex justify-center rounded-full">
                                <Image src={"/log1.png"} alt={"log"} width={59} height={59}/>
                            </div>
                            <div className="bg-white w-17 h-17 items-center flex justify-center rounded-full">
                                <Image src={"/log1.png"} alt={"log"} width={59} height={59}/>
                            </div>
                            <div className="bg-white w-17 h-17 items-center flex justify-center rounded-full">
                                <Image src={"/log1.png"} alt={"log"} width={59} height={59}/>
                            </div>
                            <div className="bg-white w-17 h-17 items-center flex justify-center rounded-full">
                                <Image src={"/log1.png"} alt={"log"} width={59} height={59}/>
                            </div>
                            <div className="bg-white w-17 h-17 items-center flex justify-center rounded-full">
                                <Image src={"/log1.png"} alt={"log"} width={59} height={59}/>
                            </div>
                            
                        </section>
                        <p className="max-w-sm text-white">Our goal is to give you services that are fast, effective,
                            and affordable, and that go above and beyond what
                            you expect.</p>
                    </div>
                    <div className="flex flex-col items-start text-white ">
                        <h1 className="font-semibold text-3xl">Contact Info</h1>
                        <div className="flex flex-col items-start space-y-3 mt-4">
                    
                            <h2>(656)524343</h2>
                            <h2>
                            sales@tampa-chimney.com</h2>
                            <h2>Monday - Friday: 7AM - 8PM</h2>
                        </div>
                    </div>
                    
                </main>
                <hr className="mt-4"/>
                <h6 className="text-xl text-white mt-2">Privacy Policy</h6>
            </div>
            </div>
        </footer>
    )
}
