import { motion } from "framer-motion";

export default function Planet({ image }) {
  const moveIn = {
    hidden: {
      x: "200vw",
    },
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
    <motion.img
      className="h-60"
      variants={moveIn}
      animate="visible"
      initial="hidden"
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      drag
      dragConstraints={{
        right: 10,
        left: -10,
        top: 10,
        bottom: 10,
      }}
      src={image}
      alt="Hello World"
      style={{ userSelect: "none" }}
    ></motion.img>
  );
}
