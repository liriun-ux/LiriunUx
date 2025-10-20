'use client'
// components/SplashScreen.tsx
import { useEffect  } from "react";
import RectanglesAnimation from "@/example/rectangle";
import FloatingBox from "@/example/floting";
// components/SplashScreen.tsx
export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center  text-white text-4xl font-bold h-full w-full">
        <FloatingBox/>
        <RectanglesAnimation/>
    </div>
  );
}
