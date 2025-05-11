import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/constants";
import { menuSlide } from "@/anim/anim";
import MenuLink from "./menu-link";
import Curve from "./curve";
import Link from "next/link";
import { Button } from "../ui/button";

interface SideMenuProps {
  setIsActive: (value: boolean) => void;
  setMobileNav: (value: boolean) => void;
}

const SideMenu = ({ setIsActive, setMobileNav }: SideMenuProps) => {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="flex flex-col container h-full justify-between px-8 md:px-12 mt-20 pt-8 pb-28  ">
        <Link href="mailto:admin@legacyk9line.com">
          <Button variant="secondary" className=" w-fit absolute hidden md:block right-40 top-8">Contact Us For Details</Button>
        </Link>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="ml-0 flex flex-col flex-1 h-full"
        >
          <div className=" w-full h-full">
            {navItems.map((data, index) => {
              return (
                <MenuLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                  setIsActive={setIsActive}
                  setMobileNav={setMobileNav}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 h-fit text-lg md:text-xl">
            <div><span>2002 W. Main St., Suite Q <br />
              St. Charles, IL 60174</span></div>
            <div className="flex flex-col gap-2">
              <Link href="tel:6309129621">
                <p className=" hover:underline underline-offset-8">(630) 912-9621 </p>
              </Link>
              <Link href="mailto:admin@legacyk9line.com">
                <p className=" hover:underline underline-offset-8">admin@legacyk9line.com</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Curve />

    </motion.div>
  );
};

export default SideMenu;
