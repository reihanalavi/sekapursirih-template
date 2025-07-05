"use client";

import { Birthstone, Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatedText } from "../molecules/AnimatedText";

const birthstone = Birthstone({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: ["300"], subsets: ["latin"] });

export default function ClosingStatementSection() {
    const [refText, motionText] = useEntranceLoop({
        delay: 0.2,
        initial: { opacity: 0, y: 20 },
        loopMirror: { opacity: 1, y: 0 },
        duration: 4,
        mirror: true,
    });
    
    const [refImage, motionImage] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 0, scale: 1.1 },
        loopMirror: { opacity: 1, scale: 1 },
        duration: 4,
        mirror: true,
    });
    
    const [ref3, motionProps3] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: -80, y: 0, angle: 25, scale: 1 },
        loopMirror: { opacity: 1, x: -10, y: 15, angle: 5, scale: 1 },
        duration: 4,
        mirror: true,
    });
    
    const [ref5, motionProps5] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: -80, y: 0, angle: 25, scale: 1 },
        loopMirror: { opacity: 1, x: -10, y: 15, angle: 5, scale: 1 },
        duration: 4,
        mirror: true,
    });
    
    const [ref4, motionProps4] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: 80, y: 0, angle: 25, scale: 1 },
        loopMirror: { opacity: 1, x: 10, y: 10, angle: 5, scale: 1 },
        duration: 4,
        mirror: true,
    });
    
    const [ref6, motionProps6] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: 80, y: 0, angle: 25, scale: 1 },
        loopMirror: { opacity: 1, x: 10, y: 10, angle: 5, scale: 1 },
        duration: 4,
        mirror: true,
    });
    
    return (
        <section className="w-full py-24 flex flex-col items-center justify-center relative min-h-[80vh] overflow-hidden">
        {/* Gambar Tengah sebagai background */}
        <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[40vh] overflow-hidden"
        ref={refImage}
        {...motionImage}
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
        className="w-full h-full object-cover block"
        />
        </motion.div>
        
        {/* Outlined Box yang menimpa gambar */}
        <div className="px-4 w-full max-w-3xl relative z-10">
        <div
        className="border border-[#586419] rounded-xl px-4 py-10 text-center "
        >
        {/* Teks Atas */}
        <AnimatedText
        className={`${inter.className} font-light px-2 text-[#586419] mt-2 mb-16 text-sm inline-block`}
        delay={0}
        initial={{ y: 10, opacity: 0 }}
        loopMirror={{ y: 4 }}
        mirror={false}
        text={"Menjadi sebuah kebanggaan kami apabila Bapak/Ibu/Saudara/i berkenan\nhadir untuk memberikan doa restu kepada kami."}/>
        <motion.p
        ref={refText}
        {...motionText}
        className={cn(inter.className, "text-[#586419] text-sm mb-6")}
        >
        </motion.p>
        
        {/* Spacer to simulate middle gap for image */}
        <div className="h-[40vh] sm:h-[40vh]" />
        
        {/* Hormat Kami */}
        <motion.span
        ref={refText}
        {...motionText}
        className="text-xs border border-[#586419] text-[#586419] rounded-full px-4 py-1 inline-block"
        >
        Hormat Kami
        </motion.span>
        
        {/* Nama */}
        <motion.p
        ref={refText}
        {...motionText}
        className={cn(
            birthstone.className,
            "text-6xl sm:text-7xl text-[#586419] mt-2"
        )}
        >
        Steve & Peggy
        </motion.p>
        </div>
        </div>
        
        {/* Ornamen pojok kiri atas */}
        <motion.div
        ref={ref3}
        {...motionProps3}
        className="absolute z-30 lg:top-[0%] top-[0%] sm:top-[0%] md:top-[0%] left-0 w-42 overflow-hidden pointer-events-none"
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
        ref={ref5}
        {...motionProps5}
        className="absolute z-30 lg:bottom-[5%] bottom-[5%] sm:bottom-[5%] md:bottom-[5%] left-0 w-42 overflow-hidden pointer-events-none"
        // Kalau mau offset custom bisa pakai top-2 left-2, dll
        >
        <motion.div
        ref={ref5}
        {...motionProps5}
        className="relative w-full h-auto"
        style={{ transformOrigin: "center" }}
        >
        <Image
        src="https://framerusercontent.com/images/sDv1XkOblm4YdqziPmsdQg83Kw.png"
        alt="Ornament Top Left"
        width={577}
        height={433}
        className="w-full h-auto"
        style={{ transform: "scaleY(-1)" }}
        />
        </motion.div>
        </motion.div>
        
        {/* Ornamen pojok kiri atas */}
        <motion.div
        ref={ref4}
        {...motionProps4}
        className="absolute z-30 lg:top-[0%] top-[0%] sm:top-[0%] md:top-[0%] -right-4 w-42 overflow-hidden pointer-events-none"
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
        style={{ transform: "scaleX(-1)" }}
        />
        </motion.div>
        </motion.div>
        
        {/* Ornamen pojok kiri atas */}
        <motion.div
        ref={ref6}
        {...motionProps6}
        className="absolute z-30 lg:bottom-[5%] bottom-[5%] sm:bottom-[5%] md:bottom-[5%] -right-4 w-42 overflow-hidden pointer-events-none"
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
        style={{ transform: "scaleX(-1) scaleY(-1)" }}
        />
        </motion.div>
        </motion.div>
        </section>
    );
}