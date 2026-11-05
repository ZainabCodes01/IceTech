import React from 'react';
import { HeadingMeltingDecoration } from './MeltingDrips';

interface MeltingHeadingProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  theme?: 'dark' | 'light'; // dark = on blue background (white text/drips), light = on white/light bg (blue text/drips)
  className?: string;
}

export const MeltingHeading: React.FC<MeltingHeadingProps> = ({
  title,
  subtitle,
  badgeText,
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-4 ${className}`}>
      {badgeText && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span
            className={`text-xs font-bold uppercase tracking-widest ${
              isDark ? 'text-[#D5F0FC]' : 'text-[#1074B2]'
            }`}
          >
            {badgeText}
          </span>
        </div>
      )}

      {/* Main Title */}
      <div className="relative inline-block">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight ${
            isDark ? 'text-white' : 'text-[#0B5F96]'
          }`}
          style={{ letterSpacing: '0.02em' }}
        >
          {title}
        </h2>

        {/* Melting Ice Cream Shelf directly underneath the heading */}
        <HeadingMeltingDecoration
          color={isDark ? 'white' : 'blue'}
          className="mt-1"
        />
      </div>

      {subtitle && (
        <p
          className={`mt-6 text-base sm:text-lg max-w-xl mx-auto leading-relaxed ${
            isDark ? 'text-[#EAF7FD]/90' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
