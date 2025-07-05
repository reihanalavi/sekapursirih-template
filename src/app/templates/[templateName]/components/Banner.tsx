'use client';

import { Birthstone, Inter } from "next/font/google";

const birthstone = Birthstone({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-birthstone",
});

const inter = Inter({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Banner() {
  return (
    <div
      className="hidden md:flex fixed top-0 left-0 h-screen z-10 flex-col justify-between"
      style={{
        width: "calc(100vw - 393px)",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://framerusercontent.com/images/YILyhxTUdKEHcZ9qaInJguJxhc.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Teks Tengah */}
      <div className="flex flex-col items-center justify-center flex-grow text-white px-4">
        <p
            className={`${inter.className} text-2xl mb-2`}
          style={{ fontWeight: 300 }}
        >
          The Wedding of
        </p>
        <p
          className={`${birthstone.className} text-9xl`}
          style={{ lineHeight: 1 }}
        >
          Steve &amp; Peggy
        </p>
      </div>

      {/* Teks Bawah */}
      <div className="px-6 pb-10 text-center">
        <p
          className={`${inter.className} font-light text-white text-sm mb-2`}>
          Undangan kepada:
        </p>
        <p
        className={`${birthstone.className} text-black bg-white rounded-full text-3xl px-6 py-2 inline-block`}
          style={{ lineHeight: 1 }}
        >
          Bapak Tony Stark sekeluarga
        </p>
      </div>
    </div>
  );
}
