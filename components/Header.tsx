"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Diensten", href: "/diensten" },
  { label: "Galerij", href: "/galerij" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-10 w-32">
              <Image
                src="/images/logo-zwart.png"
                alt="Zumka Kappers"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  pathname === href
                    ? "text-accent"
                    : "text-charcoal hover:text-accent"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/boeken"
              className="inline-block px-6 py-2.5 bg-accent text-white text-[11px] uppercase tracking-[0.2em] hover:bg-accent-dark transition-colors"
            >
              Boek afspraak
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menu"
          >
            <span
              className={`block w-full h-px bg-charcoal transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-charcoal transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-charcoal transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 pb-6">
          <nav className="flex flex-col pt-4 gap-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[11px] uppercase tracking-[0.2em] py-3 border-b border-gray-50 text-charcoal hover:text-accent transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/boeken"
              className="mt-4 block px-6 py-3 bg-accent text-white text-[11px] uppercase tracking-[0.2em] text-center hover:bg-accent-dark transition-colors"
            >
              Boek afspraak
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
