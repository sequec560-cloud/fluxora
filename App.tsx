
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowRight,
  Menu,
  X,
  CheckCheck,
  Smartphone,
  Cpu,
  Layers,
  TrendingUp,
  Phone,
  Video,
  ChevronLeft,
  Send,
  Smile,
  Loader2,
  Check,
  Sparkles,
  Bot,
  Scissors,
  Calendar,
  Bell,
  Clock,
  ShieldCheck,
  MessageSquare,
  AlertCircle,
  ThumbsUp,
  Settings,
  XCircle,
  Plus,
  Minus,
  Star,
  Users
} from 'lucide-react';

const WHATSAPP_NUMBER = "244923683560";
const WHATSAPP_MESSAGE = "Olá! Quero começar o teste grátis de 7 dias da Fluxora para o meu salão/barbearia.";
const CONVERSION_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const Badge = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-600 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', className = '', href, onClick, ...props }: any) => {
  const baseClasses = "relative overflow-hidden px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform select-none cursor-pointer flex items-center justify-center gap-3 active:scale-[0.97] focus:outline-none";
  
  const variants: any = {
    primary: "bg-slate-900 text-white shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1",
    emerald: "bg-[#10b981] text-white shadow-lg shadow-emerald-500/30 hover:bg-[#0ea371] hover:-translate-y-1",
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
      {children}
    </button>
  );
};

const WhatsAppMockup = () => (
  <div className="w-full h-full bg-[#efe7de] flex flex-col font-sans relative overflow-hidden text-left select-none shadow-inner">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>
    <div className="bg-[#075e54] text-white px-4 py-4 flex items-center justify-between shadow-md relative z-10">
      <div className="flex items-center gap-3">
        <ChevronLeft size={20} className="text-white/70" />
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center border-2 border-white/20 shadow-sm">
             <Bot size={20} />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075e54] rounded-full"></div>
        </div>
        <div>
          <h4 className="text-[14px] font-bold leading-none">Fluxora Bot <Sparkles size={10} className="inline ml-1 text-emerald-300" /></h4>
          <span className="text-[10px] opacity-80 font-medium mt-1 block italic">Sempre online para o seu salão</span>
        </div>
      </div>
      <div className="flex gap-4 opacity-70">
        <Video size={18} />
        <Phone size={18} />
      </div>
    </div>
    <div className="flex-1 p-4 space-y-4 overflow-y-auto relative z-10">
      <div className="flex justify-center mb-6">
        <span className="bg-[#d1e4fc] text-[9px] text-slate-600 px-3 py-1 rounded-lg font-bold uppercase shadow-sm">HOJE</span>
      </div>
      <div className="flex flex-col items-end w-full animate-in fade-in slide-in-from-right duration-500">
        <div className="bg-[#dcf8c6] p-3 rounded-2xl rounded-tr-none shadow-sm text-[12px] text-slate-800 max-w-[85%] border border-emerald-100/50">
          <p>Quero marcar barba e cabelo para hoje às 15h. Tem vaga? 🇦🇴</p>
          <p className="text-[9px] text-slate-500 text-right mt-1">10:42</p>
        </div>
      </div>
      <div className="flex flex-col items-start max-w-[95%] animate-in fade-in slide-in-from-left duration-700 delay-300">
        <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md text-[12px] text-slate-800 border border-slate-100">
          <p className="font-bold text-slate-900 mb-2">Olá! Sim, temos o Barbeiro Nelson disponível às 15:00. Deseja confirmar?</p>
          <div className="grid grid-cols-1 gap-2 my-3">
            <button className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl border border-emerald-100 hover:bg-emerald-100 transition-colors group">
              <span className="font-bold text-[10px] text-emerald-900 uppercase">Sim, Confirmar Agora!</span>
              <CheckCheck size={14} className="text-emerald-500 group-hover:scale-110 transition-transform" />
            </button>
            <button className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors">
              <span className="font-bold text-[10px] text-slate-600 uppercase">Ver outros horários</span>
              <Calendar size={14} className="text-slate-400" />
            </button>
          </div>
          <p className="text-[9px] text-slate-400 text-right">10:42</p>
        </div>
      </div>
    </div>
    <div className="bg-[#f0f2f5] p-3 flex items-center gap-3 relative z-10 border-t border-slate-200">
      <div className="flex-1 bg-white rounded-full px-5 py-2.5 flex items-center gap-3 shadow-sm border border-slate-300/30">
        <Smile size={20} className="text-slate-400" />
        <span className="text-[12px] text-slate-400 font-medium">Resposta automática...</span>
      </div>
      <div className="w-11 h-11 rounded-full bg-[#00a884] flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform">
        <Send size={20} fill="currentColor" />
      </div>
    </div>
  </div>
);

const FAQItem = ({ q, a }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mb-4 transition-all duration-300 rounded-2xl ${isOpen ? 'bg-white shadow-md border-transparent' : 'bg-slate-50 border-slate-100'} border`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left transition-colors"
      >
        <span className="text-base font-bold text-slate-900">{q}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-200 text-slate-500'}`}>
          <Plus size={18} className={`${isOpen ? 'hidden' : 'block'}`} />
          <Minus size={18} className={`${isOpen ? 'block' : 'hidden'}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed font-medium">
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
    { q: "Preciso pagar algo para testar?", a: "Não. O teste grátis é de 7 dias e não precisa de pagamento antecipado." },
    { q: "Posso cancelar quando quiser?", a: "Sim. Pode cancelar a qualquer momento, inclusive durante o teste grátis." },
    { q: "Funciona apenas com WhatsApp?", a: "Sim. A Fluxora foi criada para funcionar principalmente com WhatsApp, o canal favorito dos clientes em Angola." },
    { q: "A Fluxora substitui pessoas do salão?", a: "Não. A Fluxora ajuda no atendimento e organização, libertando as pessoas para tarefas mais lucrativas." },
    { q: "E se eu precisar de ajuda?", a: "Temos suporte prioritário via WhatsApp para ajudar na configuração e dúvidas." },
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-white font-sans text-slate-900 selection:bg-emerald-100 ${isMenuOpen ? 'h-screen overflow-hidden' : ''}`}>
      
      {/* Header Premium */}
      <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6 md:py-8'}`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className={`px-6 py-3 md:px-10 md:py-4 rounded-3xl flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-xl border border-white/20' : 'bg-transparent'}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg rotate-3 group-hover:rotate-0 transition-transform">F</div>
              <span className={`text-xl font-black tracking-tighter ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>Fluxora</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-10 text-sm font-bold">
              <a href="#problema" onClick={(e) => smoothScroll(e, '#problema')} className={`${scrolled ? 'text-slate-600' : 'text-slate-800 md:text-white/80'} hover:text-emerald-500 transition-colors`}>O Problema</a>
              <a href="#solucao" onClick={(e) => smoothScroll(e, '#solucao')} className={`${scrolled ? 'text-slate-600' : 'text-slate-800 md:text-white/80'} hover:text-emerald-500 transition-colors`}>Soluções</a>
              <a href="#planos" onClick={(e) => smoothScroll(e, '#planos')} className={`${scrolled ? 'text-slate-600' : 'text-slate-800 md:text-white/80'} hover:text-emerald-500 transition-colors`}>Preços</a>
              <Button variant={scrolled ? 'primary' : 'white'} className="py-2.5 px-8 text-xs uppercase" href={CONVERSION_URL}>Teste Grátis</Button>
            </nav>

            <button className={`md:hidden p-3 rounded-2xl ${scrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/20 text-slate-900 shadow-md backdrop-blur-md'}`} onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        
        {/* HERO SECTION - REFINADO */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900 hidden md:block rounded-l-[100px]"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/20 blur-[120px] rounded-full"></div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-center md:text-left">
              <Badge className="mb-6">
                <Users size={12} />
                +200 Negócios em Angola
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter text-slate-900">
                O fluxo que faz o seu salão <span className="text-emerald-500 italic">crescer.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl font-medium leading-relaxed">
                Automatize marcações no WhatsApp, lembretes e atendimento 24/7 sem complicações técnicas.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                <Button variant="emerald" className="px-12 py-6 text-lg" href={CONVERSION_URL}>
                  Começar Teste de 7 Dias
                  <ArrowRight size={20} />
                </Button>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
                  <ShieldCheck className="text-emerald-500" size={18} />
                  Sem Fidelização
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-[400px] md:max-w-none">
              <div className="relative z-20 mx-auto md:mr-0 md:ml-auto w-full max-w-[320px] lg:max-w-[380px] aspect-[9/18.5] bg-slate-800 rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[1px] border-white/10">
                <div className="w-full h-full rounded-[2.8rem] overflow-hidden border-2 border-slate-700">
                  <WhatsAppMockup />
                </div>
                {/* Detalhes do Hardware do Celular */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-slate-800 rounded-b-3xl z-30"></div>
                <div className="absolute -left-1 top-24 w-1 h-12 bg-slate-700 rounded-l-md"></div>
                <div className="absolute -right-1 top-32 w-1 h-20 bg-slate-700 rounded-r-md"></div>
              </div>
              
              {/* Elementos Flutuantes de Status */}
              <div className="absolute -left-10 bottom-20 bg-white p-5 rounded-3xl shadow-2xl border border-slate-100 animate-bounce-slow hidden lg:block z-30">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                     <Calendar size={24} />
                   </div>
                   <div>
                     <p className="text-[11px] font-black uppercase text-slate-400">Próxima Marcação</p>
                     <p className="text-lg font-black text-slate-900">Hoje às 14:30</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA - VISUALMENTE IMPACTANTE */}
        <section id="problema" className="py-24 md:py-40 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <Badge className="mb-4">O Desafio</Badge>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                  Pare de perder clientes por falta de <span className="text-red-500">respostas rápidas.</span>
                </h2>
              </div>
              <p className="text-slate-500 font-bold text-lg md:max-w-xs text-right italic">
                A demora de 5 minutos pode custar uma venda.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Marcações em Papel", d: "Cadernos perdem-se, rasgam-se e criam confusão de horários.", i: <Scissors className="text-red-500" />, c: "bg-red-50" },
                { t: "Fila de WhatsApp", d: "Responder manualmente a cada cliente gasta o seu tempo de produção.", i: <MessageSquare className="text-blue-500" />, c: "bg-blue-50" },
                { t: "Esquecimentos", d: "Clientes que marcam e não aparecem porque não foram lembrados.", i: <Bell className="text-orange-500" />, c: "bg-orange-50" },
              ].map((item, i) => (
                <div key={i} className="group p-10 rounded-[3rem] border border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl ${item.c} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    {/* Fix: Cast item.i to React.ReactElement<any> to allow 'size' prop in cloneElement */}
                    {React.cloneElement(item.i as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h3 className="text-2xl font-black mb-4">{item.t}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS / SOLUÇÕES - BENTO GRID DESIGN */}
        <section id="solucao" className="py-24 md:py-40 bg-slate-900 text-white overflow-hidden scroll-mt-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-24">
              <Badge className="bg-white/10 text-emerald-400 border-emerald-500/20 mb-6">A Solução</Badge>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter">O seu salão no piloto automático.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
              {/* Bento Card 1 */}
              <div className="md:col-span-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[3rem] p-10 relative overflow-hidden group">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <Bot size={40} className="mb-4" />
                  <div>
                    <h3 className="text-3xl font-black mb-2">Atendimento 24/7</h3>
                    <p className="text-emerald-50/80 font-medium max-w-md">O robô responde preços, envia fotos do catálogo e faz marcações mesmo enquanto você dorme ou atende um cliente.</p>
                  </div>
                </div>
                <div className="absolute right-[-10%] bottom-[-10%] opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <MessageSquare size={300} strokeWidth={1} />
                </div>
              </div>

              {/* Bento Card 2 */}
              <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between hover:bg-white/10 transition-colors">
                <Bell className="text-orange-400" size={40} />
                <div>
                  <h3 className="text-2xl font-black mb-2">Zero Faltas</h3>
                  <p className="text-slate-400 text-sm font-medium">Lembretes automáticos 2h antes da marcação reduzem faltas em até 45%.</p>
                </div>
              </div>

              {/* Bento Card 3 */}
              <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between hover:bg-white/10 transition-colors">
                <TrendingUp className="text-blue-400" size={40} />
                <div>
                  <h3 className="text-2xl font-black mb-2">Mais Receita</h3>
                  <p className="text-slate-400 text-sm font-medium">Capture clientes novos instantaneamente no momento em que eles têm interesse.</p>
                </div>
              </div>

              {/* Bento Card 4 */}
              <div className="md:col-span-8 bg-slate-800 border border-slate-700 rounded-[3rem] p-10 relative overflow-hidden group">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex gap-4">
                    <CheckCheck size={40} className="text-emerald-400" />
                    <ShieldCheck size={40} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-2">Simples e Seguro</h3>
                    <p className="text-slate-300 font-medium max-w-md">Não precisa de computador. Tudo funciona diretamente pelo seu WhatsApp Business atual, com segurança total dos dados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLANOS / PREÇOS - CLEAN & IMPACTANTE */}
        <section id="planos" className="py-24 md:py-40 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-20">
              <Badge className="mb-4">Investimento</Badge>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Planos que cabem no seu bolso.</h2>
              <p className="text-lg text-slate-500 font-medium">Comece hoje com 7 dias de teste grátis. Cancele quando quiser.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* PLANO ESSENCIAL */}
              <div className="group p-10 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:border-slate-300 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Essencial</h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Atendimento Básico</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-slate-900 transition-colors">
                    <Zap size={24} />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black text-slate-900">6.000 Kz</span>
                  <span className="text-slate-400 font-bold">/ mês</span>
                </div>
                <ul className="space-y-5 mb-12">
                  <li className="flex items-center gap-3 text-slate-600 font-bold text-sm"><Check size={18} className="text-emerald-500" /> Respostas Automáticas 24h</li>
                  <li className="flex items-center gap-3 text-slate-600 font-bold text-sm"><Check size={18} className="text-emerald-500" /> Catálogo de Serviços Digital</li>
                  <li className="flex items-center gap-3 text-slate-600 font-bold text-sm"><Check size={18} className="text-emerald-500" /> Marcação de Horários</li>
                  <li className="flex items-center gap-3 text-slate-600 font-bold text-sm"><Check size={18} className="text-emerald-500" /> Suporte via WhatsApp</li>
                </ul>
                <Button variant="outline" className="w-full py-5 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all" href={CONVERSION_URL}>Testar Grátis</Button>
              </div>

              {/* PLANO PRO */}
              <div className="p-10 rounded-[3.5rem] bg-slate-900 text-white shadow-2xl shadow-emerald-500/10 border-2 border-emerald-500 relative transform md:scale-105">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-8 py-2 font-black text-[10px] uppercase tracking-[0.2em] rounded-bl-3xl rounded-tr-[3.5rem]">Mais Popular</div>
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Profissional</h3>
                    <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest">Completo</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400">
                    <Sparkles size={24} />
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl font-black text-white">15.000 Kz</span>
                  <span className="text-slate-400 font-bold">/ mês</span>
                </div>
                <ul className="space-y-5 mb-12">
                  <li className="flex items-center gap-3 text-slate-100 font-bold text-sm"><Check size={18} className="text-emerald-400" /> Tudo do Essencial</li>
                  <li className="flex items-center gap-3 text-slate-100 font-bold text-sm"><Check size={18} className="text-emerald-400" /> Lembretes Automáticos</li>
                  <li className="flex items-center gap-3 text-slate-100 font-bold text-sm"><Check size={18} className="text-emerald-400" /> Reagendamento Inteligente</li>
                  <li className="flex items-center gap-3 text-slate-100 font-bold text-sm"><Check size={18} className="text-emerald-400" /> Histórico de Clientes (CRM)</li>
                  <li className="flex items-center gap-3 text-slate-100 font-bold text-sm"><Check size={18} className="text-emerald-400" /> Suporte Prioritário</li>
                </ul>
                <Button variant="emerald" className="w-full py-5" href={CONVERSION_URL}>Ativar 7 Dias Grátis</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 md:py-40 bg-slate-50 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-16">
              <Badge className="mb-4">Dúvidas</Badge>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Perguntas frequentes</h2>
            </div>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL - MODERNO */}
        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-6xl rounded-[4rem] bg-slate-900 relative overflow-hidden p-10 md:p-24 text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                O seu salão merece <span className="text-emerald-400">profissionalismo.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-12 font-medium">
                Junte-se a centenas de profissionais em Angola que já ganharam tempo e clientes com a Fluxora.
              </p>
              <div className="flex flex-col items-center gap-6">
                <Button variant="emerald" className="px-16 py-7 text-xl shadow-2xl shadow-emerald-500/40" href={CONVERSION_URL}>
                  Começar agora grátis
                  <ArrowRight size={24} />
                </Button>
                <div className="flex items-center gap-6">
                   <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                       <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+50}`} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800" alt="Cliente" />
                     ))}
                   </div>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Teste gratuito de 7 dias</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER REFINADO */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 mb-6 group cursor-pointer">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl">F</div>
                <span className="text-2xl font-black tracking-tighter">Fluxora</span>
              </a>
              <p className="text-slate-500 font-medium max-w-xs leading-relaxed">
                Simplificando o atendimento e a gestão de salões e barbearias em Angola através da automação inteligente no WhatsApp.
              </p>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest mb-6">Navegação</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-sm uppercase tracking-wider">
                <li><a href="#problema" onClick={(e) => smoothScroll(e, '#problema')} className="hover:text-emerald-500 transition-colors">O Problema</a></li>
                <li><a href="#solucao" onClick={(e) => smoothScroll(e, '#solucao')} className="hover:text-emerald-500 transition-colors">Soluções</a></li>
                <li><a href="#planos" onClick={(e) => smoothScroll(e, '#planos')} className="hover:text-emerald-500 transition-colors">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest mb-6">Contacto</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-sm tracking-wider">
                <li><a href={CONVERSION_URL} className="hover:text-emerald-500 transition-colors flex items-center gap-2"><MessageSquare size={16} /> WhatsApp Suporte</a></li>
                <li className="flex items-center gap-2"><Phone size={16} /> Angola</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} Fluxora Tech • Angola
            </p>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={14} />
              <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Orgulhosamente Angolano</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Premium */}
      <a 
        href={CONVERSION_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] group"
      >
        <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/40 transition-all duration-500 animate-pulse"></div>
        <div className="relative w-16 h-16 bg-[#25D366] text-white rounded-2xl shadow-2xl shadow-emerald-500/40 flex items-center justify-center hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300">
          <MessageSquare size={30} fill="currentColor" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 border-4 border-white rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
      </a>

      {/* Mobile Menu Refinado */}
      <div className={`fixed inset-0 z-[200] bg-slate-900/40 backdrop-blur-md transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white p-10 shadow-2xl transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black">F</div>
              <span className="text-xl font-black tracking-tighter">Fluxora</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors">
              <X size={32} />
            </button>
          </div>
          <nav className="flex flex-col gap-10 text-3xl font-black text-slate-900">
            <a href="#problema" onClick={(e) => smoothScroll(e, '#problema')}>O Problema</a>
            <a href="#solucao" onClick={(e) => smoothScroll(e, '#solucao')}>Soluções</a>
            <a href="#planos" onClick={(e) => smoothScroll(e, '#planos')}>Preços</a>
          </nav>
          <div className="mt-auto pt-20">
            <Button variant="emerald" className="py-6 w-full text-lg" href={CONVERSION_URL} onClick={() => setIsMenuOpen(false)}>
              Teste Grátis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
