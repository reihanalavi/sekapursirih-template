"use client";

import { useEffect, useState } from "react";
import { Birthstone, Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { AnimatedText } from "../molecules/AnimatedText";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import Image from "next/image";
import { useCover } from "@/context/CoverContext";
import { useAudio } from "@/context/AudioContext";

const birthstone = Birthstone({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "300" });

export default function Cover() {
    const [showCover, setShowCover] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const { toggle } = useAudio();
    const { dismissCover, isCoverDismissed } = useCover();
    
    // hooks animasi
    const [ref1, motionProps1] = useEntranceLoop({
        delay: 0,
        initial: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.2 },
        duration: 4,
        mirror: true,
    });

    const [ref3, motionProps3] = useEntranceLoop({
        delay: 0,
        initial: { opacity: 1, x: -80, y: 0, angle: 25, scale: 1 },
        loopMirror: { opacity: 1, x: -10, y: 15, angle: 5, scale: 1 },
        duration: 4,
        mirror: true,
    });
    
    const [ref4, motionProps4] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: -80, y: 0, angle: 25, scale: 1 },
        loopMirror: { opacity: 1, x: -10, y: 15, angle: 5, scale: 1 },
        duration: 4,
        mirror: true,
    });
    
    const [ref2, motionProps2] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: -50, y: 0, angle: 25, scale: 1 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 360, scale: 1 },
        duration: 20,
        mirror: true,
    });
    
    const [ref8, motionProps8] = useEntranceLoop({
        delay: 0.2,
        initial: { opacity: 1, x: 100, y: 0, angle: 25, scale: 0.2 },
        loopMirror: { opacity: 1, x: 10, y: 0, angle: -3, scale: 1 },
        duration: 5,
        mirror: true,
    });
    
    const [ref9, motionProps9] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: 50, y: 0, angle: 25, scale: 0.2 },
        loopMirror: { opacity: 1, x: 10, y: 0, angle: -3, scale: 1 },
        duration: 5,
        mirror: true,
    });

    const [ref10, motionProps10] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: 50, y: 0, angle: 25, scale: 1 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 360, scale: 1 },
        duration: 20,
        mirror: true,
    });
    
    const handleClick = () => {
        setIsExiting(true);
        toggle();
        
        // delay destroy + scroll
        setTimeout(() => {
            setShowCover(false);
            const undangan = document.getElementById("undangan");
            if (undangan) undangan.scrollIntoView({ behavior: "smooth" });
            dismissCover()
        }, 1000); // sama kayak animasi exit
    };

    useEffect(() => {
      console.log(`Dismissed: ${isCoverDismissed}`)
    
    }, [isCoverDismissed])
    
    
    return (
        <AnimatePresence>
        {showCover && (
            <motion.section
            key="cover"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed top-0 right-0 h-screen flex flex-col justify-between overflow-y-auto shadow-lg z-20
                     w-full sm:max-w-[375px] md:w-[393px] md:max-w-[393px] max-w-[450px] bg-transparent overflow-hidden"
            style={{
                backgroundImage:
                "url(https://framerusercontent.com/images/YILyhxTUdKEHcZ9qaInJguJxhc.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                zIndex: 50,
            }}
            >
            {/* Atas */}
            <div className="pt-16 px-8 text-center">
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
                isExiting
                ? { opacity: 0, y: -100, transition: { duration: 0.6 } }
                : { opacity: 1, y: 0 }
            }
            exit={{ opacity: 0, y: -60, transition: { duration: 0.5 } }}
            className={`${inter.className} font-light text-md mb-1 text-white`}
            >
            The wedding of
            </motion.p>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
                isExiting
                ? { opacity: 0, y: -40, transition: { delay: 0.1, duration: 0.6 } }
                : { opacity: 1, y: 0 }
            }
            exit={{ opacity: 0, y: -50, transition: { delay: 0.1, duration: 0.5 } }}
            className={`${birthstone.className} text-7xl text-white`}
            >
            Steve &amp; Peggy
            </motion.p>
            </div>
            
            {/* Tombol */}
            <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={
                isExiting
                ? { opacity: 0, y: 40, transition: { delay: 0.2, duration: 0.5 } }
                : { opacity: 1, y: 0 }
            }
            exit={{ opacity: 0, y: 40, transition: { delay: 0.2, duration: 0.5 } }}
            >
            <motion.div
            ref={ref1}
            {...motionProps1}
            >
            <button
            type="button"
            onClick={handleClick}
            className="flex items-center gap-2 bg-white rounded-full px-8 py-3 text-black text-lg font-semibold hover:bg-gray-100 transition"
            >
            Buka Undangan <FiArrowRight size={20} />
            </button>
            </motion.div>
            </motion.div>
            
            {/* Nama Tamu */}
            <div className="py-8 flex flex-col items-center gap-3">
            <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={
                isExiting
                ? { opacity: 0, y: 40, transition: { delay: 0.3, duration: 0.5 } }
                : { opacity: 1, y: 0 }
            }
            exit={{ opacity: 0, y: 40, transition: { delay: 0.3, duration: 0.5 } }}
            className={`${inter.className} font-light text-white text-xs`}
            >
            Kepada Bapak/Ibu/Saudara/i
            </motion.span>
            <motion.div
            className="rounded-4xl px-4 py-2 bg-white"
            initial={{ opacity: 0, y: 10 }}
            animate={
                isExiting
                ? { opacity: 0, y: 50, transition: { delay: 0.4, duration: 0.6 } }
                : { opacity: 1, y: 0 }
            }
            exit={{ opacity: 0, y: 50, transition: { delay: 0.4, duration: 0.6 } }}
            >
            <p
            className={`${birthstone.className} text-3xl text-black`}
            >
            Bapak Tony Stark sekeluarga
            </p>
            </motion.div>
            </div>
            
            {/* Ornamen pojok kiri atas */}
            <motion.div
            ref={ref3}
            {...motionProps3}
            className="absolute z-30 lg:top-[20%] top-[20%] sm:top-[20%] md:top-[20%] left-0 w-30 overflow-hidden pointer-events-none"
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
            
            {/* Ornamen pojok kiri atas */}
            <motion.div
            ref={ref4}
            {...motionProps4}
            className="absolute z-30 lg:bottom-[20%] bottom-[20%] sm:bottom-[20%] md:bottom-[20%] left-0 w-38 overflow-hidden pointer-events-none"
            // Kalau mau offset custom bisa pakai top-2 left-2, dll
            >
            <motion.div
            ref={ref4}
            {...motionProps4}
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
            
            {/* Ornamen bawah kiri */}
            <motion.div
            ref={ref2}
            {...motionProps2}
            className="absolute z-30 lg:bottom-[25%] bottom-[25%] sm:bottom-[25%] md:bottom-[25%] -left-8 w-28 overflow-hidden pointer-events-none">
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
            
            {/* Ornamen atas kanan */}
            {/* Container absolute untuk posisi */}
            <motion.div
            ref={ref8}
            {...motionProps8}
            className="absolute -z-10 lg:top-[0%] top-[0%] sm:top-[0%] md:top-[0%] right-0 w-48 overflow-hidden pointer-events-none">
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
            
            {/* Ornamen atas kanan */}
            {/* Container absolute untuk posisi */}
            <motion.div
            ref={ref9}
            {...motionProps9}
            className="absolute -z-10 lg:bottom-[30%] bottom-[30%] sm:bottom-[30%] md:bottom-[30%] right-0 w-30 overflow-hidden pointer-events-none">
            {/* Motion div yang dianimasi, posisi relatif supaya animasi translate x,y berjalan */}
            <motion.div
            ref={ref9}
            {...motionProps9}
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
            ref={ref10}
            {...motionProps10}
            className="absolute -z-10 lg:top-[10%] top-[10%] sm:top-[10%] md:top-[10%] -right-8 w-28 overflow-hidden pointer-events-none">
            {/* Motion div yang dianimasi, posisi relatif supaya animasi translate x,y berjalan */}
            <motion.div
            ref={ref10}
            {...motionProps10}
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
            </motion.section>
        )}
        </AnimatePresence>
    );
}
