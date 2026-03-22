"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Particles from "./Particles";

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  function animateCounters() {
    document.querySelectorAll("[data-counter]").forEach((el) => {
      const text = el.textContent || "";
      const hasPlus = text.includes("+");
      const hasPercent = text.includes("%");
      const number = parseInt(text);
      if (isNaN(number)) return;

      let current = 0;
      const increment = number / 40;
      const suffix = hasPlus ? "+" : hasPercent ? "%" : "";

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          current = number;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current) + suffix;
      }, 30);
    });
  }

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden pb-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_welding.png"
          alt="Vijay Welding workshop"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.3] contrast-[1.1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-welding-black/60 via-welding-black/30 to-welding-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(230,126,34,0.1)_0%,transparent_60%)]" />
      </div>

      <Particles />

      {/* Content */}
      <div className="relative z-2 text-center px-6 max-w-[800px] w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-welding-accent/10 border border-welding-accent/20 px-5 py-2 rounded-full text-[0.75rem] font-medium tracking-[2px] uppercase text-welding-accent mb-5 animate-fade-in-down">
          <span className="w-2 h-2 bg-welding-accent rounded-full animate-pulse-dot" />
          Trusted Since Decades
        </div>

        {/* Logo */}
        <div className="w-[70px] h-[70px] mx-auto mb-4 animate-fade-in-down [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
          <Image src="/images/logo.svg" alt="Vijay Welding" width={70} height={70} priority />
        </div>

        {/* Title */}
        <h1 className="font-heading font-black leading-none tracking-[6px] mb-3">
          <span className="block text-[clamp(2.5rem,9vw,6.5rem)] text-welding-text animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            VIJAY
          </span>
          <span className="block text-[clamp(2.5rem,9vw,6.5rem)] bg-gradient-to-br from-welding-accent to-welding-accent-light bg-clip-text text-transparent animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
            WELDING
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-heading font-light tracking-[5px] uppercase text-welding-text-secondary text-[clamp(0.85rem,2.2vw,1.3rem)] mb-5 animate-fade-in-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
          Quality That You Feel
        </p>

        {/* Description */}
        <p className="text-welding-text-secondary text-[clamp(0.9rem,1.5vw,1.05rem)] max-w-[550px] mx-auto mb-8 leading-relaxed animate-fade-in-up [animation-delay:0.8s] opacity-0 [animation-fill-mode:forwards]">
          Expert craftsmanship in CNC, Elevation, MDF, Wood, Acrylic, APC
          Design, Shutter, Fabrication, Turmeric Boiler & more.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-10 animate-fade-in-up [animation-delay:1s] opacity-0 [animation-fill-mode:forwards]">
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg font-heading font-semibold text-[0.95rem] tracking-wide bg-gradient-to-br from-welding-accent to-welding-accent-dark text-white shadow-[0_4px_20px_rgba(230,126,34,0.3)] hover:shadow-[0_8px_30px_rgba(230,126,34,0.5)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Get a Quote
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg font-heading font-semibold text-[0.95rem] tracking-wide bg-transparent text-white border-2 border-white/20 hover:border-welding-accent hover:text-welding-accent hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Our Services
          </button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex items-center justify-center gap-7 animate-fade-in-up [animation-delay:1.2s] opacity-0 [animation-fill-mode:forwards]"
        >
          <div className="text-center">
            <span data-counter className="block font-heading text-[clamp(1.4rem,3vw,1.8rem)] font-extrabold text-welding-accent">9+</span>
            <span className="block text-[0.75rem] text-welding-text-muted tracking-wider uppercase">Services</span>
          </div>
          <div className="w-px h-9 bg-white/10" />
          <div className="text-center">
            <span data-counter className="block font-heading text-[clamp(1.4rem,3vw,1.8rem)] font-extrabold text-welding-accent">100+</span>
            <span className="block text-[0.75rem] text-welding-text-muted tracking-wider uppercase">Projects</span>
          </div>
          <div className="w-px h-9 bg-white/10" />
          <div className="text-center">
            <span data-counter className="block font-heading text-[clamp(1.4rem,3vw,1.8rem)] font-extrabold text-welding-accent">100%</span>
            <span className="block text-[0.75rem] text-welding-text-muted tracking-wider uppercase">Quality</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-2 flex flex-col items-center gap-2 animate-fade-in-up [animation-delay:1.4s] opacity-0 [animation-fill-mode:forwards] max-md:hidden">
        <div className="w-[22px] h-[34px] border-2 border-white/20 rounded-xl flex justify-center pt-1.5">
          <div className="w-[3px] h-[7px] bg-welding-accent rounded-full animate-scroll-wheel" />
        </div>
        <span className="text-[0.65rem] tracking-[2px] uppercase text-welding-text-muted">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
