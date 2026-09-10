import React from 'react';
import { RESTAURANT_INFO } from '../data/menuData';
import { CheckCircle2, MapPin, Phone, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-[#FFFDF9] rounded-3xl p-3 border border-[#E5DCD0] shadow-xs">
                <div className="rounded-2xl overflow-hidden aspect-4/3">
                  <img
                    src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=1000&q=80"
                    alt="Crust Hut fresh ingredients and oven prep"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-semibold text-[#2D2A26]">
                    Crust Hut — Commercial Market Road, Satellite Town
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EBE0] text-[#8F3E1B] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C25E2E]" />
              <span>About Crust Hut</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-extrabold text-[#231F1C] tracking-tight leading-tight"
            >
              Fresh Flavors for Rawalpindi
            </h2>

            {/* Strict adherence: Simple writing, no fake history or invented claims */}
            <p
              id="about-body-text"
              className="text-base sm:text-lg text-[#554D45] leading-relaxed"
            >
              {RESTAURANT_INFO.about}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-[#FFFDF9] border border-[#E7DED3] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C25E2E] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#231F1C]">Baked Fresh to Order</h4>
                  <p className="text-xs text-[#6F665C]">Dough and toppings prepared for every single order.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFFDF9] border border-[#E7DED3] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C25E2E] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#231F1C]">Wide Variety</h4>
                  <p className="text-xs text-[#6F665C]">Classic pizzas, specialty flavors, pastas, sandwiches & sides.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFFDF9] border border-[#E7DED3] flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C25E2E] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#231F1C]">Prime Location</h4>
                  <p className="text-xs text-[#6F665C]">Commercial Market Road, Satellite Town, Rawalpindi.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFFDF9] border border-[#E7DED3] flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C25E2E] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-[#231F1C]">Quick Takeaway & Delivery</h4>
                  <p className="text-xs text-[#6F665C]">Direct phone ordering at {RESTAURANT_INFO.phone}.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
