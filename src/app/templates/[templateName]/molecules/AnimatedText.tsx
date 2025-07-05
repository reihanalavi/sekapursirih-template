"use client";

import { TextLoopWord } from "@/hooks/useTextLoop";


interface AnimatedTextProps {
  text: string;
  delay?: number;
  duration?: number;
  initial?: {
    x?: number;
    y?: number;
    opacity?: number;
    angle?: number;
    scale?: number;
  };
  loopMirror?: {
    x?: number;
    y?: number;
    opacity?: number;
    angle?: number;
    scale?: number;
  };
  mirror?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({
  text,
  delay = 0,
  duration = 5,
  initial,
  loopMirror,
  mirror = true,
  className,
  style,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <span className={className} style={style}>
      {words.map((word, index) => (
        <TextLoopWord
          key={index}
          word={word}
          delay={delay + index * 0.1}
          duration={duration}
          initial={initial}
          loopMirror={loopMirror}
          mirror={mirror}
        />
      ))}
    </span>
  );
}
