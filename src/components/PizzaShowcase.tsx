import React from 'react';
import { PIZZA_SHOWCASE_ITEMS, RESTAURANT_INFO } from '../data/menuData';
import { Pizza, Sparkles, Phone, ArrowDown } from 'lucide-react';

export const PizzaShowcase: React.FC = () => {
  return (
    <section id="pizza-showcase" className="py-14 sm:py-20 bg-[#F5EFE6] border-y border-[#E9DFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADECF] text-[#873715] text-xs font-bold uppercase tracking-wider mb-3">
            <Pizza className="w-3.5 h-3.5 text-[#C25E2E]" />
            <span>The Art of the Crust</span>
          </div>
          <h2
            id="pizza-showcase-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#231F1C] tracking-tight mb-3.5"
          >
            Crafted for True Pizza Lovers
          </h2>
          <p className="text-sm sm:text-base text-[#61584F] leading-relaxed">
            From stuffed cheesy pockets to traditional Pakistani tikka marinades, every Crust Hut pizza is baked to a crisp golden finish.
          </p>
        </div>

        {/* 3 Showcase Pillars - Visually different layout: split editorial banner cards with light cream backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {PIZZA_SHOWCASE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              id={`showcase-pillar-${idx}`}
              className="bg-[#FFFDF9] rounded-3xl p-5 sm:p-6 border border-[#E3D8CA] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Feature Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#C25E2E] tracking-wider uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {item.feature}
                  </span>
                  <span className="text-xs font-medium text-[#8E8478]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Showcase Image */}
                <div className="rounded-2xl overflow-hidden aspect-4/3 mb-5 bg-[#F2EDE5] border border-[#ECE2D5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <h3 className="font-extrabold text-xl text-[#24201D] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#8A421F] mb-2.5">
                  {item.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#675F55] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1E9DE] flex items-center justify-between text-xs text-[#877C70]">
                <span>100% Mozzarella</span>
                <span className="font-medium text-[#231F1C]">Fresh Dough</span>
              </div>
            </div>
          ))}
        </div>

        {/* Micro-callout bottom banner */}
        <div className="bg-[#FFFDF9] rounded-2xl p-5 sm:p-6 border border-[#E4DACD] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base text-[#24201D]">
              Want our signature Crown Crust with your favorite toppings?
            </h4>
            <p className="text-xs sm:text-sm text-[#686056] mt-0.5">
              Available in Medium and Large sizes for delivery across Satellite Town and Rawalpindi.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              id="showcase-view-menu-btn"
              href="#menu"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#231F1C] bg-[#F2ECE3] hover:bg-[#EAE2D7] border border-[#DDD3C5] transition-colors"
            >
              <span>See Pizza Menu</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              id="showcase-call-btn"
              href={`tel:${RESTAURANT_INFO.phoneTel}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#C25E2E] hover:bg-[#B05325] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
