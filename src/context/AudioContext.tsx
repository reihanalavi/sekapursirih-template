"use client";

import { createContext, useContext, useRef, useState } from "react";

interface AudioContextType {
  isPlaying: boolean;
  toggle: () => void;
  play: () => void;
  pause: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggle = () => {
    if (isPlaying) pause();
    else play();
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggle, play, pause, audioRef }}>
      {children}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within an AudioProvider");
  return ctx;
}
