"use client";
import React, { useState, useEffect } from "react";
import TypingText from "./textDinamic";

export default function FloatingBox() {
  const [fromTop, setFromTop] = useState(true);

  useEffect(() => {
    // aleatoriamente puede venir desde arriba o abajo
    setFromTop(Math.random() > 0.5);
  }, []);

  return (
    <section className="floating-container">
      <div className={`floating-box ${fromTop ? "from-top" : "from-bottom"}`}>
            <div id='nav-itorA' className='flex h-full justify-around items-center'>
                <div className="walkerIll" style={{animationDelay:'-2.03s' , animationDuration:'4.8s'}}></div>
                <div className="walkerIll" style={{animationDelay:'1.03s' , animationDuration:'5.3s'}}></div>
                <div className="walkerIll" style={{animationDelay:'-3.43s' , animationDuration:'5.7s'}}></div>
                <div className="walkerIll" style={{animationDelay:'-4.73s' , animationDuration:'4.5s'}}></div>
                <div id='nav-logoA'>
                    <div className='loggar'><TypingText/></div>
                <div className="walker"></div>
                <div className="walker" style={{animationDelay:'-2.03s' , animationDuration:'4.8s'}}></div>
                <div className="walker" style={{animationDelay:'1.13s' , animationDuration:'5.3s'}}></div>
                <div className="walker" style={{animationDelay:'-3.43s' , animationDuration:'5.7s'}}></div>
                </div>
            </div>
      </div>
    </section>
  );
}
