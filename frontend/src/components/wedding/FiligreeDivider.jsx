import React from 'react';
import dividerImg from '../../assets/figma/gold-filigree-divider.png';

export default function FiligreeDivider({ className = "my-4" }) {
  return (
    <div className={`w-full flex justify-center items-center px-4 ${className} pointer-events-none select-none`}>
      <img
        src={dividerImg}
        alt="Ornamental gold divider"
        className="w-full max-w-[428px] h-auto object-contain opacity-95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}
