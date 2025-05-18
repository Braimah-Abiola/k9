"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className=" w-full h-screen relative flex flex-col items-center -mt-28 overflow-hidden">
            <div className=" absolute w-full bottom-20 px-4 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-0 z-20 relative">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className=" font-semibold text-5xl md:text-7xl text-white"
                    >
                        Focusing on health, <br className=" hidden md:block" /> temperament, and true French <br /> Bulldog genetics.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    >
                        <Button className=" w-fit uppercase">Contact Us</Button>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className=" absolute inset-0 bg-black/40 z-10"
            />
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full"
            >
                <Image fill src="/assets/hero-img.png" className=" object-cover" alt="Hero image" priority />
            </motion.div>
        </section>
    );
}

export default Hero;