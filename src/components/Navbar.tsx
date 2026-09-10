import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, ShoppingBag, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Favorites', href: '#favorites' },
    { name: 'Menu', href: '#menu' },
    { name: 'Pizza', href: '#pizza-showcase' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-xs border-b border-[#EDE6DD]'
          : 'bg-[#FAF8F5] border-b border-[#F0EBE3]'
      }`}
    >
      {/* Top micro-bar for quick location & phone on desktop */}
      <div className="hidden lg:block border-b border-[#F2ECE4] bg-[#F7F3EE]/80 py-1.5 px-4 sm:px-6 text-xs text-[#6E665E]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C25E2E]" />
            <span>Commercial Market Road, Satellite Town, Rawalpindi</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Open Daily: 12:00 PM – 02:00 AM</span>
            <a
              id="top-bar-tel-link"
              href={`tel:${RESTAURANT_INFO.phoneTel}`}
              className="font-medium text-[#C25E2E] hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <a
          id="navbar-brand-logo"
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-hidden"
        >
          <div className="w-10 h-10 rounded-xl bg-[#F4EDE4] border border-[#E8DEC8] flex items-center justify-center text-[#C25E2E] transition-transform group-hover:scale-105">
            {/* Custom stylized crust slice icon */}
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 11h.01" />
              <path d="M11 15h.01" />
              <path d="M16 16h.01" />
              <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16Z" />
              <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
            </svg>
          </div>
          <div>
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#2D2A26] block leading-none">
              Crust Hut
            </span>
            <span className="text-[11px] font-medium tracking-wide uppercase text-[#8C8276] block mt-0.5">
              Pizza & Fast Food
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A443D]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              href={link.href}
              className="hover:text-[#C25E2E] transition-colors py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C25E2E] after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Direct Phone Call Button */}
          <a
            id="nav-call-btn"
            href={`tel:${RESTAURANT_INFO.phoneTel}`}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#2D2A26] bg-[#F2ECE3] hover:bg-[#EAE2D7] rounded-lg transition-colors border border-[#E3D9CC]"
          >
            <Phone className="w-4 h-4 text-[#C25E2E]" />
            <span>{RESTAURANT_INFO.phone}</span>
          </a>

          {/* Cart / Order Bag Button */}
          <button
            id="nav-order-bag-btn"
            onClick={onOpenCart}
            className="relative p-2.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-[#C25E2E] hover:bg-[#B05325] rounded-lg transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
            aria-label="View current order items"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Order Now</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold rounded-full bg-white text-[#C25E2E] -ml-0.5">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#2D2A26] hover:bg-[#EFE9E0] transition-colors border border-[#E5DDD2]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden border-b border-[#E8E1D6] bg-[#FFFDF9] px-4 pt-3 pb-5 space-y-3 animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#2D2A26] hover:bg-[#F4EFE7] hover:text-[#C25E2E] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#EFE8DE] flex flex-col gap-2">
            <a
              id="mobile-nav-call-btn"
              href={`tel:${RESTAURANT_INFO.phoneTel}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#F4EDE4] text-[#2D2A26] border border-[#E3D8CB]"
            >
              <Phone className="w-4 h-4 text-[#C25E2E]" />
              <span>Call: {RESTAURANT_INFO.phone}</span>
            </a>
            <div className="text-center text-[11px] text-[#857B70] pt-1">
              Satellite Town, Rawalpindi • Open Daily
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
