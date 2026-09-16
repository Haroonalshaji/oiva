"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
}

export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ children, delay = 0, duration = 0.5, style, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ width: "100%", minWidth: 0, ...style }}
      {...props}
    >
      {children}
    </motion.div>
  )
);

FadeIn.displayName = "FadeIn";
