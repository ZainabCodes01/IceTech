import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { MeltingHeading } from './MeltingHeading';
import { CardMeltingRim, CreamyWhiteToBlueDivider } from './MeltingDrips';
import { Eye, X, Sparkles, Award } from 'lucide-react';

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Glacial Avalanche Crown',
    category: 'Sundaes',
    description: 'Triple-tier Madagascar double cream with cascading azure blue vanilla ripple, crowned with organic white chocolate ganache drips.',
    highlight: 'Signature Logo Drips',
    gradient: 'from-[#33A5D9] via-[#1A8CC5] to-[#1074B2]',
  },
  {
    id: 'gal-2',
    title: 'Zero-Crystal Micro-Churn Velvet',
    category: 'Craft Lab',
    description: 'Under 5-micron fat globule dispersion ensures an unbroken velvet texture that melts into liquid silk.',
    highlight: 'Cryogenic Precision',
    gradient: 'from-[#1074B2] via-[#0E679E] to-[#0B5F96]',
  },
  {
    id: 'gal-3',
    title: 'Handcrafted Cinnamon Butter Waffle',
    category: 'Cones',
    description: 'Freshly rolled at 190°C using Belgian clarified butter and brown cane sugar to cradle thick melting cream.',
    highlight: 'Caramelized Crunch',
    gradient: 'from-[#E09F5E] via-[#BC702A] to-[#8A4A12]',
  },
  {
    id: 'gal-4',
    title: 'Sub-Zero Spearmint Crisp Cone',
    category: 'Cones',
    description: 'Flash-frozen fresh spearmint leaves folded into sweet whole cream with white cocoa drops.',
    highlight: 'Garden Spearmint',
    gradient: 'from-[#0B5F96] via-[#1074B2] to-[#33A5D9]',
  },
  {
    id: 'gal-5',
    title: 'Liquid Nitrogen Vapor Basin',
    category: 'Craft Lab',
    description: 'At -196°C, moisture flash-freezes without expanding into coarse ice crystals, preserving pure dairy fat.',
    highlight: 'Cryo-Instant Churn',
    gradient: 'from-[#89D9FF] via-[#33A5D9] to-[#1074B2]',
  },
  {
    id: 'gal-6',
    title: 'Azure Ripple Velvet Shake',
    category: 'Sundaes',
    description: 'Craft soda effervescence poured over a giant melting sphere of triple cream, forming a cloud foam top.',
    highlight: 'Velvet Foaming Top',
    gradient: 'from-[#1A8CC5] via-[#1074B2] to-[#0B2565]',
  },
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative w-full bg-[#EAF7FD] pt-16 sm:pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with creative melting decoration */}
        <MeltingHeading
          title="OUR GALLERY"
          badgeText="Visual Feast"
          subtitle="Explore the art of cold craft: from cascading signature drips to crisp golden waffle cones and nitrogen vapor."
          theme="light"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['All', 'Sundaes', 'Cones', 'Craft Lab'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-xl font-display text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-[#1074B2] text-white shadow-md shadow-[#1074B2]/20 scale-105'
                  : 'bg-white text-slate-600 hover:text-[#1074B2] hover:bg-white border border-[#D5F0FC]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#D5F0FC] cream-card-shadow hover:cream-card-shadow-hover transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Visual Presentation Card with melting ice cream art & dripping rim */}
              <div className={`relative h-56 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between text-white overflow-hidden`}>
                {/* Background decorative swirl */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                {/* Top Badge */}
                <div className="flex items-center justify-between text-xs font-semibold z-10">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-[11px] font-bold">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#EAF7FD] text-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    {item.highlight}
                  </span>
                </div>

                {/* Center SVG Ice Cream Motif */}
                <div className="flex items-center justify-center my-auto z-10">
                  <svg width="80" height="80" viewBox="0 0 100 100" className="group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]">
                    {/* Scoop with heavy melting drips */}
                    <circle cx="50" cy="45" r="32" fill="#FFFFFF" />
                    <ellipse cx="40" cy="30" rx="9" ry="4" fill="#FFFFFF" opacity="0.9" />
                    <path
                      d="M25,55 
                         C26,62 30,76 35,76 C40,76 43,58 50,58 
                         C55,58 58,84 65,84 C72,84 75,56 75,56 Z"
                      fill="#FFFFFF"
                    />
                    <circle cx="35" cy="74" r="3.5" fill="#EAF7FD" />
                    <circle cx="65" cy="82" r="4" fill="#EAF7FD" />
                    {/* Waffle cone tip */}
                    <path d="M38,68 L50,94 L62,68 Z" fill="#E09F5E" opacity="0.85" />
                  </svg>
                </div>

                {/* Quick inspect hover indicator */}
                <div className="flex items-center justify-between z-10 pt-2 border-t border-white/20 text-xs">
                  <span className="font-semibold text-white/90">Inspect Creation</span>
                  <Eye className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Melting Drip Rim under image frame */}
              <CardMeltingRim color="#FFFFFF" />

              {/* Card Title & Snippet */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-extrabold text-lg text-[#0B5F96] group-hover:text-[#1074B2] transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full border border-white shadow-2xl overflow-hidden relative">
            {/* Modal Header Visual */}
            <div className={`h-64 bg-gradient-to-br ${selectedItem.gradient} p-8 text-white flex flex-col justify-between relative`}>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-white/25 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <span className="text-xs text-[#EAF7FD] font-semibold">
                  ICE TECH Archive #0{selectedItem.id.slice(-1)}
                </span>
              </div>

              <div className="flex items-center justify-center py-4">
                <svg width="110" height="110" viewBox="0 0 100 100" className="filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                  <circle cx="50" cy="42" r="34" fill="#FFFFFF" />
                  <path
                    d="M20,50 
                       C22,60 26,78 32,78 C38,78 42,54 50,54 
                       C56,54 60,86 68,86 C76,86 80,52 80,52 Z"
                    fill="#FFFFFF"
                  />
                  <ellipse cx="40" cy="28" rx="10" ry="4.5" fill="#FFFFFF" opacity="0.95" />
                  <circle cx="32" cy="76" r="4" fill="#EAF7FD" />
                  <circle cx="68" cy="84" r="4.5" fill="#EAF7FD" />
                </svg>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl text-white">
                  {selectedItem.title}
                </h3>
              </div>
            </div>

            {/* Melting Rim below modal image */}
            <CardMeltingRim color="#FFFFFF" />

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1074B2] uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>Craft Notes & Melt Characteristics</span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-[#EAF7FD] border border-[#D5F0FC] grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-bold text-[#0B5F96] block">Serving Temperature:</span>
                  <span className="text-slate-600 font-mono">-18°C Firm Velvet</span>
                </div>
                <div>
                  <span className="font-bold text-[#0B5F96] block">Signature Melt Time:</span>
                  <span className="text-slate-600">Begins slowly at 45 seconds</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2.5 bg-[#1074B2] hover:bg-[#0B5F96] text-white font-display font-bold text-sm rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Close View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DIVIDER: Transitioning to CUSTOMER REVIEWS */}
      <CreamyWhiteToBlueDivider className="mt-12" />
    </section>
  );
};
