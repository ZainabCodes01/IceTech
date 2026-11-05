import React, { useState } from 'react';
import { SweetMoment } from '../types';
import { MeltingHeading } from './MeltingHeading';
import { CardMeltingRim, CreamyBlueToWhiteDivider } from './MeltingDrips';
import { Heart, MessageSquare, MapPin, Plus, Check, X, Camera } from 'lucide-react';

const INITIAL_MOMENTS: SweetMoment[] = [
  {
    id: 'moment-1',
    author: 'Elena & Lucas R.',
    location: 'Coastal Pop-Up, Sunset Pier',
    date: 'Yesterday',
    title: 'That First Drip Laugh',
    story: 'Lucas was trying to take a photo of his Azure Blue Ripple cone before the first lick, and a thick drop of cream fell right onto his nose! Pure delicious laughter.',
    likes: 142,
    tags: ['Azure Ripple', 'Sunset Vibes'],
    gradient: 'from-[#33A5D9] to-[#1074B2]',
  },
  {
    id: 'moment-2',
    author: 'Chef Marcus Vance',
    location: 'Downtown Flagship Boutique',
    date: '3 days ago',
    title: 'The Cleanest Melt in the City',
    story: 'As a pastry chef, I test ice cream viscosity constantly. ICE TECH’s micro-aeration yields a velvety mouthfeel that outclasses French custard bases. Phenomenal craftsmanship.',
    likes: 218,
    tags: ['Chef Review', 'Micro Churned'],
    gradient: 'from-[#1074B2] to-[#0B5F96]',
  },
  {
    id: 'moment-3',
    author: 'Sofia Chen',
    location: 'Saturday Street Market',
    date: '5 days ago',
    title: 'Three Scoops, Zero Regrets',
    story: 'Ordered the triple waffle bowl with Madagascan double cream and salted caramel drip. Even in 28°C summer heat, it melted so smoothly instead of turning into watery syrup!',
    likes: 189,
    tags: ['Summer Day', 'Triple Scoop'],
    gradient: 'from-[#33A5D9] to-[#0E679E]',
  },
];

export const SweetMomentsSection: React.FC = () => {
  const [moments, setMoments] = useState<SweetMoment[]>(INITIAL_MOMENTS);
  const [likedIds, setLikedIds] = useState<Record<string, boolean>>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // New Moment form state
  const [authorName, setAuthorName] = useState<string>('');
  const [authorLocation, setAuthorLocation] = useState<string>('');
  const [momentTitle, setMomentTitle] = useState<string>('');
  const [momentStory, setMomentStory] = useState<string>('');
  const [favoriteFlavor, setFavoriteFlavor] = useState<string>('The Glacial Avalanche');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleToggleLike = (id: string) => {
    const isCurrentlyLiked = !!likedIds[id];
    setLikedIds((prev) => ({ ...prev, [id]: !isCurrentlyLiked }));
    setMoments((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, likes: m.likes + (isCurrentlyLiked ? -1 : 1) } : m
      )
    );
  };

  const handleSubmitMoment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !momentStory.trim()) return;

    const newMoment: SweetMoment = {
      id: `moment-${Date.now()}`,
      author: authorName,
      location: authorLocation || 'ICE TECH Bar',
      date: 'Just now',
      title: momentTitle || 'A Sweet Creamy Moment',
      story: momentStory,
      likes: 1,
      tags: [favoriteFlavor, 'Community Love'],
      gradient: 'from-[#33A5D9] to-[#1074B2]',
    };

    setMoments([newMoment, ...moments]);
    setLikedIds((prev) => ({ ...prev, [newMoment.id]: true }));
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
      setAuthorName('');
      setAuthorLocation('');
      setMomentTitle('');
      setMomentStory('');
    }, 1200);
  };

  return (
    <section id="moments" className="relative w-full bg-[#FFFFFF] pt-16 sm:pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with signature melting decoration */}
        <MeltingHeading
          title="SWEET MOMENTS"
          badgeText="Community Love"
          subtitle="Real smiles, joyful summer afternoons, and unforgettable drips captured by ice cream lovers around the world."
          theme="light"
        />

        {/* Action Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-[#1074B2] uppercase tracking-wider">
              {moments.length} Community Stories
            </span>
            <p className="text-sm text-slate-500 mt-0.5">
              Tag your moments with #IceTechMelt to be featured on our live board.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 bg-[#1074B2] hover:bg-[#0B5F96] text-white font-display font-bold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Camera className="w-4 h-4" />
            <span>Share Your Sweet Moment</span>
          </button>
        </div>

        {/* Moments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {moments.map((moment) => {
            const isLiked = !!likedIds[moment.id];
            return (
              <div
                key={moment.id}
                className="group bg-[#F8FCFF] rounded-3xl border border-[#D5F0FC] cream-card-shadow hover:cream-card-shadow-hover transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Visual Header Representation with Melting Drip Rim */}
                <div className={`h-36 bg-gradient-to-br ${moment.gradient} p-5 text-white flex flex-col justify-between relative`}>
                  {/* Subtle decorative scoops inside header */}
                  <div className="absolute right-4 bottom-2 opacity-25">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                      <circle cx="30" cy="30" r="24" fill="#FFFFFF" />
                      <ellipse cx="25" cy="20" rx="8" ry="4" fill="#FFFFFF" opacity="0.6" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold relative z-10">
                    <span className="flex items-center gap-1 text-[#EAF7FD]">
                      <MapPin className="w-3.5 h-3.5" />
                      {moment.location}
                    </span>
                    <span className="text-white/80">{moment.date}</span>
                  </div>

                  <div className="relative z-10">
                    <h4 className="font-display font-black text-lg text-white drop-shadow-sm leading-snug">
                      "{moment.title}"
                    </h4>
                  </div>
                </div>

                {/* Melting Drip Rim separating the header from story body */}
                <CardMeltingRim color="#F8FCFF" />

                {/* Story Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-slate-700 leading-relaxed italic">
                      "{moment.story}"
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {moment.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[#1074B2] font-semibold">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-[#0B5F96]">
                      — {moment.author}
                    </span>

                    <button
                      onClick={() => handleToggleLike(moment.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isLiked
                          ? 'bg-rose-50 text-rose-600 scale-105'
                          : 'bg-white text-slate-500 hover:text-rose-500 hover:bg-rose-50/50 border border-slate-200'
                      }`}
                      aria-label="Like this moment"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                      <span className="font-mono">{moment.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* MODAL: Share Your Sweet Moment */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white shadow-2xl relative overflow-hidden">
            {/* Top decorative melting rim */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#33A5D9] to-[#1074B2]" />

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display font-black text-2xl text-[#0B5F96] mb-1">
              SHARE YOUR SWEET MOMENT
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Tell us about your favorite lick, family celebration, or creamy ice cream memory.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-xl text-slate-800">
                  Moment Shared!
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  Your story is now live in the Ice Tech Sweet Moments wall.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitMoment} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya & Sam"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1074B2] focus:ring-2 focus:ring-[#33A5D9]/20 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-1">
                      Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. San Diego Bay"
                      value={authorLocation}
                      onChange={(e) => setAuthorLocation(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1074B2] focus:ring-2 focus:ring-[#33A5D9]/20 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-1">
                      Favorite Flavor
                    </label>
                    <select
                      value={favoriteFlavor}
                      onChange={(e) => setFavoriteFlavor(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1074B2] focus:ring-2 focus:ring-[#33A5D9]/20 outline-none bg-white"
                    >
                      <option value="The Glacial Avalanche">The Glacial Avalanche</option>
                      <option value="Pure Velvet Vanilla">Pure Velvet Vanilla</option>
                      <option value="Blue Sea Salt Cloud">Blue Sea Salt Cloud</option>
                      <option value="Waffle Melt Sandwich">Waffle Melt Sandwich</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-1">
                    Moment Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sweetest Birthday Sundae"
                    value={momentTitle}
                    onChange={(e) => setMomentTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1074B2] focus:ring-2 focus:ring-[#33A5D9]/20 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-1">
                    Your Story
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us what made that ice cream moment unforgettable..."
                    value={momentStory}
                    onChange={(e) => setMomentStory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1074B2] focus:ring-2 focus:ring-[#33A5D9]/20 outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#1074B2] hover:bg-[#0B5F96] text-white font-display font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Post Moment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* TRANSITION DIVIDER: Blue Creamy Ice Cream Drips over white into Gallery background */}
      <CreamyBlueToWhiteDivider color="#1074B2" />
    </section>
  );
};
