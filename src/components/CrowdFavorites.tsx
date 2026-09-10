import React from 'react';
import { Plus, Check, Star } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';

interface CrowdFavoritesProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: Set<string>;
}

export const CrowdFavorites: React.FC<CrowdFavoritesProps> = ({
  onAddToCart,
  cartItemIds,
}) => {
  // Grab the 6 requested crowd favorites specifically
  const favorites = MENU_ITEMS.filter((item) =>
    [
      'pop-crown-crust',
      'pop-crunchy-pasta',
      'pop-chicken-fajita',
      'pop-loaded-fries',
      'pop-fettuccine-alfredo',
      'pop-value-roll-platter',
    ].includes(item.id)
  );

  return (
    <section id="favorites" className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#EDE5DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C25E2E] tracking-wider uppercase mb-2">
              <Star className="w-3.5 h-3.5 fill-[#C25E2E]" />
              <span>Customer Top Selections</span>
            </div>
            <h2
              id="favorites-heading"
              className="text-3xl sm:text-4xl font-extrabold text-[#231F1C] tracking-tight"
            >
              Crowd Favorites
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6C635A] max-w-md">
            Our most ordered recipes in Satellite Town, loved for rich toppings, golden crusts, and bold flavor.
          </p>
        </div>

        {/* 6 Compact Food Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {favorites.map((item) => {
            const isAdded = cartItemIds.has(item.id);
            return (
              <div
                key={item.id}
                id={`favorite-card-${item.id}`}
                className="group bg-[#FFFDF9] rounded-2xl p-4 border border-[#E5DCD0] shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                {/* Image and Badges */}
                <div>
                  <div className="relative rounded-xl overflow-hidden aspect-16/10 mb-3.5 bg-[#F2EDE5]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
                      loading="lazy"
                    />
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#FFFDF9]/95 text-[#913E1B] border border-[#E8DACB] shadow-2xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Price */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-bold text-lg text-[#24201D] leading-snug group-hover:text-[#C25E2E] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-extrabold text-base text-[#C25E2E] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6B635A] leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-[#F2EDE4] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#8F8477]">
                    Freshly Prepared
                  </span>
                  <button
                    id={`btn-add-favorite-${item.id}`}
                    onClick={() => onAddToCart(item)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      isAdded
                        ? 'bg-[#EBF5EE] text-[#1E7743] border border-[#C6E4D0]'
                        : 'bg-[#F4ECE2] hover:bg-[#C25E2E] hover:text-white text-[#833816] border border-[#E4D7C7]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
