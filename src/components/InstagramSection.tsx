import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const InstagramSection: React.FC = () => {
  // Tasteful food imagery reflecting authentic restaurant dishes
  const instaGrid = [
    {
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
      label: 'Crown Crust Pizza',
    },
    {
      img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
      label: 'Crunchy Pasta',
    },
    {
      img: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80',
      label: 'Loaded Fries',
    },
    {
      img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80',
      label: 'Flaming Wings',
    },
  ];

  return (
    <section id="social" className="py-12 sm:py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-[#E7DED2] shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C25E2E] tracking-wider uppercase">
                <Instagram className="w-4 h-4" />
                <span>Stay Connected</span>
              </div>
              <h2
                id="instagram-heading"
                className="text-2xl sm:text-3xl font-extrabold text-[#231F1C] tracking-tight"
              >
                Follow Crust Hut
              </h2>
              <p className="text-xs sm:text-sm text-[#6A6157]">
                Check out latest menu deals, real customer snaps, and announcements on Instagram.
              </p>
            </div>

            {/* Clickable Instagram Button */}
            <a
              id="instagram-profile-link"
              href={RESTAURANT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#231F1C] bg-[#F3ECE1] hover:bg-[#EAE1D3] border border-[#DDD2C2] transition-colors self-start md:self-auto"
            >
              <Instagram className="w-4 h-4 text-[#C25E2E]" />
              <span>@crusthut.pk</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#887D71]" />
            </a>
          </div>

          {/* Tasteful Food Imagery Grid without fake social numbers/likes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {instaGrid.map((item, idx) => (
              <a
                key={idx}
                href={RESTAURANT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden aspect-square bg-[#F4EDE3] border border-[#E8DDCF]"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#2D2A26]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                  <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                    <Instagram className="w-4 h-4" />
                    <span>View on Instagram</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
