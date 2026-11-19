import React, { useState } from 'react';
import { professionals, areas } from '../data/studioData';
import { Calendar } from 'lucide-react';
import Reveal from './Reveal';

// Equipe da Lolla separada por área. Ao passar o mouse em uma, as outras ficam em segundo plano.
export default function TeamSection({ onChoosePro }) {
  const [hover, setHover] = useState(null);

  return (
    <section id="equipe" className="py-20 sm:py-28 scroll-mt-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-600">Nossa equipe</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-950 mt-3 uppercase tracking-[0.06em] font-medium leading-[1.05]">
            Dez profissionais, <span className="italic text-champagne-dark">cada uma na sua arte</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-900/70">
            Já tem a sua preferida? Toque no nome e agende direto com ela. Se não tiver, a Lolla indica quem estiver livre.
          </p>
        </Reveal>

        <div className="mt-12 space-y-12" onMouseLeave={() => setHover(null)}>
          {areas.map((area) => {
            const team = professionals.filter((p) => p.area === area.id);
            return (
              <div key={area.id}>
                <Reveal className="flex items-baseline gap-4 mb-5">
                  <h3 className="title-caps text-2xl sm:text-3xl">{area.label}</h3>
                  <span className="flex-1 h-px bg-brand-200" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-brand-600">{team.length} {team.length > 1 ? 'profissionais' : 'profissional'}</span>
                </Reveal>
                <div className="no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
                  {team.map((p, i) => {
                    const dim = hover && hover !== p.id;
                    return (
                      <Reveal key={p.id} delay={i * 90} className="snap-start shrink-0 w-[62%] sm:w-auto">
                        <article
                          onMouseEnter={() => setHover(p.id)}
                          className={`group h-full flex flex-col rounded-[1.6rem] overflow-hidden bg-brand-50 border border-brand-100 transition-all duration-500 ${dim ? 'md:opacity-55 md:blur-[1.5px] md:scale-[.98]' : 'md:hover:-translate-y-1.5 md:hover:shadow-2xl md:hover:shadow-brand-900/10'}`}
                        >
                          <div className="relative aspect-[3/4] overflow-hidden marble">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1200ms]" />
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-950/60 to-transparent" />
                          </div>
                          <div className="flex-1 flex flex-col p-4">
                            <h4 className="font-serif text-2xl leading-none text-brand-950">{p.name}</h4>
                            <p className="text-xs text-brand-900/70 mt-1.5 leading-snug">{p.role}</p>
                            <button
                              onClick={() => onChoosePro(p.id)}
                              className="mt-auto pt-0 w-full"
                            >
                              <span className="mt-4 flex items-center justify-center gap-1.5 whitespace-nowrap bg-brand-800 hover:bg-brand-900 text-white px-2 py-2.5 rounded-full text-[11px] sm:text-xs font-semibold transition-colors">
                                <Calendar className="w-3.5 h-3.5 shrink-0 lg:hidden" />
                                Agendar com {p.firstName}
                              </span>
                            </button>
                          </div>
                        </article>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
