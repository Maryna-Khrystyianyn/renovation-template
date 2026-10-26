"use client";

import { useEffect, useState } from "react";
import { company } from "@/content/company";
import HeaderLogo from "./HeaderLogo";
import HeaderCta from "./HeaderCta";

export default function Header() {
  const { phone } = company;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 10 : y > 40));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tel = phone.replace(/[^+\d]/g, "");

  return (
    <header
      className={`bg-header fixed inset-x-0 top-0 z-50 transition-[padding,box-shadow] duration-300 ease-in-out
        ${scrolled ? "py-2 shadow-lg" : "py-5 shadow-none"}`}
    >
      <div
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4
                   md:flex md:justify-between md:gap-6 md:px-8"
      >
        <HeaderLogo scrolled={scrolled} />

        <a href={`tel:${tel}`} className="whitespace-nowrap text-sm font-semibold md:text-base">
          {phone}
        </a>

        <div className="flex items-center justify-self-end gap-4">
          <HeaderCta />

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-md"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}