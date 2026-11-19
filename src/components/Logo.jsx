import React from 'react';

// Símbolo da Lolla: pétala em traço dourado (contorno + duas pétalas cruzadas)
export function Petal({ className = '', animate = false, stroke = 'currentColor', width = 2.2 }) {
  return (
    <svg viewBox="0 0 64 64" className={`${className} ${animate ? 'draw' : ''}`} fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth={width} strokeLinecap="round">
        <path className="d1" d="M32 56C16 47.5 8 33 11.5 20.5 14.5 9.5 25.5 7 32 14.5 38.5 7 49.5 9.5 52.5 20.5 56 33 48 47.5 32 56Z" />
        <ellipse className="d2" cx="27.6" cy="32" rx="7.4" ry="18.5" transform="rotate(-15 27.6 32)" />
        <ellipse className="d3" cx="36.4" cy="32" rx="7.4" ry="18.5" transform="rotate(15 36.4 32)" />
      </g>
    </svg>
  );
}

// Pétala + "Lolla" em letra cursiva + NAILS & BEAUTY
export default function Logo({ light = false }) {
  return (
    <span className={`inline-flex items-center gap-2 select-none ${light ? 'text-white' : 'text-brand-800'}`}>
      <Petal className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 ${light ? 'text-champagne' : 'text-champagne-dark'}`} />
      <span className="flex flex-col leading-none">
        <span className="font-script text-[2.1rem] sm:text-[2.35rem] leading-[.8] -mb-0.5">Lolla</span>
        <span className={`mt-2 text-[8px] tracking-[0.38em] font-medium pl-3 ${light ? 'text-champagne' : 'text-champagne-dark'}`}>NAILS &amp; BEAUTY</span>
      </span>
    </span>
  );
}
