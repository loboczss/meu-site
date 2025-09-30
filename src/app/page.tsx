'use client';

import React, { useState, useEffect } from 'react';

// Ícones SVG inline
const Plane = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);
const Globe = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const Shield = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const Clock = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const Star = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const CheckCircle = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const ArrowRight = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);
const Sparkles = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 8l-2 6-6-2 2-6 6 2z" />
  </svg>
);
const Heart = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const Users = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const TrendingUp = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const Camera = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
const MapPin = ({ size = 24, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function EvasturLanding() {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const destInterval = setInterval(() => setCurrentDestination(prev => (prev + 1) % destinations.length), 4500);
    const testInterval = setInterval(() => setCurrentTestimonial(prev => (prev + 1) % 3), 6000);
    return () => { clearInterval(destInterval); clearInterval(testInterval); };
  }, []);

  // ===== Imagens novas — visuais premium =====
  const destinations = [
    {
      name: 'Paris',
      country: 'França',
      image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1600&q=80&auto=format&fit=crop',
      desc: 'A cidade luz — clássica, romântica e inesquecível.'
    },
    {
      name: 'Maldivas',
      country: 'Oceano Índico',
      image: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1200&q=80&auto=format&fit=crop',
      desc: 'Água turquesa, bangalôs sobre o mar e zero pressa.'
    },
    {
      name: 'Dubai',
      country: 'Emirados Árabes',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1600&q=80&auto=format&fit=crop',
      desc: 'Arquitetura futurista, deserto e experiências 5★.'
    },
    {
      name: 'Santorini',
      country: 'Grécia',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80&auto=format&fit=crop',
      desc: 'Casas brancas, mar azul e pores do sol antológicos.'
    },
    {
      name: 'Nova York',
      country: 'Estados Unidos',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80&auto=format&fit=crop',
      desc: 'A cidade que nunca dorme — e sempre surpreende.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <style>{`
        /* ===== Animações elegantes e responsivas ===== */
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
        @keyframes slideIn { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes scaleIn { from{opacity:0;transform:scale(.92)} to{opacity:1;transform:scale(1)} }
        @keyframes shimmer { 0%{background-position:-1000px 0} 100%{background-position:1000px 0} }
        @keyframes rotate { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        @keyframes kenburns { 0%{transform:scale(1) translateZ(0)} 100%{transform:scale(1.12) translateZ(0)} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 0 rgba(0,0,0,0)} 50%{box-shadow:0 20px 80px rgba(11,99,230,.25)} }
        @keyframes halo {
          0% {opacity:.65; filter:blur(24px); transform:scale(1);}
          50%{opacity:.9; filter:blur(28px); transform:scale(1.06);}
          100%{opacity:.65; filter:blur(24px); transform:scale(1);}
        }
        @keyframes tiltHover { 0%,100%{transform:rotateX(0) rotateY(0)} 50%{transform:rotateX(2deg) rotateY(-2deg)} }

        /* Reduzir movimento para acessibilidade */
        @media (prefers-reduced-motion: reduce) {
          .animate-slide-in, .animate-fade-in, .animate-scale-in, .kenburns, .hover-lift, .logo-ring, .logo-halo { animation: none !important; transition: none !important; }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slide-in { animation: slideIn .8s ease-out forwards; opacity:0; }
        .animate-fade-in { animation: fadeIn 1.2s ease-out forwards; opacity:0; }
        .animate-scale-in { animation: scaleIn .6s ease-out forwards; opacity:0; }

        .gradient-blue-red { background: linear-gradient(135deg, #0b63e6 0%, #e0252b 100%); }
        .gradient-text {
          background: linear-gradient(135deg, #0b63e6 0%, #e0252b 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .shimmer-effect { background: linear-gradient(90deg, transparent, rgba(255,255,255,.85), transparent); background-size: 1000px 100%; animation: shimmer 2.5s infinite; }

        .hover-lift { transition: transform .5s cubic-bezier(.2,.85,.2,1), box-shadow .5s ease; }
        .hover-lift:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 30px 60px rgba(11,99,230,.25); }

        .image-zoom { transition: transform 1.1s ease; transform: translateZ(0); }
        .image-zoom:hover { transform: scale(1.08); }

        .kenburns { animation: kenburns 10s ease-in-out forwards; }
        .tilt-sway { animation: tiltHover 8s ease-in-out infinite; transform-style: preserve-3d; }

        /* ===== Logo com destaque elegante ===== */
        .logo-wrap { position: relative; display:inline-block; border-radius: 24px; overflow: visible; }
        .logo-ring {
          position:absolute; inset:-6px; border-radius: 28px;
          background: conic-gradient(from 0deg, #0b63e6, #e0252b, #0b63e6);
          filter: blur(10px); opacity:.45; animation: rotate 12s linear infinite, glowPulse 6s ease-in-out infinite;
        }
        .logo-inner {
          position:relative; background:white; border-radius: 20px; padding:18px 22px;
          box-shadow: 0 20px 60px rgba(16, 24, 40, .12);
        }
        .logo-halo {
          content:""; position:absolute; inset:-30px; z-index:-1;
          background: radial-gradient(60% 60% at 50% 50%, rgba(11,99,230,.25), rgba(224,37,43,.18) 60%, transparent 70%);
          border-radius: 48px; animation: halo 6s ease-in-out infinite;
        }
        .logo-img { filter: drop-shadow(0 6px 20px rgba(11, 99, 230, .25)); transition: transform .6s ease; }
        .logo-wrap:hover .logo-img { transform: scale(1.02); }

        /* Carrossel crossfade + slide sutil */
        .slide { transition: opacity .9s ease, transform .9s ease; }
        .slide-active { opacity:1; transform: translateX(0) scale(1); }
        .slide-inactive { opacity:0; transform: translateX(4%) scale(.98); }

        /* Botões de pager */
        .dot { transition: all .3s ease; }
      `}</style>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
        {/* Blobs decorativos */}
        <div className="absolute -top-16 -left-20 w-[28rem] h-[28rem] bg-blue-200/60 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-float" />
        <div className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] bg-red-200/60 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[24rem] h-[24rem] bg-purple-200/50 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda */}
          <div className="space-y-8">
            {/* Logo com halo e anel animado */}
            <div className="animate-scale-in">
              <div className="logo-wrap tilt-sway">
                <div className="logo-ring" aria-hidden />
                <div className="logo-inner">
                  <div className="logo-halo" aria-hidden />
                  <img
                    src="/evastur-logo.png"
                    alt="EVASTUR — sua viagem, nosso compromisso"
                    className="logo-img w-80 h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-black leading-tight animate-slide-in" style={{ animationDelay: '0.15s' }}>
                Viagens que
                <span className="block gradient-text">mudam sua vida</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                Do sonho ao embarque em <span className="font-bold text-blue-600">minutos</span>.
                <br />Tecnologia + atendimento humano 24/7.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in" style={{ animationDelay: '0.45s' }}>
              <button className="group relative px-8 py-5 gradient-blue-red text-white rounded-2xl text-lg font-bold shadow-2xl hover-lift overflow-hidden">
                <div className="absolute inset-0 shimmer-effect" />
                <span className="relative flex items-center justify-center gap-2">
                  <Sparkles size={22} />
                  Planejar minha viagem
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
                </span>
              </button>

              <a href="https://wa.me/5599999999999" target="_blank" rel="noreferrer"
                 className="px-8 py-5 bg-white border-2 border-gray-200 rounded-2xl text-lg font-bold hover-lift flex items-center justify-center gap-2 shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: Clock, text: 'Resposta em minutos' },
                { icon: Shield, text: 'Pagamento seguro' },
                { icon: Star, text: '500+ clientes felizes' }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md border border-gray-100">
                  <badge.icon size={18} className="text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Carrossel de destinos — crossfade + Ken Burns */}
          <div className="relative h-[620px] animate-scale-in" style={{ animationDelay: '0.25s' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none" />
            {destinations.map((dest, i) => (
              <div
                key={i}
                className={`absolute inset-0 slide ${currentDestination === i ? 'slide-active' : 'slide-inactive'}`}
              >
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={dest.image}
                    alt={`${dest.name}, ${dest.country}`}
                    className={`w-full h-full object-cover image-zoom ${currentDestination === i ? 'kenburns' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={20} />
                      <span className="text-sm font-semibold">{dest.country}</span>
                    </div>
                    <h3 className="text-5xl font-black mb-2 drop-shadow-[0_6px_20px_rgba(0,0,0,.35)]">{dest.name}</h3>
                    <p className="text-xl opacity-95">{dest.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {destinations.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir para ${destinations[i].name}`}
                  onClick={() => setCurrentDestination(i)}
                  className={`dot rounded-full ${currentDestination === i ? 'w-12 h-3 bg-white' : 'w-3 h-3 bg-white/60'} `}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Destinos que <span className="gradient-text">inspiram</span>
            </h2>
            <p className="text-xl text-gray-600">Experiências únicas em mais de 80 países</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop', // Bali
              'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1200&q=80&auto=format&fit=crop', // Tóquio
              'https://images.unsplash.com/photo-1758846182572-2bf2a35714d1?q=80&w=2071&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop', // Londres
              'https://images.unsplash.com/photo-1758754169722-620d36fcb76b?q=80&w=687&auto=format&fit=crop', // Rio de Janeiro
              'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80&auto=format&fit=crop', // Islândia
              'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop', // Cairo
              'https://images.unsplash.com/photo-1546539782-6fc531453083?w=1200&q=80&auto=format&fit=crop', // Machu Picchu
            ].map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl shadow-lg hover-lift group">
                <img src={img} alt={`Destino ${i + 1}`} className="w-full h-full object-cover image-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Camera className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity" size={40} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Por que <span className="gradient-text">EVASTUR</span>?
            </h2>
            <p className="text-xl text-gray-600">Tecnologia e humanização em perfeita harmonia</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Velocidade Absurda', desc: 'Orçamentos personalizados em minutos. IA + especialistas humanos trabalhando por você.', color: 'blue' },
              { icon: Shield, title: 'Proteção Total', desc: 'Seguros inclusos, documentação verificada e suporte 24/7. Viaje com tranquilidade absoluta.', color: 'red' },
              { icon: Heart, title: 'Feito Para Você', desc: 'Roteiros customizados com base no seu perfil. Cada viagem é única, como você.', color: 'blue' },
              { icon: TrendingUp, title: 'Melhor Custo-Benefício', desc: 'Monitoramos milhares de fontes para garantir o preço mais justo.', color: 'red' },
              { icon: Users, title: 'Time de Experts', desc: 'Consultores que já rodaram o mundo e conhecem os segredos de cada lugar.', color: 'blue' },
              { icon: Globe, title: 'Sem Fronteiras', desc: 'Do Nordeste à Patagônia. Do Caribe à Ásia. Onde você quiser ir.', color: 'red' }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-lg hover-lift border border-gray-100">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color === 'blue' ? 'bg-blue-100' : 'bg-red-100'}`}>
                  <feature.icon size={32} className={feature.color === 'blue' ? 'text-blue-600' : 'text-red-600'} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-16">
            Histórias <span className="gradient-text">reais</span>
          </h2>

          <div className="relative h-80">
            {[
              { name: 'Maria Santos', text: 'Paris sempre foi meu sonho. A EVASTUR cuidou de TUDO — visto, hotel, transfers, até dicas de restaurantes. Voltei apaixonada!', img: '5', location: 'São Paulo, SP' },
              { name: 'João Silva', text: 'Lua de mel nas Maldivas. Preço justo, resort 5★ e quando tive problema com bagagem, resolveram em 15 minutos. Inacreditável!', img: '12', location: 'Rio de Janeiro, RJ' },
              { name: 'Ana Costa', text: 'Viagem corporativa para Dubai com 12 pessoas. Organização impecável e suporte que responde SEMPRE. Profissionalismo total!', img: '9', location: 'Brasília, DF' }
            ].map((test, i) => (
              <div key={i} className={`absolute inset-0 transition-all duration-700 ${currentTestimonial === i ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="bg-white rounded-3xl p-10 shadow-2xl">
                  <img src={`https://i.pravatar.cc/120?img=${test.img}`} alt={test.name} className="w-24 h-24 rounded-full mx-auto mb-6 ring-4 ring-blue-200 shadow-xl" />
                  <p className="text-2xl mb-6 text-gray-700 italic leading-relaxed">"{test.text}"</p>
                  <p className="font-bold text-xl">{test.name}</p>
                  <p className="text-gray-500">{test.location}</p>
                  <div className="flex justify-center gap-1 mt-4">{[1,2,3,4,5].map(star => (<Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />))}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {[0, 1, 2].map(i => (
              <button key={i} onClick={() => setCurrentTestimonial(i)} className={`rounded-full ${currentTestimonial === i ? 'w-12 h-3 bg-blue-600' : 'w-3 h-3 bg-gray-300'} transition-all`} aria-label={`Depoimento ${i+1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, value: '500+', label: 'Clientes Satisfeitos' },
            { icon: Globe, value: '80+', label: 'Países Atendidos' },
            { icon: Star, value: '4.9', label: 'Avaliação Média' },
            { icon: TrendingUp, value: '98%', label: 'Taxa de Recomendação' }
          ].map((stat, i) => (
            <div key={i} className="space-y-3">
              <stat.icon className="mx-auto text-blue-600" size={40} />
              <div className="text-5xl font-black gradient-text">{stat.value}</div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 opacity-5" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Sua próxima <span className="block gradient-text">aventura épica</span> começa aqui
          </h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">Orçamento personalizado em minutos. Sem compromisso. Sem pegadinhas.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="group relative px-12 py-6 gradient-blue-red text-white rounded-2xl text-xl font-bold shadow-2xl hover-lift overflow-hidden">
              <div className="absolute inset-0 shimmer-effect" />
              <span className="relative flex items-center justify-center gap-3">
                <Sparkles size={24} />
                Solicitar orçamento gratuito
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </span>
            </button>
          </div>

          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-green-700">5 pessoas solicitaram orçamento na última hora</span>
          </div>
        </div>
      </section>

      {/* Footer — logo mais nítida */}
      <footer className="border-t border-gray-200 bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="logo-wrap mb-6" style={{ transform: 'scale(.9)' }}>
            <div className="logo-ring" aria-hidden />
            <div className="logo-inner">
              <div className="logo-halo" aria-hidden />
              <img src="/evastur-logo.png" alt="EVASTUR" className="logo-img w-48 h-auto mx-auto" />
            </div>
          </div>
          <p className="text-gray-600 mb-6">© 2025 EVASTUR. Transformando sonhos em passagens.</p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600 transition">Termos de Uso</a>
            <a href="#" className="hover:text-blue-600 transition">Privacidade</a>
            <a href="#" className="hover:text-blue-600 transition">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
