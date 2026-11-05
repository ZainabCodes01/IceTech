import React, { useState } from 'react';
import { MeltingHeading } from './MeltingHeading';
import { HeroMeltingDripDivider } from './MeltingDrips';
import { ShieldCheck, Wind, Flame, Snowflake, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [testSeconds, setTestSeconds] = useState<number>(60);

  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-[#1074B2] via-[#0E679E] to-[#0B5F96] text-white pt-16 sm:pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <MeltingHeading
          title="ABOUT ICE TECH"
          badgeText="The Science of Velvet Melt"
          subtitle="Reinventing cold indulgence: How cryogenic technology and artisanal whole dairy created our signature melting identity."
          theme="dark"
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
              NEVER WATER. NEVER ICY. <br className="hidden sm:inline" />
              <span className="text-[#D5F0FC]">ONLY THICK, PURE CREAM.</span>
            </h3>

            <p className="text-base text-[#EAF7FD]/90 leading-relaxed">
              When we designed the original ICE TECH logo, we didn’t draw sharp frozen icicles or thin water droplets. We drew <strong>thick, bulbous, creamy ice cream drips</strong> because that is the essence of genuine indulgence.
            </p>

            <p className="text-base text-[#EAF7FD]/90 leading-relaxed">
              Most commercial ice creams contain 50% pumped air and thin skim milk that instantly turns into a watery puddle. At ICE TECH, our proprietary micro-churning technology spins whole organic double cream at sub-zero temperatures, eliminating ice crystals before they can even nucleate.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Snowflake className="w-4 h-4 text-[#D5F0FC]" />
                  <span>Zero Micro-Crystals</span>
                </div>
                <p className="text-xs text-[#EAF7FD]/80 mt-1">
                  100% smooth velvet mouthfeel on every single lick.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#D5F0FC]" />
                  <span>Pasture Double Cream</span>
                </div>
                <p className="text-xs text-[#EAF7FD]/80 mt-1">
                  18% golden butterfat standard from organic dairy.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Melt Physics Demo */}
          <div className="lg:col-span-6 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/25 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-6">
              <span className="font-display font-bold text-lg text-white flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#D5F0FC]" />
                <span>The 90-Second Melt Benchmark</span>
              </span>
              <span className="text-xs font-mono bg-white/20 px-2 py-1 rounded text-white font-bold">
                Time elapsed: {testSeconds}s
              </span>
            </div>

            {/* Time Slider */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-[#EAF7FD] mb-2 font-medium">
                <span>0s (Just Served)</span>
                <span>45s (Softening)</span>
                <span>90s (Peak Melt)</span>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                step="5"
                value={testSeconds}
                onChange={(e) => setTestSeconds(parseInt(e.target.value, 10))}
                className="w-full accent-[#D5F0FC] h-2 bg-white/25 rounded-lg cursor-pointer"
                aria-label="Adjust Melt Benchmark Time"
              />
            </div>

            {/* Side by Side Comparison Visual */}
            <div className="grid grid-cols-2 gap-4">
              {/* Left: Standard Ice Cream */}
              <div className="p-4 rounded-2xl bg-black/20 border border-white/10 text-center">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  Standard Ice Cream
                </div>
                <div className="h-32 flex flex-col items-center justify-end my-3 relative">
                  {/* Thin Watery Melt */}
                  <svg width="80" height="80" viewBox="0 0 80 80" className="overflow-visible">
                    {/* Collapsing Scoop */}
                    <circle
                      cx="40"
                      cy={40 + testSeconds * 0.15}
                      r={Math.max(16, 26 - testSeconds * 0.12)}
                      fill="#E2E8F0"
                      opacity="0.8"
                    />
                    {/* Watery Thin Runoff */}
                    <path
                      d="M32,56 C30,70 28,75 28,78"
                      stroke="#94A3B8"
                      strokeWidth={1 + testSeconds * 0.02}
                      strokeLinecap="round"
                      strokeDasharray="2 3"
                    />
                    <path
                      d="M48,56 C50,68 52,74 54,78"
                      stroke="#94A3B8"
                      strokeWidth={1 + testSeconds * 0.02}
                      strokeLinecap="round"
                      strokeDasharray="2 3"
                    />
                    {/* Thin puddle */}
                    <ellipse
                      cx="40"
                      cy="78"
                      rx={20 + testSeconds * 0.2}
                      ry={3 + testSeconds * 0.05}
                      fill="#CBD5E1"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <div className="text-[11px] text-slate-300 font-medium">
                  Result: Runny water puddles, icy crystals remaining.
                </div>
              </div>

              {/* Right: ICE TECH Signature Melt */}
              <div className="p-4 rounded-2xl bg-white/20 border border-white/30 text-center relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <span className="text-[9px] font-bold bg-white text-[#1074B2] px-1.5 py-0.5 rounded">
                    ICE TECH
                  </span>
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wide">
                  ICE TECH Cream
                </div>
                <div className="h-32 flex flex-col items-center justify-end my-3 relative">
                  {/* Thick Luscious Viscous Drips */}
                  <svg width="90" height="90" viewBox="0 0 90 90" className="overflow-visible filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.18)]">
                    {/* Stable Velvet Scoop */}
                    <circle cx="45" cy="38" r="28" fill="#FFFFFF" />
                    <ellipse cx="36" cy="24" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.9" />

                    {/* Signature Thick Bulbous Drips hanging down */}
                    <path
                      d={`M25,50 
                          C25,55 28,${60 + testSeconds * 0.22} 32,${60 + testSeconds * 0.22} 
                          C36,${60 + testSeconds * 0.22} 38,55 42,55
                          C44,55 46,${68 + testSeconds * 0.28} 50,${68 + testSeconds * 0.28}
                          C54,${68 + testSeconds * 0.28} 56,54 60,54
                          C62,54 64,${58 + testSeconds * 0.18} 67,${58 + testSeconds * 0.18}
                          C70,${58 + testSeconds * 0.18} 72,50 72,50 Z`}
                      fill="#FFFFFF"
                    />
                    {/* Rounded Drip Endpoints */}
                    <circle cx="50" cy={66 + testSeconds * 0.28} r="3.5" fill="#FFFFFF" />
                    <circle cx="32" cy={58 + testSeconds * 0.22} r="3" fill="#FFFFFF" />

                    {/* Luxurious pooling cushion */}
                    <ellipse
                      cx="45"
                      cy="82"
                      rx={24 + testSeconds * 0.12}
                      ry={4 + testSeconds * 0.04}
                      fill="#FFFFFF"
                      opacity="0.9"
                    />
                  </svg>
                </div>
                <div className="text-[11px] text-[#EAF7FD] font-semibold">
                  Result: Thick, creamy, velvety drips with smooth mouthfeel.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Technology Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          <div className="p-7 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5 text-white">
              <Wind className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-xl text-white mb-2">
              01. Cryo Micro-Aeration
            </h4>
            <p className="text-sm text-[#EAF7FD]/85 leading-relaxed">
              We spin at precise 4,200 RPM in a nitrogen-shielded chamber. This creates velvet-dense ice cream with exactly 20% overrun — zero air hollows or icy pockets.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5 text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-xl text-white mb-2">
              02. Whole Madagascar Dairy
            </h4>
            <p className="text-sm text-[#EAF7FD]/85 leading-relaxed">
              Fresh pasture double cream cold-infused for 48 hours with real Madagascar Bourbon vanilla pods. We never use artificial syrups or synthetic thickeners.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-5 text-white">
              <Snowflake className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-xl text-white mb-2">
              03. -18°C Thermal Lock
            </h4>
            <p className="text-sm text-[#EAF7FD]/85 leading-relaxed">
              Every cone is served at an exact -18°C. The surface slowly warms to -6°C as you lick, releasing deep aromatic butterfat notes with rounded, slow-dripping drops.
            </p>
          </div>
        </div>

      </div>

      {/* DIVIDER: White Creamy Ice Cream Drips transitioning from blue to white */}
      <HeroMeltingDripDivider className="mt-0" />
    </section>
  );
};
