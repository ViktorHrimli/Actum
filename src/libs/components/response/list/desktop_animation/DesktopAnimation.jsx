"use client";
import { motion, useElementScroll } from "framer-motion";

import {
  useState,
  useEffect,
  useSmallLaptop,
  useRef,
} from "@/libs/hooks/hooks";

import Card from "@/libs/components/card/Card";

export default function DesktopAnimation({ data, type }) {
  const [current, setCurrent] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const laptop = useSmallLaptop();
  const ref = useRef();

  const nextSlider = () => setCurrent((prev) => (prev += 1));
  const startWithNull = () => setCurrent(0);

  let interval;

  useEffect(() => {
    if (current > data.length - 3) {
      startWithNull();
    }
  }, [current]);

  useEffect(() => {
    interval = setInterval(() => nextSlider(), 4000);
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 50,
        position: "relative",
      }}
    >
      {data.map(
        (item, id) =>
          current === id && (
            <motion.div
              animate={{ opacity: 0 }}
              initial={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              key={current}
            >
              <Card type={type} {...item} />
            </motion.div>
          )
      )}
      {data.map(
        (item, id) =>
          current + 1 === id && (
            <motion.div
              key={current + 1}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: laptop ? -350 : -445 }}
              transition={{ duration: 1 }}
            >
              <Card type={type} {...item} />
            </motion.div>
          )
      )}

      {data.map(
        (item, id) =>
          current + 2 === id && (
            <motion.div
              style={{ position: "absolute", top: 0, right: 0 }}
              key={current + 2}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Card type={type} {...item} />
            </motion.div>
          )
      )}
    </motion.div>
  );
}
