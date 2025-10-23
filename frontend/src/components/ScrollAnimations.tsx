import { motion } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export const FadeInWhenVisible: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);


export const FadeInImageWhenVisible: React.FC<FadeInProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 80, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 1,
      ease: "easeOut",
      delay: delay,
      type: "spring",
      stiffness: 100,
      damping: 20,
    }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);