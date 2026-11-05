import { useState } from 'react';
import { MenuItem, CartItem } from './types';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { SweetMomentsSection } from './components/SweetMomentsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleAddToCart = (
    item: MenuItem,
    options?: {
      cupOrCone?: 'Artisan Waffle Cone' | 'Frosty Tech Cup' | 'Chocolate Dipped Cone';
      selectedTopping?: string;
    }
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (ci) =>
          ci.menuItem.id === item.id &&
          ci.cupOrCone === (options?.cupOrCone || 'Artisan Waffle Cone') &&
          ci.selectedTopping === options?.selectedTopping
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }

      return [
        ...prev,
        {
          menuItem: item,
          quantity: 1,
          cupOrCone: options?.cupOrCone || 'Artisan Waffle Cone',
          selectedTopping: options?.selectedTopping,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.menuItem.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8FCFF] text-slate-800 flex flex-col selection:bg-[#33A5D9] selection:text-white">
      {/* Hero Section */}
      <HeroSection
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: OUR MENU */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* Section 2: ABOUT ICE TECH */}
        <AboutSection />

        {/* Section 3: SWEET MOMENTS */}
        <SweetMomentsSection />

        {/* Section 4: OUR GALLERY */}
        <GallerySection />

        {/* Section 5: CUSTOMER REVIEWS */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
