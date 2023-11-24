"use client";

import { motion, AnimatePresence } from "framer-motion";

import ArrowMenu from "../../../../shared/components/arrow_menu/ArrowMenu";

export default function ArrowOpen({ isOpenMenu, setIsOpenMenu }) {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ x: isOpenMenu ? 210 : 145 }}
        transition={{ duration: 0.7 }}
        initial={{ x: isOpenMenu ? 0 : -70 }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 10,
        }}
      >
        <ArrowMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
      </motion.div>
    </AnimatePresence>
  );
}
