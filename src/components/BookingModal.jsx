import React, { useEffect, useMemo, useState } from 'react';
import { studioConfig, areas, allServices, getPro, prosFor, priceLabel } from '../data/studioData';
import { Petal } from './Logo';
import { X, Check, ChevronRight, ChevronLeft, MessageCircle, Info, ExternalLink, Shuffle } from 'lucide-react';

const STEPS = ['Serviço', 'Profissional', 'Detalhes', 'Dia', 'Confirmar'];

export default function BookingModal({ isOpen, onClose, initialProcedure, initialPro }) {
  const [step, setStep] = useState(1);
  const [areaId, setAreaId] = useState(areas[0].id);
  const [service, setService] = useState(null);
  const [proId, setProId] = useState(null); // id da profissional ou 'any'
  const [lockedPro, setLockedPro] = useState(null); // veio do card da equipe
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const startPro = initialPro ? getPro(initialPro) : null;
    setLockedPro(startPro);
    setService(initialProcedure || null);
    setAreaId(initialProcedure?.area || startPro?.area || areas[0].id);
    setProId(startPro ? startPro.id : null);
    setAgreed(false);
    if (initialProcedure) {
      const list = prosFor(initialProcedure);
      if (list.length === 1) { setProId(list[0].id); setStep(3); } else setStep(2);
    } else setStep(1);
  }, [initialProcedure, initialPro, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [isOpen, onClose]);

  // Serviços mostrados no passo 1
  const services = useMemo(() => {
    if (lockedPro) return allServices.filter((s) => prosFor(s).some((p) => p.id === lockedPro.id));
    return allServices.filter((s) => s.area === areaId);
  }, [lockedPro, areaId]);
  const grouped = useMemo(() => {
    const map = new Map();
    services.forEach((s) => { if (!map.has(s.category)) map.set(s.category, []); map.get(s.category).push(s); });
    return [...map.entries()];
  }, [services]);

  if (!isOpen) return null;

  const pro = proId && proId !== 'any' ? getPro(proId) : null;
  const options = prosFor(service);
  const proLabel = pro ? pro.name : 'Sem preferência (quem estiver livre)';
  const calUrl = studioConfig.calendlyUrl;

  const chooseService = (s) => {
    setService(s);
    if (lockedPro) setProId(lockedPro.id);
    else if (proId && proId !== 'any' && !prosFor(s).some((p) => p.id === proId)) setProId(null);
  };

  const next = () => {
    if (step === 1) {
      const list = prosFor(service);
      if (lockedPro || list.length === 1) { setProId(lockedPro ? lockedPro.id : list[0].id); setStep(3); return; }
    }
    setStep(step + 1);
  };
  const back = () => {
    if (step === 3 && (lockedPro || options.length === 1)) { setStep(1); return; }
    setStep(step - 1);
  };

  const canAdvance =
    (step === 1 && service) ||
    (step === 2 && proId) ||
    (step === 3 && agreed) ||
    step === 4;

  // Mensagem em texto simples (emojis viram "?" em alguns celulares)
  const whatsappLink = () => {
    const lines = [
      'Olá, Lolla! Quero agendar um horário pelo site.',
      '',
      `*Nome:* ${name || 'Não informado'}`,
      `*WhatsApp:* ${phone || 'Não informado'}`,
      '',
      `*Serviço:* ${service?.title} (${service?.category})`,
      `*Profissional:* ${proLabel}`,
      `*Valor:* ${service ? priceLabel(service) : ''}`,
      '',
      'Já escolhi meu horário na agenda online.',
      ...(notes ? ['', `*Observações:* ${notes}`] : []),
      '',
      'Pode confirmar, por favor? Obrigada!',
    ];
    return `https://wa.me/${studioConfig.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-ink/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-pop bg-brand-50 w-full sm:max-w-2xl max-h-[94vh] sm:max-h-[90vh] rounded-t-xl sm:rounded-lg shadow-2xl flex flex-col overflow-hidden"
        role="dialog" aria-modal="true" aria-label="Agendamento"
      >
        <div className="px-5 sm:px-7 pt-5 pb-4 border-b border-brand-200 bg-white">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-medium text-ink-mute">{studioConfig.fullName}</span>
              <h3 className="title-caps text-3xl sm:text-4xl">Agendamento</h3>
            </div>
            <button onClick={onClose} aria-label="Fechar" className="p-2 text-ink-soft hover:bg-brand-100 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            {STEPS.map((label, i) => (
              <div key={label} className="flex-1">
                <div className="h-1.5 rounded-full bg-brand-100 overflow-hidden">
                  <div className="h-full bg-brand-500 transition-all duration-500" style={{ width: step > i ? '100%' : '0%' }} />
                </div>
                <span className={`block mt-1.5 text-[10px] sm:text-[11px] font-semibold ${step > i ? 'text-ink-soft' : 'text-brand-300'}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div key={step} className="animate-fade-in p-5 sm:p-7 flex-1 overflow-y-auto">
          {step === 1 && (
            <div className="space-y-5">
              {lockedPro ? (
                <div className="flex items-center gap-3 bg-white border border-brand-200 rounded-lg p-3">
                  <img src={lockedPro.image} alt="" className="w-12 h-12 rounded-full object-cover object-top" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-ink">Agendando com <strong>{lockedPro.name}</strong></p>
                    <p className="text-xs text-ink-mute">{lockedPro.role}</p>
                  </div>
                  <button onClick={() => { setLockedPro(null); setProId(null); }} className="text-xs font-semibold text-brand-700 underline underline-offset-2">Trocar</button>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-white rounded-full border border-brand-200">
                  {areas.map((a) => (
                    <button key={a.id} onClick={() => setAreaId(a.id)} className={`py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${areaId === a.id ? 'bg-brand-800 text-white' : 'text-brand-800 hover:bg-brand-50'}`}>
                      {a.label}
                    </button>
                  ))}
                </div>
              )}
              <p className="text-sm text-ink">Qual serviço você quer fazer?</p>
              {grouped.map(([cat, list]) => (
                <div key={cat}>
                  <h4 className="title-caps text-xl mb-3">{cat}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {list.map((s) => {
                      const sel = service?.id === s.id;
                      return (
                        <button
                          key={s.id}
                          onClick={() => chooseService(s)}
                          className={`text-left p-3.5 rounded-md border transition-all ${sel ? 'border-brand-500 bg-brand-100 ring-2 ring-brand-500/20' : 'border-brand-200 bg-white hover:border-brand-400'}`}
                        >
                          <div className="flex justify-between gap-2">
                            <span className="text-sm text-ink leading-snug">{s.title}</span>
                            {sel && <span className="w-5 h-5 shrink-0 bg-brand-600 text-white rounded-full flex items-center justify-center"><Check className="w-3 h-3" /></span>}
                          </div>
                          <span className="mt-1 block font-serif text-lg font-semibold text-ink-soft">{priceLabel(s)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <p className="text-sm text-ink">Com quem você prefere fazer <strong>{service?.title}</strong>?</p>
              <button
                onClick={() => setProId('any')}
                className={`w-full flex items-center gap-4 p-3 rounded-lg border text-left transition-all ${proId === 'any' ? 'border-brand-500 bg-brand-100 ring-2 ring-brand-500/20' : 'border-dashed border-brand-300 bg-white hover:border-brand-500'}`}
              >
                <span className="w-14 h-14 rounded-full bg-brand-800 flex items-center justify-center shrink-0"><Shuffle className="w-6 h-6 text-champagne" /></span>
                <span className="flex-1 min-w-0">
                  <span className="block font-serif text-xl text-ink leading-tight">Sem preferência</span>
                  <span className="block text-xs text-ink-mute">A Lolla encaixa com quem estiver livre no seu horário</span>
                </span>
                {proId === 'any' && <Check className="w-5 h-5 text-brand-600" />}
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {options.map((p) => {
                  const sel = proId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setProId(p.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${sel ? 'border-brand-500 bg-brand-100 ring-2 ring-brand-500/20' : 'border-brand-200 bg-white hover:border-brand-400'}`}
                    >
                      <img src={p.image} alt="" className="w-14 h-14 rounded-full object-cover object-top shrink-0" />
                      <span className="flex-1 min-w-0">
                        <span className="block font-serif text-lg text-ink leading-tight">{p.name}</span>
                        <span className="block text-[11px] text-ink-mute leading-snug">{p.role}</span>
                      </span>
                      {sel && <Check className="w-5 h-5 text-brand-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <div className="bg-white p-4 rounded-md border border-brand-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  {pro ? <img src={pro.image} alt="" className="w-12 h-12 rounded-full object-cover object-top shrink-0" /> : <span className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center shrink-0"><Petal className="w-7 h-7 text-champagne" /></span>}
                  <div className="min-w-0">
                    <span className="text-[11px] text-brand-600 uppercase font-bold tracking-wider">{service?.category}</span>
                    <p className="font-serif text-xl text-ink leading-tight">{service?.title}</p>
                    <span className="text-xs text-ink-soft">{pro ? `com ${pro.name}` : 'com quem estiver livre'}</span>
                  </div>
                </div>
                <p className="font-serif text-2xl font-semibold text-ink-soft whitespace-nowrap text-right">
                  {service?.from && <span className="block text-[10px] font-sans font-normal text-brand-600">a partir de</span>}
                  {priceLabel({ ...service, from: false })}
                </p>
              </div>
              {(service?.detail || service?.note) && (
                <p className="text-xs text-ink-soft -mt-2">{[service.detail, service.note].filter(Boolean).map((t) => t.replace(/\.$/, '')).join('. ')}.</p>
              )}

              <div className="p-4 rounded-md bg-white border border-brand-200 text-xs text-ink space-y-2">
                <p className="flex items-center gap-2 font-bold text-ink"><Info className="w-4 h-4 text-brand-600" /> Antes de continuar</p>
                <ul className="list-disc list-inside space-y-1 text-ink-soft">
                  {studioConfig.bookingNotes.map((n) => <li key={n}>{n}</li>)}
                </ul>
                <label className="flex items-center gap-2 pt-2 border-t border-brand-100 cursor-pointer">
                  <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-4 h-4 accent-brand-600" />
                  <span className="font-semibold text-ink">Li e estou de acordo.</span>
                </label>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <p className="text-sm text-ink-soft">Escolha o dia e o horário na agenda. Depois toque em <strong className="text-ink">Continuar</strong> para enviar o pedido pelo WhatsApp.</p>
              <div className="rounded-md overflow-hidden border border-brand-200 bg-white h-[440px] relative">
                <p className="absolute inset-0 flex items-center justify-center text-xs text-ink-mute p-6 text-center">Carregando a agenda. É preciso estar conectada à internet.</p>
                <iframe
                  src={`${calUrl}?embed_type=Inline&hide_gdpr_banner=1&background_color=faf8f4&text_color=2a1e17&primary_color=8c6448`}
                  width="100%" height="100%" frameBorder="0" title="Agenda online" className="w-full h-full relative"
                />
              </div>
              <a href={calUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                <ExternalLink className="w-3.5 h-3.5" /> Abrir a agenda em outra aba
              </a>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="w-14 h-14 bg-champagne-light text-champagne-dark rounded-full flex items-center justify-center mx-auto mb-3"><Check className="w-7 h-7" /></div>
                <h4 className="title-caps text-3xl">Quase pronto</h4>
                <p className="text-sm text-ink-soft mt-1">Deixe seu nome e WhatsApp para a Lolla confirmar.</p>
              </div>
              <div className="bg-white p-5 rounded-md border border-brand-200 space-y-3">
                <label className="block">
                  <span className="block text-xs font-semibold text-ink mb-1">Seu nome</span>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Como podemos te chamar?" className="w-full text-sm p-3 rounded-md border border-brand-200 bg-brand-50/50 focus:outline-none focus:ring-2 focus:ring-brand-600" />
                </label>
                <label className="block">
                  <span className="block text-xs font-semibold text-ink mb-1">Seu WhatsApp</span>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(83) 9 0000-0000" className="w-full text-sm p-3 rounded-md border border-brand-200 bg-brand-50/50 focus:outline-none focus:ring-2 focus:ring-brand-600" />
                </label>
                <label className="block">
                  <span className="block text-xs font-semibold text-ink mb-1">Observações (opcional)</span>
                  <textarea rows="2" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={service?.area === 'cabelo' ? 'Ex: cabelo na altura dos ombros, quero iluminar...' : service?.area === 'estetica' ? 'Ex: quero a sobrancelha mais preenchida...' : 'Ex: formato amendoado, cor nude...'} className="w-full text-sm p-3 rounded-md border border-brand-200 bg-brand-50/50 focus:outline-none focus:ring-2 focus:ring-brand-600" />
                </label>
              </div>
              <a
                href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={onClose}
                className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-full shadow-lg shadow-emerald-700/20 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Enviar pelo WhatsApp
              </a>
            </div>
          )}
        </div>

        <div className="px-5 sm:px-7 py-4 border-t border-brand-200 flex items-center justify-between bg-white">
          {step > 1 ? (
            <button onClick={back} className="flex items-center gap-1 text-sm font-semibold text-ink-soft px-3 py-2 rounded-md hover:bg-brand-50">
              <ChevronLeft className="w-4 h-4" /> Voltar
            </button>
          ) : <span />}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] text-brand-600 block">{service?.from ? 'Valor a partir de' : 'Valor'}</span>
              <span className="font-serif text-xl font-semibold text-ink">{service ? priceLabel({ ...service, from: false }) : 'R$ 0'}</span>
            </div>
            {step < 5 && (
              <button
                disabled={!canAdvance} onClick={next}
                className={`flex items-center gap-1.5 px-6 py-3 rounded-full text-sm font-semibold transition-all ${canAdvance ? 'bg-brand-700 hover:bg-brand-600 text-white shadow-md' : 'bg-brand-100 text-brand-300 cursor-not-allowed'}`}
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
