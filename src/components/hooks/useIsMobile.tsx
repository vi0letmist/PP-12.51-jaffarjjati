import { useState, useEffect } from "react";

const useIsMobile = (onResize?: () => void) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      if (isNowMobile !== isMobile) {
        setIsMobile(isNowMobile);
        if (onResize) {
          onResize();
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, onResize]);

  return isMobile;
};

export default useIsMobile;
