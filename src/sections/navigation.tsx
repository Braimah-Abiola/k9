"use client";


import SideMenu from "@/components/custom/menu";
import {
    AnimatePresence,
    motion
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";


const Navigation = () => {

    const [isActive, setIsActive] = useState(false);

    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

    return (
        <header className="z-50 relative w-full py-4 px-4 md:px-12 lg:px-20">
            <nav className="flex justify-between items-center">
                <div className=" relative lg:h-20 aspect-square lg:w-20 w-12 h-12">
                    <Image fill src="/assets/logo.png" alt="Logo" />
                </div>
                <div className="flex items-center justify-center">
                    <motion.button
                        initial="hide"
                        animate={mobileNav ? "show" : "hide"}
                        onClick={() => {
                            toggleMobileNav();
                            setIsActive(!isActive);
                        }}
                        className="flex cursor-pointer flex-col items-center justify-center aspect-square p-2 lg:p-4 bg-primary space-y-1.5 relative z-[2147483000]"
                    >
                        <motion.span
                            variants={{
                                hide: {
                                    rotate: 0,
                                },
                                show: {
                                    rotate: 45,
                                    y: 7.5,
                                },
                            }}
                            className="w-8 bg-white rounded-full h-[1.6px] block"
                        ></motion.span>
                        <motion.span
                            variants={{
                                hide: {
                                    opacity: 1,
                                },
                                show: {
                                    opacity: 0,
                                },
                            }}
                            className="w-8 bg-white rounded-full h-[1.6px] block"
                        ></motion.span>
                        <motion.span
                            variants={{
                                hide: {
                                    rotate: 0,
                                },
                                show: {
                                    rotate: -45,
                                    y: -7.5,
                                },
                            }}
                            className="w-8 bg-white rounded-full h-[1.6px] block"
                        ></motion.span>
                    </motion.button>
                </div>
            </nav>

            <AnimatePresence mode="wait">
                {isActive && (
                    <SideMenu setIsActive={setIsActive} setMobileNav={setMobileNav} />
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navigation;