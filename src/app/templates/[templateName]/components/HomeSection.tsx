"use client";

import { use, useEffect, useState } from "react";

import { Birthstone, Inter } from "next/font/google";
import { delay, motion } from "framer-motion";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import { AnimatedText } from "../molecules/AnimatedText";
import Image from "next/image";
import { useCover } from "@/context/CoverContext";

const birthstone = Birthstone({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-birthstone",
});

const inter = Inter({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-inter",
});

const weddingDate = new Date("2025-12-31T09:00:00+07:00"); // sesuaikan waktunya

export default function SectionHome() {
  const greenHex = "#2F855A";
  
  const { isCoverDismissed } = useCover();
    
  const [countdown, setCountdown] = useState({
    hari: "00",
    jam: "00",
    menit: "00",
    detik: "00",
  });

  useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date();
    const distance = weddingDate.getTime() - now.getTime();

    if (distance < 0) {
      clearInterval(interval);
      setCountdown({ hari: "00", jam: "00", menit: "00", detik: "00" });
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    setCountdown({
      hari: String(days).padStart(2, "0"),
      jam: String(hours).padStart(2, "0"),
      menit: String(minutes).padStart(2, "0"),
      detik: String(seconds).padStart(2, "0"),
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);
  
  const [ref1, motionProps] = useEntranceLoop({
    delay: 0,
    initial: { opacity: 0, x: 0, y: -10, angle: 0, scale: 1},
    loopMirror: { opacity: 1, x: 0, y: -10, angle: 0, scale: 1 },
    duration: 5,
    mirror: true
  });
  
  const [ref2, motionProps2] = useEntranceLoop({
    delay: 0.2,
    initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2},
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
    duration: 5,
    mirror: true
  });
  
  const [refHari, motionPropsHari] = useEntranceLoop({
    delay: 0.2,
    initial: { opacity: 0, x: 0, y: 20, angle: 0, scale: 1},
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 0 },
    duration: 5,
    mirror: false
  });
  const [refJam, motionPropsJam] = useEntranceLoop({
    delay: 0.4,
    initial: { opacity: 0, x: 0, y: 20, angle: 0, scale: 1},
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 0 },
    duration: 5,
    mirror: false
  });
  const [refMenit, motionPropsMenit] = useEntranceLoop({
    delay: 0.6,
    initial: { opacity: 0, x: 0, y: 20, angle: 0, scale: 1},
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 0 },
    duration: 5,
    mirror: false
  });
  const [refDetik, motionPropsDetik] = useEntranceLoop({
    delay: 0.8,
    initial: { opacity: 0, x: 0, y: 20, angle: 0, scale: 1},
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 0 },
    duration: 5,
    mirror: false
  });
  
  const [ref4, motionProps4] = useEntranceLoop({
    delay: 0,
    initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
    duration: 5,
    mirror: true
  });
  
  const [ref5, motionProps5] = useEntranceLoop({
    delay: 0.4,
    initial: { opacity: 0, x: 0, y: 20, angle: 0, scale: 1},
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
    duration: 5,
    mirror: false
  });
  
  const [ref6, motionProps6] = useEntranceLoop({
    delay: 0.4,
    initial: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1},
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
    duration: 5,
    mirror: true
  });
  
  const [ref7, motionProps7] = useEntranceLoop({
    delay: 0.2,
    initial: { opacity: 1, x: 0, y: 150, angle: 0, scale: 1 },
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
    duration: 5,
    mirror: false
  });
  
  const [ref8, motionProps8] = useEntranceLoop({
    delay: 0.2,
    initial: { opacity: 1, x: 100, y: 0, angle: 25, scale: 0.2 },
    loopMirror: { opacity: 1, x: 10, y: 0, angle: -3, scale: 1 },
    duration: 5,
    mirror: true
  });
  
  const [ref9, motionProps9] = useEntranceLoop({
    delay: 0.4,
    initial: { opacity: 1, x: 0, y: 150, angle: 0, scale: 1 },
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
    duration: 5,
    mirror: false
  });
  
  const [ref10, motionProps10] = useEntranceLoop({
    delay: 0.4,
    initial: { opacity: 1, x: -100, y: 0, angle: 25, scale: 0.2 },
    loopMirror: { opacity: 1, x: -10, y: 15, angle: 5, scale: 1 },
    duration: 4,
    mirror: true
  });
  
  const [ref11, motionProps11] = useEntranceLoop({
    delay: 0.4,
    initial: { opacity: 1, x: -50, y: 0, angle: 25, scale: 1 },
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 90, scale: 1 },
    duration: 8,
    mirror: true
  });
  
  
  return (
    
    <section
    className={`${((isCoverDismissed == true) ? 'h-screen' : 'h-0')} z-10 bg-transparent flex flex-col items-center justify-between text-center max-width: 100%; overflow-x: hidden; relative`}
    style={{ overflowX: 'hidden' }}>
    
      {/* Bagian atas */}
      <div className="py-8">
      <div>
      
      <motion.p
      ref={ref1}
      {...motionProps}
      className="font-inter font-light text-gray-700 mb-1 text-md"
      style={{ color: "#586419" }}
      >
      The wedding of
      </motion.p>
      <motion.p
      ref={ref2}
      {...motionProps2}
      className={`${birthstone.className} text-gray-900 text-7xl`}
      style={{color: '#586419'}}
      >
      Steve &amp; Peggy
      </motion.p>
      </div>
      {/* Countdown */}
      <div className="mt-8 flex justify-center gap-6">
      <motion.div
      ref={refHari}
      {...motionPropsHari}
      className="flex flex-col items-center"
      >
      <div
      className="rounded-full w-12 h-8 flex items-center justify-center mb-2"
      style={{ backgroundColor: '#527166' }}
      >
      <span className="text-white font-semibold text-xs">
      {countdown.hari}
      </span>
      </div>
      <span
      className="font-inter font-light text-xs"
      style={{ color: greenHex }}
      >
      Hari
      </span>
      </motion.div>
      
      <motion.div
      ref={refJam}
      {...motionPropsJam}
      className="flex flex-col items-center"
      >
      <div
      className="rounded-full w-12 h-8 flex items-center justify-center mb-2"
      style={{ backgroundColor: '#527166' }}
      >
      <span className="text-white font-semibold text-xs">
      {countdown.jam}
      </span>
      </div>
      <span
      className="font-inter font-light text-xs"
      style={{ color: greenHex }}
      >
      Jam
      </span>
      </motion.div>
      
      <motion.div
      ref={refMenit}
      {...motionPropsMenit}
      className="flex flex-col items-center"
      >
      <div
      className="rounded-full w-12 h-8 flex items-center justify-center mb-2"
      style={{ backgroundColor: '#527166' }}
      >
      <span className="text-white font-semibold text-xs">
      {countdown.menit}
      </span>
      </div>
      <span
      className="font-inter font-light text-xs"
      style={{ color: greenHex }}
      >
      Menit
      </span>
      </motion.div>
      
      <motion.div
      ref={refDetik}
      {...motionPropsDetik}
      className="flex flex-col items-center"
      >
      <div
      className="rounded-full w-12 h-8 flex items-center justify-center mb-2"
      style={{ backgroundColor: '#527166' }}
      >
      <span className="text-white font-semibold text-xs">
      {countdown.detik}
      </span>
      </div>
      <span
      className="font-inter font-light text-xs"
      style={{ color: greenHex }}
      >
      Detik
      </span>
      </motion.div>
      </div>
      </div>
      
      {/* Gambar tengah */}
      <motion.div
      className="relative w-full h-[50%] overflow-hidden"
      ref={ref4}
      {...motionProps4}
      style={{
        WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        WebkitMaskSize: "100% 100%",
        maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        maskSize: "100% 100%",
      }}
      >
      <img
      src="https://framerusercontent.com/images/YILyhxTUdKEHcZ9qaInJguJxhc.png"
      alt="Wedding"
      className="w-full h-full object-cover max-w-full block"
      />
      </motion.div>
      
      {/* Undangan kepada */}
      <div className="py-8 flex flex-col items-center gap-3">
      <motion.span
      ref={ref5}
      {...motionProps5}
      className="font-inter font-light"
      style={{
        border: `2px solid #586419`,
        borderRadius: "9999px",
        color: '#586419',
        padding: "0.25rem 1rem",
        fontSize: "12px",
      }}
      >
      Kepada Bapak/Ibu/Saudara/i
      </motion.span>
      <motion.div
      ref={ref6}
      {...motionProps6}
      >
      <AnimatedText
      className={`${birthstone.className} text-3xl`}
      delay={0.2}
      style={{ color: '#586419' }}
      initial={{ y: 10, opacity: 0 }}
      loopMirror={{ y: 4 }}
      mirror={false}
      text={"Bapak Tony Stark sekeluarga"}/>
      
      </motion.div>
      </div>
      {/* Ornamen atas kanan */}
      {/* Container absolute untuk posisi */}
      <motion.div
      ref={ref8}
      {...motionProps8}
      className="absolute z-30 lg:top-[30%] top-[30%] sm:top-[30%] md:top-[30%] right-0 w-48 overflow-hidden pointer-events-none">
      {/* Motion div yang dianimasi, posisi relatif supaya animasi translate x,y berjalan */}
      <motion.div
      ref={ref8}
      {...motionProps8}
      className="relative w-full h-auto"
      style={{ transformOrigin: "center" }}
      >
      <Image
      src="https://framerusercontent.com/images/sDv1XkOblm4YdqziPmsdQg83Kw.png"
      alt="Ornament Top Right"
      width={577}
      height={433}
      className="w-full h-auto"
      style={{ transform: "scaleX(-1)" }}
      />
      </motion.div>
      </motion.div>
      
      
      {/* Ornamen bawah kiri */}
      <motion.div
      ref={ref11}
      {...motionProps11}
      className="absolute z-30 lg:bottom-[25%] bottom-[25%] sm:bottom-[25%] md:bottom-[25%] -left-8 w-28 overflow-hidden pointer-events-none">
      {/* Motion div yang dianimasi, posisi relatif supaya animasi translate x,y berjalan */}
      <motion.div
      ref={ref11}
      {...motionProps11}
      className="relative w-full h-auto"
      style={{ transformOrigin: "center" }}
      >
      <Image
      src="https://framerusercontent.com/images/ZEdiSAhcRcv5P8LkK08jJNZoqUU.png"
      alt="Ornament Top Right"
      width={577}
      height={433}
      className="w-full h-auto"
      />
      </motion.div>
      </motion.div>
      
      {/* Ornamen bawah kiri */}
      <motion.div
      ref={ref9}
      {...motionProps9}
      className="absolute z-30 lg:bottom-[15%] bottom-[15%] sm:bottom-[15%] md:bottom-[15%] left-0 w-48 overflow-hidden pointer-events-none">
      {/* Motion div yang dianimasi, posisi relatif supaya animasi translate x,y berjalan */}
      <motion.div
      ref={ref10}
      {...motionProps10}
      className="relative w-full h-auto"
      style={{ transformOrigin: "center" }}
      >
      <Image
      src="https://framerusercontent.com/images/sDv1XkOblm4YdqziPmsdQg83Kw.png"
      alt="Ornament Top Right"
      width={577}
      height={433}
      className="w-full h-auto"
      style={{ transform: "scaleY(-1)" }}
      />
      </motion.div>
      </motion.div>
    </section>
    
  );
}
