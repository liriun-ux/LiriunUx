"use client";
import React, { useState, useEffect } from "react";

export default function TypingText() {
  const word = "LIRIUN-UX";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // Espera inicial de 2 segundos antes de comenzar
  useEffect(() => {
    const delay = setTimeout(() => setStarted(true), 2000);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!started) return; // no hacer nada hasta que inicie

    const speed = isDeleting ? 40 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < word.length) {
        setText((prev) => prev + word[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else if (index === word.length) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && index === 0) {
        setIsDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, started, word]);

  return <>{text}</>;
}
