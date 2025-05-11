import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    return (
        <section className=" w-full h-screen relative flex flex-col items-center -mt-28">
            <div className=" absolute w-full bottom-20 px-4 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-0 z-20 relative">
                    <h1 className=" font-semibold text-5xl md:text-7xl text-white">Focusing on health, <br className=" hidden md:block" /> temperament, and true French <br /> Bulldog genetics.</h1>
                    <Button className=" w-fit uppercase">Contact Us</Button>
                </div>
            </div>
            <div className=" absolute inset-0 bg-black/40 z-10" />
            <Image fill src="/assets/hero-img.png" className=" object-cover" alt="Hero image" />
        </section>
    );
}

export default Hero;