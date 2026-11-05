import React, { useState } from 'react';
import { Sparkles, Thermometer, Droplet, RefreshCw } from 'lucide-react';

interface RealisticIceCreamProps {
  onExploreMenu?: () => void;
}

export const RealisticIceCreamHero: React.FC<RealisticIceCreamProps> = () => {
  const [temperature, setTemperature] = useState<number>(-12);
  const [isLicking, setIsLicking] = useState<boolean>(false);

  // Calculate drip factor based on temperature: colder (-18) = firmer, warmer (-4) = maximum luscious melt
  const meltProgress = Math.min(1, Math.max(0, (temperature - (-18)) / 14));
  const dripScaleY = 1 + meltProgress * 0.28;

  const handleSimulateLick = () => {
    setIsLicking(true);
    setTimeout(() => setIsLicking(false), 900);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center select-none">
      {/* Ambient Radial Glow behind the ice cream */}
      <div className="absolute -inset-10 bg-radial from-[#EAF7FD]/30 via-[#33A5D9]/20 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Floating Ice Cream Scoop 1: Azure Glacial Swirl (Top Left) */}
      <div className="absolute -top-6 -left-6 sm:-left-10 z-30 animate-slow-float pointer-events-none">
        <div className="relative p-2.5 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg">
          <svg width="64" height="64" viewBox="0 0 80 80" className="overflow-visible filter drop-shadow-[0_6px_10px_rgba(11,95,150,0.25)]">
            {/* Scoop Body */}
            <defs>
              <radialGradient id="scoopBlueGrad" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="35%" stopColor="#D5F0FC" />
                <stop offset="70%" stopColor="#33A5D9" />
                <stop offset="100%" stopColor="#1074B2" />
              </radialGradient>
            </defs>
            <circle cx="40" cy="40" r="32" fill="url(#scoopBlueGrad)" />
            {/* Creamy swirls */}
            <path d="M22,32 C30,22 45,20 54,28 C60,34 50,48 38,46 C28,44 24,56 36,60" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
            <ellipse cx="32" cy="26" rx="8" ry="4" fill="#FFFFFF" opacity="0.85" />
            {/* Melting drip */}
            <path d="M42,66 C40,74 46,78 48,78 C50,78 54,74 52,66 Z" fill="#33A5D9" />
          </svg>
          <div className="text-[10px] font-bold text-white text-center mt-1 tracking-wide uppercase drop-shadow">
            Azure Swirl
          </div>
        </div>
      </div>

      {/* Floating Ice Cream Scoop 2: Pure Double-Cream Vanilla (Top Right) */}
      <div className="absolute top-12 -right-4 sm:-right-8 z-30 animate-slow-float-delayed pointer-events-none">
        <div className="relative p-2.5 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg">
          <svg width="60" height="60" viewBox="0 0 80 80" className="overflow-visible filter drop-shadow-[0_6px_10px_rgba(11,95,150,0.2)]">
            <defs>
              <radialGradient id="scoopVanillaGrad" cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#FFFDF6" />
                <stop offset="85%" stopColor="#EAF7FD" />
                <stop offset="100%" stopColor="#D5F0FC" />
              </radialGradient>
            </defs>
            <circle cx="40" cy="40" r="32" fill="url(#scoopVanillaGrad)" />
            {/* Soft creamy texture folds */}
            <path d="M24,42 C30,36 44,34 56,40" stroke="#E2F1F8" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M20,52 C32,48 46,52 58,50" stroke="#E2F1F8" strokeWidth="3" strokeLinecap="round" fill="none" />
            <ellipse cx="34" cy="24" rx="7" ry="3.5" fill="#FFFFFF" opacity="0.9" />
            {/* Hanging creamy drop */}
            <path d="M36,66 C34,74 38,79 40,79 C42,79 46,74 44,66 Z" fill="#FFFFFF" />
          </svg>
          <div className="text-[10px] font-bold text-white text-center mt-1 tracking-wide uppercase drop-shadow">
            18% Double Cream
          </div>
        </div>
      </div>

      {/* CENTERPIECE: Large Realistic Ice Cream Masterpiece */}
      <div className="relative w-full aspect-[4/4.5] max-w-[400px] flex items-center justify-center">
        <svg
          viewBox="0 0 460 520"
          className="w-full h-full overflow-visible filter drop-shadow-[0_20px_35px_rgba(11,95,150,0.35)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Waffle Cone Gradient */}
            <linearGradient id="waffleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D0A1" />
              <stop offset="40%" stopColor="#E09F5E" />
              <stop offset="80%" stopColor="#BC702A" />
              <stop offset="100%" stopColor="#8A4A12" />
            </linearGradient>

            {/* Waffle Grid Pattern */}
            <pattern id="wafflePattern" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="18" height="18" fill="none" stroke="#7A3D0B" strokeWidth="1.2" opacity="0.45" />
              <rect x="2" y="2" width="14" height="14" fill="#FCEAD2" opacity="0.3" />
            </pattern>

            {/* Velvet Vanilla Cream Gradient */}
            <radialGradient id="vanillaVelvet" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#FFFDF7" />
              <stop offset="80%" stopColor="#EAF7FD" />
              <stop offset="100%" stopColor="#D5F0FC" />
            </radialGradient>

            {/* Ocean Blue Ripple Swirl */}
            <linearGradient id="blueRipple" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#89D9FF" />
              <stop offset="35%" stopColor="#33A5D9" />
              <stop offset="75%" stopColor="#1074B2" />
              <stop offset="100%" stopColor="#0B5F96" />
            </linearGradient>

            {/* Cream Gloss Highlighting */}
            <linearGradient id="creamGlossSheen" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Soft Cream Ambient Shadow */}
            <radialGradient id="ambientCreamShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0B5F96" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0B5F96" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Base Ground Shadow */}
          <ellipse cx="230" cy="495" rx="140" ry="20" fill="url(#ambientCreamShadow)" />

          {/* Handcrafted Waffle Cone */}
          <g transform="translate(0, 0)">
            {/* Cone Body Triangle with rounded tip */}
            <path
              d="M140,280 L230,490 Q232,496 236,490 L320,280 Q230,305 140,280 Z"
              fill="url(#waffleGrad)"
            />
            {/* Waffle Textured Crosshatch Overlay */}
            <path
              d="M140,280 L230,490 Q232,496 236,490 L320,280 Q230,305 140,280 Z"
              fill="url(#wafflePattern)"
            />
            {/* Waffle Rim Highlight & Shadow */}
            <path
              d="M138,278 Q230,305 322,278"
              stroke="#FCEAD2"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            <path
              d="M142,284 Q230,310 318,284"
              stroke="#6E3505"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </g>

          {/* LOWER SCOOP: Glacial Blue & Vanilla Swirl */}
          <g transform="translate(0, 10)">
            {/* Base mass of lower scoop */}
            <path
              d="M125,270 
                 C105,230 135,170 190,165 
                 C240,160 300,175 325,225 
                 C345,260 330,285 315,290 
                 C290,295 240,290 220,295 
                 C180,295 140,290 125,270 Z"
              fill="url(#vanillaVelvet)"
            />

            {/* Ocean Blue Ripple Ribbon flowing through the cream */}
            <path
              d="M140,240 
                 C170,215 220,210 260,230 
                 C295,245 320,235 328,255 
                 C315,270 275,260 240,250 
                 C195,240 160,265 140,240 Z"
              fill="url(#blueRipple)"
              opacity="0.92"
            />
            {/* Ribbon Gloss */}
            <path
              d="M155,232 C185,218 225,218 255,232"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
          </g>

          {/* UPPER SCOOP & SOFT-SERVE CREST: Sculpted Vanilla Soft-Serve Cloud */}
          <g id="creamHead" className={isLicking ? 'scale-[1.03] transition-transform duration-300' : ''}>
            {/* Soft-serve Tier 1 (Mid Cloud) */}
            <path
              d="M135,190 
                 C120,150 150,110 205,105 
                 C265,100 310,135 320,180 
                 C325,200 305,220 280,215 
                 C240,210 215,220 180,215 
                 C150,210 138,205 135,190 Z"
              fill="url(#vanillaVelvet)"
            />

            {/* Soft-serve Tier 2 (Top Peak & Swirl) */}
            <path
              d="M175,120 
                 C170,75 210,40 245,45 
                 C270,50 285,85 275,120 
                 C265,135 240,140 215,135 
                 C190,130 178,135 175,120 Z"
              fill="url(#vanillaVelvet)"
            />

            {/* The Signature Artisanal Curl / Peak at the very summit */}
            <path
              d="M235,48 
                 C230,30 246,18 258,22 
                 C268,26 262,42 248,50 
                 C242,54 236,52 235,48 Z"
              fill="#FFFFFF"
            />
            <path
              d="M248,22 C255,28 252,38 244,44"
              stroke="#33A5D9"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.75"
            />

            {/* Cream Folds & Sculpted Organic Ridges */}
            <path
              d="M165,150 C195,130 245,135 275,155"
              stroke="#D5F0FC"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M150,185 C185,165 240,170 290,190"
              stroke="#D5F0FC"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Glossy High-Sheen Specular Highlights (Cream Sheen) */}
            <ellipse cx="230" cy="75" rx="18" ry="7" fill="#FFFFFF" opacity="0.95" />
            <ellipse cx="185" cy="130" rx="14" ry="5.5" fill="#FFFFFF" opacity="0.95" />
            <ellipse cx="270" cy="140" rx="12" ry="5" fill="#FFFFFF" opacity="0.9" />
            <ellipse cx="160" cy="180" rx="10" ry="4" fill="#FFFFFF" opacity="0.85" />
          </g>

          {/* THE SIGNATURE THICK MELTING ICE CREAM DRIPS (Inspired by the ICE TECH logo) */}
          <g
            id="meltingDripsGroup"
            style={{
              transform: `scaleY(${dripScaleY})`,
              transformOrigin: '230px 270px',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Thick Melting Cream Mantle overflowing down the cone */}
            <path
              d="M136,275 
                 C138,285 145,310 152,310 C158,310 162,282 170,282
                 C178,282 182,345 190,345 C198,345 204,284 214,284
                 C222,284 226,375 236,375 C246,375 252,286 262,286
                 C270,286 276,335 284,335 C292,335 296,280 304,280
                 C312,280 316,305 322,305 C326,305 328,280 326,275
                 Q230,300 136,275 Z"
              fill="#FFFFFF"
              filter="drop-shadow(0 6px 8px rgba(11,95,150,0.22))"
            />

            {/* Glossy Specular highlights at the bulbous bottom of each drip */}
            {/* Central Deep Drip (x=236, y=375) */}
            <circle cx="236" cy="368" r="5" fill="#FFFFFF" />
            <circle cx="236" cy="368" r="3.2" fill="#EAF7FD" opacity="0.8" />

            {/* Left Long Drip (x=190, y=345) */}
            <circle cx="190" cy="340" r="4.2" fill="#FFFFFF" />
            <circle cx="190" cy="340" r="2.8" fill="#EAF7FD" opacity="0.8" />

            {/* Right Medium Drip (x=284, y=335) */}
            <circle cx="284" cy="330" r="4" fill="#FFFFFF" />
            <circle cx="284" cy="330" r="2.6" fill="#EAF7FD" opacity="0.8" />

            {/* Outer Drips */}
            <circle cx="152" cy="306" r="3" fill="#FFFFFF" />
            <circle cx="322" cy="301" r="3" fill="#FFFFFF" />

            {/* Falling Cream Droplet below the center drip */}
            <g transform={`translate(0, ${meltProgress * 22})`}>
              <path
                d="M236,392 C233,396 231,402 231,406 C231,411 233,414 236,414 C239,414 241,411 241,406 C241,402 239,396 236,392 Z"
                fill="#FFFFFF"
                filter="drop-shadow(0 3px 4px rgba(11,95,150,0.2))"
              />
              <circle cx="235" cy="408" r="1.5" fill="#D5F0FC" />
            </g>

            {/* Falling Droplet below left drip */}
            <g transform={`translate(0, ${meltProgress * 16})`}>
              <path
                d="M190,360 C188,363 186,367 186,370 C186,373 188,375 190,375 C192,375 194,373 194,370 C194,367 192,363 190,360 Z"
                fill="#FFFFFF"
                opacity={meltProgress > 0.3 ? 0.95 : 0}
              />
            </g>
          </g>

          {/* Cryogenic Shimmer Sprinkles & Ice Pearls */}
          <circle cx="160" cy="110" r="2.5" fill="#33A5D9" />
          <circle cx="285" cy="100" r="2.5" fill="#33A5D9" />
          <circle cx="195" cy="65" r="2" fill="#33A5D9" />
          <circle cx="220" cy="175" r="2" fill="#1074B2" />
          <circle cx="300" cy="170" r="2.2" fill="#33A5D9" />
          <circle cx="145" cy="225" r="2.2" fill="#33A5D9" />
        </svg>
      </div>

      {/* Interactive Micro-Simulator: Precision Temperature & Melting Viscosity Controller */}
      <div className="w-full max-w-sm mt-2 p-3 sm:p-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg text-white">
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <span className="flex items-center gap-1.5 text-[#EAF7FD]">
            <Thermometer className="w-4 h-4 text-white" />
            Thermal State:
          </span>
          <span className="font-mono text-sm px-2 py-0.5 bg-white/20 rounded-md font-bold text-white">
            {temperature > 0 ? `+${temperature}` : temperature}°C
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-white/80 font-mono">-18°C Firm</span>
          <input
            type="range"
            min="-18"
            max="-4"
            step="1"
            value={temperature}
            onChange={(e) => setTemperature(parseInt(e.target.value, 10))}
            className="w-full accent-white h-2 bg-white/30 rounded-lg cursor-pointer"
            aria-label="Ice Cream Temperature and Melting Controller"
          />
          <span className="text-[10px] text-white/80 font-mono">-4°C Melt</span>
        </div>

        <div className="mt-2.5 pt-2 border-t border-white/20 flex items-center justify-between text-[11px]">
          <span className="text-[#EAF7FD] flex items-center gap-1">
            <Droplet className="w-3.5 h-3.5 text-white animate-pulse" />
            Viscosity: {meltProgress > 0.6 ? 'Luscious Silk Drip' : meltProgress > 0.3 ? 'Velvet Slow Melt' : 'Crisp Sub-Zero'}
          </span>
          <button
            onClick={handleSimulateLick}
            className="px-2.5 py-1 bg-white text-[#1074B2] font-bold rounded-lg text-[10px] hover:bg-[#EAF7FD] transition-colors shadow-sm flex items-center gap-1 cursor-pointer"
          >
            <RefreshCw className={`w-3 h-3 ${isLicking ? 'animate-spin' : ''}`} />
            Taste Melt
          </button>
        </div>
      </div>
    </div>
  );
};
