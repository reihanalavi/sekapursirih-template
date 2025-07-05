"use client";

import { Birthstone, Inter } from "next/font/google";
import { ScheduleCard } from "../molecules/ScheduleCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";

const birthstone = Birthstone({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-birthstone",
});
const inter = Inter({
    weight: ["300", "600"],
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function JadwalCard() {
    
    const [ref3, motionProps3] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: -50, y: 0, angle: 25, scale: 0.2 },
        loopMirror: { opacity: 1, x: -10, y: 15, angle: 5, scale: 1 },
        duration: 4,
        mirror: true,
    });
    
    const [ref4, motionProps4] = useEntranceLoop({
        delay: 0.2,
        initial: { opacity: 1, x: 50, y: 0, angle: -25, scale: 0.2 },
        loopMirror: { opacity: 1, x: 10, y: 0, angle: -3, scale: 1 },
        duration: 5,
        mirror: true,
    });
    
    return (
        <div className="relative py-16 w-full max-w-lg mx-auto overflow-x-hidden">
        <motion.div>
        <ScheduleCard
        delay={0}
        title="Akad Nikah"
        date="Minggu, 24 September 2025"
        timePlace="08.00 – 09.30 WIB | Menara Avengers"
        mapUrl="https://maps.google.com"
        />
        </motion.div>
        <motion.div>
        
        <ScheduleCard
        delay={0.2}
        title="Resepsi"
        startCut={140}
        endCut={260}
        date="Minggu, 24 September 2025"
        timePlace="08.00 – 09.30 WIB | Menara Avengers"
        mapUrl="https://maps.google.com"
        />
        </motion.div>
        
        {/* Ornamen pojok kiri atas */}
        <motion.div
        ref={ref3}
        {...motionProps3}
        className="absolute z-30 lg:bottom-[50%] bottom-[50%] sm:bottom-[50%] md:bottom-[50%] left-0 w-32 overflow-hidden pointer-events-none"
        // Kalau mau offset custom bisa pakai top-2 left-2, dll
        >
        <motion.div
        ref={ref3}
        {...motionProps3}
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
        
        {/* Ornamen atas kanan */}
        {/* Container absolute untuk posisi */}
        <motion.div
        ref={ref4}
        {...motionProps4}
        className="absolute z-30 lg:top-[50%] top-[50%] sm:top-[50%] md:top-[50%] right-0 w-32 overflow-hidden pointer-events-none">
        {/* Motion div yang dianimasi, posisi relatif supaya animasi translate x,y berjalan */}
        <motion.div
        ref={ref4}
        {...motionProps4}
        className="relative w-full h-auto items-end"
        style={{ transformOrigin: "center" }}
        >
        <Image
        src="https://framerusercontent.com/images/sDv1XkOblm4YdqziPmsdQg83Kw.png"
        alt="Ornament Top Right"
        width={432}
        height={341}
        className="w-full h-auto"
        style={{ transform: "scaleX(-1)" }}
        />
        </motion.div>
        </motion.div>
        
        </div>
    );
}
