'use client';

import Link from 'next/link';
import { Menu, Scale } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/legal-services', label: 'Legal Services' },
  { href: '/case-analysis', label: 'Case Document Analysis' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5dfd4] bg-[#f8f6f2]/95 backdrop-blur-sm">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Ranjeet Tiwary home page">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7d0c2] bg-white text-[#0f172a] shadow-sm">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <div className="font-serif text-xl tracking-tight text-slate-900">Ranjeet Tiwary</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-600">Advocate</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/contact" className="button-primary">
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#e7e1d6] bg-white lg:hidden">
          <nav className="container-shell flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="button-primary mt-2 w-full" onClick={() => setMenuOpen(false)}>
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
