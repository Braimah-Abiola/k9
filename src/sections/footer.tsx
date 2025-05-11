import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" w-full px-4 md:px-12 lg:px-20 pb-20">
            <div className=" w-full py-12 md:py-20 bg-primary px-4 md:px-12 lg:px-20">
                <div className=" w-full flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
                    <div className=" text-white">
                        <h2 className=" text-5xl md:text-6xl font-semibold">Your New Best<br className=" hidden md:block" /> Friend Awaits</h2>

                        <p className=" opacity-80 mt-4 text-lg md:text-xl">We’ll deliver your dream companion to you safely.</p>
                    </div>
                    <Link href="mailto:admin@legacyk9line.com">
                        <Button className=" w-full md:w-fit mt-8 xl:mt-0" variant="secondary">Reach Out To Us</Button>
                    </Link>
                </div>
                <nav className=" w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-0 lg:justify-between">
                    <div className=" relative h-12 aspect-square w-12">
                        <Image fill src="/assets/logo.png" alt="Logo" />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8">

                        {navItems.map((data, index) => {
                            return (
                                <Link key={index} href={data.href} className=" text-lg md:text-xl text-white">
                                    {data.title}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex items-center gap-8">
                        <Image src="/assets/twitter.svg" width={36} height={36} className=" scale-90 md:scale-95 lg:scale-100" alt="Twitter icon" />
                        <Image src="/assets/instagram.svg" width={32} height={32} className=" scale-90 md:scale-95 lg:scale-100" alt="Instagram icon" />

                    </div>
                </nav>
                <Separator orientation="horizontal" className=" w-full bg-white opacity-20 mt-8" />

                <div className="flex flex-col lg:flex-row items-center justify-between text-white text-lg md:text-xl mt-8">
                    <span>Copyright 2025, All Rights Reserved</span>

                    <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0 lg:gap-8">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>


        </footer>
    );
}

export default Footer;