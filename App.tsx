
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Zap, 
  ArrowRight,
  Menu,
  X,
  CheckCheck,
  Phone,
  Video,
  ChevronLeft,
  Send,
  Smile,
  Check,
  Sparkles,
  Bot,
  Calendar,
  ShieldCheck,
  MessageSquare,
  TrendingUp,
  Star,
  Users,
  Plus,
  Minus,
  BookX,
  Hourglass,
  CalendarOff,
  Cpu,
  BellRing,
  Coins,
  Lock,
  Crown,
  Layout,
  ExternalLink
} from 'lucide-react';

const WHATSAPP_URL = "https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S";
const FORM_URL = "https://forms.gle/FCf47e32RiNTDi8cA";

// Custom Hook para revelar elementos no scroll
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const Badge = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] sm:text-xs font-black uppercase tracking-[0.12em] text-emerald-600 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', className = '', href, onClick, ...props }: any) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty('--mouse-x', `${x}px`);
    btnRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const variants: any = {
    primary: "bg-slate-900 text-white shadow-xl hover:shadow-slate-900/20",
    emerald: "bg-[#10b981] text-white shadow-[0_20px_40px_-15px_rgba(16,185,129,0.35)] hover:bg-[#0da673]",
    outline: "border-2 border-slate-200 text-slate-900 hover:bg-slate-50",
    white: "bg-white text-emerald-600 shadow-xl hover:bg-slate-50"
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick(e);
    if (href) {
      if (href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.open(href, '_blank');
      }
    }
  };

  return (
    <button 
      ref={btnRef}
      className={`botaoxper group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold transition-all duration-300 transform active:scale-95 ${variants[variant]} ${className}`} 
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

const WhatsAppMockup = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev < 2 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-[#efe7de] flex flex-col font-sans relative overflow-hidden text-left select-none shadow-inner">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>
      <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between shadow-md relative z-10">
        <div className="flex items-center gap-3">
          <ChevronLeft size={18} className="text-white/70" />
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center border-2 border-white/20 shadow-sm">
               <Bot size={20} />
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#075e54] rounded-full"></div>
          </div>
          <div>
            <h4 className="text-[14px] font-bold leading-none">Fluxora Bot</h4>
            <span className="text-[10px] opacity-80 font-medium mt-0.5 block">online</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-4 space-y-4 overflow-y-auto relative z-10">
        <div className="flex justify-center mb-6">
          <span className="bg-[#d1e4fc] text-[9px] text-slate-600 px-3 py-1 rounded-lg font-bold uppercase shadow-sm">HOJE</span>
        </div>
        
        {/* Mensagem do Usuário */}
        <div className={`flex flex-col items-end transition-all duration-500 ${step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-[#dcf8c6] p-3 rounded-2xl rounded-tr-none shadow-sm text-[12px] text-slate-800 max-w-[85%] border border-emerald-100/50">
            <p>Quero marcar barba e cabelo para as 15h. 🇦🇴</p>
            <p className="text-[9px] text-slate-500 text-right mt-1">10:42</p>
          </div>
        </div>

        {/* Mensagem do Bot */}
        <div className={`flex flex-col items-start transition-all duration-500 delay-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md text-[12px] text-slate-800 border border-slate-100">
            <p className="font-bold text-slate-900 mb-2">Olá! Confirmado. Barbeiro Nelson disponível às 15:00. Deseja agendar?</p>
            <div className="flex gap-2 my-2">
              <span className="bg-emerald-50 text-emerald-600 text-[10px] px-3 py-1.5 rounded-full font-bold border border-emerald-100">SIM, CONFIRMAR</span>
              <span className="bg-slate-50 text-slate-400 text-[10px] px-3 py-1.5 rounded-full font-bold border border-slate-100">VER OUTROS</span>
            </div>
            <p className="text-[9px] text-slate-400 text-right">10:42</p>
          </div>
        </div>

        {/* Confirmação Final */}
        <div className={`flex flex-col items-start transition-all duration-500 delay-1000 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-md text-[12px] text-slate-800 border border-slate-100">
            <p>Feito! ✅ Marcação confirmada. Enviamos um lembrete 30min antes.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#f0f2f5] p-3 flex items-center gap-3 relative z-10 border-t border-slate-200">
        <div className="flex-1 bg-white rounded-full px-5 py-2 flex items-center gap-3 shadow-sm border border-slate-300/30">
          <Smile size={20} className="text-slate-400" />
          <span className="text-[12px] text-slate-400 font-medium">Escreva uma mensagem...</span>
        </div>
        <div className="w-11 h-11 rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-lg">
          <Send size={18} fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

const FAQItemComponent: React.FC<{ q: string, a: string, index: number }> = ({ q, a, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mb-4 transition-all duration-300 rounded-2xl reveal ${isOpen ? 'bg-white shadow-xl' : 'bg-slate-50/50'} border border-slate-100`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-base font-bold text-slate-900">{q}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-200 text-slate-500'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-sm text-slate-500 leading-relaxed font-medium">
          {a}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-white selection:bg-emerald-100 ${isMenuOpen ? 'h-screen overflow-hidden' : ''}`}>
      
      {/* Header Fixed */}
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6 md:py-8'}`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className={`px-6 py-4 rounded-3xl flex items-center justify-between transition-all duration-500 ${scrolled ? 'header-glass shadow-lg' : 'bg-transparent'}`}>
            <a href="#" className="flex items-center gap-2 group cursor-pointer" onClick={(e) => smoothScroll(e, '#home')}>
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg rotate-3 group-hover:rotate-0 transition-transform">F</div>
              <span className={`text-xl font-black tracking-tighter transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>Fluxora</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-10 text-sm font-bold">
              <a href="#problema" onClick={(e) => smoothScroll(e, '#problema')} className={`${scrolled ? 'text-slate-600' : 'text-white/80'} hover:text-emerald-500 transition-colors`}>Problema</a>
              <a href="#solucao" onClick={(e) => smoothScroll(e, '#solucao')} className={`${scrolled ? 'text-slate-600' : 'text-white/80'} hover:text-emerald-500 transition-colors`}>Solução</a>
              <a href="#planos" onClick={(e) => smoothScroll(e, '#planos')} className={`${scrolled ? 'text-slate-600' : 'text-white/80'} hover:text-emerald-500 transition-colors`}>Preços</a>
              <Button variant={scrolled ? 'primary' : 'white'} className="py-2.5 px-6 text-xs uppercase" href={FORM_URL}>Teste Grátis</Button>
            </nav>

            <button className={`md:hidden p-3 rounded-2xl ${scrolled ? 'bg-slate-100 text-slate-900' : 'bg-white text-slate-900 shadow-md'}`} onClick={() => setIsMenuOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden hero-grid">
          <div className="absolute top-0 right-0 w-full md:w-[45%] h-full bg-slate-900 hidden md:block rounded-l-[120px] z-10 shadow-[-50px_0_100px_rgba(0,0,0,0.1)]"></div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-20">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 text-center md:text-left reveal">
                <Badge className="mb-6">
                  <Star size={14} className="fill-emerald-500 text-emerald-500" />
                  +200 Negócios em Angola
                </Badge>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tight text-slate-900">
                  O fluxo que faz o seu salão <span className="text-emerald-500 italic">crescer.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl font-medium leading-relaxed">
                  Automatize marcações no WhatsApp, lembretes e atendimento 24/7 sem complicações técnicas.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                  <Button variant="emerald" className="px-12 py-6 text-lg" href={FORM_URL}>
                    Começar Teste Grátis
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <div className="flex items-center gap-3 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <ShieldCheck className="text-emerald-500" size={18} />
                    7 dias sem compromisso
                  </div>
                </div>
              </div>

              <div className="flex-1 relative w-full max-w-[420px] md:max-w-none px-4 reveal" style={{ transitionDelay: '0.2s' }}>
                <div className="relative z-20 mx-auto md:ml-auto w-full max-w-[320px] lg:max-w-[380px] aspect-[9/18.5] bg-slate-800 rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[1px] border-white/10">
                  <div className="w-full h-full rounded-[2.8rem] overflow-hidden border-2 border-slate-700 bg-white">
                    <WhatsAppMockup />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-7 bg-slate-800 rounded-b-2xl z-30"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -left-10 bottom-20 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 hidden lg:block z-30 animate-float">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                       <TrendingUp size={24} />
                     </div>
                     <div>
                       <p className="text-[11px] font-black uppercase text-slate-400">Conversão</p>
                       <p className="text-lg font-black text-slate-900">+45% mensal</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF BAR */}
        <section className="py-12 bg-white border-y border-slate-100 reveal">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Empresas que confiam na Fluxora</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
              <div className="text-2xl font-black tracking-tighter">LUANDA BARBER</div>
              <div className="text-2xl font-black tracking-tighter">SALÃO BELA</div>
              <div className="text-2xl font-black tracking-tighter">ANGOLA TECH</div>
              <div className="text-2xl font-black tracking-tighter">STUDIO X</div>
              <div className="text-2xl font-black tracking-tighter">PRIME STYLE</div>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section id="problema" className="py-24 md:py-40 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
              <div className="max-w-2xl reveal">
                <Badge className="mb-4">O Desafio</Badge>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                  Pare de perder clientes por falta de <span className="text-red-500 underline decoration-red-200 decoration-8 underline-offset-8">respostas rápidas.</span>
                </h2>
              </div>
              <p className="text-slate-500 font-bold text-lg md:max-w-[280px] md:text-right italic reveal" style={{ transitionDelay: '0.1s' }}>
                A demora de 5 minutos pode custar até 80% das suas vendas potenciais.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Marcações em Papel", d: "Cadernos perdem-se, rasgam-se e dificultam o acompanhamento do histórico do cliente.", i: <BookX className="text-red-500" />, c: "bg-red-50" },
                { t: "Fila no WhatsApp", d: "Responder manualmente a cada consulta gasta o seu tempo precioso de trabalho.", i: <Hourglass className="text-blue-500" />, c: "bg-blue-50" },
                { t: "Esquecimentos (No-Show)", d: "Clientes que marcam e não aparecem porque não foram lembrados adequadamente.", i: <CalendarOff className="text-orange-500" />, c: "bg-orange-50" },
              ].map((item, i) => (
                <article key={i} className="group p-10 rounded-[2.5rem] border border-slate-100 hover:border-slate-300 hover:shadow-2xl transition-all duration-500 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className={`w-16 h-16 rounded-2xl ${item.c} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(item.i as React.ReactElement<any>, { size: 32 })}
                  </div>
                  <h3 className="text-2xl font-black mb-4">{item.t}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section id="solucao" className="py-24 md:py-40 bg-slate-900 text-white rounded-[4rem] mx-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)]"></div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center mb-24 reveal">
              <Badge className="bg-white/10 text-emerald-400 border-emerald-500/20 mb-6">A Solução Fluxora</Badge>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter">O seu salão no piloto automático.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
              <article className="md:col-span-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[3rem] p-10 relative overflow-hidden group reveal">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <Cpu size={40} className="mb-4 text-emerald-300" />
                  <div>
                    <h3 className="text-3xl font-black mb-3">Atendimento IA Inteligente</h3>
                    <p className="text-emerald-50/80 font-medium max-w-md">Nosso robô responde preços, envia fotos do portfólio e faz marcações reais integradas.</p>
                  </div>
                </div>
                <div className="absolute right-[-5%] bottom-[-10%] opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <Bot size={300} strokeWidth={1} />
                </div>
              </article>

              <article className="md:col-span-4 bg-white/5 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between hover:bg-white/10 transition-all reveal" style={{ transitionDelay: '0.1s' }}>
                <BellRing className="text-orange-400" size={40} />
                <div>
                  <h3 className="text-2xl font-black mb-2">Zero Faltas</h3>
                  <p className="text-slate-400 text-sm font-medium">Lembretes automáticos por WhatsApp reduzem as faltas em até 60%.</p>
                </div>
              </article>

              <article className="md:col-span-4 bg-white/5 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between hover:bg-white/10 transition-all reveal" style={{ transitionDelay: '0.2s' }}>
                <Coins className="text-blue-400" size={40} />
                <div>
                  <h3 className="text-2xl font-black mb-2">Mais Faturamento</h3>
                  <p className="text-slate-400 text-sm font-medium">Recupere clientes inativos com disparos automáticos de promoções.</p>
                </div>
              </article>

              <article className="md:col-span-8 bg-slate-800 border border-slate-700 rounded-[3rem] p-10 relative overflow-hidden group reveal" style={{ transitionDelay: '0.3s' }}>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex gap-4">
                    <Layout size={40} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-3">Painel de Gestão Luanda</h3>
                    <p className="text-slate-300 font-medium max-w-md">Visualize sua agenda completa em qualquer dispositivo. Simples como deve ser.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="py-24 md:py-40 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-20 reveal">
              <Badge className="mb-4">Preços</Badge>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Investimento que se paga.</h2>
              <p className="text-lg text-slate-500 font-medium">Escolha o plano ideal para o tamanho do seu negócio.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Plano Essencial */}
              <section className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-slate-300 transition-all duration-500 flex flex-col reveal">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Essencial</h3>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Para Barbeiros Solo</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-emerald-500 transition-colors">
                    <Zap size={24} />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black text-slate-900">6.000 Kz</span>
                  <span className="text-slate-400 font-bold text-base">/ mês</span>
                </div>
                <ul className="space-y-5 mb-12 flex-grow">
                  {["Respostas Automáticas 24h", "Catálogo Digital", "Marcação de Horários", "Suporte WhatsApp"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                      <Check size={18} className="text-emerald-500" /> {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" href={FORM_URL}>Começar Agora</Button>
              </section>

              {/* Plano Profissional */}
              <section className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl shadow-emerald-500/10 border-2 border-emerald-500 relative flex flex-col reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-8 py-2 font-black text-[10px] uppercase tracking-widest rounded-bl-3xl rounded-tr-[2.8rem]">Recomendado</div>
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-black mb-2 text-emerald-400">Profissional</h3>
                    <p className="text-emerald-400/50 text-xs font-bold uppercase tracking-widest">Para Salões Completos</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400">
                    <Crown size={24} />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black text-white">15.000 Kz</span>
                  <span className="text-slate-400 font-bold text-base">/ mês</span>
                </div>
                <ul className="space-y-5 mb-12 flex-grow">
                  {["Tudo do Essencial", "Lembretes Automáticos", "Reagendamento IA", "Histórico de Clientes", "Relatórios Financeiros"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-100 font-bold text-sm">
                      <Check size={18} className="text-emerald-400" /> {item}
                    </li>
                  ))}
                </ul>
                <Button variant="emerald" className="w-full" href={FORM_URL}>Ativar 7 Dias Grátis</Button>
              </section>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 md:py-40 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16 reveal">
              <Badge className="mb-4">Dúvidas</Badge>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Perguntas Frequentes</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              {[
                { q: "O robô entende o sotaque de Angola?", a: "Sim! A nossa IA foi treinada especificamente com expressões locais e o português falado em Angola para um atendimento natural." },
                { q: "Preciso baixar algum aplicativo?", a: "Não. A Fluxora funciona diretamente no seu WhatsApp Business e através do navegador no seu telemóvel ou computador." },
                { q: "Como é feito o pagamento?", a: "Aceitamos transferência bancária direta (IBAN) ou depósitos em conta local angolana. O faturamento é mensal ou anual." },
                { q: "E se eu quiser cancelar?", a: "Não há fidelidade. Pode cancelar a qualquer momento sem custos adicionais ou multas." },
              ].map((faq, i) => (
                <FAQItemComponent key={i} index={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 px-4 reveal">
          <div className="container mx-auto max-w-6xl rounded-[4rem] bg-slate-900 relative overflow-hidden p-16 md:p-24 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                Dê o próximo passo na sua <span className="text-emerald-400">carreira.</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 font-medium">
                Centenas de negócios em Luanda e Benguela já estão automatizados. Não fique para trás.
              </p>
              <div className="flex flex-col items-center gap-8">
                <Button variant="emerald" className="px-16 py-7 text-xl shadow-2xl shadow-emerald-500/40" href={FORM_URL}>
                  Falar com Consultor
                  <MessageSquare size={24} className="ml-3" />
                </Button>
                <p className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Disponível para todo o território nacional 🇦🇴</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl">F</div>
                <span className="text-2xl font-black tracking-tighter">Fluxora</span>
              </div>
              <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
                Líder em automação de atendimento para o setor de beleza e bem-estar no mercado Angolano.
              </p>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-widest mb-6 text-slate-400">Links</h4>
              <ul className="space-y-4 text-slate-900 font-bold text-sm">
                <li><a href="#problema" onClick={(e) => smoothScroll(e, '#problema')} className="hover:text-emerald-500 transition-colors">O Problema</a></li>
                <li><a href="#solucao" onClick={(e) => smoothScroll(e, '#solucao')} className="hover:text-emerald-500 transition-colors">Solução</a></li>
                <li><a href="#planos" onClick={(e) => smoothScroll(e, '#planos')} className="hover:text-emerald-500 transition-colors">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-widest mb-6 text-slate-400">Contacto</h4>
              <ul className="space-y-4 text-slate-900 font-bold text-sm">
                <li><a href={WHATSAPP_URL} className="hover:text-emerald-500 transition-colors flex items-center gap-2"><ExternalLink size={16} /> Suporte Especialista</a></li>
                <li>Luanda, Angola</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-slate-400 font-black uppercase tracking-widest">
              © {new Date().getFullYear()} Fluxora Tech Limited
            </p>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={14} />
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Produto Orgulhosamente Angolano</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        className="fixed bottom-8 right-8 z-[100] group"
        aria-label="WhatsApp Suporte"
      >
        <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/40 transition-all duration-500 animate-pulse"></div>
        <div className="relative w-16 h-16 bg-[#25D366] text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-300">
          <MessageSquare size={32} fill="currentColor" />
        </div>
      </a>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-white p-8 flex flex-col">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-black tracking-tighter">Fluxora</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-900">
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col gap-10 text-4xl font-black text-slate-900">
            <a href="#problema" onClick={(e) => smoothScroll(e, '#problema')}>Problema</a>
            <a href="#solucao" onClick={(e) => smoothScroll(e, '#solucao')}>Solução</a>
            <a href="#planos" onClick={(e) => smoothScroll(e, '#planos')}>Preços</a>
          </nav>
          <div className="mt-auto">
            <Button variant="emerald" className="w-full py-6 text-xl" href={FORM_URL} onClick={() => setIsMenuOpen(false)}>
              Teste Grátis
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
