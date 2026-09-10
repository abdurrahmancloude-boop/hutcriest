import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CrowdFavorites } from './components/CrowdFavorites';
import { MenuSection } from './components/MenuSection';
import { PizzaShowcase } from './components/PizzaShowcase';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { MenuItem, OrderItem } from './types';
import { RESTAURANT_INFO } from './data/menuData';
import { Phone, ShoppingBag, Check } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartItemIds = new Set(cart.map((item) => item.item.id));

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((o) => o.item.id === item.id);
      if (existing) {
        return prev.map((o) =>
          o.item.id === item.id ? { ...o, quantity: o.quantity + 1 } : o
        );
      }
      return [...prev, { item, quantity: 1 }];
    });

    // Show lightweight feedback badge
    setAddedNotice(item.name);
    setTimeout(() => {
      setAddedNotice((current) => (current === item.name ? null : current));
    }, 2200);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((o) => {
          if (o.item.id === id) {
            const newQty = o.quantity + delta;
            return newQty > 0 ? { ...o, quantity: newQty } : null;
          }
          return o;
        })
        .filter((o): o is OrderItem => o !== null)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((o) => o.item.id !== id));
  };

  const handleClearOrder = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] flex flex-col selection:bg-[#EBDCCF] selection:text-[#913E1B] overflow-x-hidden">
      {/* Sticky Top Navbar */}
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOrderNow={() => setIsCartOpen(true)} />

        {/* Crowd Favorites Section */}
        <CrowdFavorites
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* Full Menu with Categories & Filters */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* Specialized Pizza Showcase */}
        <PizzaShowcase />

        {/* About Crust Hut */}
        <AboutSection />

        {/* Compact Food Gallery */}
        <GallerySection />

        {/* Social / Instagram Section */}
        <InstagramSection />

        {/* Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
      />

      {/* Floating Bottom Quick Action Bar for Mobile Viewports */}
      <div className="fixed bottom-3 inset-x-3 z-30 sm:hidden flex items-center gap-2">
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${RESTAURANT_INFO.phoneTel}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-[#C25E2E] shadow-lg text-xs"
        >
          <Phone className="w-4 h-4" />
          <span>Call to Order</span>
        </a>

        <button
          id="mobile-sticky-bag-btn"
          onClick={() => setIsCartOpen(true)}
          className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-[#231F1C] bg-[#FFFDF9] border border-[#DDD1C0] shadow-lg text-xs cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 text-[#C25E2E]" />
          <span>Order ({cartCount})</span>
        </button>
      </div>

      {/* Toast notification when adding items */}
      {addedNotice && (
        <div
          id="toast-notification"
          className="fixed bottom-18 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#24201D] text-white px-4 py-2.5 rounded-xl shadow-xl border border-[#48423B] flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-bottom-3 duration-150"
        >
          <div className="w-4 h-4 rounded-full bg-[#3FB950] flex items-center justify-center text-white">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </div>
          <span>Added &quot;{addedNotice}&quot; to order</span>
        </div>
      )}
    </div>
  );
}
