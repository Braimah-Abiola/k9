"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  link: string;
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  setMobileNav: (value: boolean) => void;
}

const AnimatedNavLink = ({
  text,
  link,
  isActive,
  setIsActive,
  setMobileNav,
}: Props) => {
  const menuLinkVariants = {
    open: {
      y: 0,

      opacity: 1,
    },
    closed: {
      y: -60,

      opacity: 0,
    },
  };

  return (
    <div className=" relative">
      <motion.a
        aria-label={`Go to ${text} section`}
        variants={menuLinkVariants}
        rel="nofollow"
        href={link}
        onClick={() => {
          setIsActive(false);
          setMobileNav(false);
        }}
        className={`
          h-[60px] overflow-hidden flex items-start gap-2`}
      >
        <motion.div whileHover={{ y: -60 }}>
          <span
            className={`
              font-medium text-white flex items-center  text-5xl h-[60px]`}
          >
            {text}
          </span>

          <span className="text-white font-medium flex items-center  text-5xl  h-[60px]">
            {text}
          </span>
        </motion.div>
      </motion.a>
    </div>
  );
};

export default AnimatedNavLink;
