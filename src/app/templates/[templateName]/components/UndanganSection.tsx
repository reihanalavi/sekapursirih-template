"use client";

import { use, useEffect, useState } from "react";

import { Birthstone, Inter } from "next/font/google";
import { delay, motion } from "framer-motion";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import { AnimatedText } from "../molecules/AnimatedText";
import Image from "next/image";

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

export default function UndanganSection() {
    const [ref1, motionProps1] = useEntranceLoop({
        delay: 0,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 5,
        mirror: true,
    });
    
    const [ref2, motionProps2] = useEntranceLoop({
        delay: 0.2,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 5,
        mirror: true,
    });
    
    const [ref3, motionProps3] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 5,
        mirror: true,
    });
    const [ref4, motionProps4] = useEntranceLoop({
        delay: 0.6,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 5,
        mirror: true,
    });
    
    const [ref5, motionProps5] = useEntranceLoop({
        delay: 0.6,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 4,
        mirror: true,
    });
    
    const [ref6, motionProps6] = useEntranceLoop({
      delay: 0.4,
      initial: { opacity: 1, x: -100, y: 0, angle: 25, scale: 0.2 },
      loopMirror: { opacity: 1, x: -10, y: 15, angle: 5, scale: 1 },
      duration: 4,
      mirror: true,
    });
    
    return (
        <section
        className="py-20 flex flex-col items-center text-center relative overflow-hidden">
        {/* Judul */}
        <motion.h4
        ref={ref1}
        {...motionProps1}
        className={`${birthstone.className} text-gray-900 text-7xl`}
        style={{color: '#586419'}}
        >
        Undangan <br /> Pernikahan
        </motion.h4>
        
        {/* Kalimat pembuka */}
        
        <AnimatedText
        className={`${inter.className} font-light px-2 text-[#586419] mt-2 mb-16 text-sm inline-block`}
        delay={0}
        initial={{ y: 10, opacity: 0 }}
        loopMirror={{ y: 4 }}
        mirror={false}
        text={"Kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami."}/>
        
        {/* Ornamen pojok kiri atas */}
        <motion.div
        ref={ref6}
        {...motionProps6}
        className="absolute z-30 lg:bottom-[45%] bottom-[45%] sm:bottom-[45%] md:bottom-[45%] left-0 w-48 overflow-hidden pointer-events-none"
        // Kalau mau offset custom bisa pakai top-2 left-2, dll
        >
        <motion.div
        ref={ref6}
        {...motionProps6}
        className="relative w-full h-auto"
        style={{ transformOrigin: "center" }}
        >
        <Image
        src="https://framerusercontent.com/images/sDv1XkOblm4YdqziPmsdQg83Kw.png"
        alt="Ornament Top Left"
        width={577}
        height={433}
        className="w-full h-auto"
        />
        </motion.div>
        </motion.div>

        {/* Gambar tengah */}
        <motion.div
        className="relative w-full h-[50%] overflow-hidden"
        ref={ref2}
        {...motionProps2}
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
        
        {/* Nama pasangan */}
        <div className="w-full max-w-2xl relative flex justify-between items-center px-6">
        {/* Simbol & di belakang */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#527166] opacity-20 z-0 pointer-events-none">
        <motion.div
        ref={ref5}
        {...motionProps5}
        className={`${birthstone.className} text-[220px] leading-none`}>
        &
        </motion.div>
        </div>
        
        {/* Kiri */}
        <div className="text-left text-[#527166] font-inter text-sm leading-relaxed z-10">
        <motion.p
        ref={ref3}
        {...motionProps3}
        className={`${birthstone.className} text-[36px] font-bold leading-tight`}
        >
        Steve Rogers
        </motion.p>
        <motion.p
        ref={ref4}
        {...motionProps4}
        className={`${inter.className} text-[10px] leading-tight`}
        >
        Putra dari Bapak X <br /> dan Ibu Y
        </motion.p>
        </div>
        
        {/* Kanan */}
        <div className="text-right text-[#527166] font-inter text-sm leading-relaxed z-10">
        <motion.p
        ref={ref3}
        {...motionProps3}
        className={`${birthstone.className} text-[36px] font-bold leading-tight`}
        >
        Peggy Carter
        </motion.p>
        <motion.p
        ref={ref4}
        {...motionProps4}
        className={`${inter.className} text-[10px] leading-tight`}
        >
        Putri dari Bapak X <br /> dan Ibu Y
        </motion.p>
        </div>
        </div>
        
        </section>
        
    )
}
