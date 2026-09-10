import React from 'react';
import { Phone, MapPin, Instagram, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#FAF4EC] border-t border-[#E8DEC8] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E8DDD1]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#F0E6D8] border border-[#E0D3C0] flex items-center justify-center text-[#C25E2E]">
                <svg
                  className="w-5 h-5"
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
              <span className="font-extrabold text-2xl text-[#231F1C]">
                Crust Hut
              </span>
            </div>

            <p className="text-sm text-[#665D53] max-w-sm leading-relaxed">
              {RESTAURANT_INFO.about}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                id="footer-instagram-btn"
                href={RESTAURANT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#FFFDF9] border border-[#DDD2C2] hover:border-[#C25E2E] hover:text-[#C25E2E] flex items-center justify-center text-[#554D44] transition-colors"
                aria-label="Crust Hut Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-phone-btn"
                href={`tel:${RESTAURANT_INFO.phoneTel}`}
                className="w-9 h-9 rounded-xl bg-[#FFFDF9] border border-[#DDD2C2] hover:border-[#C25E2E] hover:text-[#C25E2E] flex items-center justify-center text-[#554D44] transition-colors"
                aria-label="Call Crust Hut"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-bold text-sm text-[#231F1C] tracking-wide uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#5D554C]">
              <li>
                <a href="#home" className="hover:text-[#C25E2E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#favorites" className="hover:text-[#C25E2E] transition-colors">
                  Crowd Favorites
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C25E2E] transition-colors">
                  Full Menu
                </a>
              </li>
              <li>
                <a href="#pizza-showcase" className="hover:text-[#C25E2E] transition-colors">
                  Pizza Showcase
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C25E2E] transition-colors">
                  About Crust Hut
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C25E2E] transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C25E2E] transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-[#231F1C] tracking-wide uppercase">
              Rawalpindi Location
            </h4>
            <div className="space-y-2 text-sm text-[#5D554C]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C25E2E] shrink-0 mt-0.5" />
                <span>Commercial Market Road, Satellite Town, Rawalpindi, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C25E2E] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneTel}`}
                  className="font-semibold hover:underline text-[#231F1C]"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="pt-1 text-xs text-[#7B7164]">
                Operating Hours: 12:00 PM – 02:00 AM (Daily)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E7467]">
          <p>© {new Date().getFullYear()} Crust Hut. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF9] border border-[#DDD3C5] hover:border-[#C25E2E] hover:text-[#C25E2E] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
