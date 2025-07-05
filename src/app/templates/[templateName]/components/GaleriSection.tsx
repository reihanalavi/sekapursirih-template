"use client";

import { Birthstone } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";

const birthstone = Birthstone({ weight: "400", subsets: ["latin"] });

const imageURL = "https://framerusercontent.com/images/YILyhxTUdKEHcZ9qaInJguJxhc.png";
const images = Array(6).fill(imageURL); // 6 image, bisa disesuaikan
const duplicatedImages = [...images, ...images]; // supaya seamless looping
const animationDuration = 20; // seconds

export default function GaleriSection() {

    const [ref1, motionProps1] = useEntranceLoop({
        delay: 0,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 5,
        mirror: true,
    });

    const [ref2, motionProps2] = useEntranceLoop({
        delay: 0,
        initial: { opacity: 0, x: 0, y: 50, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1 },
        duration: 5,
        mirror: false,
    });
    
    const [ref3, motionProps3] = useEntranceLoop({
        delay: 0,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1 },
        duration: 5,
        mirror: true,
    });
    
    return (
        <section className="py-20 flex flex-col items-center text-center overflow-hidden">
        {/* Title */}
        
        <motion.h2
        ref={ref1}
        {...motionProps1}
        className={`${birthstone.className} text-7xl text-[#586419] mb-8`}>
        Galeri
        </motion.h2>
        
        {/* YouTube iframe */}
        <motion.div
        ref={ref2}
        {...motionProps2}
        className="w-full max-w-4xl aspect-video mb-4">
        <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/kX1O93X77d4?si=ij68JiihguzIG16R&autoplay=1&mute=1&controls=1&loop=1&playlist=kX1O93X77d4"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        />
        </motion.div>
        
        {/* Ticker Section */}
        <motion.div
        ref={ref3}
        {...motionProps3}
        className="w-full max-w-6xl flex gap-4 justify-center px-4">
        {/* Left Ticker: scroll up */}
        <motion.div className="w-1/2 h-[500px] overflow-hidden">
        <motion.div
        className="flex flex-col gap-4"
        animate={{ y: ['0%', '-50%'] }}
        transition={{
            duration: animationDuration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
        }}
        >
        {duplicatedImages.map((src, i) => (
            <div key={`left-${i}`} className="w-full relative aspect-[9/16]">
            <Image src={src} alt={`Galeri ${i}`} fill className="object-cover" />
            </div>
        ))}
        </motion.div>
        </motion.div>
        
        {/* Right Ticker: scroll down (reversed) */}
        <motion.div className="w-1/2 h-[500px] overflow-hidden">
        <motion.div
        className="flex flex-col gap-4"
        animate={{ y: ['-50%', '0%'] }} // reversed
        transition={{
            duration: animationDuration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
        }}
        >
        {duplicatedImages.map((src, i) => (
            <div key={`right-${i}`} className="w-full relative aspect-[9/16]">
            <Image src={src} alt={`Galeri ${i}`} fill className="object-cover" />
            </div>
        ))}
        </motion.div>
        </motion.div>
        </motion.div>
        </section>
    );
}
