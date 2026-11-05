import React from 'react';

interface DripDividerProps {
  className?: string;
  fillColor?: string;
  shadowColor?: string;
  reverse?: boolean;
}

/**
 * HeroMeltingDripDivider
 * Large, thick, luscious creamy white ice cream melting dripping downward
 * from the bottom of the blue gradient Hero section.
 */
export const HeroMeltingDripDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none z-20 ${className}`}>
      {/* SVG Container with filter drop shadow for realistic 3D creamy depth */}
      <svg
        className="w-full block h-16 sm:h-24 md:h-28 lg:h-32 text-white fill-current filter drop-shadow-[0_8px_16px_rgba(11,95,150,0.22)]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="creamGloss" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#F4FAFD" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#E0F2FC" stopOpacity="0.4" />
          </linearGradient>
          <filter id="softCreamGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0B5F96" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Secondary soft underlayer for thick creamy depth */}
        <path
          d="M0,0 L1440,0 L1440,24 C1400,24 1385,46 1370,46 C1355,46 1345,18 1315,18 C1285,18 1270,68 1245,68 C1225,68 1215,22 1180,22 C1150,22 1135,85 1105,85 C1080,85 1070,26 1030,26 C990,26 975,54 950,54 C925,54 915,20 870,20 C830,20 815,76 785,76 C760,76 750,24 710,24 C670,24 655,94 620,94 C590,94 580,28 540,28 C505,28 495,60 465,60 C440,60 430,22 390,22 C355,22 340,82 310,82 C280,82 270,25 230,25 C195,25 185,50 160,50 C135,50 125,20 80,20 C40,20 20,40 0,40 Z"
          fill="#EAF7FD"
          opacity="0.75"
        />

        {/* Primary thick, smooth, bulbous creamy white melt */}
        <path
          d="M0,0 L1440,0 L1440,16 
             C1415,16 1405,42 1385,42 C1370,42 1362,14 1335,14 
             C1305,14 1290,62 1265,62 C1245,62 1238,18 1205,18 
             C1175,18 1160,88 1130,88 C1105,88 1095,20 1055,20 
             C1020,20 1008,50 985,50 C965,50 955,16 920,16 
             C885,16 870,74 840,74 C815,74 805,22 765,22 
             C730,22 715,102 680,102 C650,102 640,24 600,24 
             C565,24 550,58 525,58 C505,58 495,18 455,18 
             C420,18 405,80 375,80 C350,80 340,20 300,20 
             C265,20 252,48 230,48 C210,48 200,16 160,16 
             C125,16 110,68 85,68 C65,68 55,22 25,22 
             C10,22 5,16 0,16 Z"
          fill="#FFFFFF"
        />

        {/* Glossy specular sheen highlights along the bulbous tips */}
        {/* Drip at 680 (deepest drip) */}
        <ellipse cx="680" cy="94" rx="8" ry="4.5" fill="#FFFFFF" opacity="0.9" />
        <path d="M676,82 C678,88 682,88 684,82" stroke="#D5F0FC" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />

        {/* Drip at 1130 */}
        <ellipse cx="1130" cy="81" rx="7" ry="4" fill="#FFFFFF" opacity="0.9" />

        {/* Drip at 375 */}
        <ellipse cx="375" cy="73" rx="6.5" ry="3.5" fill="#FFFFFF" opacity="0.9" />

        {/* Drip at 840 */}
        <ellipse cx="840" cy="68" rx="6" ry="3.5" fill="#FFFFFF" opacity="0.9" />

        {/* Drip at 1265 */}
        <ellipse cx="1265" cy="56" rx="5.5" ry="3" fill="#FFFFFF" opacity="0.9" />

        {/* Drip at 85 */}
        <ellipse cx="85" cy="62" rx="5" ry="3" fill="#FFFFFF" opacity="0.9" />
      </svg>
    </div>
  );
};

/**
 * CreamyWhiteToBlueDivider
 * Thick white ice cream dripping down over an ocean blue background (#33A5D9 / #1074B2).
 */
export const CreamyWhiteToBlueDivider: React.FC<DripDividerProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none z-10 ${className}`}>
      <svg
        className="w-full block h-14 sm:h-20 md:h-24 text-white fill-current filter drop-shadow-[0_8px_16px_rgba(11,95,150,0.18)]"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft shadow layer */}
        <path
          d="M0,0 L1440,0 L1440,16 
             C1410,16 1395,50 1375,50 C1355,50 1348,16 1320,16 
             C1290,16 1275,66 1250,66 C1228,66 1218,18 1180,18 
             C1145,18 1130,78 1100,78 C1072,78 1060,20 1020,20 
             C985,20 970,52 945,52 C925,52 915,16 875,16 
             C840,16 825,72 795,72 C768,72 756,18 720,18 
             C685,18 670,82 638,82 C610,82 598,22 560,22 
             C525,22 510,56 485,56 C462,56 450,18 415,18 
             C380,18 365,70 335,70 C310,70 298,20 260,20 
             C225,20 210,48 185,48 C165,48 152,18 120,18 
             C85,18 70,62 45,62 C25,62 15,20 0,20 Z"
          fill="#D5F0FC"
          opacity="0.65"
        />

        {/* Primary white creamy drip */}
        <path
          d="M0,0 L1440,0 L1440,10 
             C1412,10 1398,42 1378,42 C1358,42 1350,12 1324,12 
             C1294,12 1280,58 1254,58 C1232,58 1222,14 1185,14 
             C1150,14 1135,70 1105,70 C1078,70 1065,16 1025,16 
             C990,16 975,44 950,44 C930,44 920,12 880,12 
             C845,12 830,64 800,64 C772,64 760,14 725,14 
             C690,14 675,74 644,74 C616,74 604,18 566,18 
             C530,18 515,48 490,48 C468,48 456,14 420,14 
             C385,14 370,62 340,62 C315,62 302,16 265,16 
             C230,16 215,40 190,40 C170,40 158,14 125,14 
             C90,14 75,54 50,54 C30,54 18,16 0,16 Z"
          fill="#FFFFFF"
        />

        {/* Gloss dots */}
        <circle cx="644" cy="68" r="4.5" fill="#EAF7FD" opacity="0.8" />
        <circle cx="1105" cy="64" r="4" fill="#EAF7FD" opacity="0.8" />
        <circle cx="340" cy="56" r="4" fill="#EAF7FD" opacity="0.8" />
        <circle cx="800" cy="58" r="4" fill="#EAF7FD" opacity="0.8" />
      </svg>
    </div>
  );
};

/**
 * CreamyBlueToWhiteDivider
 * Blue creamy ice cream dripping downwards over a white/light surface (#EAF7FD).
 */
export const CreamyBlueToWhiteDivider: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#1074B2',
}) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none z-10 ${className}`}>
      <svg
        className="w-full block h-14 sm:h-20 md:h-24 filter drop-shadow-[0_8px_14px_rgba(11,95,150,0.18)]"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft highlight underneath blue melt */}
        <path
          d="M0,0 L1440,0 L1440,16 
             C1410,16 1395,50 1375,50 C1355,50 1348,16 1320,16 
             C1290,16 1275,66 1250,66 C1228,66 1218,18 1180,18 
             C1145,18 1130,78 1100,78 C1072,78 1060,20 1020,20 
             C985,20 970,52 945,52 C925,52 915,16 875,16 
             C840,16 825,72 795,72 C768,72 756,18 720,18 
             C685,18 670,82 638,82 C610,82 598,22 560,22 
             C525,22 510,56 485,56 C462,56 450,18 415,18 
             C380,18 365,70 335,70 C310,70 298,20 260,20 
             C225,20 210,48 185,48 C165,48 152,18 120,18 
             C85,18 70,62 45,62 C25,62 15,20 0,20 Z"
          fill="#0B5F96"
          opacity="0.3"
        />

        {/* Primary rich blue creamy drip */}
        <path
          d="M0,0 L1440,0 L1440,10 
             C1412,10 1398,42 1378,42 C1358,42 1350,12 1324,12 
             C1294,12 1280,58 1254,58 C1232,58 1222,14 1185,14 
             C1150,14 1135,70 1105,70 C1078,70 1065,16 1025,16 
             C990,16 975,44 950,44 C930,44 920,12 880,12 
             C845,12 830,64 800,64 C772,64 760,14 725,14 
             C690,14 675,74 644,74 C616,74 604,18 566,18 
             C530,18 515,48 490,48 C468,48 456,14 420,14 
             C385,14 370,62 340,62 C315,62 302,16 265,16 
             C230,16 215,40 190,40 C170,40 158,14 125,14 
             C90,14 75,54 50,54 C30,54 18,16 0,16 Z"
          fill={color}
        />

        {/* Gloss highlight arcs along blue tips */}
        <ellipse cx="644" cy="69" rx="5" ry="2.5" fill="#33A5D9" opacity="0.6" />
        <ellipse cx="1105" cy="65" rx="5" ry="2.5" fill="#33A5D9" opacity="0.6" />
        <ellipse cx="340" cy="57" rx="4" ry="2" fill="#33A5D9" opacity="0.6" />
      </svg>
    </div>
  );
};

/**
 * HeadingMeltingDecoration
 * Beautiful melting ice cream shelf positioned directly underneath section titles,
 * modeled after the drips underneath the letters of the ICE TECH logo.
 */
export const HeadingMeltingDecoration: React.FC<{
  color?: 'white' | 'blue' | 'azure';
  width?: string;
  className?: string;
}> = ({ color = 'blue', width = 'w-64 sm:w-80 md:w-96', className = '' }) => {
  const fillColor = color === 'white' ? '#FFFFFF' : color === 'azure' ? '#33A5D9' : '#1074B2';
  const shadowColor = color === 'white' ? 'rgba(11,95,150,0.18)' : 'rgba(16,116,178,0.25)';
  const highlightColor = color === 'white' ? '#D5F0FC' : '#EAF7FD';

  return (
    <div className={`relative mx-auto -mt-1 flex justify-center ${width} ${className}`}>
      <svg
        viewBox="0 0 320 48"
        className="w-full h-auto overflow-visible"
        style={{ filter: `drop-shadow(0 4px 6px ${shadowColor})` }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Continuous creamy base bar with downward rounded melting drips */}
        <path
          d="M10,8 Q160,5 310,8
             C305,12 300,14 290,14
             C282,14 278,28 272,28
             C266,28 262,14 250,14
             C242,14 238,36 230,36
             C222,36 218,15 204,15
             C196,15 190,44 180,44
             C170,44 165,16 150,16
             C142,16 136,32 128,32
             C120,32 116,14 104,14
             C94,14 88,40 76,40
             C66,40 60,15 48,15
             C38,15 32,26 24,26
             C16,26 12,12 10,8 Z"
          fill={fillColor}
        />

        {/* Specular gloss droplets simulating smooth creamy texture */}
        <circle cx="180" cy="40" r="3.2" fill={highlightColor} opacity="0.8" />
        <circle cx="76" cy="36" r="3" fill={highlightColor} opacity="0.8" />
        <circle cx="230" cy="32" r="2.8" fill={highlightColor} opacity="0.8" />
        <circle cx="128" cy="28" r="2.2" fill={highlightColor} opacity="0.8" />
        <circle cx="272" cy="25" r="2" fill={highlightColor} opacity="0.8" />

        {/* Subtle creamy sheen highlight along the top edge */}
        <path
          d="M20,9 Q160,7 300,9"
          stroke={color === 'white' ? '#FFFFFF' : '#33A5D9'}
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

/**
 * CardMeltingRim
 * Creamy drip header decoration for cards and interactive containers
 */
export const CardMeltingRim: React.FC<{
  color?: string;
  className?: string;
}> = ({ color = '#FFFFFF', className = '' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 280 28"
        className="w-full h-5 sm:h-6 block filter drop-shadow-[0_3px_5px_rgba(11,95,150,0.12)]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L280,0 L280,6
             C268,6 262,18 254,18 C246,18 242,5 230,5
             C220,5 214,24 204,24 C194,24 190,6 178,6
             C168,6 162,16 154,16 C146,16 142,6 130,6
             C118,6 112,26 100,26 C88,26 82,7 70,7
             C60,7 54,19 44,19 C34,19 28,6 16,6
             C8,6 4,4 0,4 Z"
          fill={color}
        />
        {/* Soft gloss spot */}
        <circle cx="100" cy="23" r="2" fill="#EAF7FD" opacity="0.85" />
        <circle cx="204" cy="21" r="2" fill="#EAF7FD" opacity="0.85" />
      </svg>
    </div>
  );
};
