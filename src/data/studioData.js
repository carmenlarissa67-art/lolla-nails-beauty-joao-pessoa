// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE: LOLLA NAILS & BEAUTY (JOÃO PESSOA)
// Toda a personalização do site fica neste arquivo.
//
// Salão com 10 profissionais em 3 áreas (unhas, cabelo e estética).
// Fontes: pasta da Lolla no Drive (catálogo de valores, equipe, dados do
// WhatsApp Business e bio do Instagram @lollanailsbeauty).
//
// Valores: todos REAIS, tirados do catálogo da Lolla. Os que são "a partir de"
// estão marcados com from: true.
// A CONFIRMAR antes da entrega: qual WhatsApp recebe os agendamentos (Business
// 83 99685-1450 ou o da bio 83 99151-4141), o horário (Business diz 08h às 20h,
// bio diz 09h às 19h) e as regras de atraso/desistência. Endereço do Google e do
// WhatsApp Business (a bio do Instagram cita R. Casimiro de Abreu, 56, loja 12).
// ==============================================================================

import imgOmbre from '../assets/img/cabelo-ombre.webp';
import imgMorena from '../assets/img/cabelo-morena-iluminada.webp';
import imgPerolada from '../assets/img/cabelo-mechas-peroladas.webp';
import imgLilas from '../assets/img/unhas-lilas.webp';
import imgNudeLinha from '../assets/img/unhas-nude-linha.webp';
import imgBabyBoomer from '../assets/img/unhas-baby-boomer.webp';
import imgFrancesinha from '../assets/img/unhas-francesinha.webp';
import imgCoracoes from '../assets/img/unhas-coracoes.webp';
import pAliny from '../assets/img/equipe-aliny.webp';
import pDiana from '../assets/img/equipe-diana.webp';
import pRafaela from '../assets/img/equipe-rafaela.webp';
import pAnirlane from '../assets/img/equipe-anirlane.webp';
import pPriscila from '../assets/img/equipe-priscila.webp';
import pPoliana from '../assets/img/equipe-poliana.webp';
import pSuellen from '../assets/img/equipe-suellen.webp';
import pFernando from '../assets/img/equipe-fernando.webp';
import pJoao from '../assets/img/equipe-joao.webp';
import pLuciana from '../assets/img/equipe-luciana.webp';

export const images = {
  ombre: imgOmbre, morena: imgMorena, perolada: imgPerolada,
  lilas: imgLilas, nudeLinha: imgNudeLinha, babyBoomer: imgBabyBoomer,
  francesinha: imgFrancesinha, coracoes: imgCoracoes,
};

const WHATSAPP = "5583996851450";

export const studioConfig = {
  name: "Lolla",
  fullName: "Lolla Nails & Beauty",
  tagline: "Unhas, cabelo e estética no Techne Mall Brisamar",
  subtitle:
    "Dez profissionais, um só endereço. Veja os valores do catálogo, escolha com quem quer ser atendida e reserve seu horário pelo celular.",
  city: "João Pessoa, PB",
  neighborhood: "Brisamar",
  addressShort: "Techne Mall Brisamar, loja 12",
  address: "Techne Mall Brisamar, R. Maria Facunda de Oliveira Dias, 56, loja 12, Brisamar, João Pessoa - PB, 58033-100",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Lolla+Nails+Beauty+Techne+Mall+Brisamar+João+Pessoa",
  whatsappNumber: WHATSAPP,
  whatsappDisplay: "(83) 99685-1450",
  instagramHandle: "@lollanailsbeauty",
  instagramUrl: "https://www.instagram.com/lollanailsbeauty",
  followers: "43 mil",
  googleRating: "4,9",
  googleReviews: "379",
  // Agenda da demo. Na entrega vai o Calendly da Lolla.
  calendlyUrl: "https://calendly.com/carbosalarissa/30min",
  workingHours: [
    { days: "Segunda a sexta", hours: "08h às 20h" },
    { days: "Sábado", hours: "08h às 19h" },
    { days: "Domingo", hours: "Fechado" },
  ],
  workingHoursShort: "Seg a sex 08h às 20h, sáb até 19h",
  paymentNote: "O horário fica reservado quando a Lolla confirmar pelo WhatsApp.",
  bookingNotes: [
    "Atendimento com hora marcada. Chegue uns 10 minutinhos antes.",
    "Se precisar desmarcar, avise com antecedência para liberar o horário.",
    "Valores \"a partir de\" são confirmados pela profissional depois da avaliação.",
  ],

  areas: [
    { id: "unhas", label: "Unhas", eyebrow: "Mãos e pés", intro: "Da manicure do dia a dia ao banho de gel. A cutilagem já vem inclusa nos serviços em gel." },
    { id: "cabelo", label: "Cabelo", eyebrow: "Cor, corte e tratamento", intro: "Tratamentos Joico, Sebastian, L'Oréal, Truss, L'anza e Wella, todos com escova de presente." },
    { id: "estetica", label: "Estética", eyebrow: "Sobrancelhas, cílios e make", intro: "Design de sobrancelhas, micropigmentação, lash lifting e maquiagem." },
  ],

  // ---------------------------------------------------------------------------
  // EQUIPE (fotos e textos dos posts "Conheça nossa equipe")
  // ---------------------------------------------------------------------------
  professionals: [
    { id: "aliny", name: "Aliny Lacerda", firstName: "Aliny", area: "unhas", role: "Nail designer, estrutura e acabamento premium", image: pAliny },
    { id: "priscila", name: "Priscila Ribeiro", firstName: "Priscila", area: "unhas", role: "Tendências e nail design", image: pPriscila },
    { id: "poliana", name: "Poliana Gomes", firstName: "Poliana", area: "unhas", role: "Estrutura e alta durabilidade", image: pPoliana },
    { id: "suellen", name: "Suellen Kissia", firstName: "Suellen", area: "unhas", role: "Estética minimalista e saúde das unhas", image: pSuellen },
    { id: "rafaela", name: "Rafaela Martins", firstName: "Rafaela", area: "unhas", role: "Cuidados e spa dos pés", image: pRafaela },
    { id: "fernando", name: "Fernando Carvalho", firstName: "Fernando", area: "cabelo", role: "Cor, cortes, penteados e maquiagem", image: pFernando, alsoDoes: ["maquiagem"] },
    { id: "joao", name: "João Rodrigues", firstName: "João", area: "cabelo", role: "Cortes, cores, visagismo e tricologia", image: pJoao },
    { id: "luciana", name: "Luciana França", firstName: "Luciana", area: "cabelo", role: "Escova e tratamentos", image: pLuciana },
    { id: "anirlane", name: "Anirlane Romênia", firstName: "Anirlane", area: "estetica", role: "Estética facial e design de sobrancelhas", image: pAnirlane },
    { id: "diana", name: "Diana Gouveia", firstName: "Diana", area: "estetica", role: "Estética 360° e bem-estar", image: pDiana },
  ],

  // ---------------------------------------------------------------------------
  // SERVIÇOS (catálogo de valores da Lolla). pros = quem atende (opcional;
  // sem pros, atende toda a equipe da área).
  // ---------------------------------------------------------------------------
  categories: [
    {
      id: "maos-pes", area: "unhas", title: "Mãos e pés",
      note: "Esmaltação simples. Desencravar unhas não está incluso.",
      items: [
        { id: "manicure", title: "Manicure", price: 35, detail: "Cutilagem e esmaltação simples" },
        { id: "pedicure", title: "Pedicure", price: 35, detail: "Cutilagem, esfoliação, hidratação e esmaltação" },
        { id: "mao-pe", title: "Manicure e pedicure", price: 60, popular: true, detail: "Cutilagem, esfoliação do pé e hidratação" },
        { id: "mao-pe-blindagem", title: "Manicure, pedicure e blindagem", price: 100, detail: "Blindagem da esmaltação tradicional nas mãos" },
      ],
    },
    {
      id: "spa-pes", area: "unhas", title: "Spa dos pés",
      note: "Desencravar unhas não está incluso.",
      items: [
        { id: "spa-detox", title: "Spa detox", price: 120, detail: "Retirada das células mortas, esfoliação, hidratação e esmaltação" },
        { id: "spa-relaxante", title: "Spa relaxante dos pés", price: 130, detail: "Escalda-pés e massagem na máquina shiatsu" },
        { id: "mao-spa-detox", title: "Manicure e spa detox", price: 155, detail: "Mãos completas e spa detox nos pés" },
      ],
    },
    {
      id: "gel", area: "unhas", title: "Gel e alongamento",
      note: "Cutilagem grátis. Francesa, arte, formatos e reposição de unhas são à parte.",
      items: [
        { id: "banho-gel", title: "Banho de gel (1ª colocação)", price: 140, popular: true },
        { id: "manut-banho-gel", title: "Manutenção do banho de gel", price: 125 },
        { id: "manut-gel", title: "Manutenção em gel", price: 125 },
        { id: "manut-acrilico", title: "Manutenção acrílico ou fibra", price: 135 },
        { id: "gel-mao-pe", title: "Manicure em gel e pedicure em gel", price: 190, detail: "Cutilagem, pedicure e esmaltação em gel" },
      ],
    },
    {
      id: "corte", area: "cabelo", title: "Corte e finalização",
      items: [
        { id: "corte", title: "Corte de cabelo", price: 150, from: true, pros: ["fernando", "joao"] },
        { id: "escova", title: "Escova lisa ou modelada", price: 50, from: true },
        { id: "baby-liss", title: "Baby liss", price: 95, from: true },
        { id: "penteado", title: "Penteado", price: 110, from: true, pros: ["fernando"] },
        { id: "lavagem", title: "Lavagem especial", price: 55, from: true },
      ],
    },
    {
      id: "cor", area: "cabelo", title: "Cor e alisamento",
      note: "A coloração é avaliada pela profissional. Linhas Wella, Igora e Gloss.",
      items: [
        { id: "coloracao", title: "Coloração capilar", price: 150, from: true, popular: true, pros: ["fernando", "joao"] },
        { id: "selagem", title: "Selagem ou taninoplastia Salvatore", price: 290, from: true },
        { id: "botox", title: "Botox orgânico para loiras e morenas", price: 280, from: true },
      ],
    },
    {
      id: "tratamentos", area: "cabelo", title: "Tratamentos",
      note: "Todos com escova de presente. A linha é indicada pela profissional.",
      items: [
        { id: "joico", title: "Hidratação Joico", price: 180, from: true },
        { id: "sebastian", title: "Hidratação Sebastian", price: 180, from: true },
        { id: "loreal", title: "Tratamento L'Oréal", price: 160, from: true },
        { id: "truss", title: "Tratamento Truss", price: 180, from: true },
        { id: "lanza", title: "Tratamento L'anza", price: 190, from: true },
        { id: "wella", title: "Tratamento Wella", price: 150, from: true },
      ],
    },
    {
      id: "produto-cliente", area: "cabelo", title: "Com o seu produto",
      items: [
        { id: "aplic-coloracao", title: "Aplicação da sua coloração", price: 80 },
        { id: "aplic-mascara", title: "Aplicação do seu shampoo e máscara", price: 35 },
      ],
    },
    {
      id: "sobrancelhas", area: "estetica", title: "Sobrancelhas",
      items: [
        { id: "design-pinca", title: "Design de sobrancelhas na pinça", price: 60 },
        { id: "design-linha", title: "Design de sobrancelhas na linha", price: 65 },
        { id: "design-henna", title: "Design com henna", price: 85, popular: true },
        { id: "design-tintura", title: "Design com tintura", price: 110 },
        { id: "brow-lamination", title: "Brow lamination", price: 149.9, detail: "O design de sobrancelhas vem de presente" },
        { id: "micro", title: "Micropigmentação", price: 450, detail: "Primeiro retoque grátis", pros: ["anirlane"] },
      ],
    },
    {
      id: "cilios-make", area: "estetica", title: "Cílios e maquiagem",
      items: [
        { id: "lash-lifting", title: "Lash lifting", price: 139.9, detail: "Tintura dos cílios grátis" },
        { id: "maquiagem", title: "Maquiagem", price: 180, pros: ["fernando"] },
      ],
    },
  ],

  policies: [
    { title: "Onde fica", description: "No Techne Mall Brisamar, loja 12. É só perguntar pela Lolla na entrada." },
    { title: "Pontualidade", description: "Chegue uns 10 minutinhos antes. Assim o seu atendimento começa na hora certa." },
    { title: "Desistência", description: "Imprevistos acontecem. Avise com antecedência pelo WhatsApp para a gente liberar o horário." },
    { title: "Valores a partir de", description: "Em cabelo, o valor final depende do comprimento e da avaliação. A profissional confirma antes de começar." },
  ],

  gallery: [
    { url: imgBabyBoomer, tag: "Baby boomer", area: "Unhas" },
    { url: imgOmbre, tag: "Morena iluminada", area: "Cabelo" },
    { url: imgFrancesinha, tag: "Francesinha amendoada", area: "Unhas" },
    { url: imgPerolada, tag: "Mechas peroladas", area: "Cabelo" },
    { url: imgCoracoes, tag: "Corações e pedrarias", area: "Unhas" },
    { url: imgLilas, tag: "Lilás quadrada", area: "Unhas" },
    { url: imgMorena, tag: "Cachos com brilho", area: "Cabelo" },
    { url: imgNudeLinha, tag: "Nude com filete", area: "Unhas" },
  ],
};

export const { professionals, categories, areas } = studioConfig;
export const getPro = (id) => professionals.find((p) => p.id === id);
export const getArea = (id) => areas.find((a) => a.id === id);

// Lista "achatada" de todos os serviços
export const allServices = categories.flatMap((cat) =>
  cat.items.map((item) => ({ ...item, category: cat.title, categoryId: cat.id, area: cat.area, note: cat.note }))
);

// Quem atende um serviço
export const prosFor = (service) => {
  if (!service) return [];
  if (service.pros) return service.pros.map(getPro);
  return professionals.filter((p) => p.area === service.area);
};

export const formatPrice = (value) => `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
export const priceLabel = (s) => `${s.from ? "a partir de " : ""}${formatPrice(s.price).replace(",00", "")}`;
