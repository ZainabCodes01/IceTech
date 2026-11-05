import React, { useState } from 'react';
import { MenuItem } from '../types';
import { MeltingHeading } from './MeltingHeading';
import { CardMeltingRim, CreamyWhiteToBlueDivider } from './MeltingDrips';
import { Plus, Check, Sparkles, Layers, Sliders } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, options?: { cupOrCone?: 'Artisan Waffle Cone' | 'Frosty Tech Cup' | 'Chocolate Dipped Cone'; selectedTopping?: string }) => void;
}

const MENU_DATA: MenuItem[] = [
  {
    id: 'glacial-sundae',
    name: 'The Glacial Avalanche Sundae',
    category: 'sundaes',
    price: 8.50,
    description: 'Triple-tier Madagascar double cream with cascading azure blue vanilla ripple, crowned with organic white chocolate ganache drips.',
    flavorNotes: ['Bourbon Vanilla', 'Azure Sea Salt', 'White Ganache'],
    butterfat: '18% Butterfat',
    chillTemp: '-18°C',
    popular: true,
    accentColor: '#33A5D9',
    dripFlavor: 'Vanilla Cloud Drip',
  },
  {
    id: 'pure-velvet-vanilla',
    name: 'Pure Velvet Madagascar Cream',
    category: 'scoops',
    price: 6.50,
    description: 'Slow-churned over 24 hours to eliminate micro-crystals. Melts into luscious liquid silk on your tongue within 3 seconds.',
    flavorNotes: ['Madagascan Pods', 'Sweet Buttercream', 'Pasture Cream'],
    butterfat: '19% Butterfat',
    chillTemp: '-18°C',
    popular: true,
    accentColor: '#1074B2',
    dripFlavor: 'Pure Cream Drip',
  },
  {
    id: 'blue-cloud-gelato',
    name: 'Glacial Blue Sea Salt Cloud',
    category: 'gelato',
    price: 7.00,
    description: 'Micro-aerated gelato infused with natural butterfly pea flower, Breton fleur de sel, and sweet whole farm cream.',
    flavorNotes: ['Breton Sea Salt', 'Sweet Milk', 'Alpine Sugar'],
    butterfat: '15% Butterfat',
    chillTemp: '-14°C',
    popular: false,
    accentColor: '#33A5D9',
    dripFlavor: 'Azure Glaze',
  },
  {
    id: 'waffle-melt-sandwich',
    name: 'Toasted Butter Waffle Melt',
    category: 'sundaes',
    price: 9.00,
    description: 'Fresh warm cinnamon butter waffle pressed around a thick slab of cold-crafted cream, with heavy melting drops dripping down.',
    flavorNotes: ['Belgian Waffle', 'Warm Butter', 'Cold Cream Core'],
    butterfat: '18% Butterfat',
    chillTemp: '-16°C',
    popular: false,
    accentColor: '#E09F5E',
    dripFlavor: 'Salted Caramel Drip',
  },
  {
    id: 'nitrogen-mint-gelato',
    name: 'Sub-Zero Spearmint Crisp',
    category: 'gelato',
    price: 7.50,
    description: 'Flash-frozen with liquid nitrogen to capture fresh garden spearmint leaves, folded with creamy white cocoa butter drops.',
    flavorNotes: ['Fresh Spearmint', 'White Cocoa Butter', 'Whole Milk'],
    butterfat: '16% Butterfat',
    chillTemp: '-19°C',
    popular: false,
    accentColor: '#0B5F96',
    dripFlavor: 'Frosty White Glaze',
  },
  {
    id: 'velvet-tech-float',
    name: 'Velvet Tech Float & Cream Cloud',
    category: 'shakes',
    price: 8.00,
    description: 'Craft mineral soda effervescence poured over a giant melting sphere of signature cream, creating a creamy foaming crown.',
    flavorNotes: ['Mineral Sparkling', 'Double Cream Cloud', 'Citrus Vanilla'],
    butterfat: '17% Butterfat',
    chillTemp: '-12°C',
    popular: true,
    accentColor: '#1074B2',
    dripFlavor: 'Double Cream Foam',
  },
];

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  // Customizer state
  const [customBase, setCustomBase] = useState<string>('Madagascar Double Cream');
  const [customVessel, setCustomVessel] = useState<'Artisan Waffle Cone' | 'Frosty Tech Cup' | 'Chocolate Dipped Cone'>('Artisan Waffle Cone');
  const [customDrip, setCustomDrip] = useState<string>('Signature White Cream Drip');
  const [customPrice, setCustomPrice] = useState<number>(7.50);
  const [customAdded, setCustomAdded] = useState<boolean>(false);

  const filteredItems = activeCategory === 'all'
    ? MENU_DATA
    : MENU_DATA.filter((item) => item.category === activeCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const handleAddCustom = () => {
    const customItem: MenuItem = {
      id: `custom-${Date.now()}`,
      name: `Custom Scoop: ${customBase}`,
      category: 'scoops',
      price: customPrice,
      description: `Crafted in ${customVessel} with ${customDrip}. Freshly churned for signature melt.`,
      flavorNotes: [customBase, customDrip],
      butterfat: '18% Butterfat',
      chillTemp: '-18°C',
      accentColor: '#33A5D9',
      dripFlavor: customDrip,
    };
    onAddToCart(customItem, { cupOrCone: customVessel, selectedTopping: customDrip });
    setCustomAdded(true);
    setTimeout(() => setCustomAdded(false), 2000);
  };

  return (
    <section id="menu" className="relative w-full bg-[#F8FCFF] pt-16 sm:pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Creative Melting Ice Cream Decoration */}
        <MeltingHeading
          title="OUR MENU"
          badgeText="Cold-Crafted Creations"
          subtitle="Every scoop is churned with zero ice crystals and rich 18% butterfat, creating the signature melting drips seen in our ICE TECH mark."
          theme="light"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Creations' },
            { id: 'sundaes', label: 'Signature Sundaes' },
            { id: 'scoops', label: 'Tech-Churned Scoops' },
            { id: 'gelato', label: 'Nitrogen Gelato' },
            { id: 'shakes', label: 'Creamy Shakes & Floats' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-display text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#1074B2] text-white shadow-md shadow-[#1074B2]/25 scale-105'
                  : 'bg-white text-slate-600 hover:text-[#1074B2] hover:bg-[#EAF7FD] border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isAdded = !!addedItemIds[item.id];
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl border border-[#D5F0FC] cream-card-shadow hover:cream-card-shadow-hover transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Decorative Melting Rim on Top Edge of Card */}
                <div className="w-full bg-gradient-to-r from-[#33A5D9] via-[#1A8CC5] to-[#1074B2] pt-2">
                  <CardMeltingRim color="#FFFFFF" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Category and Proof */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-[#1074B2] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="font-mono text-slate-400">
                      {item.chillTemp} · {item.butterfat}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-xl text-[#0B5F96] group-hover:text-[#1074B2] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Flavor Notes & Drip Characteristic */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Notes:</span>
                    {item.flavorNotes.map((note, idx) => (
                      <React.Fragment key={note}>
                        <span>{note}</span>
                        {idx < item.flavorNotes.length - 1 && <span className="text-slate-300">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Price and Add Button */}
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Price</div>
                      <div className="font-display font-black text-2xl text-[#0B5F96] tabular-nums">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`px-4 sm:px-5 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-sm ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#1074B2] hover:bg-[#0B5F96] text-white hover:shadow-md'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE BUILDER: Custom Melting Scoop Crafter */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-br from-[#EAF7FD] to-[#D5F0FC] rounded-3xl p-6 sm:p-10 border border-[#33A5D9]/30 cream-card-shadow">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/70 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider text-[#1074B2] mb-2">
                <Sliders className="w-3.5 h-3.5" />
                <span>The Ice Tech Scoop Lab</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B5F96]">
                CUSTOMIZE YOUR MELTING CREATION
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Choose your velvet base, artisan vessel, and signature melting drip glaze.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Option 1: Base Cream */}
              <div className="bg-white/80 backdrop-blur p-5 rounded-2xl border border-white">
                <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-2">
                  1. Double-Cream Base
                </label>
                <div className="space-y-2">
                  {[
                    'Madagascar Double Cream',
                    'Glacial Blue Cloud Swirl',
                    'Fleur de Sel Caramel',
                    'Sub-Zero Spearmint',
                  ].map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setCustomBase(flavor)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                        customBase === flavor
                          ? 'bg-[#1074B2] text-white font-bold'
                          : 'bg-white text-slate-700 hover:bg-[#EAF7FD]'
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Vessel */}
              <div className="bg-white/80 backdrop-blur p-5 rounded-2xl border border-white">
                <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-2">
                  2. Vessel Selection
                </label>
                <div className="space-y-2">
                  {[
                    'Artisan Waffle Cone',
                    'Frosty Tech Cup',
                    'Chocolate Dipped Cone',
                  ].map((vessel) => (
                    <button
                      key={vessel}
                      onClick={() => {
                        setCustomVessel(vessel as any);
                        setCustomPrice(vessel === 'Chocolate Dipped Cone' ? 8.50 : 7.50);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                        customVessel === vessel
                          ? 'bg-[#1074B2] text-white font-bold'
                          : 'bg-white text-slate-700 hover:bg-[#EAF7FD]'
                      }`}
                    >
                      {vessel} {vessel === 'Chocolate Dipped Cone' ? '(+$1.00)' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Melting Drip Glaze */}
              <div className="bg-white/80 backdrop-blur p-5 rounded-2xl border border-white">
                <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-2">
                  3. Signature Melt Drip
                </label>
                <div className="space-y-2">
                  {[
                    'Signature White Cream Drip',
                    'Azure Glacial Ripple Drip',
                    'Warm Butter Caramel Drip',
                    'Dark Velvet Cocoa Ganache',
                  ].map((drip) => (
                    <button
                      key={drip}
                      onClick={() => setCustomDrip(drip)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                        customDrip === drip
                          ? 'bg-[#1074B2] text-white font-bold'
                          : 'bg-white text-slate-700 hover:bg-[#EAF7FD]'
                      }`}
                    >
                      {drip}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Scoop Summary Bar */}
            <div className="mt-8 bg-white p-4 sm:p-5 rounded-2xl border border-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <div className="text-xs text-slate-500 font-medium">Your Handcrafted Creation:</div>
                <div className="font-display font-bold text-base text-[#0B5F96]">
                  {customBase} in {customVessel} with {customDrip}
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                <div className="font-display font-black text-2xl text-[#0B5F96] tabular-nums">
                  ${customPrice.toFixed(2)}
                </div>
                <button
                  onClick={handleAddCustom}
                  className={`px-6 py-3 rounded-xl font-display font-bold text-sm transition-all duration-200 cursor-pointer shadow-md flex items-center gap-2 whitespace-nowrap ${
                    customAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#1074B2] hover:bg-[#0B5F96] text-white hover:shadow-lg'
                  }`}
                >
                  {customAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Custom Scoop Added!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Craft & Add to Bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SECTION DIVIDER: Creamy White Melting Ice Cream Drips into Ocean Blue (#1074B2) */}
      <div className="mt-20">
        <CreamyWhiteToBlueDivider />
      </div>
    </section>
  );
};
