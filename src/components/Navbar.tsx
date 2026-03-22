"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + 120;
      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        const id = el.getAttribute("id") || "";
        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.body.style.overflow = "";
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? "hidden" : "";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-welding-black/95 backdrop-blur-xl py-2.5 border-b border-welding-border shadow-[0_2px_30px_rgba(0,0,0,0.5)]"
          : "py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="#home" onClick={() => handleNavClick("#home")}>
          <Logo size="md" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex list-none gap-1.5">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`font-heading text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                  activeSection === item.href.substring(1)
                    ? "bg-welding-accent/10 text-welding-accent"
                    : "text-welding-text-secondary hover:text-welding-text"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[1001]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[26px] h-[2px] bg-welding-text rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-[26px] h-[2px] bg-welding-text rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[26px] h-[2px] bg-welding-text rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed md:hidden top-0 h-screen w-[260px] bg-[rgba(15,15,15,0.98)] backdrop-blur-xl flex flex-col pt-[90px] px-7 pb-7 gap-1 transition-all duration-300 border-l border-welding-border z-[1000] ${
            menuOpen ? "right-0" : "-right-full"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`font-heading text-base font-medium px-4 py-3 rounded-lg text-left transition-all duration-300 cursor-pointer ${
                activeSection === item.href.substring(1)
                  ? "bg-welding-accent/10 text-welding-accent"
                  : "text-welding-text-secondary hover:text-welding-text"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
