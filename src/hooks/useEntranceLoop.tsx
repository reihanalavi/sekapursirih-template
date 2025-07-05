"use client";

import { useState, useRef, useEffect } from "react";
import { HTMLMotionProps, useAnimation, useInView } from "framer-motion";

interface AnimProps {
  x?: number;
  y?: number;
  opacity?: number;
  angle?: number; // rotate di framer-motion
  scale?: number;
}

interface EntranceLoopOptions {
  delay?: number;
  duration?: number;
  initial?: AnimProps;
  loopMirror?: AnimProps;
  finalOpacity?: number;
  mirror?: boolean;
  threshold?: number; // untuk sensitivity useInView
}

export function useEntranceLoop({
  delay = 0,
  duration = 5,
  initial = {},
  loopMirror = {},
  finalOpacity = 1,
  mirror = true,
  threshold = 0.3,
}: EntranceLoopOptions = {}): [React.RefObject<HTMLDivElement | null>, HTMLMotionProps<"div">] {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: threshold });
  const [entranceDone, setEntranceDone] = useState(false);

  const initialDefaults: Required<AnimProps> = {
    x: 0,
    y: 0,
    opacity: 0,
    angle: 0,
    scale: 1,
  };

  const loopDefaults: Required<AnimProps> = {
    x: 0,
    y: 0,
    opacity: 1,
    angle: 0,
    scale: 1,
  };

  const initialAnim = { ...initialDefaults, ...initial };
  const loopAnim = { ...loopDefaults, ...loopMirror };

  // Trigger animation saat elemen masuk viewport
  useEffect(() => {
    if (isInView && !entranceDone) {
      controls
        .start({
          opacity: finalOpacity,
          rotate: 0,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: 1, delay },
        })
        .then(() => setEntranceDone(true));
    }
  }, [isInView, entranceDone, controls, delay, finalOpacity]);

  if (!entranceDone) {
    // Animasi initial + animasi masuk viewport
    return [
      ref,
      {
        initial: {
          opacity: initialAnim.opacity,
          rotate: initialAnim.angle,
          x: initialAnim.x,
          y: initialAnim.y,
          scale: initialAnim.scale,
        },
        animate: controls,
      },
    ];
  } else {
    // Animasi loop setelah entrance selesai
    return [
      ref,
      {
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
      },
    ];
  }
}
