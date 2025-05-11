import AvailablePuppies from "@/sections/available-puppies";
import ContactUs from "@/sections/contact-us";
import Hero from "@/sections/hero";
import Philosophy from "@/sections/philosophy";

const HomePage = () => {
  return (
    <main className="flex flex-col gap-4 md:gap-12 lg:gap-20">
      <Hero />
      <AvailablePuppies />
      <Philosophy />
      <ContactUs />
    </main>
  );
}

export default HomePage;