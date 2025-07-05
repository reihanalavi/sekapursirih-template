"use client";

import { createContext, useContext, useState } from "react";

type CoverContextType = {
  isCoverDismissed: boolean;
  dismissCover: () => void;
};

const CoverContext = createContext<CoverContextType | undefined>(undefined);

export function CoverProvider({ children }: { children: React.ReactNode }) {
  const [isCoverDismissed, setIsCoverDismissed] = useState(false);

  const dismissCover = () => {
    setIsCoverDismissed(true);
  };

  return (
    <CoverContext.Provider value={{ isCoverDismissed, dismissCover }}>
      {children}
    </CoverContext.Provider>
  );
}

export function useCover() {
  const context = useContext(CoverContext);
  if (!context) {
    throw new Error("useCover must be used within a CoverProvider");
  }
  return context;
}
