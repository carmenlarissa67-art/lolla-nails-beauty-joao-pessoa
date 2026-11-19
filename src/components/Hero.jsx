import React, { useEffect, useState } from 'react';
import { studioConfig, images } from '../data/studioData';
import { Calendar, MapPin, Clock, ArrowDown, Instagram, Star } from 'lucide-react';
import { Petal } from './Logo';

const rotating = ['no Techne Mall', 'no Brisamar', 'com hora marcada'];

export default function Hero({ onOpenBooking }) {
  const [idx, setIdx] = useState(0);
  const [spot, setSpot] = useState({ x: 70, y: 30 });

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % rotating.length), 2600);
    return () => clearInterval(t);
  }, []);

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  const headline = ['Unhas,', 'cabelo', 'e', 'estética'];

  return (
    <section
      onMouseMove={handleMove}
      className="grain relative overflow-hidden -mt-20 pt-28 pb-16 md:pt-36 md:pb-24"
      style={{ background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(201,169,120,.22), transparent 60%), linear-gradient(180deg,#f3eee5 0%,#faf8f4 75%)` }}
    >
      <Petal className="spin-slow absolute -right-40 -top-40 w-[520px] h-[520px] text-champagne/20 pointer-events-none" width={0.6} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="word-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-brand-200 text-brand-800 text-xs font-semibold uppercase tracking-wider">
            <Petal className="w-4 h-4 text-champagne-dark" width={3} />
            <span>Salão de beleza em João Pessoa</span>
          </div>

          <h1 className="mt-6 font-serif text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[1.02] text-brand-950 tracking-tight">
            {headline.map((w, i) => (
              <span key={w} className="word-in mr-[0.25em]" style={{ animationDelay: `${120 + i * 90}ms` }}>{w}</span>
            ))}
            <br />
            <span className="word-in italic text-champagne-dark" style={{ animationDelay: '520ms' }}>
              <span key={idx} className="swap-word">{rotating[idx]}</span>
            </span>
          </h1>

          <p className="word-in mt-6 text-base sm:text-lg text-brand-900/75 max-w-xl leading-relaxed" style={{ animationDelay: '650ms' }}>
            {studioConfig.subtitle}
          </p>

          <div className="word-in mt-8 flex flex-col sm:flex-row gap-3 sm:items-center" style={{ animationDelay: '780ms' }}>
            <button
              onClick={() => onOpenBooking(null)}
              className="shine group flex items-center justify-center gap-3 bg-brand-800 hover:bg-brand-900 text-white px-8 py-4 rounded-full text-base font-medium shadow-xl shadow-brand-900/20 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-[-8deg] transition-transform" />
              <span>Agendar meu horário</span>
            </button>
            <a href="#servicos" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-brand-900 text-sm font-semibold border border-brand-300 bg-white/50 hover:bg-white transition-colors">
              Ver valores
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          <div className="word-in mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-brand-800" style={{ animationDelay: '900ms' }}>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-champagne-dark" />{studioConfig.workingHoursShort}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-champagne-dark" />{studioConfig.addressShort}</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-champagne-dark fill-champagne" />Nota {studioConfig.googleRating} no Google ({studioConfig.googleReviews} avaliações)</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[440px] sm:h-[520px]">
          <div className="word-in absolute right-0 top-0 w-[60%]" style={{ animationDelay: '300ms' }}>
            <div className="float-slow"><div className="rounded-t-[999px] rounded-b-[2rem] overflow-hidden shadow-2xl shadow-brand-900/20 border-[6px] border-white">
              <img src={images.ombre} alt="Cabelo morena iluminada no salão da Lolla" className="w-full h-72 sm:h-[22rem] object-cover object-top" />
            </div></div>
          </div>
          <div className="word-in absolute left-0 top-[24%] w-[46%]" style={{ animationDelay: '450ms' }}>
            <div className="float-slower"><div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-900/20 border-[6px] border-white -rotate-[4deg]">
              <img src={images.francesinha} alt="Unhas com francesinha" className="w-full h-52 sm:h-60 object-cover" />
            </div></div>
          </div>
          <div className="word-in absolute right-[8%] bottom-0 w-[40%]" style={{ animationDelay: '600ms' }}>
            <div className="float-slow"><div className="rounded-[1.6rem] overflow-hidden shadow-2xl shadow-brand-900/20 border-[6px] border-white rotate-[3deg]">
              <img src={images.babyBoomer} alt="Unhas baby boomer" className="w-full h-36 sm:h-44 object-cover" />
            </div></div>
          </div>
          <a href={studioConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="word-in absolute left-0 bottom-2 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-brand-100 flex items-center gap-3 z-10" style={{ animationDelay: '900ms' }}>
            <div className="w-10 h-10 rounded-full bg-champagne-light flex items-center justify-center">
              <Instagram className="w-5 h-5 text-champagne-dark" />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-950">{studioConfig.followers} seguidoras</p>
              <p className="text-[11px] text-brand-700">{studioConfig.instagramHandle}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
