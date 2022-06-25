import { motion } from "framer-motion";

export default function Planet({ image }) {
  return (
    <motion.img
      className="h-60"
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
    ></motion.img>
  );
}
