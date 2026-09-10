import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, UtensilsCrossed, Phone } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/menuData';
import { MenuCategory, MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: Set<string>;
}

const CATEGORIES: MenuCategory[] = [
  'All',
  'Popular',
  'Starters',
  'Classic Pizza',
  'Special Pizza',
  'Sandwiches',
  'Pasta',
  'Fried Items',
  'Fries & Sides',
  'Beverages',
];

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItemIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All'
          ? true
          : activeCategory === 'Popular'
          ? item.isPopular
          : item.category === activeCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Simple Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EBE0] text-[#913E1B] text-xs font-bold uppercase tracking-wider mb-2.5">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C25E2E]" />
            <span>Complete Food Menu</span>
          </div>
          <h2
            id="menu-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#231F1C] tracking-tight mb-3"
          >
            Explore Crust Hut Menu
          </h2>
          <p className="text-[#645C53] text-sm sm:text-base">
            From our iconic Crown Crust pizzas to creamy pastas, crispy wings, and loaded fries.
          </p>
        </div>

        {/* Filter Controls: Search & Category Pills */}
        <div className="space-y-4 mb-10">
          {/* Quick Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8F8477]" />
            <input
              id="menu-search-input"
              type="text"
              placeholder="Search pizza, pasta, wings, fries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FFFDF9] border border-[#DDD3C6] focus:border-[#C25E2E] focus:outline-hidden text-sm text-[#2D2A26] placeholder-[#9E9385] shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8F8477] hover:text-[#2D2A26] px-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs / Filters */}
          <div
            id="menu-category-tabs"
            className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar justify-start md:justify-center scroll-smooth px-1"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  id={`tab-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#C25E2E] text-white shadow-2xs'
                      : 'bg-[#F2ECE3] text-[#554D45] hover:bg-[#EAE1D4] hover:text-[#231F1C]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Count notification */}
        <div className="flex items-center justify-between text-xs text-[#7A7065] mb-6 pb-2 border-b border-[#EDE5DA]">
          <span>
            Showing <strong className="text-[#2D2A26]">{filteredItems.length}</strong> items in {activeCategory}
          </span>
          <a
            href={`tel:${RESTAURANT_INFO.phoneTel}`}
            className="text-[#C25E2E] hover:underline font-semibold flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call to Order: {RESTAURANT_INFO.phone}</span>
          </a>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#FFFDF9] rounded-2xl border border-[#E7DFD4] p-8">
            <p className="text-base font-semibold text-[#2D2A26] mb-1">No dishes match your search</p>
            <p className="text-xs text-[#786E63] mb-4">Try searching for &quot;fajita&quot;, &quot;wings&quot;, or click All categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="px-4 py-2 text-xs font-bold text-white bg-[#C25E2E] rounded-lg cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Menu Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => {
            const isAdded = cartItemIds.has(item.id);
            return (
              <div
                key={item.id}
                id={`menu-item-${item.id}`}
                className="group bg-[#FFFDF9] rounded-2xl p-4 border border-[#E7DED2] shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Food Image with medium/compact ratio */}
                  <div className="relative rounded-xl overflow-hidden aspect-16/10 mb-3.5 bg-[#F4EFE7]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#FFFDF9]/95 text-[#913E1B] border border-[#E6DACB] shadow-2xs">
                        {item.badge}
                      </span>
                    )}

                    {/* Category pill */}
                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#2D2A26]/75 text-white backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Title and Price */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-bold text-base sm:text-lg text-[#231F1C] leading-snug group-hover:text-[#C25E2E] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-extrabold text-sm sm:text-base text-[#C25E2E] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  {/* Short Simple Description */}
                  <p className="text-xs sm:text-sm text-[#6A6258] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-[#F2ECE3] flex items-center justify-between">
                  <span className="text-[11px] text-[#8C8174]">
                    Made to order
                  </span>
                  <button
                    id={`btn-add-${item.id}`}
                    onClick={() => onAddToCart(item)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      isAdded
                        ? 'bg-[#EBF5EE] text-[#1E7743] border border-[#C6E4D0]'
                        : 'bg-[#F4EDE3] hover:bg-[#C25E2E] hover:text-white text-[#833816] border border-[#E3D6C5]'
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
                        <span>Add</span>
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
