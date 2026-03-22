"use client";

import { useEffect } from "react";

export default function Particles() {
  useEffect(() => {
    const container = document.getElementById("heroParticles");
    if (!container) return;

    const count = 20;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className =
        "absolute rounded-full bg-welding-accent animate-float-up opacity-0";
      const size = 1 + Math.random() * 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.bottom = "0";
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${4 + Math.random() * 6}s`;
      particle.style.boxShadow =
        "0 0 6px #e67e22, 0 0 12px rgba(230,126,34,0.3)";
      container.appendChild(particle);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div
      id="heroParticles"
      className="absolute inset-0 z-[1] pointer-events-none"
    />
  );
}
