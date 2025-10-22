"use client";
import React, { useEffect, useState } from "react";

type Rectangle = {
  id: number;
  color: string;
  darkColor: string;
  top: number;
  left: number;
  width: number;
  height: number;
  delay: number;
  fromDirection: "top" | "bottom";
};

const COLORS = ["#ffffff", "#ff0000", "#ffff00", "#00ffff", "#ffaa00", "#00ff00"];

const DARK_COLORS = ["#888", "#a00", "#aa0", "#077", "#a50", "#070"];
export default function RectanglesAnimation() {
  const [rectangles, setRectangles] = useState<Rectangle[]>([]);

  useEffect(() => {
    const newRects = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      color: COLORS[i % COLORS.length],
      darkColor: DARK_COLORS[i % DARK_COLORS.length],
      top: Math.random() * 90,
      left: Math.random() * 90,
      width: 19 + Math.random() * 19,
      height: 9 + Math.random() * 11,
      delay: Math.random() * 1.5,
      fromDirection: (Math.random() > 0.5 ? "top" : "bottom") as "top" | "bottom",
    }));
    setRectangles(newRects);
  }, []);

  return (
    <section className="rectangles-area">
      {rectangles.map((r) => (
        <div
          key={r.id}
          className={`rectangle from-${r.fromDirection}`}
          style={{
            backgroundColor: r.color,
            boxShadow: `0 4px 35px ${r.color}, inset 0 4px 35px ${r.darkColor}`,
            top: `${r.top}%`,
            left: `${r.left}%`,
            width: `${r.width}vw`,
            height: `${r.height}vh`,
            animationDelay: `${r.delay}s`,
          }}
        />
      ))}
    </section>
  );
}
