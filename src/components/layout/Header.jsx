"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SITE_CONFIG } from "@/config/site-config";
import { SITE_ASSETS } from "@/config/site-assets";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-white/90 backdrop-blur-md">
      <div className="container-width flex h-20 items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src={SITE_ASSETS.logo}
            alt={SITE_CONFIG.brandName}
            width={72}
            height={72}
            priority
            className="h-16 w-16 shrink-0 rounded-lg object-contain"
          />

          <span className="flex min-w-0 flex-col">
            <span className="text-sm font-bold tracking-wide text-[#079a9a] sm:text-base uppercase">
              {SITE_CONFIG.brandName.split(' ')[0]} {SITE_CONFIG.brandName.split(' ')[1]}
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#c99a32] sm:text-[10px]">
              {SITE_CONFIG.brandName.split(' ').slice(2).join(' ')}
            </span>
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold text-[var(--color-navy)]">
          <Link href="/" className="hover:text-[var(--color-teal)]">Home</Link>
          <Link href="/buy" className="hover:text-[var(--color-teal)]">Sale</Link>
          <Link href="/rent" className="hover:text-[var(--color-teal)]">Rent</Link>
          <Link href="/developments" className="hover:text-[var(--color-teal)]">Developments</Link>
          <Link href="/contact" className="hover:text-[var(--color-teal)]">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-[var(--color-navy)] p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white absolute w-full shadow-lg">
          <nav className="flex flex-col p-4 text-sm font-semibold text-[var(--color-navy)]">
            <Link href="/" className="p-4 hover:bg-[#eaf4f2] hover:text-[var(--color-teal)] rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/buy" className="p-4 hover:bg-[#eaf4f2] hover:text-[var(--color-teal)] rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Sale</Link>
            <Link href="/rent" className="p-4 hover:bg-[#eaf4f2] hover:text-[var(--color-teal)] rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Rent</Link>
            <Link href="/developments" className="p-4 hover:bg-[#eaf4f2] hover:text-[var(--color-teal)] rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Developments</Link>
            <Link href="/contact" className="p-4 hover:bg-[#eaf4f2] hover:text-[var(--color-teal)] rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
