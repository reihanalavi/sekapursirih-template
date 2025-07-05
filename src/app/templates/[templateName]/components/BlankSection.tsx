"use client";

import { useCover } from "@/context/CoverContext";

export default function BlankSection() {  
    const { isCoverDismissed } = useCover();

    if(!isCoverDismissed) return null;
  return (
    <section
    className={`${((isCoverDismissed == true) ? 'h-0' : 'h-screen')}`}
    style={{ overflowX: 'hidden' }}>
    </section>
  );
}
