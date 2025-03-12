"use client";

import { useState, useEffect, type ReactNode } from "react";

const SafeHydrate = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return <>{children}</>;
};

export default SafeHydrate;
