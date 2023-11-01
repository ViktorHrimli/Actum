"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function MobileSlider({ children, id, isStart }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: isStart ? 200 : -200 }}
        variants={{ open: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.7 }}
        exit={{ x: -200, opacity: 0 }}
        animate={"open"}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
