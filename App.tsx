
import React, { useState, useEffect } from 'react';
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
  Layout
} from 'lucide-react';

const WHATSAPP_NUMBER = "244923683560";
const WHATSAPP_MESSAGE = "Olá! Quero tirar uma dúvida sobre a Fluxora.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const FORM_URL = "https://forms.gle/FCf47e32RiNTDi8cA";

const Badge = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] sm:text-xs font-black uppercase tracking-[0.12em] text-emerald-600 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', className = '', href, onClick, ...props }: any) => {
  const baseClasses = "relative overflow-hidden px-6 py-4 sm:px-8 sm:py-5 rounded-2xl font-bold transition-all duration-500 transform select-none cursor-pointer flex items-center justify-center gap-3 active:scale-[0.96] active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50 w-full sm:w-auto";
  
  const variants: any = {
    primary: "bg-slate-900 text-white shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1",
    emerald: "bg-[#10b981] text-white shadow-[0_20px_40px_-15px_rgba(16,185,129,0.35)] hover:bg-[#0da673] hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.5)] hover:-translate-y-1.5",
    outline: "border-2 border-slate-200 text-slate-900 hover:bg-slate-50",
    ghost: "text-slate-600 hover:text-emerald-600 font-bold",
    white: "bg-white text-emerald-600 shadow-xl hover:bg-slate-50 hover:-translate-y-1"
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
    <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={handleClick} {...props}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Subtle shine effect on hover */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
    </button>
  );
};

const WhatsAppMockup = () => (
  <div className="w-full h-full bg-[#efe7de] flex flex-col font-sans relative overflow-hidden text-left select-none shadow-inner" role="img" aria-label="Mockup de uma conversa de agendamento no WhatsApp com o Fluxora Bot">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>
    <div className="bg-[#075e54] text-white px-3 py-3 sm:px-4 sm:py-4 flex items-center justify-between shadow-md relative z-10">
      <div className="flex items-center gap-2 sm:gap-3">
        <ChevronLeft size={18} className="text-white/70" aria-hidden="true" />
        <div className="relative">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-600 flex items-center justify-center border-2 border-white/20 shadow-sm">
             <Bot size={18} aria-hidden="true" />
          </div>
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#075e54] rounded-full"></div>
        </div>
        <div>
          <h4 className="text-[12px] sm:text-[14px] font-bold leading-none">Fluxora Bot <Sparkles size={8} className="inline ml-1 text-emerald-300" aria-hidden="true" /></h4>
          <span className="text-[8px] sm:text-[10px] opacity-80 font-medium mt-0.5 block italic">Sempre online</span>
        </div>
      </div>
      <div className="flex gap-3 sm:gap-4 opacity-70">
        <Video size={16} aria-hidden="true" />
        <Phone size={16} aria-hidden="true" />
      </div>
    </div>
    <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 overflow-y-auto relative z-10">
      <div className="flex justify-center mb-4 sm:mb-6">
        <span className="bg-[#d1e4fc] text-[8px] sm:text-[9px] text-slate-600 px-2.5 py-1 rounded-lg font-bold uppercase shadow-sm">HOJE</span>
      </div>
      <div className="flex flex-col items-end w-full">
        <div className="bg-[#dcf8c6] p-2.5 sm:p-3 rounded-2xl rounded-tr-none shadow-sm text-[11px] sm:text-[12px] text-slate-800 max-w-[85%] border border-emerald-100/50">
          <p>Quero marcar barba e cabelo para hoje às 15h. Tem vaga? 🇦🇴</p>
          <p className="text-[8px] sm:text-[9px] text-slate-500 text-right mt-1">10:42</p>
        </div>
      </div>
      <div className="flex flex-col items-start max-w-[95%]">
        <div className="bg-white p-3 sm:p-4 rounded-2xl rounded-tl-none shadow-md text-[11px] sm:text-[12px] text-slate-800 border border-slate-100">
          <p className="font-bold text-slate-900 mb-2">Olá! Sim, temos o Barbeiro Nelson disponível às 15:00. Deseja confirmar?</p>
          <div className="grid grid-cols-1 gap-1.5 sm:gap-2 my-2 sm:my-3">
            <div className="flex items-center justify-between p-2.5 sm:p-3 bg-emerald-50 rounded-xl border border-emerald-100">
              <span className="font-bold text-[9px] sm:text-[10px] text-emerald-900 uppercase">Sim, Confirmar Agora!</span>
              <CheckCheck size={12} className="text-emerald-500" aria-hidden="true" />
            </div>
            <div className="flex items-center justify-between p-2.5 sm:p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="font-bold text-[9px] sm:text-[10px] text-slate-600 uppercase">Ver outros horários</span>
              <Calendar size={12} className="text-slate-400" aria-hidden="true" />
            </div>
          </div>
          <p className="text-[8px] sm:text-[9px] text-slate-400 text-right">10:42</p>
        </div>
      </div>
    </div>
    <div className="bg-[#f0f2f5] p-2 sm:p-3 flex items-center gap-2 sm:gap-3 relative z-10 border-t border-slate-200">
      <div className="flex-1 bg-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-3 shadow-sm border border-slate-300/30">
        <Smile size={18} className="text-slate-400" aria-hidden="true" />
        <span className="text-[11px] sm:text-[12px] text-slate-400 font-medium ml-2">Resposta automática...</span>
      </div>
      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-lg">
        <Send size={18} fill="currentColor" aria-hidden="true" />
      </div>
    </div>
  </div>
);

const FAQItem = ({ q, a, index }: { q: string, a: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `faq-content-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className={`mb-3 sm:mb-4 transition-all duration-300 rounded-2xl ${isOpen ? 'bg-white shadow-lg border-transparent' : 'bg-slate-50 border-slate-100'} border`}>
      <button 
        id={buttonId}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full items-center justify-between p-4 sm:p-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-2xl"
      >
        <span className="text-sm sm:text-base font-bold text-slate-900 leading-tight pr-4">{q}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-200 text-slate-500'}`}>
          {isOpen ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
        </div>
      </button>
      <div 
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
          {a}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const faqs = [
    { q: "Preciso pagar algo para testar?", a: "Não. O teste grátis é de 7 dias e não precisa de pagamento antecipado nem cartão de crédito." },
    { q: "Posso cancelar quando quiser?", a: "Sim. Pode cancelar a qualquer momento, inclusive durante o período de teste grátis de 7 dias." },
    { q: "Funciona apenas com WhatsApp?", a: "Sim. A Fluxora foi criada para otimizar o atendimento via WhatsApp Business, o canal favorito dos clientes em Angola." },
    { q: "A Fluxora substitui pessoas do salão?", a: "Não. A Fluxora atua como um assistente digital para atendimento inicial e marcações, libertando a sua equipa para tarefas mais lucrativas." },
    { q: "E se eu precisar de ajuda?", a: "Oferecemos suporte prioritário via WhatsApp para todos os nossos clientes angolanos." },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-white font-sans text-slate-900 selection:bg-emerald-100 overflow-x-hidden ${isMenuOpen ? 'h-screen overflow-hidden' : ''}`}>
      
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-emerald-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:font-bold">
        Pular para o conteúdo principal
      </a>

      {/* Header Premium */}
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6 md:py-8'}`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className={`px-4 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-4 rounded-3xl flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-white/20' : 'bg-transparent'}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1" aria-label="Fluxora - Ir para o topo">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-lg rotate-3 group-hover:rotate-0 transition-transform" aria-hidden="true">F</div>
              <span className={`text-lg sm:text-xl font-black tracking-tighter ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>Fluxora</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-bold" aria-label="Navegação principal">
              <a href="#problema" onClick={(e) => smoothScroll(e, '#problema')} className={`${scrolled ? 'text-slate-600' : 'text-white/80'} hover:text-emerald-500 transition-colors focus:outline-none focus-visible:text-emerald-500`}>O Problema</a>
              <a href="#solucao" onClick={(e) => smoothScroll(e, '#solucao')} className={`${scrolled ? 'text-slate-600' : 'text-white/80'} hover:text-emerald-500 transition-colors focus:outline-none focus-visible:text-emerald-500`}>Soluções</a>
              <a href="#planos" onClick={(e) => smoothScroll(e, '#planos')} className={`${scrolled ? 'text-slate-600' : 'text-white/80'} hover:text-emerald-500 transition-colors focus:outline-none focus-visible:text-emerald-500`}>Preços</a>
              <Button variant={scrolled ? 'primary' : 'white'} className="py-2.5 px-6 text-xs uppercase" href={FORM_URL}>Teste Grátis</Button>
            </nav>

            <button 
              className={`md:hidden p-2.5 rounded-2xl ${scrolled ? 'bg-slate-100 text-slate-900' : 'bg-white text-slate-900 shadow-md backdrop-blur-md'} focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500`} 
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={isMenuOpen}
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        
        {/* HERO SECTION */}
        <section id="home" className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-48 md:pb-40 overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-900 hidden md:block rounded-l-[100px]" aria-hidden="true"></div>
          <div className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-500/10 blur-[80px] sm:blur-[120px] rounded-full" aria-hidden="true"></div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-12 sm:gap-16">
            <div className="flex-1 text-center md:text-left">
              <Badge className="mb-4 sm:mb-6 mx-auto md:mx-0">
                <Users size={12} className="sm:w-4 sm:h-4" aria-hidden="true" />
                +200 Negócios em Angola
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-[1] sm:leading-[0.95] tracking-tight sm:tracking-tighter text-slate-900">
                O fluxo que faz o seu salão <span className="text-emerald-500 italic">crescer.</span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-10 max-w-xl font-medium leading-relaxed mx-auto md:mx-0">
                Automatize marcações no WhatsApp, lembretes e atendimento 24/7 sem complicações técnicas.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-center md:justify-start">
                <Button variant="emerald" className="group px-8 sm:px-12 py-5 sm:py-6 text-base sm:text-lg" href={FORM_URL}>
                  Começar Teste Grátis
                  <ArrowRight size={18} className="sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
                <div className="flex items-center gap-2 text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest py-2">
                  <ShieldCheck className="text-emerald-500" size={16} aria-hidden="true" />
                  Sem Fidelização
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-none px-4">
              <div className="relative z-20 mx-auto md:mr-0 md:ml-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] aspect-[9/18.5] bg-slate-800 rounded-[3rem] sm:rounded-[3.5rem] p-2 sm:p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[1px] border-white/10">
                <div className="w-full h-full rounded-[2.5rem] sm:rounded-[2.8rem] overflow-hidden border-2 border-slate-700">
                  <WhatsAppMockup />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-5 sm:h-7 bg-slate-800 rounded-b-2xl z-30" aria-hidden="true"></div>
                <div className="absolute -left-0.5 top-20 w-1 h-10 bg-slate-700 rounded-l-md" aria-hidden="true"></div>
                <div className="absolute -right-0.5 top-28 w-1 h-16 bg-slate-700 rounded-r-md" aria-hidden="true"></div>
              </div>
              
              <div className="absolute -left-4 sm:-left-10 bottom-10 sm:bottom-20 bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 hidden sm:block z-30 animate-float" aria-hidden="true">
                <div className="flex items-center gap-3 sm:gap-4">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-emerald-600">
                     <Calendar size={20} className="sm:w-6 sm:h-6" />
                   </div>
                   <div>
                     <p className="text-[9px] sm:text-[11px] font-black uppercase text-slate-400">Próxima Marcação</p>
                     <p className="text-sm sm:text-lg font-black text-slate-900">Hoje às 14:30</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section id="problema" className="py-16 sm:py-24 md:py-40 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 sm:mb-20 gap-6 sm:gap-8 text-center md:text-left">
              <div className="max-w-2xl">
                <Badge className="mb-4">O Desafio</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight">
                  Pare de perder clientes por falta de <span className="text-red-500">respostas rápidas.</span>
                </h2>
              </div>
              <p className="text-slate-500 font-bold text-base sm:text-lg md:max-w-xs md:text-right italic">
                A demora de 5 minutos pode custar uma venda.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { t: "Marcações em Papel", d: "Cadernos perdem-se, rasgam-se e criam confusão de horários.", i: <BookX className="text-red-500" />, c: "bg-red-50" },
                { t: "Fila de WhatsApp", d: "Responder manualmente a cada cliente gasta o seu tempo de produção.", i: <Hourglass className="text-blue-500" />, c: "bg-blue-50" },
                { t: "Esquecimentos", d: "Clientes que marcam e não aparecem porque não foram lembrados.", i: <CalendarOff className="text-orange-500" />, c: "bg-orange-50" },
              ].map((item, i) => (
                <article key={i} className="group p-8 sm:p-10 rounded-3xl sm:rounded-[3rem] border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-500">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.c} flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-transform`}>
                    {React.cloneElement(item.i as React.ReactElement<any>, { size: 24, className: (item.i as any).props.className, 'aria-hidden': 'true' })}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">{item.t}</h3>
                  <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">{item.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS / SOLUÇÕES */}
        <section id="solucao" className="py-16 sm:py-24 md:py-40 bg-slate-900 text-white overflow-hidden scroll-mt-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 sm:mb-24">
              <Badge className="bg-white/10 text-emerald-400 border-emerald-500/20 mb-6">A Solução</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tight sm:tracking-tighter">O seu salão no piloto automático.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 auto-rows-auto md:auto-rows-[240px]">
              <article className="md:col-span-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl sm:rounded-[3rem] p-8 sm:p-10 relative overflow-hidden group min-h-[200px]">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <Cpu size={32} className="mb-4 sm:w-10 sm:h-10 text-emerald-300" aria-hidden="true" />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-2">Atendimento 24/7</h3>
                    <p className="text-emerald-50/80 text-sm sm:text-base font-medium max-w-md">O robô inteligente responde preços, envia fotos e faz marcações mesmo enquanto você dorme ou atende um cliente.</p>
                  </div>
                </div>
                <div className="absolute right-[-5%] bottom-[-10%] opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none" aria-hidden="true">
                  <Bot size={180} className="md:w-[300px] md:h-[300px]" strokeWidth={1} />
                </div>
              </article>

              <article className="md:col-span-4 bg-white/5 border border-white/10 rounded-3xl sm:rounded-[3rem] p-8 sm:p-10 flex flex-col justify-between hover:bg-white/10 transition-colors min-h-[180px]">
                <BellRing className="text-orange-400 mb-4 sm:mb-0 sm:w-10 sm:h-10" size={32} aria-hidden="true" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-2">Zero Faltas</h3>
                  <p className="text-slate-400 text-sm font-medium">Lembretes automáticos por WhatsApp reduzem faltas em até 45% com avisos prévios.</p>
                </div>
              </article>

              <article className="md:col-span-4 bg-white/5 border border-white/10 rounded-3xl sm:rounded-[3rem] p-8 sm:p-10 flex flex-col justify-between hover:bg-white/10 transition-colors min-h-[180px]">
                <Coins className="text-blue-400 mb-4 sm:mb-0 sm:w-10 sm:h-10" size={32} aria-hidden="true" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-black mb-2">Mais Receita</h3>
                  <p className="text-slate-400 text-sm font-medium">Converta leads instantaneamente e aumente seu faturamento sem esforço extra.</p>
                </div>
              </article>

              <article className="md:col-span-8 bg-slate-800 border border-slate-700 rounded-3xl sm:rounded-[3rem] p-8 sm:p-10 relative overflow-hidden group min-h-[200px]">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex gap-4 mb-4 sm:mb-0">
                    <Lock size={32} className="text-emerald-400 sm:w-10 sm:h-10" aria-hidden="true" />
                    <Layout size={32} className="text-blue-400 sm:w-10 sm:h-10" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black mb-2">Simples e Seguro</h3>
                    <p className="text-slate-300 text-sm sm:text-base font-medium max-w-md">Gerencie tudo de forma visual e intuitiva, com a segurança de uma plataforma pensada para o seu negócio.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* PLANOS / PREÇOS */}
        <section id="planos" className="py-16 sm:py-24 md:py-40 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12 sm:mb-20">
              <Badge className="mb-4">Investimento</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">Planos que cabem no seu bolso.</h2>
              <p className="text-sm sm:text-lg text-slate-500 font-medium">Comece hoje com 7 dias grátis. Cancele quando quiser.</p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <section className="group p-8 sm:p-10 rounded-3xl sm:rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-500 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8 sm:mb-10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black mb-1.5 sm:mb-2">Essencial</h3>
                    <p className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Atendimento Básico</p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-emerald-500 transition-colors" aria-hidden="true">
                    <Zap size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-8 sm:mb-10">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">6.000 Kz</span>
                  <span className="text-slate-400 font-bold text-sm sm:text-base">/ mês</span>
                </div>
                <ul className="space-y-4 sm:space-y-5 mb-10 sm:mb-12 flex-grow" aria-label="Recursos do plano Essencial">
                  <li className="flex items-center gap-3 text-slate-600 font-bold text-xs sm:text-sm"><Check size={16} className="text-emerald-500 flex-shrink-0" aria-hidden="true" /> Respostas Automáticas 24h</li>
                  <li className="flex items-center gap-3 text-slate-600 font-bold text-xs sm:text-sm"><Check size={16} className="text-emerald-500 flex-shrink-0" aria-hidden="true" /> Catálogo Digital</li>
                  <li className="flex items-center gap-3 text-slate-600 font-bold text-xs sm:text-sm"><Check size={16} className="text-emerald-500 flex-shrink-0" aria-hidden="true" /> Marcação de Horários</li>
                  <li className="flex items-center gap-3 text-slate-600 font-bold text-xs sm:text-sm"><Check size={16} className="text-emerald-500 flex-shrink-0" aria-hidden="true" /> Suporte via WhatsApp</li>
                </ul>
                <Button variant="outline" className="mt-auto" href={FORM_URL}>Testar Grátis</Button>
              </section>

              <section className="p-8 sm:p-10 rounded-3xl sm:rounded-[3.5rem] bg-slate-900 text-white shadow-2xl shadow-emerald-500/10 border-2 border-emerald-500 relative flex flex-col h-full order-first md:order-none">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-6 py-1.5 sm:px-8 sm:py-2 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] rounded-bl-2xl sm:rounded-bl-3xl rounded-tr-3xl sm:rounded-tr-[3.5rem]">Mais Popular</div>
                <div className="flex justify-between items-start mb-8 sm:mb-10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black mb-1.5 sm:mb-2">Profissional</h3>
                    <p className="text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest">Completo</p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400" aria-hidden="true">
                    <Crown size={20} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-8 sm:mb-10">
                  <span className="text-4xl sm:text-5xl font-black text-white">15.000 Kz</span>
                  <span className="text-slate-400 font-bold text-sm sm:text-base">/ mês</span>
                </div>
                <ul className="space-y-4 sm:space-y-5 mb-10 sm:mb-12 flex-grow" aria-label="Recursos do plano Profissional">
                  <li className="flex items-center gap-3 text-slate-100 font-bold text-xs sm:text-sm"><Check size={16} className="text-emerald-400 flex-shrink-0" aria-hidden="true" /> Tudo do Essencial</li>
                  <li className="flex items-center gap-3 text-slate-100 font-bold text-xs sm:text-sm"><Check size={16} className="text-emerald-400 flex-shrink-0" aria-hidden="true" /> Lembretes Automáticos</li>
                  <li className="flex items-center gap-3 text-slate-100 font-bold text-xs sm:text-sm"><Check size={16} className="text-emerald-400 flex-shrink-0" aria-hidden="true" /> Reagendamento Inteligente</li>
                  <li className="flex items-center gap-3 text-slate-100 font-bold text-xs sm:text-sm"><Check size={16} className="text-emerald-400 flex-shrink-0" aria-hidden="true" /> Histórico de Clientes</li>
                  <li className="flex items-center gap-3 text-slate-100 font-bold text-xs sm:text-sm"><Check size={16} className="text-emerald-400 flex-shrink-0" aria-hidden="true" /> Suporte Prioritário</li>
                </ul>
                <Button variant="emerald" className="mt-auto" href={FORM_URL}>Ativar 7 Dias Grátis</Button>
              </section>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-16 sm:py-24 md:py-40 bg-slate-50 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="mb-4">Dúvidas</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Perguntas frequentes</h2>
            </div>
            <div className="max-w-2xl mx-auto">
              {faqs.map((faq, i) => (
                <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-12 sm:py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-6xl rounded-3xl sm:rounded-[4rem] bg-slate-900 relative overflow-hidden p-8 sm:p-16 md:p-24 text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent" aria-hidden="true"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight sm:tracking-tighter leading-tight">
                O seu salão merece <span className="text-emerald-400">profissionalismo.</span>
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-slate-400 mb-10 sm:mb-12 font-medium">
                Junte-se a centenas de profissionais em Angola que já ganharam tempo e clientes com a Fluxora.
              </p>
              <div className="flex flex-col items-center gap-6 sm:gap-8">
                <Button variant="emerald" className="group px-10 sm:px-16 py-5 sm:py-7 text-base sm:text-xl shadow-2xl shadow-emerald-500/40" href={FORM_URL}>
                  Começar agora grátis
                  <ArrowRight size={20} className="sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Button>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                   <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                       <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+50}`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-900 bg-slate-800" alt={`Avatar de um usuário satisfeito ${i}`} />
                     ))}
                   </div>
                   <p className="text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-widest">Teste gratuito de 7 dias</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 sm:py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 sm:mb-20">
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 mb-6 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1" aria-label="Fluxora - Ir para o topo">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl" aria-hidden="true">F</div>
                <span className="text-xl sm:text-2xl font-black tracking-tighter">Fluxora</span>
              </a>
              <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xs leading-relaxed">
                Simplificando o atendimento e a gestão de salões e barbearias em Angola através da automação inteligente no WhatsApp.
              </p>
            </div>
            <nav className="flex flex-col items-center md:items-start" aria-label="Links úteis">
              <h4 className="font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6 text-slate-400">Navegação</h4>
              <ul className="space-y-3 sm:space-y-4 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider">
                <li><a href="#problema" onClick={(e) => smoothScroll(e, '#problema')} className="hover:text-emerald-500 transition-colors focus:outline-none focus-visible:text-emerald-500">O Problema</a></li>
                <li><a href="#solucao" onClick={(e) => smoothScroll(e, '#solucao')} className="hover:text-emerald-500 transition-colors focus:outline-none focus-visible:text-emerald-500">Soluções</a></li>
                <li><a href="#planos" onClick={(e) => smoothScroll(e, '#planos')} className="hover:text-emerald-500 transition-colors focus:outline-none focus-visible:text-emerald-500">Preços</a></li>
              </ul>
            </nav>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6 text-slate-400">Contacto</h4>
              <ul className="space-y-3 sm:space-y-4 text-slate-900 font-bold text-xs sm:text-sm tracking-wider">
                <li><a href={WHATSAPP_URL} className="hover:text-emerald-500 transition-colors flex items-center gap-2 justify-center md:justify-start focus:outline-none focus-visible:text-emerald-500"><MessageSquare size={16} aria-hidden="true" /> WhatsApp Suporte</a></li>
                <li className="flex items-center gap-2 justify-center md:justify-start"><Phone size={16} aria-hidden="true" /> Angola</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 sm:pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[9px] sm:text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Fluxora Tech • Angola
            </p>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={14} aria-hidden="true" />
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-black uppercase tracking-widest">Orgulhosamente Angolano</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] group focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500 rounded-2xl"
        aria-label="Falar conosco no WhatsApp"
      >
        <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/40 transition-all duration-500 animate-pulse" aria-hidden="true"></div>
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-300">
          <MessageSquare size={26} fill="currentColor" className="sm:w-8 sm:h-8" aria-hidden="true" />
          <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-red-500 border-[3px] border-white rounded-full flex items-center justify-center">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-ping" aria-hidden="true"></div>
          </div>
        </div>
      </a>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[200] bg-slate-900/60 backdrop-blur-md transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-[85%] max-w-xs bg-white p-8 sm:p-10 shadow-2xl transition-transform duration-500 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação móvel"
        >
          <div className="flex justify-between items-center mb-16 sm:mb-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black" aria-hidden="true">F</div>
              <span className="text-lg font-black tracking-tighter">Fluxora</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="p-2 -mr-2 text-slate-400 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
              aria-label="Fechar menu"
            >
              <X size={28} aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 text-2xl sm:text-3xl font-black text-slate-900">
            <a href="#problema" onClick={(e) => smoothScroll(e, '#problema')} className="focus:text-emerald-500">O Problema</a>
            <a href="#solucao" onClick={(e) => smoothScroll(e, '#solucao')} className="focus:text-emerald-500">Soluções</a>
            <a href="#planos" onClick={(e) => smoothScroll(e, '#planos')} className="focus:text-emerald-500">Preços</a>
          </nav>
          <div className="mt-auto pt-10">
            <Button variant="emerald" className="py-5 sm:py-6 w-full text-base sm:text-lg" href={FORM_URL} onClick={() => setIsMenuOpen(false)}>
              Teste Grátis
            </Button>
            <p className="mt-4 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Início imediato</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
