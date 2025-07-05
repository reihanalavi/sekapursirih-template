import { useAudio } from "@/context/AudioContext";
import { useAnimation, motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect } from "react";

export default function MusicPlayer() {
  const { isPlaying, toggle } = useAudio();
  const controls = useAnimation();

  useEffect(() => {
    if (isPlaying) {
      controls.start({
        rotate: 360,
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isPlaying]);

  // Lebar cover fixed kamu, sesuaikan dengan css cover-mu
  const coverWidth = 393; // px

  return (
    <button
      onClick={toggle}
      className="fixed bottom-4 z-50 bg-white rounded-full shadow-md p-3 border border-gray-300 hover:bg-gray-100 transition-colors ms-40"
    >
      <motion.div
        animate={controls}
        initial={{ rotate: 0 }}
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {isPlaying ? (
          <Volume2 className="text-green-700 w-5 h-5" />
        ) : (
          <VolumeX className="text-gray-500 w-5 h-5" />
        )}
      </motion.div>
    </button>
  );
}
