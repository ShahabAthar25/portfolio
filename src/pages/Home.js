import { motion } from "framer-motion";
import Planet from "../component/Planet";
import Planet1Image from "../images/planet.svg";
import Planet2Image from "../images/planet-2.svg";
import Planet3Image from "../images/planet-3.svg";
import Planet4Image from "../images/planet-4.svg";
import Card from "../component/Card";
import Strategy from "../images/strategy.svg";

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
    <div className="mx-20 h-[80%]">
      <div className="h-full flex justify-between">
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
        <motion.div className="flex relative w-[50%]">
          <div className="absolute left-9 top-0" draggable={false}>
            <Planet image={Planet1Image} className="absolute left-9 top-0" />
          </div>
          <div className="absolute left-9 bottom-24" draggable={false}>
            <Planet image={Planet2Image} />
          </div>
          <div className="absolute right-9 top-12" draggable={false}>
            <Planet image={Planet3Image} />
          </div>
          <div className="absolute right-9 bottom-0" draggable={false}>
            <Planet image={Planet4Image} />
          </div>
        </motion.div>
      </div>
      <div className="py-10">
        <h1 className="font-inter font-bold text-gray-500 text-xl uppercase">
          workflow
        </h1>
        <h1 className="font-inter font-bold text-4xl uppercase py-3">
          What makes my websites so good
        </h1>
        <div className="space-x-6 py-10 cursor-default grid grid-cols-4">
          <Card
            image={Strategy}
            title={"A good appraoch"}
            description={
              "Every website is diffrent in nature, with its own set of problems and challenges, so developing a great strategy is the utmost importance."
            }
          />
          <Card
            image={Strategy}
            title={"The Design"}
            description={
              "Every website is diffrent in nature, with its own set of problems and challenges, so developing a great strategy is the utmost importance."
            }
          />
          <Card
            image={Strategy}
            title={"Robust and secure"}
            description={
              "Every website is diffrent in nature, with its own set of problems and challenges, so developing a great strategy is the utmost importance."
            }
          />
          <Card
            image={Strategy}
            title={"A happy you and me"}
            description={
              "Every website is diffrent in nature, with its own set of problems and challenges, so developing a great strategy is the utmost importance."
            }
          />
        </div>
      </div>
    </div>
  );
}
