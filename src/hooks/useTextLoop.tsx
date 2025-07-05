"use client";

import { motion, HTMLMotionProps, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimProps {
  x?: number;
  y?: number;
  opacity?: number;
  angle?: number;
  scale?: number;
}

interface TextLoopWordProps {
  word: string;
  delay?: number;
  duration?: number;
  initial?: AnimProps;
  loopMirror?: AnimProps;
  finalOpacity?: number;
  mirror?: boolean;
}

export function TextLoopWord({
  word,
  delay = 0,
  duration = 5,
  initial = {},
  loopMirror = {},
  finalOpacity = 1,
  mirror = true,
}: TextLoopWordProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [entranceDone, setEntranceDone] = useState(false);

  const initialDefaults: Required<AnimProps> = {
    x: 0, y: 0, opacity: 0, angle: 0, scale: 1,
  };

  const loopDefaults: Required<AnimProps> = {
    x: 0, y: 0, opacity: 1, angle: 0, scale: 1,
  };

  const initialAnim = { ...initialDefaults, ...initial };
  const loopAnim = { ...loopDefaults, ...loopMirror };

  useEffect(() => {
    if (isInView && !entranceDone) {
      controls.start({
        opacity: finalOpacity,
        rotate: 0,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 1, delay },
      }).then(() => setEntranceDone(true));
    }
  }, [isInView]);

  const motionProps: HTMLMotionProps<"span"> = !entranceDone
    ? {
        initial: {
          opacity: initialAnim.opacity,
          rotate: initialAnim.angle,
          x: initialAnim.x,
          y: initialAnim.y,
          scale: initialAnim.scale,
          filter: "blur(8px)",
        },
        animate: controls,
      }
    : {
        animate: {
          rotate: mirror ? [0, loopAnim.angle, 0] : 0,
          x: mirror ? [0, loopAnim.x, 0] : 0,
          y: mirror ? [0, loopAnim.y, 0] : 0,
          scale: mirror ? [1, loopAnim.scale, 1] : 1,
          opacity: loopAnim.opacity,
          transition: {
            rotate: { duration, repeat: Infinity, repeatType: mirror ? "mirror" : "loop", ease: "easeInOut" },
            x: { duration, repeat: Infinity, repeatType: mirror ? "mirror" : "loop", ease: "easeInOut" },
            y: { duration, repeat: Infinity, repeatType: mirror ? "mirror" : "loop", ease: "easeInOut" },
            scale: { duration, repeat: Infinity, repeatType: mirror ? "mirror" : "loop", ease: "easeInOut" },
            opacity: { duration, repeat: Infinity, repeatType: mirror ? "mirror" : "loop", ease: "easeInOut" },
          },
        },
      };

  return (
    <motion.span
      ref={ref}
      {...motionProps}
      style={{ display: "inline-block", marginRight: "0.25rem" }}
    >
      {word}
    </motion.span>
  );
}
