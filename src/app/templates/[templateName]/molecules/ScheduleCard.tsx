import { Birthstone, Inter } from "next/font/google";
import { cn } from "@/lib/utils"; // optional
import Link from "next/link";
import { motion } from "framer-motion";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import { randomInt } from "crypto";
import { AnimatedText } from "./AnimatedText";
import Image from "next/image";

const birthstone = Birthstone({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: ["300", "700"], subsets: ["latin"] });

export function ScheduleCard({
    title,
    date,
    timePlace,
    mapUrl,
    startCut = 110,
    endCut = 290, // default cut border positions
    delay = 0
}: {
    title: string;
    date: string;
    timePlace: string;
    mapUrl: string;
    startCut?: number; // optional, if you want to start the cut border at a specific point
    endCut?: number; // optional, if you want to end the cut border at a
    delay?: number; // optional, if you want to add a delay before the animation starts
}) {
    
    const [ref1, motionProps1] = useEntranceLoop({
        delay: delay + 0.2,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 4, // random duration between 4 and 6 seconds
        mirror: true,
    });
    
    const [ref2, motionProps2] = useEntranceLoop({
        delay: delay + 0.4,
        initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
        duration: 4, // random duration between 4 and 6 seconds
        mirror: true,
    });
    
    return (
        <div className="relative w-full max-w-xl px-4 my-16 flex flex-col items-center text-center">
        {/* Title on top, in middle */}
        <motion.div
        ref={ref1}
        {...motionProps1}
        className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4",
            birthstone.className,
            "text-4xl text-[#586419]"
        )}
        >
        {title}
        </motion.div>
        
        {/* SVG frame with cut border */}
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
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full px-6">
        <AnimatedText
        className={cn(
            inter.className,
            "text-[#586419] font-bold text-lg text-center w-full inline-block"
        )}
        delay={0.2 + delay}
        initial={{ y: 10, opacity: 0 }}
        loopMirror={{}}
        mirror={false}
        text={date}/>
        
        <AnimatedText
        className={cn(
            inter.className,
            "text-[#586419] font-light text-sm mt-1 text-center w-full inline-block"
        )}
        delay={0.2 + delay}
        initial={{ y: 10, opacity: 0 }}
        loopMirror={{}}
        mirror={false}
        text={timePlace}/>
        </motion.div>
        
        {/* Button below frame */}
        <motion.div
        ref={ref2}
        {...motionProps2}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#526F66] text-white text-sm rounded-full px-5 py-1.5"
        >
        <Link
        href={mapUrl}
        target="_blank"
        >
        Buka via Maps
        </Link>
        </motion.div>
        </div>
    );
}
