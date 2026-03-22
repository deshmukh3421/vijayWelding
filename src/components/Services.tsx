"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

const services = [
  {
    name: "CNC Design",
    image: "/images/cnc_design.png",
    description: "Precision CNC laser cutting for intricate metal patterns, gates, grills, and decorative panels.",
  },
  {
    name: "Elevation Design",
    image: "/images/elevation_design.png",
    description: "Modern building elevation facades, metal railings, stylish gates, and exterior cladding solutions.",
  },
  {
    name: "MDF Design",
    image: "/images/mdf_design.png",
    description: "Decorative MDF wall panels, CNC-carved patterns, jali work, and custom interior board designs.",
  },
  {
    name: "Wood Design",
    image: "/images/wood_design.png",
    description: "Artisan wood carving & joinery for furniture, doors, partitions, and decorative wooden accents.",
  },
  {
    name: "Acrylic Design",
    image: "/images/acrylic_design.png",
    description: "LED-illuminated acrylic signage, backlit name boards, display panels, and custom acrylic work.",
  },
  {
    name: "APC Design",
    image: "/images/apc_design.png",
    description: "Aluminium composite panel cladding for building exteriors, shop fronts, and commercial facades.",
  },
  {
    name: "Shutter",
    image: "/images/shutters_design.png",
    description: "Heavy-duty rolling shutters for shops, warehouses, and commercial establishments with secure mechanisms.",
  },
  {
    name: "Fabrication",
    image: "/images/fabrication_work.png",
    description: "Complete metal fabrication — structural steel frames, heavy industrial welding, and custom metalwork.",
  },
  {
    name: "Turmeric Boiler",
    image: "/images/turmeric_boiler.png",
    description: "Custom-built stainless steel turmeric boilers for agricultural processing, durable and efficient.",
  },
];

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  }, []);

  const pageCount = Math.ceil(services.length / getVisibleCount());

  const updateDots = useCallback(() => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.querySelectorAll(".service-card");
    if (!cards.length) return;
    const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24;
    const scrollLeft = carouselRef.current.scrollLeft;
    const currentPage = Math.round(scrollLeft / (cardWidth * getVisibleCount()));
    setActiveDot(Math.min(currentPage, pageCount - 1));
  }, [getVisibleCount, pageCount]);

  const scrollToPage = (page: number) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.querySelectorAll(".service-card");
    if (!cards.length) return;
    const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24;
    carouselRef.current.scrollTo({
      left: page * getVisibleCount() * cardWidth,
      behavior: "smooth",
    });
  };

  const scrollBy = (direction: number) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: direction * 324,
      behavior: "smooth",
    });
  };

  // Auto scroll
  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      if (!carouselRef.current) return;
      const maxScroll =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      if (carouselRef.current.scrollLeft >= maxScroll - 5) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 324, behavior: "smooth" });
      }
    }, 4000);
  }, []);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.addEventListener("scroll", updateDots);
    return () => carousel.removeEventListener("scroll", updateDots);
  }, [updateDots]);

  return (
    <section id="services" className="py-20 bg-welding-dark relative overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-welding-accent/30 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block font-heading text-[0.85rem] font-semibold tracking-[3px] uppercase text-welding-accent mb-3 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3.5 before:h-0.5 before:bg-welding-accent">
            What We Do
          </span>
          <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-wider mb-4">
            OUR SERVICES
          </h2>
          <p className="text-welding-text-secondary text-base max-w-[600px] mx-auto">
            Delivering excellence across every domain of modern fabrication & design
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative px-4 md:px-[60px]">
        {/* Left Arrow */}
        <button
          onClick={() => scrollBy(-1)}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-welding-accent/15 border border-welding-accent/30 text-welding-accent items-center justify-center z-10 hover:bg-welding-accent/30 hover:shadow-[0_0_20px_rgba(230,126,34,0.3)] transition-all duration-300 cursor-pointer backdrop-blur-xl"
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>

        <div
          ref={carouselRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          onTouchStart={stopAutoScroll}
          onTouchEnd={() => setTimeout(startAutoScroll, 3000)}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 scrollbar-hide"
        >
          {services.map((service) => (
            <div
              key={service.name}
              className="service-card min-w-[280px] max-w-[280px] sm:min-w-[300px] sm:max-w-[300px] flex-shrink-0 bg-welding-card rounded-2xl overflow-hidden border border-welding-border snap-start transition-all duration-400 hover:-translate-y-2 hover:border-welding-border-hover hover:shadow-[0_0_40px_rgba(230,126,34,0.15)] group"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-600 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-welding-black/90" />
              </div>
              <div className="p-5 pt-4">
                <h3 className="font-heading text-[1.15rem] font-bold tracking-wide mb-2">
                  {service.name}
                </h3>
                <p className="text-[0.88rem] text-welding-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollBy(1)}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-welding-accent/15 border border-welding-accent/30 text-welding-accent items-center justify-center z-10 hover:bg-welding-accent/30 hover:shadow-[0_0_20px_rgba(230,126,34,0.3)] transition-all duration-300 cursor-pointer backdrop-blur-xl"
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pt-4">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPage(i)}
            className={`w-2.5 h-2.5 rounded-full border-none transition-all duration-300 cursor-pointer ${activeDot === i
              ? "bg-welding-accent shadow-[0_0_8px_rgba(230,126,34,0.5)] scale-125"
              : "bg-white/15 hover:bg-welding-accent/50"
              }`}
            aria-label={`Go to slide group ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
