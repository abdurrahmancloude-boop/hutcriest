import React from 'react';
import { GALLERY_ITEMS } from '../data/menuData';
import { Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-[#ECE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EFE7DC] text-[#8A3F1D] text-xs font-bold uppercase tracking-wider mb-2">
            <ImageIcon className="w-3.5 h-3.5 text-[#C25E2E]" />
            <span>Food Snapshots</span>
          </div>
          <h2
            id="gallery-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#231F1C] tracking-tight"
          >
            A Glimpse of the Kitchen
          </h2>
          <p className="text-xs sm:text-sm text-[#6C6359] mt-1">
            Golden baked crusts, loaded fries, and freshly prepared favorites.
          </p>
        </div>

        {/* Small & Compact 6-item Grid: 2 columns on mobile, 3 on tablet/desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              id={`gallery-item-${idx}`}
              className="group relative rounded-xl overflow-hidden bg-[#FFFDF9] border border-[#E4D9CC] shadow-2xs aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                <span className="text-[11px] font-semibold text-white leading-tight">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
