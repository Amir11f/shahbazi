"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function SlideUpOnScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls}>
      {children}
    </motion.div>
  );
}
