import React, { useState } from 'react';
import { CustomerReview } from '../types';
import { MeltingHeading } from './MeltingHeading';
import { CardMeltingRim, CreamyWhiteToBlueDivider } from './MeltingDrips';
import { Star, CheckCircle, PenLine, X, Check } from 'lucide-react';

const INITIAL_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Dr. Julian Thorne',
    role: 'Food Science Lecturer',
    rating: 5,
    date: '2 days ago',
    favoriteFlavor: 'The Glacial Avalanche',
    comment: 'The fat globule dispersion in their micro-churned cream is astounding. You do not get the coarse ice crystals that ruin supermarket pints. The drip is genuinely thick and viscous, exactly as promised.',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Chloe Davenport',
    role: 'Artisan Gelato Blogger',
    rating: 5,
    date: '1 week ago',
    favoriteFlavor: 'Pure Velvet Madagascar',
    comment: 'I was skeptical about the melting claims, but after three visits, I am hooked. It doesn’t turn into watery soup in the summer sun—it drips like pure sweet velvet cream. The waffle cone is also extraordinarily fresh!',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Samira & Tariq K.',
    role: 'Weekend Regulars',
    rating: 5,
    date: '2 weeks ago',
    favoriteFlavor: 'Blue Sea Salt Cloud',
    comment: 'Our kids ask for ICE TECH every single Saturday. The blue ripple is natural butterfly pea flower and real sea salt, not artificial blue syrup. Best ice cream shop in town by far.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Liam O’Connor',
    role: 'Pastry Enthusiast',
    rating: 5,
    date: '3 weeks ago',
    favoriteFlavor: 'Toasted Butter Waffle Melt',
    comment: 'The contrast of the warm cinnamon waffle with the cold melting cream is out of this world. Five stars for both flavor and aesthetic.',
    verified: true,
  },
];

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Form state
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [flavor, setFlavor] = useState<string>('The Glacial Avalanche');
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: CustomerReview = {
      id: `rev-${Date.now()}`,
      author: name,
      role: role || 'Verified Customer',
      rating,
      date: 'Just now',
      favoriteFlavor: flavor,
      comment,
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setName('');
      setRole('');
      setComment('');
    }, 1200);
  };

  return (
    <section id="reviews" className="relative w-full bg-[#FFFFFF] pt-16 sm:pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with signature melting decoration */}
        <MeltingHeading
          title="CUSTOMER REVIEWS"
          badgeText="Tested by Gelato Lovers"
          subtitle="Honest impressions on our signature creamy texture, micro-churned smoothness, and slow-dripping cold craft."
          theme="light"
        />

        {/* Rating Statistics Strip */}
        <div className="bg-gradient-to-r from-[#EAF7FD] via-[#D5F0FC] to-[#EAF7FD] rounded-3xl p-6 sm:p-8 border border-[#33A5D9]/20 flex flex-col md:flex-row items-center justify-between gap-6 mb-12 cream-card-shadow">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-black text-4xl sm:text-5xl text-[#0B5F96] tabular-nums">
                4.95
              </span>
              <span className="text-sm font-semibold text-slate-500">/ 5.0</span>
            </div>

            <div className="h-10 w-px bg-slate-300 hidden sm:block" />

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-semibold text-slate-600">
                Based on 2,400+ verified customer reviews & tastings
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 bg-[#1074B2] hover:bg-[#0B5F96] text-white font-display font-bold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <PenLine className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F8FCFF] rounded-3xl border border-[#D5F0FC] p-6 sm:p-7 cream-card-shadow hover:cream-card-shadow-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row: stars and date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{rev.date}</span>
                </div>

                {/* Comment quote */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Flavor Strip */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-sm text-[#0B5F96]">
                      {rev.author}
                    </span>
                    {rev.verified && (
                      <span className="flex items-center gap-0.5 text-[11px] font-semibold text-emerald-600">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{rev.role}</div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Favorite
                  </span>
                  <span className="text-xs font-bold text-[#1074B2]">
                    {rev.favoriteFlavor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* WRITE A REVIEW MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display font-black text-2xl text-[#0B5F96] mb-1">
              SHARE YOUR ICE TECH REVIEW
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              How did you enjoy the signature creamy melt? Your review helps other ice cream lovers.
            </p>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-display font-bold text-xl text-slate-800">
                  Thank you!
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  Your review has been posted successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1074B2] focus:ring-2 focus:ring-[#33A5D9]/20 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-1">
                      Role / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Foodie from Denver"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1074B2] focus:ring-2 focus:ring-[#33A5D9]/20 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-1">
                      Star Rating
                    </label>
                    <div className="flex items-center gap-1 py-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1 cursor-pointer focus:outline-none"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-1">
                    Favorite Flavor
                  </label>
                  <select
                    value={flavor}
                    onChange={(e) => setFlavor(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1074B2] focus:ring-2 focus:ring-[#33A5D9]/20 outline-none bg-white"
                  >
                    <option value="The Glacial Avalanche">The Glacial Avalanche Sundae</option>
                    <option value="Pure Velvet Madagascar">Pure Velvet Madagascar Cream</option>
                    <option value="Blue Sea Salt Cloud">Glacial Blue Sea Salt Cloud</option>
                    <option value="Toasted Butter Waffle Melt">Toasted Butter Waffle Melt</option>
                    <option value="Sub-Zero Spearmint">Sub-Zero Spearmint Crisp</option>
                    <option value="Velvet Tech Float">Velvet Tech Float & Cream Cloud</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B5F96] uppercase tracking-wider mb-1">
                    Your Review
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe the creaminess, melt, and your overall experience..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
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
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* DIVIDER: Transitioning into deep navy Tech footer */}
      <CreamyWhiteToBlueDivider className="mt-8" />
    </section>
  );
};
