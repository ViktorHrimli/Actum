"use client";

import { motion, AnimatePresence } from "framer-motion";

const SlideShow = ({ children, id }) => (
  <AnimatePresence>
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default SlideShow;
