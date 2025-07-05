import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Birthstone, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import { AnimatedText } from "../molecules/AnimatedText";

const birthstone = Birthstone({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: ["300", "400"], subsets: ["latin"] });

const duplicatedWishes = [
    {
        name: "Diaz Tan",
        message: "Semoga bahagia dan langgeng selalu."
    },
    {
        name: "Ahmad Reihan Alavi",
        message: "Alhamdulillah yaaa akhirnya sah. selamat!."
    },
    {
        name: "Queen Aisyah",
        message: "Semoga samawa yaaa!."
    },
];

export default function WeddingWishSection() {
    const refImage = useRef(null);
    const inView = useInView(refImage, { once: true });
    
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const [ref1, motionProps1] = useEntranceLoop({
            delay: 0,
            initial: { opacity: 0, x: 0, y: 0, angle: 0, scale: 1.2 },
            loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1.1 },
            duration: 5,
            mirror: true,
        });

    const [ref2, motionProps2] = useEntranceLoop({
            delay: 0,
            initial: { opacity: 0, x: 0, y: 100, angle: 0, scale: 0.8 },
            loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1 },
            duration: 5,
            mirror: false,
        });

    const [ref3, motionProps3] = useEntranceLoop({
            delay: 0,
            initial: { opacity: 0, x: 0, y: 50, angle: 0, scale: 1.2 },
            loopMirror: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1 },
            duration: 5,
            mirror: false,
        });
    
    useEffect(() => {
        if (containerRef.current) {
            const updateWidth = () => {
                if (containerRef.current) {
                    const scrollWidth = containerRef.current.scrollWidth;
                    setContainerWidth(scrollWidth / 2);
                }
            };
            
            updateWidth();
            
            // Update width when window resizes
            window.addEventListener('resize', updateWidth);
            return () => window.removeEventListener('resize', updateWidth);
        }
    }, [duplicatedWishes]);
    
    
    return (
        <section className="w-full py-24 flex flex-col items-center text-center overflow-hidden">
        {/* Heading */}
        <motion.h2
        ref={ref1}
        {...motionProps1}
        className={cn(birthstone.className, "text-7xl text-[#586419]")}
        >
        Wedding Wish
        </motion.h2>
        <AnimatedText
        className={cn(inter.className, "text-[#586419] font-light mt-4 max-w-lg px-4")}
        delay={0.4}
        initial={{ y: 10, opacity: 0 }}
        loopMirror={{}}
        mirror={false}
        text={"Doa dan ucapan sangat berarti bagi kami. Silakan tuliskan harapanmu di bawah ini."}
        >
        </AnimatedText>
        
        {/* Image with gradient mask and overlay */}
        <div className="relative w-full max-w-xl h-[300px] mt-4 mb-6">
        <motion.div
        ref={refImage}
        className="relative w-full h-full overflow-hidden"
        style={{
            WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
            maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        }}
        >
        <img
        src="https://framerusercontent.com/images/YILyhxTUdKEHcZ9qaInJguJxhc.png"
        alt="Wedding"
        className="w-full h-full object-cover blur-[2px]"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        </motion.div>
        
        {/* Form overlay */}
        <motion.div
        ref={ref2}
        {...motionProps2}
        className="absolute inset-0 z-20 flex items-center justify-center"
        >
        <form className="absolute inset-0 z-20 flex flex-col justify-center items-center px-8">
        <label className={cn(inter.className, "text-white text-sm font-light mb-2 w-full text-left")}>
        Nama Lengkap
        </label>
        <input
        type="text"
        placeholder="Tulis nama lengkap..."
        className={cn(
            inter.className,
            "w-full max-w-md border border-white mb-4 rounded-4xl px-4 py-2 bg-transparent text-white placeholder-white text-sm font-light"
        )}
        />
        <label className={cn(inter.className, "text-white text-sm font-light mb-2 w-full text-left")}>
        Isi Ucapan
        </label>
        <textarea
        placeholder="Tulis isi ucapan..."
        className={cn(
            inter.className,
            "w-full max-w-md border border-white rounded-4xl mb-4 px-4 py-2 bg-transparent text-white placeholder-white text-sm font-light resize-none"
        )}
        rows={1}
        ></textarea>
        <button
        type="submit"
        className="flex items-center gap-2 bg-white text-black mt-4 rounded-full px-6 py-2 text-sm"
        >
        <Send size={16} /> Kirim Ucapan
        </button>
        </form>
        </motion.div>
        </div>
        
        {/* Ticker horizontal */}
        <motion.div
        ref={ref3}
        {...motionProps3}
        className="w-full overflow-hidden"
        >
        <div className="w-full overflow-hidden">
        <motion.div
        ref={containerRef}
        className="flex gap-4 px-4"
        animate={containerWidth > 0 ? { x: [0, -containerWidth] } : {}}
        transition={{ 
            duration: Math.max(containerWidth / 50, 10),
            ease: "linear", 
            repeat: Infinity 
        }}
        >
        {[...duplicatedWishes, ...duplicatedWishes].map((wish, i) => (
            <div
            key={i}
            className="border text-left border-[#586419] rounded-md p-4 flex-shrink-0"
            style={{ minWidth: 'max-content' }}
            >
            <p className={cn(birthstone.className, "text-[#586419] text-4xl")}>
            {wish.name}
            </p>
            <p className={cn(inter.className, "text-[#586419] font-light text-xs mt-1 max-w-xs")}>
            {wish.message}
            </p>
            </div>
        ))}
        </motion.div>
        </div>
        </motion.div>
        </section>
    );
}
