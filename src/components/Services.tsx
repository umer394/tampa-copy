export default function Services() {
    const chimneyServices: string[] = [
        "Chimney Inspection",
        "Chimney Lining",
        "Chimney Rebuild",
        "Gas Fireplace Repair",
        "Wood Fireplace Repair",
        "Wood Burning Stove Cleaning",
        "Chimney Repair",
        "Chimney Cap Repair",
        "Chimney Liner",
        "Chimney Cap Installation",
        "Chimney Crown Repair",
        "Chimney Flue Installation",
        "Furnace Chimney Cleaning",
        "Fireplace Refacing",
        "Chimney Maintenance",
        "Chimney Flashing Repair",
        "Chimney Damper Repair"
      ];
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <h4 className="text-[#01306E] font-bold text-4xl">Services Provided</h4>
            <div className="grid grid-cols-3 gap-x-5 gap-y-4 mt-10">
            {chimneyServices.map((service, index) => (
                <div key={index} className="text-lg w-sm bg-white    shadow-zinc-300 shadow-xl cursor-pointer rounded-full border py-2 px-4 text-[#01306E]">{service}</div>
            ))}
            </div>
            
        </div>
    )
}