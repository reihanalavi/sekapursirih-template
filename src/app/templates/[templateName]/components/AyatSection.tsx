"use client";

import { Birthstone, Inter } from "next/font/google";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import { useEffect, useRef } from "react";
import { AnimatedText } from "../molecules/AnimatedText";

const birthstone = Birthstone({ subsets: ["latin"], weight: "400", variable: "--font-birthstone" });
const inter = Inter({ subsets: ["latin"], weight: ["300", "700"], variable: "--font-inter" });

const quoteOpenSvgUrl = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48.428 40.446'><g transform='scale(-1, -1) translate(-48.428,-40.446)'><path d='M20.637 0v10.644c0 3.232-.592 6.681-1.774 10.348-1.144 3.626-2.839 7.155-5.086 10.584-2.207 3.39-4.888 6.347-8.042 8.87L0 35.42c2.956-3.469 5.46-7.313 7.509-11.531C9.559 19.632 10.584 15.276 10.584 10.821V0h10.053zM48.428 0v10.644c0 3.232-.591 6.681-1.774 10.348-1.143 3.626-2.838 7.155-5.085 10.584-2.207 3.39-4.888 6.347-8.042 8.87l-5.795-5.026c2.996-3.469 5.5-7.313 7.51-11.531C37.292 19.632 38.317 15.276 38.317 10.821V0h10.111z' fill='%23527166'/></g></svg>")`;
const quoteCloseSvgUrl = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48.428 40.446'><path d='M20.637 0v10.644c0 3.232-.592 6.681-1.774 10.348-1.144 3.626-2.839 7.155-5.086 10.584-2.207 3.39-4.888 6.347-8.042 8.87L0 35.42c2.956-3.469 5.46-7.313 7.509-11.531C9.559 19.632 10.584 15.276 10.584 10.821V0h10.053zM48.428 0v10.644c0 3.232-.591 6.681-1.774 10.348-1.143 3.626-2.838 7.155-5.085 10.584-2.207 3.39-4.888 6.347-8.042 8.87l-5.795-5.026c2.996-3.469 5.5-7.313 7.51-11.531C37.292 19.632 38.317 15.276 38.317 10.821V0h10.111z' fill='%23527166'/></svg>")`;

export default function AyatSection() {
    const [ref1, motionProps1] = useEntranceLoop({
        delay: 0,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 5,
        mirror: true,
    });

    const [ref2, motionProps2] = useEntranceLoop({
        delay: 0,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 0.7 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.05 },
        duration: 5,
        mirror: true,
    });

    const [ref3, motionProps3] = useEntranceLoop({
        delay: 0.6,
        initial: { opacity: 0, x: 0, y: 20, angle: 0, scale: 1 },
        loopMirror: { opacity: 0.8, x: 0, y: 0, angle: 0, scale: 1.2 },
        duration: 5,
        mirror: true,
    });

    const [ref4, motionProps4] = useEntranceLoop({
        delay: 0.8,
        initial: { opacity: 0, x: 0, y: -20, angle: 0, scale: 1 },
        loopMirror: { opacity: 0.8, x: 0, y: 0, angle: 0, scale: 0.8 },
        duration: 4,
        mirror: true,
    });
    
    const greenHex = "#586419";
    
    return (
        <section className="h-[auto] py-32 flex items-center justify-center px-4">
        <motion.div
        ref={ref2}
        {...motionProps2}
        className="relative border-2 py-16 border-[#586419] rounded-xl p-6 max-w-xl w-full text-center">
        
        {/* SVG Tanda Kutip Kiri Atas */}
        <motion.div
        ref={ref3}
        {...motionProps3}
        className="absolute -top-7 left-4 w-12 h-12 bg-no-repeat bg-contain"
        style={{ backgroundImage: quoteOpenSvgUrl}}
        />
        
        {/* SVG Tanda Kutip Kanan Bawah */}
        <motion.div
        ref={ref4}
        {...motionProps4}
        className="absolute -bottom-7 right-4 w-12 h-12 bg-no-repeat bg-contain"
        style={{ backgroundImage: quoteCloseSvgUrl }}
        />
        
        {/* Isi */}
        <motion.div
        ref={ref1}
        {...motionProps1}
        >
        <h2
        
        className={`${birthstone.className} text-5xl text-[#586419] mb-8`}
        >
        Kata Pengantar
        </h2>
        </motion.div>
        <AnimatedText
            className={`${inter.className} font-light text-[#586419] mb-8 text-sm inline-block`}
            delay={0}
            initial={{ y: 10, opacity: 0 }}
            loopMirror={{ y: 4 }}
            mirror={false}
            text={"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antara kamu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."}/>
        <AnimatedText
            className={`${inter.className} font-bold text-[#586419] text-sm`}
            delay={0}
            initial={{ y: 10, opacity: 0 }}
            loopMirror={{ y: 4 }}
            mirror={false}
            text={"QS. Ar-Rum: 21"}/>
        </motion.div>
        </section>
    );
}
