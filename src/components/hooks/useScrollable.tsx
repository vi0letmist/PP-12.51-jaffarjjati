import { useRef, useState, useEffect, useCallback } from "react";

const useScrollable = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  const checkScroll = useCallback(() => {
    if (ref.current) {
      const { scrollHeight, clientHeight, scrollTop } = ref.current;
      setIsScrollable(scrollHeight > clientHeight);
      setIsTop(scrollTop === 0);
      setIsBottom(scrollTop + clientHeight >= scrollHeight - 5);
    }
  }, []);

  const scrollUp = () => {
    if (ref.current) {
      ref.current.scrollBy({ top: -100, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (ref.current) {
      ref.current.scrollBy({ top: 100, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScroll(); // Initial check
    const observer = new ResizeObserver(checkScroll);
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [checkScroll]);

  return { ref, isScrollable, isTop, isBottom, scrollUp, scrollDown };
};

export default useScrollable;
