"use client";
import { useEffect, useState } from "react";
import { Hammer } from "lucide-react";

export default function HammerCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 150); // reset after hit
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: `translate(${pos.x - 16}px, ${pos.y - 16}px) rotate(${isClicking ? "30deg" : "0deg"})`,
        transition: "transform 0.15s ease-out",
        filter: `drop-shadow(0 0 8px rgba(255, 255, 255, 0.6)) 
                 drop-shadow(0 0 16px rgba(255, 255, 255, 0.4))`,
      }}
    >
      <Hammer
        size={40}
        className={`text-primary drop-shadow-lg ${
          isClicking ? "scale-90" : "scale-100"
        } transition-transform duration-150 ease-out`}
      />
    </div>
  );
}
