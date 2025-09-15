"use client";

import { motion } from "framer-motion";

export default function FloatingLeaf({ delay, left }) {
  return (
    <motion.div
      className="absolute text-4xl"
      style={{ left: `${left}%`, top: "-50px" }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: "110vh", opacity: 1, rotate: [0, 20, -20, 0] }}
      transition={{
        duration: 15,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      🍃
    </motion.div>
  );
}
