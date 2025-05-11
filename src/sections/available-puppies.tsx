import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const AvailablePuppies = () => {
    return (
        <section id="aviailable-puppies" className=" w-full px-4 md:px-12 lg:px-20 py-20">
            <h2 className=" font-medium text-4xl md:text-6xl text-primary">Our Available Puppies</h2>
            <div className=" w-full flex flex-col lg:flex-row items-start h-[52rem] lg:h-[44rem] mt-12">
                <div className=" w-full lg:w-[32rem] xl:w-[40rem] h-full relative">
                    <Image fill src="/assets/kibeau.png" className=" object-cover" alt="Kibeau" />
                </div>
                <div className="flex flex-col max-w-2xl h-full justify-between lg:px-20 py-6">
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col">

                            <h4 className=" text-3xl md:text-5xl font-medium">Kibeau</h4>
                            <p className=" text-lg md:text-xl opacity-80 mt-2 mb-4">This little sweetheart is a playful, loving French Bulldog looking for his forever home. He’s vaccinated, health-checked, and raised with lots of love in our family home.</p>
                            <span className=" text-lg md:text-xl"><span className=" text-black font-medium">Gender:</span> Male</span>
                            <span className=" text-lg md:text-xl mt-2"><span className="text-black font-medium">Age:</span > 10 Months</span>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                            <div className="flex gap-2 items-center text-primary text-lg md:text-xl">
                                <Image src="/assets/heart.svg" width={32} height={32} alt="Heart icon" />
                                <span>Affectionate</span>
                            </div>
                            <div className="flex gap-2 items-center text-primary text-lg md:text-xl">
                                <Image src="/assets/paw.svg" width={32} height={32} alt="Paw icon" />
                                <span>Playful</span>
                            </div>
                            <div className="flex gap-2 items-center text-primary text-lg md:text-xl">
                                <Image src="/assets/kid.svg" width={32} height={32} alt="Kid icon" />
                                <span>Great with kids</span>
                            </div>
                        </div>
                        <Button className=" w-fit">Contact Us For Details</Button>
                    </div>


                    <div className="flex items-center gap-4 mt-8 lg:mt-0">
                        <div className=" opacity-50 h-12 aspect-square rounded-full w-12 bg-white border border-black/10 flex items-center justify-center">
                            <ArrowLeft />
                        </div>
                        <div className=" opacity-50 h-12 aspect-square rounded-full w-12 bg-white border border-black/10 flex items-center justify-center">
                            <ArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AvailablePuppies;