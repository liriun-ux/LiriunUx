'use client'
// components/SplashScreen.tsx
import { useEffect  } from "react";
import Logo from "./logo";
// components/SplashScreen.tsx
export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center  text-white text-4xl font-bold">
      <div className="animate-fade-in">
        <Logo/>
      </div>
    </div>
  );
}
