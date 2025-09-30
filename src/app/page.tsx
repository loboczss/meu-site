'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

type Lead = {
  destino: string;
  ida: string;
  volta: string;
  nome?: string;
  whatsapp: string;
};

const DESTINOS = [
  { nome: 'Santorini, Grécia', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80&auto=format&fit=crop', frase: 'Pôr do sol que pinta a memória.' },
  { nome: 'Paris, França',     img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80&auto=format&fit=crop', frase: 'A cidade que transforma passeios em histórias.' },
  { nome: 'Maldivas',          img: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1920&q=80&auto=format&fit=crop', frase: 'Silêncio azul, tempo de sobra e água-turquesa.' },
  { nome: 'Dubai, E.A.U.',     img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80&auto=format&fit=crop', frase: 'Futuro, deserto e experiências 5★.' },
  { nome: 'Nova York, EUA',    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop', frase: 'A cidade que nunca dorme e sempre surpreende.' },
];

const GALERIA = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546539782-6fc531453083?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop',
];

const DEPO = [
  { n: 'Maria Santos', c: 'São Paulo, SP', f: '5',  t: 'Voltei da Europa com sensação de filme. Organização impecável e mimos que fizeram a diferença.' },
  { n: 'João Silva',   c: 'Rio de Janeiro, RJ', f: '12', t: 'Lua de mel nas Maldivas com atendimento que realmente resolve. Experiência 5 estrelas!' },
  { n: 'Ana Costa',    c: 'Brasília, DF', f: '9',  t: 'Time profissional e ágil. Viagem corporativa para Dubai sem estresse — do começo ao fim.' },
];

const Whats = ({ size = 20, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
    <path d="M12.051 21.785a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26C2.171 6.343 6.606 1.91 12.058 1.91a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884Z"/>
  </svg>
);

/* ===== helpers ===== */
const toBR = (iso: string) => (iso ? iso.split('-').reverse().join('/') : '');
const onlyDigits = (v: string) => v.replace(/\D+/g, '');
function maskPhoneBR(v: string) {
  // (DD) 9XXXX-XXXX
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0,2)}) ${d.slice(2)}`;
  if (d.length <= 11) return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}`;
  return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7,11)}`;
}

/* ===== componente principal ===== */
export default function Landing() {
  // slides
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIdx(p => (p + 1) % DESTINOS.length), 5000);
    return () => clearInterval(i);
  }, []);

  // depoimentos
  const [dep, setDep] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setDep(p => (p + 1) % DEPO.length), 6000);
    return () => clearInterval(i);
  }, []);

  // lead (CTA)
  const [lead, setLead] = useState<Lead>({ destino: '', ida: '', volta: '', nome: '', whatsapp: '' });
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [toast, setToast] = useState<string | null>(null);

  // scroll suave global
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = prev; };
  }, []);

  function enviarWhats() {
    const empresa = '5568999872973';
    const msg = `Olá, EVASTUR! Quero uma cotação:
• Destino: ${lead.destino || '—'}
• Ida: ${toBR(lead.ida) || '—'}
• Volta: ${toBR(lead.volta) || '—'}
• Nome: ${lead.nome || '—'}
• Meu WhatsApp: ${onlyDigits(lead.whatsapp) || '—'}

Vim do site.`;
    setToast('Abrindo WhatsApp…');
    setTimeout(() => setToast(null), 2800);
    window.open(`https://wa.me/${empresa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  }

  // navbar links
  const nav = [
    { href: '#home', label: 'Home' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#features', label: 'Por que Evastur' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#cta', label: 'Fale com a gente' },
  ];

  return (
    <main className="bg-white text-neutral-900 overflow-hidden" id="home">
      <style>{`
        /* animações utilitárias */
        @keyframes fade { from{opacity:.3; transform:scale(1.02)} to{opacity:1; transform:scale(1)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes rotate { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        @keyframes halo { 0% {opacity:.6; filter:blur(22px); transform:scale(1);} 50%{opacity:.9; filter:blur(26px); transform:scale(1.06);} 100%{opacity:.6; filter:blur(22px); transform:scale(1);} }
        @keyframes toastIn { from{opacity:0; transform:translateY(10px)} to{opacity:1; transform:translateY(0)} }

        .fade-in { animation: fade .9s ease-out both; }
        .float { animation: float 6s ease-in-out infinite; }
        .toast { animation: toastIn .2s ease-out both; }

        /* logo destacada */
        .logo-wrap { position: relative; display:inline-block; border-radius: 20px; }
        .logo-ring { position:absolute; inset:-8px; border-radius: 26px; background: conic-gradient(from 0deg, #0b63e6, #e0252b, #0b63e6); filter: blur(10px); opacity:.55; animation: rotate 14s linear infinite; }
        .logo-halo { position:absolute; inset:-28px; z-index:-1; border-radius: 38px; background: radial-gradient(60% 60% at 50% 50%, rgba(11,99,230,.28), rgba(224,37,43,.22) 60%, transparent 70%); animation: halo 6s ease-in-out infinite; }
        .logo-inner { position:relative; background:white; border-radius: 16px; padding:10px 14px; box-shadow: 0 18px 50px rgba(16,24,40,.12); }
        .logo-img { filter: drop-shadow(0 8px 30px rgba(11,99,230,.25)); transition: transform .6s ease; }
        .logo-wrap:hover .logo-img { transform: scale(1.02); }

        /* inputs */
        .input { border:1px solid #e5e7eb; background: #fff; color:#111827; }
        .input:focus { border-color:#2563eb; outline:none; box-shadow: 0 0 0 4px rgba(37,99,235,.18); }
        .input-dark { background: #0b1220; border:1px solid rgba(255,255,255,.18); color:#fff; }
        .input-dark::placeholder { color: rgba(255,255,255,.6); }
        .input-dark:focus { border-color:#e11d48; box-shadow: 0 0 0 4px rgba(225,29,72,.18); }

        @media (prefers-reduced-motion: reduce){
          .fade-in,.float{animation:none!important}
        }
      `}</style>

      {/* ===== HEADER FIXO com Logo animada + Navbar ===== */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto flex items-center justify-between max-w-7xl px-6 py-3">
          <div className="flex items-center gap-3">
            <a href="#home" className="group" aria-label="Ir ao topo">
              <div className="logo-wrap">
                <div className="logo-ring" aria-hidden />
                <div className="logo-inner">
                  <div className="logo-halo" aria-hidden />
                  <Image
                    src="/evastur-logo.png"
                    alt="EVASTUR"
                    width={160}
                    height={56}
                    className="logo-img w-[160px] h-auto"
                    priority
                  />
                </div>
              </div>
            </a>
            <span className="hidden lg:inline text-sm font-semibold text-neutral-600">
              Viagens marcantes, zero dor de cabeça.
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-5">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-neutral-700 hover:text-blue-700">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/5568999872973"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-bold hover:bg-neutral-50"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* ===== HERO – slideshow ===== */}
      <section className="relative min-h-[86vh] flex items-center">
        {/* slides */}
        <div className="absolute inset-0">
          {DESTINOS.map((d, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? 'opacity-100' : 'opacity-0'}`}>
              <Image src={d.img} alt={d.nome} fill priority={i===0} sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/70 to-white" />
            </div>
          ))}
        </div>

        {/* conteúdo */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-[1.15fr,1fr] gap-10 items-center">
            <div className="space-y-6 fade-in">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/70 backdrop-blur px-3 py-1 ring-1 ring-neutral-200">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-neutral-700">Atendimento humano + tecnologia</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                Viaje com <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">emoção</span> e planejamento.
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 max-w-2xl">
                Histórias que começam com um clique: a gente cuida de rotas, hotéis, documentos e detalhes — você cuida de colecionar <strong>memórias inesquecíveis</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
                <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 ring-1 ring-blue-200">{DESTINOS[idx].nome}</span>
                <span className="text-neutral-400">•</span>
                <span>{DESTINOS[idx].frase}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Resposta em minutos','Preço justo','Roteiros personalizados','Suporte 24/7'].map(t=>(
                  <span key={t} className="rounded-full bg-white/80 backdrop-blur px-3 py-1 text-sm ring-1 ring-neutral-200">{t}</span>
                ))}
              </div>
            </div>

            {/* Cartão lead compacto */}
            <div className="fade-in rounded-3xl bg-white p-6 md:p-8 shadow-xl ring-1 ring-neutral-200">
              <h2 className="text-xl font-extrabold mb-2">Pronto pra decolar?</h2>
              <p className="text-neutral-600 mb-6">Diga <strong>para onde</strong> e <strong>quando</strong>. Em minutos você recebe ideias de rota, hotéis e valores.</p>
              <div className="grid gap-3">
                <input placeholder="Destino dos sonhos (ex.: Paris)" className="input w-full rounded-xl px-4 py-3"
                  value={lead.destino} onChange={e=>setLead({...lead, destino:e.target.value})}/>
                <div className="grid grid-cols-2 gap-3">
                  <input type="date" min={today} className="input rounded-xl px-4 py-3"
                    value={lead.ida} onChange={e=>setLead({...lead, ida:e.target.value})}/>
                  <input type="date" min={lead.ida||today} className="input rounded-xl px-4 py-3"
                    value={lead.volta} onChange={e=>setLead({...lead, volta:e.target.value})}/>
                </div>
                <input placeholder="Seu nome" className="input w-full rounded-xl px-4 py-3"
                  value={lead.nome} onChange={e=>setLead({...lead, nome:e.target.value})}/>
                <input placeholder="WhatsApp com DDD (ex.: (68) 99999-9999)" inputMode="tel"
                  className="input w-full rounded-xl px-4 py-3"
                  value={lead.whatsapp} onChange={e=>setLead({...lead, whatsapp: maskPhoneBR(e.target.value)})}/>
                <button onClick={enviarWhats}
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-red-600 px-6 py-4 font-extrabold text-white shadow-lg hover:shadow-xl transition">
                  <Whats /> Receber meu plano de viagem
                  <svg width="18" height="18" viewBox="0 0 24 24" className="transition group-hover:translate-x-1"><path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z"/></svg>
                </button>
                <p className="text-xs text-neutral-500">Você será redirecionado ao WhatsApp com a mensagem pronta. Não armazenamos seus dados.</p>
              </div>
            </div>
          </div>
        </div>

        {/* blobs sutis */}
        <div className="pointer-events-none absolute -top-16 -left-16 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl float" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-red-200/40 blur-3xl float" />
      </section>

      {/* ===== MARQUEE serviços ===== */}
      <div className="border-y border-neutral-200 bg-white py-3">
        <div className="whitespace-nowrap overflow-hidden">
          <div className="inline-block animate-[scroll_20s_linear_infinite]" style={{ whiteSpace: 'nowrap' }}>
            {['Passagens','Pacotes','Seguros','Transfers','Corporativo','Lua de Mel','Família','Multidestinos','Roteiros Premium', '•', 'Passagens','Pacotes','Seguros','Transfers','Corporativo','Lua de Mel','Família','Multidestinos','Roteiros Premium'].map((t,i)=>(
              <span key={i} className="mx-6 inline-flex items-center gap-2 text-sm text-neutral-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-red-600" />{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== GALERIA ===== */}
      <section id="galeria" className="py-16 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <header className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black">Lugares que <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">te movem</span></h2>
            <p className="text-neutral-600 mt-2">Paisagens que puxam um “uau!” espontâneo.</p>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALERIA.map((src, i) => (
              <figure key={i} className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
                <Image src={src} alt={`Destino ${i+1}`} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 hover:scale-110" />
                <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 hover:opacity-100 transition" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <header className="text-center mb-12">
            <h3 className="text-4xl font-black">Por que viajar com a EVASTUR?</h3>
            <p className="text-neutral-600 mt-2">Tecnologia que encontra oportunidades. Gente que entende de desejo.</p>
          </header>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t:'Velocidade', d:'Orçamentos em minutos com alternativas inteligentes.', c:'bg-blue-50 text-blue-700' },
              { t:'Cuidado', d:'Detalhes que viram memórias — do assento ao passeio.', c:'bg-red-50 text-red-700' },
              { t:'Confiança', d:'Documentos, seguros e suporte 24/7 sem complicação.', c:'bg-blue-50 text-blue-700' },
              { t:'Curadoria', d:'Roteiros sob medida, longe do óbvio e perto do seu estilo.', c:'bg-red-50 text-red-700' },
              { t:'Preço Justo', d:'Monitoramos múltiplas fontes para ótimos custos.', c:'bg-blue-50 text-blue-700' },
              { t:'Sem Estresse', d:'Você só faz as malas. O resto é com a gente.', c:'bg-red-50 text-red-700' },
            ].map((f,i)=>(
              <div key={i} className="rounded-3xl border border-neutral-200 p-8 shadow-sm hover:shadow-md transition">
                <div className={`inline-flex rounded-xl px-3 py-1 text-sm ${f.c}`}>{f.t}</div>
                <p className="mt-4 text-neutral-700">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section id="depoimentos" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-black mb-10">Quem viajou, recomenda</h3>
          <div className="relative h-80">
            {DEPO.map((d, i) => (
              <div key={i} className={`absolute inset-0 transition-all duration-700 ${dep===i?'opacity-100 scale-100':'opacity-0 scale-95'}`}>
                <div className="bg-white rounded-3xl p-10 shadow-2xl ring-1 ring-neutral-200">
                  <Image src={`https://i.pravatar.cc/120?img=${d.f}`} alt={d.n} width={100} height={100} className="rounded-full mx-auto mb-4 ring-4 ring-blue-200" />
                  <p className="text-xl text-neutral-700 italic mb-4">“{d.t}”</p>
                  <p className="font-bold">{d.n}</p>
                  <p className="text-sm text-neutral-500">{d.c}</p>
                  <div className="mt-3 flex justify-center gap-1 text-yellow-400">
                    {[1,2,3,4,5].map(s => <svg key={s} width="18" height="18" viewBox="0 0 24 24" className="fill-current"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {DEPO.map((_, i) => (
              <button key={i} onClick={()=>setDep(i)} aria-label={`Depoimento ${i+1}`} className={`h-2 rounded-full transition-all ${dep===i?'w-10 bg-blue-600':'w-2 bg-neutral-300'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section id="cta" className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80&auto=format&fit=crop"
            alt="Aventura"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220]/90 via-[#0b1220]/80 to-[#1a0b12]/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold mb-4">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Atendimento rápido
          </div>

          <h3 className="text-5xl md:text-6xl font-black leading-tight">Bora tirar a viagem do papel?</h3>
          <p className="text-xl text-white/85 mt-3">Em minutos, ideias de rota e valores caem no seu WhatsApp.</p>

          <div className="mt-8 grid gap-3 md:grid-cols-4">
            <label className="sr-only" htmlFor="destino">Destino</label>
            <input id="destino" placeholder="Destino" className="input-dark rounded-xl px-4 py-3"
              value={lead.destino} onChange={(e)=>setLead({...lead, destino:e.target.value})}/>

            <label className="sr-only" htmlFor="ida">Ida</label>
            <input id="ida" type="date" min={today} className="input-dark rounded-xl px-4 py-3"
              value={lead.ida} onChange={(e)=>setLead({...lead, ida:e.target.value})}/>

            <label className="sr-only" htmlFor="volta">Volta</label>
            <input id="volta" type="date" min={lead.ida||today} className="input-dark rounded-xl px-4 py-3"
              value={lead.volta} onChange={(e)=>setLead({...lead, volta:e.target.value})}/>

            <label className="sr-only" htmlFor="whats">WhatsApp</label>
            <input id="whats" placeholder="WhatsApp com DDD" inputMode="tel"
              className="input-dark rounded-xl px-4 py-3"
              value={lead.whatsapp} onChange={(e)=>setLead({...lead, whatsapp: maskPhoneBR(e.target.value)})}/>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-[1fr,auto]">
            <label className="sr-only" htmlFor="nome">Seu nome</label>
            <input id="nome" placeholder="Seu nome (opcional)" className="input-dark rounded-xl px-4 py-3"
              value={lead.nome} onChange={(e)=>setLead({...lead, nome:e.target.value})}/>
            <button onClick={enviarWhats}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-red-600 px-8 py-4 font-extrabold text-white shadow-xl hover:shadow-2xl transition">
              <Whats className="text-green-300" />
              Receber proposta no WhatsApp
              <svg width="18" height="18" viewBox="0 0 24 24" className="transition group-hover:translate-x-1"><path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z"/></svg>
            </button>
          </div>

          <p className="text-sm text-white/70 mt-4">Sem burocracia. Sem spam. Só viagens bem pensadas.</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-neutral-200 bg-gray-50 py-10 px-6">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-3 text-center">
          <Image src="/evastur-logo.png" alt="EVASTUR" width={160} height={56} className="opacity-90" />
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} EVASTUR. Viagens marcantes, zero dor de cabeça.</p>
        </div>
      </footer>

      {/* ===== TOAST ===== */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="toast rounded-xl bg-neutral-900 text-white px-4 py-3 shadow-2xl ring-1 ring-neutral-800 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-semibold">{toast}</span>
          </div>
        </div>
      )}
    </main>
  );
}
