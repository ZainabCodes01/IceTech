import React, { useState } from 'react';
import { Mail, Check, MapPin, Clock, Phone, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#0B5F96] to-[#062B47] text-white pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/15">
          
          {/* Col 1: Brand Info & Original Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 shadow-md">
                <img
                  src="/assets/aistudio/image_4d62de6e.png"
                  alt="ICE TECH Logo"
                  className="w-12 h-12 object-contain rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display font-black text-2xl tracking-tight text-white flex items-center gap-1">
                  ICE TECH<span className="text-[#D5F0FC] text-sm">®</span>
                </span>
                <span className="text-xs text-[#EAF7FD]/80 uppercase tracking-widest font-semibold block">
                  Signature Melting Identity
                </span>
              </div>
            </div>

            <p className="text-sm text-[#EAF7FD]/85 leading-relaxed pr-4">
              Cold-churned at -18°C with organic pasture double cream. Thick, rounded melting drips that redefine ice cream craft.
            </p>

            <div className="pt-2 text-xs text-[#D5F0FC] font-mono">
              Pure Velvet Dairy · Zero Artificial Crystals
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#D5F0FC]">
              Navigation
            </h5>
            <ul className="space-y-2 text-sm text-[#EAF7FD]/90">
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Ice Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('moments')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sweet Moments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Customer Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Boutique Hours & Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#D5F0FC]">
              Flagship Ice Bars
            </h5>
            <div className="space-y-2.5 text-xs text-[#EAF7FD]/85">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#33A5D9] shrink-0 mt-0.5" />
                <span>104 Glacier Way, Pier 7, Waterfront</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#33A5D9] shrink-0 mt-0.5" />
                <span>Mon – Sun: 11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#33A5D9] shrink-0 mt-0.5" />
                <span>(555) 782-MELT</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#D5F0FC]">
              Melt Alerts & Secret Drops
            </h5>
            <p className="text-xs text-[#EAF7FD]/85">
              Subscribe for early access to limited seasonal double-cream churns and pop-up truck locations.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-white/20 border border-white/30 text-xs text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-300" />
                <span>You're on the list! Watch your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:bg-white/20 focus:border-white outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-white text-[#1074B2] rounded-xl font-bold text-xs hover:bg-[#EAF7FD] transition-colors cursor-pointer shrink-0"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF7FD]/70">
          <div>
            © {new Date().getFullYear()} ICE TECH®. All rights reserved. The Signature Melting Ice Cream Identity.
          </div>
          <div className="flex items-center gap-6">
            <span>Cold-Crafted with Organic Dairy</span>
            <span>·</span>
            <span>Zero Synthetic Additives</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
