import React, { useState } from 'react';
import { studioConfig, areas, categories, professionals, images, priceLabel } from '../data/studioData';
import { ChevronRight, Sparkles, Info } from 'lucide-react';
import Reveal from './Reveal';

const areaImage = { unhas: images.babyBoomer, cabelo: images.morena, estetica: null };

export default function ProceduresSection({ onSelectProcedure }) {
  const [activeId, setActiveId] = useState(areas[0].id);
  const area = areas.find((a) => a.id === activeId);
  const cats = categories.filter((c) => c.area === activeId);
  const team = professionals.filter((p) => p.area === activeId);

  const pick = (cat, item) =>
    onSelectProcedure({ ...item, category: cat.title, categoryId: cat.id, area: cat.area, note: cat.note });

  return (
    <section id="servicos" className="py-20 sm:py-28 marble scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">Catálogo de valores</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-950 mt-3 uppercase tracking-[0.06em] font-medium leading-[1.05]">
            Escolha o seu <span className="italic text-champagne-dark">momento</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-900/70">
            Toque no serviço para agendar. O pedido já sai com o valor certinho.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 max-w-xl mx-auto p-1.5 bg-white rounded-full border border-brand-200">
            {areas.map((a) => (
              <button
                key={a.id}
                onClick={() => setActiveId(a.id)}
                className={`px-2 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeId === a.id ? 'bg-brand-800 text-white shadow-lg shadow-brand-900/20' : 'text-brand-800 hover:bg-brand-50'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={activeId} className="animate-pop mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-brand-900/10 bg-brand-800 text-white">
              {areaImage[activeId] ? (
                <img src={areaImage[activeId]} alt={area.label} className="w-full h-56 sm:h-72 object-cover" />
              ) : (
                <div className="h-56 sm:h-72 grid grid-cols-2">
                  {team.map((p) => <img key={p.id} src={p.image} alt={p.name} className="w-full h-full object-cover object-top" />)}
                </div>
              )}
              <div className="p-6">
                <span className="text-[11px] uppercase tracking-[0.25em] text-champagne">{area.eyebrow}</span>
                <h3 className="font-serif text-3xl mt-1">{area.label}</h3>
                <p className="text-sm text-brand-100/85 mt-2 leading-relaxed">{area.intro}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {team.map((p) => (
                      <img key={p.id} src={p.image} alt={p.name} title={p.name} className="w-10 h-10 rounded-full object-cover object-top border-2 border-brand-800" />
                    ))}
                  </div>
                  <span className="text-xs text-brand-100/80">{team.map((p) => p.firstName).join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5">
            {cats.map((cat) => (
              <div key={cat.id} className="bg-white rounded-[2rem] border border-brand-100 shadow-sm p-2 sm:p-3">
                <div className="px-4 sm:px-5 pt-4 pb-2">
                  <h4 className="title-caps text-2xl">{cat.title}</h4>
                  {cat.note && <p className="text-[11px] text-brand-600 mt-1.5">{cat.note}</p>}
                </div>
                {cat.items.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => pick(cat, item)}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className="animate-pop w-full text-left group flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 rounded-2xl hover:bg-brand-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-brand-950 text-sm sm:text-base">{item.title}</span>
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-champagne-dark bg-champagne-light px-2 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3" /> Mais pedido
                          </span>
                        )}
                      </div>
                      {item.detail && <span className="block text-[11px] text-brand-600 mt-0.5">{item.detail}</span>}
                    </div>
                    <span className="hidden sm:block flex-1 max-w-[60px] border-b border-dotted border-brand-300 translate-y-1" />
                    <span className="text-right whitespace-nowrap">
                      {item.from && <span className="block text-[10px] text-brand-600 leading-none">a partir de</span>}
                      <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-800">{priceLabel({ ...item, from: false })}</span>
                    </span>
                    <span className="w-9 h-9 shrink-0 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center group-hover:bg-brand-800 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </button>
                ))}
              </div>
            ))}
            <p className="flex items-center gap-2 text-[11px] text-brand-700 px-2">
              <Info className="w-3.5 h-3.5 shrink-0" />
              {studioConfig.paymentNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
