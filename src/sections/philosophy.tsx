"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Philosophy = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2, // Stagger the animation for each card
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section id="about" className=" w-full py-20 px-4 md:px-12 lg:px-20 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className=" font-medium text-4xl md:text-6xl text-primary"
            >
                Legacy K9’s Philosophy
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className=" text-lg md:text-xl md:max-w-[44rem] mt-4"
            >
                We strive to create a warm and nurturing environment where your pets can thrive and feel loved. Our mission is to create a place that will at the very least:
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-20 xl:gap-40 py-8 md:py-12 lg:py-20">
                <motion.div
                    custom={0}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className=" w-full flex flex-col gap-4 text-lg md:text-xl lg:mt-52"
                >
                    <div className=" w-full h-[16rem] relative">
                        <Image fill className=" object-cover" src="/assets/pil-1.png" alt="Philosophy 1" />
                    </div>
                    <p>Create a warm and welcoming environment where both you and your pets feel comfortable and supported.</p>
                </motion.div>
                <motion.div
                    custom={1}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className=" w-full flex flex-col gap-4 text-lg md:text-xl lg:mt-92"
                >
                    <div className=" w-full h-[16rem] relative">
                        <Image fill className=" object-cover" src="/assets/pil-2.png" alt="Philosophy 2" />
                    </div>
                    <p>Give you and your pet safety and security, this is a passion of our team and held up by the standards we follow.</p>
                </motion.div>

                <motion.div
                    custom={2}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className=" w-full flex flex-col gap-4 text-lg md:text-xl xl:ml-40" // Note: xl:ml-40 might be specific to a 4th item if it existed
                >
                    <div className=" w-full h-[16rem] relative">
                        <Image fill className=" object-cover" src="/assets/pil-3.png" alt="Philosophy 3" />
                    </div>
                    <p>Aim to make high-quality services broadly available to help as many pets as possible.</p>
                </motion.div>
            </div>
        </section>
    );
}

export default Philosophy;