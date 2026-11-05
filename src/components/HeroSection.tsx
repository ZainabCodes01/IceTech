import React from 'react';
import { RealisticIceCreamHero } from './RealisticIceCreamHero';
import { HeroMeltingDripDivider } from './MeltingDrips';
import { ShoppingBag, ArrowDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  cartCount,
  onOpenCart,
  onNavigate,
}) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#33A5D9] via-[#1A8CC5] to-[#1074B2] text-white overflow-hidden pt-3 sm:pt-4">
      {/* Subtle organic ice cream cloud background shapes */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-[#EAF7FD]/10 rounded-full blur-2xl pointer-events-none" />

      {/* TOP NAVIGATION: Strict 3-Zone Contract */}
      <header className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20 border-b border-white/15">
          {/* Zone 1: Single Brand Zone with Original ICE TECH Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group shrink-0 whitespace-nowrap"
          >
            <div className="relative p-1 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-md group-hover:scale-105 transition-transform duration-200">
              <img
                src="/assets/aistudio/image_4d62de6e.png"
                alt="ICE TECH Original Logo"
                className="w-12 h-12 object-contain rounded-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tight text-white drop-shadow-sm flex items-center gap-1">
                ICE TECH<span className="text-[#D5F0FC] text-sm">®</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#EAF7FD]/90">
                Signature Melt Ice Cream
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide text-[#EAF7FD]">
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('menu');
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-2 decoration-white/70"
            >
              Our Menu
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-2 decoration-white/70"
            >
              About Ice Tech
            </a>
            <a
              href="#moments"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('moments');
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-2 decoration-white/70"
            >
              Sweet Moments
            </a>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('gallery');
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-2 decoration-white/70"
            >
              Our Gallery
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('reviews');
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-2 decoration-white/70"
            >
              Customer Reviews
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 bg-white text-[#1074B2] font-display font-bold text-sm rounded-xl hover:bg-[#EAF7FD] hover:shadow-lg transition-all duration-200 cursor-pointer shadow-md group whitespace-nowrap shrink-0"
              aria-label="View Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#1074B2] group-hover:scale-110 transition-transform" />
              <span>Order Bag</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#1074B2] text-white text-xs flex items-center justify-center font-bold font-mono">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* HERO MAIN BODY */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold White Headline & Brand Story */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tag / Micro-kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-xs font-bold tracking-wider uppercase text-white mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D5F0FC]" />
              <span>The Signature Melting Ice Cream Identity</span>
            </div>

            {/* Bold White Headline with balanced wrapping */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-white drop-shadow-md text-balance">
              LUSCIOUS, THICK & <span className="underline decoration-[#D5F0FC] decoration-wavy decoration-3 underline-offset-8">CREAMY MELT</span> IN EVERY LICK.
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#EAF7FD] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium drop-shadow-sm">
              Inspired by the iconic ICE TECH logo, we micro-churn organic double cream at sub-zero temperatures. Not frozen ice or watery icicles — just rich, velvet ice cream that drips with unforgettable smoothness.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate('menu')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#1074B2] font-display font-extrabold text-base rounded-2xl hover:bg-[#EAF7FD] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Explore Signature Menu</span>
                <ArrowDown className="w-4 h-4 text-[#1074B2]" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto px-7 py-4 bg-white/15 backdrop-blur-md text-white border border-white/40 font-display font-bold text-base rounded-2xl hover:bg-white/25 transition-all duration-200 cursor-pointer shadow-sm whitespace-nowrap"
              >
                The Melting Story
              </button>
            </div>

            {/* Brand Proof Strip */}
            <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-4 sm:gap-6 text-center lg:text-left">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white">18%</div>
                <div className="text-xs font-semibold text-[#D5F0FC] uppercase tracking-wider mt-0.5">Butterfat Cream</div>
              </div>
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white">-18°C</div>
                <div className="text-xs font-semibold text-[#D5F0FC] uppercase tracking-wider mt-0.5">Precision Churn</div>
              </div>
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white">0%</div>
                <div className="text-xs font-semibold text-[#D5F0FC] uppercase tracking-wider mt-0.5">Water / Crystals</div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Realistic Ice Cream Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <RealisticIceCreamHero />
          </div>

        </div>
      </div>

      {/* BOTTOM EDGE: Thick White Melted Ice Cream Dripping Downward over the Blue Background */}
      <HeroMeltingDripDivider className="mt-4" />
    </section>
  );
};
