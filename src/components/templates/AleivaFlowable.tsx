"use client";

import { motion } from "framer-motion";
import Banner from "../../app/templates/[templateName]/components/Banner";
import HomeSection from "../../app/templates/[templateName]/components/HomeSection";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import AyatSection from "../../app/templates/[templateName]/components/AyatSection";
import UndanganSection from "../../app/templates/[templateName]/components/UndanganSection";
import FooterSection from "../../app/templates/[templateName]/components/FooterSection";
import OurJourneySection from "../../app/templates/[templateName]/components/OurJourneySection";
import JadwalSection from "../../app/templates/[templateName]/components/JadwalSection";
import GaleriSection from "../../app/templates/[templateName]/components/GaleriSection";
import WeddingWishSection from "../../app/templates/[templateName]/components/WeddingWishSection";
import WeddingGiftSection from "../../app/templates/[templateName]/components/WeddingGiftSection";
import ClosingSection from "../../app/templates/[templateName]/components/ClosingSection";
import Cover from "../../app/templates/[templateName]/components/Cover";
import { CoverProvider, useCover } from "@/context/CoverContext";
import BlankSection from "../../app/templates/[templateName]/components/BlankSection";
import MusicPlayer from "../MusicPlayer";

export default function AleivaFlowable() {
    const { isCoverDismissed } = useCover();
    
    const [ref1, motionProps1] = useEntranceLoop({
        delay: 0.4,
        initial: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1},
        loopMirror: { opacity: 1, x: 0, y: 0, angle: 2, scale: 1.2 },
        duration: 5,
        mirror: true,
    });
    
    return (
        <main className="relative min-h-screen bg-gray-100 select-none overflow-x-hidden"
        style={{ overflowX: 'hidden' }}>
        
        {/* Banner (kiri) */}
        <Banner />
        
        {/* Background fixed di belakang undangan + overlay */}
        <motion.div
        ref={ref1}
        {...motionProps1}
        className="fixed top-0 right-0 h-screen w-full
                   sm:max-w-[375px]
                   md:w-[393px]
                   md:max-w-[393px]
                   max-w-[450px]">
        {/* Background Image */}
        <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage:
            "url('https://framerusercontent.com/images/rxfyulk5NOaSsCQoa0iY2k3r6ow.png?scale-down-to=1024')",
        }}
        />
        {/* Overlay Putih 70% */}
        <div className="absolute inset-0 bg-white/80" />
        </motion.div>
        
        
        {/* Undangan - fixed di kanan, scrollable */}
        <div
        className="fixed top-0 right-0 h-screen overflow-y-auto shadow-lg z-20
                   w-full
                   sm:max-w-[375px]
                   md:w-[393px]
                   md:max-w-[393px]
                   max-w-[450px]
                   bg-transparent"
        >
        {/* BLANK DUMMY SECTION */}
        { (isCoverDismissed === true) && (
            <BlankSection/>
        ) }

        {/* MUSIC PLAYER */}
        <MusicPlayer/>
        
        {/* COVER */}
        <Cover />
        
        
        {/* Section: Home */}
        <HomeSection />
        
        {/* Section: Kata Pengantar */}
        <AyatSection />
        
        {/* Section: Undangan */}
        <UndanganSection />
        
        {/* Section: Our Journey */}
        <OurJourneySection/>
        
        {/* Section: Jadwal */}
        <JadwalSection/>
        
        {/* Section: Galeri */}
        <GaleriSection/>
        
        {/* Section: WeddingWish */}
        <WeddingWishSection/>
        
        {/* Section: Wedding Gift */}
        <WeddingGiftSection/>
        
        {/* Section: Closing */}
        <ClosingSection/>
        
        {/* Footer */}
        <FooterSection/>
        </div>
        </main>
    );
}
