import Image from "next/image";

const Philosophy = () => {
    return (
        <section id="about" className=" w-full py-20 px-4 md:px-12 lg:px-20">
            <h2 className=" font-medium text-4xl md:text-6xl text-primary">Legacy K9’s Philosophy</h2>
            <p className=" text-lg md:text-xl md:max-w-[44rem] mt-4">We strive to create a warm and nurturing environment where your pets can thrive and feel loved. Our mission is to create a place that will at the very least:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-20 xl:gap-40 py-8 md:py-12 lg:py-20">
                <div className=" w-full flex flex-col gap-4 text-lg md:text-xl lg:mt-52">
                    <div className=" w-full h-[16rem] relative">
                        <Image fill className=" object-cover" src="/assets/pil-1.png" alt="Philosophy 1" />
                    </div>
                    <p>Create a warm and welcoming environment where both you and your pets feel comfortable and supported.</p>
                </div>
                <div className=" w-full flex flex-col gap-4 text-lg md:text-xl lg:mt-92">
                    <div className=" w-full h-[16rem] relative">
                        <Image fill className=" object-cover" src="/assets/pil-2.png" alt="Philosophy 2" />
                    </div>
                    <p>Create a warm and welcoming environment where both you and your pets feel comfortable and supported.</p>
                </div>

                <div className=" w-full flex flex-col gap-4 text-lg md:text-xl xl:ml-40">
                    <div className=" w-full h-[16rem] relative">
                        <Image fill className=" object-cover" src="/assets/pil-3.png" alt="Philosophy 3" />
                    </div>
                    <p>Create a warm and welcoming environment where both you and your pets feel comfortable and supported.</p>
                </div>
            </div>
        </section>
    );
}

export default Philosophy;