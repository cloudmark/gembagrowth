import React from 'react';

const GrowthAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <style>
        {`
          .g-stem {
            stroke: hsl(var(--primary));
            stroke-width: 8;
            stroke-linecap: round;
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
            animation: g-draw 1.5s ease-out forwards;
          }
          
          .g-leaf {
            fill: hsl(var(--primary) / 0.8);
            stroke: hsl(var(--primary));
            stroke-width: 2;
            opacity: 0;
            transform-origin: bottom center;
            animation: g-grow 1s ease-out forwards;
          }

          .g-leaf-1 { 
            animation-delay: 1.2s; 
            transform-origin: bottom right;
          }
          .g-leaf-2 { 
            animation-delay: 1.4s; 
            transform-origin: bottom left;
          }

          @keyframes g-draw {
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes g-grow {
            0% { transform: scale(0); opacity: 0; }
            80% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="growth-animation-title"
      >
        <title id="growth-animation-title">Animation of a sprouting leaf</title>
        
        {/* Ground Line */}
        <line x1="25" y1="125" x2="125" y2="125" stroke="hsl(var(--border))" strokeWidth="4" strokeLinecap="round" />

        {/* Stem */}
        <path className="g-stem" d="M 75 125 C 75 90, 65 60, 80 40" />
        
        {/* Leaves */}
        <path className="g-leaf g-leaf-1" d="M 79 48 C 60 40, 50 60, 65 75 Z" />
        <path className="g-leaf g-leaf-2" d="M 79 48 C 98 40, 108 60, 93 75 Z" />

      </svg>
    </div>
  );
};

export default GrowthAnimation;
