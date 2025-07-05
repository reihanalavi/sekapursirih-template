"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import Banner from "../../app/templates/[templateName]/components/Banner";
import AyatSection from "../../app/templates/[templateName]/components/AyatSection";
import UndanganSection from "../../app/templates/[templateName]/components/UndanganSection";
import FooterSection from "../../app/templates/[templateName]/components/FooterSection";
import OurJourneySection from "../../app/templates/[templateName]/components/OurJourneySection";
import ClosingSection from "../../app/templates/[templateName]/components/ClosingSection";
import Cover from "../../app/templates/[templateName]/components/Cover";
import BlankSection from "../../app/templates/[templateName]/components/BlankSection";

import { useCover } from "@/context/CoverContext";
import { useEntranceLoop } from "@/hooks/useEntranceLoop";
import MusicPlayer from "../MusicPlayer";

// Lazy load komponen berat
const HomeSection = dynamic(() => import("../../app/templates/[templateName]/components/HomeSection"), {
  ssr: false,
  loading: () => <div>Loading Home...</div>,
});
const JadwalSection = dynamic(() => import("../../app/templates/[templateName]/components/JadwalSection"), {
  ssr: false,
  loading: () => <div>Loading Jadwal...</div>,
});
const GaleriSection = dynamic(() => import("../../app/templates/[templateName]/components/GaleriSection"), {
  ssr: false,
  loading: () => <div>Loading Galeri...</div>,
});
const WeddingWishSection = dynamic(() => import("../../app/templates/[templateName]/components/WeddingWishSection"), {
  ssr: false,
  loading: () => <div>Loading Ucapan...</div>,
});
const WeddingGiftSection = dynamic(() => import("../../app/templates/[templateName]/components/WeddingGiftSection"), {
  ssr: false,
  loading: () => <div>Loading Gift...</div>,
});

export default function AleivaFlowable() {
  const { isCoverDismissed } = useCover();

  const [ref1, motionProps1] = useEntranceLoop({
    delay: 0.4,
    initial: { opacity: 1, x: 0, y: 0, angle: 0, scale: 1 },
    loopMirror: { opacity: 1, x: 0, y: 0, angle: 2, scale: 1.2 },
    duration: 5,
    mirror: true,
  });

  return (
    <main
      className="relative min-h-screen bg-gray-100 select-none overflow-x-hidden"
      style={{ overflowX: "hidden" }}
    >
      {/* Background Banner (kiri) */}
      <Banner />

      {/* Background Image + Overlay */}
      <motion.div
        ref={ref1}
        {...motionProps1}
        className="fixed top-0 right-0 h-screen w-full
                   sm:max-w-[375px]
                   md:w-[393px]
                   md:max-w-[393px]
                   max-w-[450px]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/rxfyulk5NOaSsCQoa0iY2k3r6ow.png?scale-down-to=1024')",
          }}
        />
        <div className="absolute inset-0 bg-white/80" />
      </motion.div>

      {/* Undangan container */}
      <div
        className="fixed top-0 right-0 h-screen overflow-y-auto shadow-lg z-20
                   w-full
                   sm:max-w-[375px]
                   md:w-[393px]
                   md:max-w-[393px]
                   max-w-[450px]
                   bg-transparent"
      >
        {isCoverDismissed && <BlankSection />}
        <MusicPlayer />
        <Cover />

        <Suspense fallback={<div>Loading Home...</div>}>
          <HomeSection />
        </Suspense>

        <AyatSection />
        <UndanganSection />
        <OurJourneySection />

        <Suspense fallback={<div>Loading Jadwal...</div>}>
          <JadwalSection />
        </Suspense>

        <Suspense fallback={<div>Loading Galeri...</div>}>
          <GaleriSection />
        </Suspense>

        <Suspense fallback={<div>Loading Ucapan...</div>}>
          <WeddingWishSection />
        </Suspense>

        <Suspense fallback={<div>Loading Gift...</div>}>
          <WeddingGiftSection />
        </Suspense>

        <ClosingSection />
        <FooterSection />
      </div>
    </main>
  );
}
