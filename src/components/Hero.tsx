import React from 'react';
import { Phone, ArrowRight, Flame, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeroProps {
  onOrderNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-radial-[at_top_right] from-[#FAF3EA] via-[#FAF8F5] to-[#F5EFE6] pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-[#EDE4D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Pill Badge */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EBE0] border border-[#E3D7C8] text-[#913E1B] text-xs font-semibold"
            >
              <Flame className="w-4 h-4 text-[#C25E2E]" />
              <span>Satellite Town’s Favorite Pizza & Fast Food</span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#231F1C] tracking-tight leading-[1.08]"
            >
              Fresh Pizza. <br className="hidden sm:inline" />
              <span className="text-[#C25E2E]">Big Cravings.</span>
            </h1>

            {/* Supporting Text */}
            <p
              id="hero-supporting-text"
              className="text-lg sm:text-xl text-[#5C554E] max-w-xl font-normal leading-relaxed"
            >
              {RESTAURANT_INFO.subheading} Handcrafted dough, premium mozzarella, and generous Pakistani-style spiced toppings baked fresh to order in Rawalpindi.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* Order Now (triggers order / quick call) */}
              <button
                id="hero-order-now-btn"
                onClick={onOrderNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#C25E2E] hover:bg-[#AC5024] shadow-sm transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* View Menu */}
              <a
                id="hero-view-menu-btn"
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#2D2A26] bg-[#FFFFFF] hover:bg-[#F7F2EB] border border-[#DDD3C4] transition-all hover:translate-y-[-1px] shadow-2xs"
              >
                <span>View Menu</span>
              </a>

              {/* Clickable Phone Button */}
              <a
                id="hero-call-btn"
                href={`tel:${RESTAURANT_INFO.phoneTel}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-[#8F3E1A] bg-[#F8EFE5] hover:bg-[#EFE3D4] border border-[#E8DAC8] transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-[#C25E2E]" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            {/* Key Micro Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAE1D4] w-full text-xs text-[#6C635A]">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#EFE7DC] text-[#C25E2E]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[#2D2A26]">12 PM – 2 AM</span>
                  <span>Daily Takeaway & Delivery</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#EFE7DC] text-[#C25E2E]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[#2D2A26]">Commercial Mkt</span>
                  <span>Satellite Town, RWP</span>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#EFE7DC] text-[#C25E2E]">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-[#2D2A26]">Crown Crust</span>
                  <span>House Specialty Recipe</span>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Soft decorative background glow/backdrop */}
              <div className="absolute inset-0 bg-[#EFE4D4] rounded-3xl -rotate-2 transform scale-102"></div>
              
              {/* Main Food Card Container */}
              <div className="relative bg-[#FFFDF9] rounded-3xl p-3.5 sm:p-4 border border-[#E5DBCB] shadow-sm overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-5/4">
                  <img
                    id="hero-food-image"
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85"
                    alt="Crust Hut fresh baked signature pizza"
                    className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Subtle Light Badge */}
                  <div className="absolute top-3 left-3 bg-[#FFFDF9]/95 backdrop-blur-xs px-3 py-1.5 rounded-full text-xs font-bold text-[#2D2A26] border border-[#E5DDD2] shadow-2xs">
                    ⭐ Crown Crust • Rs 1450
                  </div>
                </div>

                {/* Floating summary label */}
                <div className="mt-3.5 px-2 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-base text-[#2D2A26]">Freshly Baked Crusts</h3>
                    <p className="text-xs text-[#7A7166]">Pizza • Sandwiches • Pasta • Wings</p>
                  </div>
                  <a
                    href="#menu"
                    className="text-xs font-bold text-[#C25E2E] hover:underline flex items-center gap-1"
                  >
                    <span>Browse Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
