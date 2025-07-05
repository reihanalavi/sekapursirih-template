"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Birthstone, Inter } from "next/font/google";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { wrap } from "popmotion";

const birthstone = Birthstone({ weight: "400", subsets: ["latin"], variable: "--font-birthstone" });
const inter = Inter({ weight: ["300", "500", "700"], subsets: ["latin"], variable: "--font-inter" });

const journeyItems = [
    { year: "2018", text: "Pertama kali bertemu di acara kampus...", image: "https://framerusercontent.com/images/YILyhxTUdKEHcZ9qaInJguJxhc.png" },
    { year: "2020", text: "Mulai saling mengenal lebih dalam...", image: "https://framerusercontent.com/images/YILyhxTUdKEHcZ9qaInJguJxhc.png" },
    { year: "2023", text: "Memutuskan untuk bertunangan...", image: "https://framerusercontent.com/images/YILyhxTUdKEHcZ9qaInJguJxhc.png" },
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 1,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 1,
    }),
};

export default function OurJourneySection() {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, journeyItems.length, page);
    
    const [ref1, motionProps1] = useEntranceLoop({
        delay: 0,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 5,
        mirror: true,
    });
    
    const [ref2, motionProps2] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: -50, y: 0, angle: 25, scale: 1 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 360, scale: 1 },
        duration: 20,
        mirror: true,
    });
    
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    
    return (
        <section className="py-20 flex flex-col items-center relative text-center">
        <motion.h4
        ref={ref1}
        {...motionProps1}
        className={`${birthstone.className} text-7xl text-[#586419] leading-none`}
        >
        Our <br /> Journey
        </motion.h4>
        
        {/* Ornamen bawah kiri */}
        <motion.div
        ref={ref2}
        {...motionProps2}
        className="absolute z-30 lg:top-[25%] top-[25%] sm:top-[25%] md:top-[25%] -left-8 w-28 overflow-hidden pointer-events-none">
        {/* Motion div yang dianimasi, posisi relatif supaya animasi translate x,y berjalan */}
        <motion.div
        ref={ref2}
        {...motionProps2}
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
        
        <div className="w-full max-w-md mt-10">
        <div className="relative w-full h-80 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
        <motion.div
        key={page}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
            x: { type: "spring", stiffness: 100, damping: 30, duration: 1 },
            opacity: { duration: 0.2 },
        }}
        className="absolute inset-0 w-full"
        >
        <div className="flex flex-col items-center h-full">
        <div
        className="relative w-full h-64 overflow-hidden rounded-xl"
        style={{
            WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
            WebkitMaskSize: "100% 100%",
            maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
            maskSize: "100% 100%",
        }}
        >
        <Image
        src={journeyItems[imageIndex].image}
        alt="Journey"
        fill
        className="object-cover select-none px-4"
        />
        </div>
        <p className={`${inter.className} text-4xl font-medium text-[#586419]`}>
        {journeyItems[imageIndex].year}
        </p>
        <p className={`${inter.className} text-md font-light text-[#586419] max-w-sm`}>
        {journeyItems[imageIndex].text}
        </p>
        </div>
        </motion.div>
        </AnimatePresence>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-4">
        <button
        onClick={() => paginate(-1)}
        className="bg-[#586419] text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        >
        <ArrowLeft size={16} />
        </button>
        
        <div className="flex gap-1">
        {journeyItems.map((_, i) => (
            <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-800 ${
                i === imageIndex ? "bg-[#586419] opacity-100" : "bg-[#586419] opacity-20"
            }`}
            />
        ))}
        </div>
        
        <button
        onClick={() => paginate(1)}
        className="bg-[#586419] text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        >
        <ArrowRight size={16} />
        </button>
        </div>
        </div>
        </section>
    );
}
