
"use client";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  end: number;
  duration: number;
  delay?: number;
}

export default function AnimatedNumber({ end, duration, delay = 1000 }: AnimatedNumberProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = duration / frameRate;

    const animate = () => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      setValue(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          frame = 0;
          setValue(0);
          requestAnimationFrame(animate);
        }, delay);
      }
    };

    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestAnimationFrame(animate));
  }, [end, duration, delay]);

  return <>{value}</>;
}
