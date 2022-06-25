import { motion } from "framer-motion";
import Planet from "../component/Planet";
import Planet1Image from "../images/planet.svg";
import Planet2Image from "../images/planet-2.svg";
import Planet3Image from "../images/planet-3.svg";
import Planet4Image from "../images/planet-4.svg";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
    },
  };

  const moveIn = {
    hidden: { x: "-200vh" },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 40,
      },
    },
  };

  return (
    <div className="mx-20 h-[80%] flex justify-between">
      <motion.div
        variants={fadeIn}
        animate="visible"
        initial="hidden"
        className="text-white text-7xl font-marker flex justify-center w-[50%] h-full cursor-default space-y-2"
      >
        <div className="flex flex-col justify-center">
          <motion.h1 variants={moveIn} style={{ userSelect: "none" }}>
            Hello,
          </motion.h1>
          <motion.h1
            variants={moveIn}
            className="flex"
            style={{ userSelect: "none" }}
          >
            I'm
            <motion.span variants={moveIn} className="text-red-500 pl-6">
              Shahab Athar
            </motion.span>
          </motion.h1>
        </div>
      </motion.div>
      <div className="flex relative w-[50%]">
        <div className="absolute left-9 top-0">
          <Planet image={Planet1Image} />
        </div>
        <div className="absolute left-9 bottom-24">
          <Planet image={Planet2Image} />
        </div>
        <div className="absolute right-9 top-12">
          <Planet image={Planet3Image} />
        </div>
        <div className="absolute right-9 bottom-0">
          <Planet image={Planet4Image} />
        </div>
      </div>
    </div>
  );
}
