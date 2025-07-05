"use client";

import { useState } from "react";
import { Birthstone, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import { AnimatedText } from "./AnimatedText";

const birthstone = Birthstone({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: ["300", "700"], subsets: ["latin"] });

export function BankInfoCard({
    bankName,
    accountNumber,
    accountName,
    link,
    startCut = 15,
    endCut = 130,
    delay = 0,
}: {
    bankName: string;
    accountNumber: string;
    accountName: string;
    link: string;
    startCut?: number;
    endCut?: number;
    delay?: number;
}) {
    const [copied, setCopied] = useState(false);
    
    const handleCopy = () => {
        navigator.clipboard.writeText(accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Reset after 3 seconds
    };
    
    const [ref1, motionProps1] = useEntranceLoop({
        delay: delay + 0.2,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 4, // random duration between 4 and 6 seconds
        mirror: true,
    });
    
    return (
        <div className="relative w-full max-w-xl my-10 flex flex-col items-start text-left">
        {/* Title on top left */}
        <AnimatedText
        className={cn(
            "absolute top-0 left-5 -translate-y-1/2",
            birthstone.className,
            "text-3xl text-[#586419]"
        )}
        delay={0 + delay}
        initial={{ scale: 1.2, opacity: 0 }}
        loopMirror={{}}
        mirror={false}
        text={bankName}
        />
        
        {/* SVG frame */}
        <svg
        viewBox="0 0 400 160"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        >
        <path
        d={`M ${startCut} 0 H 15 Q 0 0 0 15 V 145 Q 0 160 15 160 H 385 Q 400 160 400 145 V 15 Q 400 0 385 0 H ${endCut}`}
        fill="transparent"
        stroke="#526F66"
        strokeWidth={2}
        />
        </svg>
        
        {/* Content inside the SVG frame */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-[45%] px-4 flex justify-between items-center gap-2">
        {/* LEFT: Account number and name */}
        <div className="flex-1 min-w-0">
        <AnimatedText
        className={cn(
            inter.className,
            "text-[#586419] font-bold text-lg text-[18px] truncate"
        )}
        delay={0.2 + delay}
        initial={{ scale: 1.2, opacity: 0 }}
        loopMirror={{}}
        mirror={false}
        text={accountNumber}
        />
        <AnimatedText
        className={cn(
            inter.className,
            "text-[#586419] font-light text-sm whitespace-nowrap text-ellipsis overflow-hidden"
        )}
        delay={0.4 + delay}
        initial={{ scale: 1.2, opacity: 0 }}
        loopMirror={{}}
        mirror={false}
        text={accountName}
        />
        </div>
        
        {/* RIGHT: Button */}
        <motion.div
        ref={ref1}
        {...motionProps1}
        className="flex-shrink-0"
        >
        <button
        onClick={handleCopy}
        className={cn(
            "text-xs rounded-full px-3 py-1.5 border transition-all duration-300 inline-block",
            copied
            ? "border-[#526F66] text-[#526F66] bg-transparent"
            : "bg-[#526F66] text-white border-transparent"
        )}
        >
        {copied ? "Disalin!" : "Salin Rekening"}
        </button>
        </motion.div>
        </div>
        </div>
    );
}
