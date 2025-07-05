"use client";

import Image from "next/image";

export default function FooterSection() {
    return (
        <footer className="h-[auto]flex items-center justify-center text-white text-2xl mt-8 mb-20 px-12">
        <a href="https://sekapursirih.lovable.app" target="_blank" rel="noopener noreferrer">
        <Image
        src="/footer-pict.png"
        alt="Footer Image"
        width={885}   // sesuaikan dengan ukuran gambar aslinya
        height={108}   // sesuaikan tinggi gambar
        className="w-full h-full"
        priority
        />
        </a>
        </footer>
    );
}
