import { useState, useEffect } from "react";

export function useResponsiveSize() {
  const [size, setSize] = useState(24); // default for PC

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 640) {
        setSize(18); // mobile
      } else if (width < 1024) {
        setSize(22); // tablet
      } else {
        setSize(28); // PC
      }
    }

    handleResize(); // set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
