import React from 'react';
import { Petal } from './Logo';

export default function Marquee() {
  const items = ['Banho de gel', 'Spa dos pés', 'Mechas e coloração', 'Hidratação Joico', 'Brow lamination', 'Lash lifting', 'Micropigmentação', 'Maquiagem e penteado'];
  const row = [...items, ...items];
  return (
    <div className="marquee-wrap relative overflow-hidden bg-brand-800 py-4 border-y border-brand-900">
      <div className="marquee">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center font-serif italic text-xl sm:text-2xl text-brand-100 whitespace-nowrap px-6">
            {t}
            <Petal className="ml-12 w-5 h-5 text-champagne" width={2.6} />
          </span>
        ))}
      </div>
    </div>
  );
}
