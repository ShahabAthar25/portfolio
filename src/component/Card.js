import { motion } from "framer-motion";

export default function Card({ image, title, description }) {
  const cardVariant = {
    before: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
    },
  };

  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      className="p-4 max-w-[350px] rounded-lg break-words hover:shadow-lg hover:shadow-gray-900"
    >
      <img src={image} alt="" className="h-10" />
      <h1 className="font-inter font-bold text-2xl uppercase py-3">{title}</h1>
      <p className="font-inter text-lg text-gray-500">{description}</p>
    </motion.div>
  );
}
