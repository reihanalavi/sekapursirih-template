"use client";

import { Birthstone, Inter } from "next/font/google";
import { ScheduleCard } from "../molecules/ScheduleCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import { BankInfoCard } from "../molecules/BankInfoCard";
import { cn } from "@/lib/utils";

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

export default function WeddingGiftSection() {
    
    const [ref1, motionProps1] = useEntranceLoop({
        delay: 0,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 5,
        mirror: true,
    });

    const [ref2, motionProps2] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: 50, y: 0, angle: 25, scale: 1 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 360, scale: 1 },
        duration: 20,
        mirror: true,
    });
    
    const [ref3, motionProps3] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: -100, y: 0, angle: 25, scale: 0.2 },
        loopMirror: { opacity: 1, x: -10, y: 15, angle: 5, scale: 1 },
        duration: 4,
        mirror: true,
    });
    
    const [ref4, motionProps4] = useEntranceLoop({
        delay: 0.2,
        initial: { opacity: 1, x: 100, y: 0, angle: -25, scale: 1 },
        loopMirror: { opacity: 1, x: 10, y: 0, angle: -3, scale: 1 },
        duration: 5,
        mirror: true,
    });
    
    return (
        <section className="w-full py-24 flex flex-col relative items-center text-center overflow-x-hidden">
        
        {/* Heading */}
        <motion.h2
        ref={ref1}
        {...motionProps1}
        className={cn(birthstone.className, "text-7xl mb-12 text-[#586419]")}
        >
        Wedding Gift
        </motion.h2>
        
        <motion.div>
        <BankInfoCard
        delay={0}
        bankName="BCA"
        endCut={100}
        accountNumber="1234567890"
        accountName="an. Steve Rogers"
        link="#"
        />
        </motion.div>
        <motion.div>
        
        <BankInfoCard
        delay={0.2}
        bankName="Mandiri"
        accountNumber="9876543210"
        accountName="an. Steve Rogers"
        link="#"
        />
        </motion.div>
        
        {/* Ornamen bawah kiri */}
        <motion.div
        ref={ref2}
        {...motionProps2}
        className="absolute z-30 lg:top-[25%] top-[25%] sm:top-[25%] md:top-[25%] -right-8 w-28 overflow-hidden pointer-events-none">
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
        
        </section>
    );
}
