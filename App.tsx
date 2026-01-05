
import React, { useState, useEffect, useRef } from 'react';
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
  Plus,
  Minus,
  BookX,
  Hourglass,
  CalendarOff,
  Cpu,
  BellRing,
  Coins,
  Layout,
  ExternalLink,
  Crown,
  Quote,
  Users,
  MousePointer2,
  Clock,
  Rocket
} from 'lucide-react';
import { PricingPlan, Feature, FAQItem, Testimonial } from './types';

const WHATSAPP_URL = "https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S";
const FORM_URL = "https://forms.gle/FCf47e32RiNTDi8cA";

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

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'emerald' | 'outline' | 'white';
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', href, onClick, ...props }) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty('--mouse-x', `${x}px`);
    btnRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    btnRef.current.style.setProperty('--mouse-x', '50%');
    btnRef.current.style.setProperty('--mouse-y', '50%');
  };

  const variants = {
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
      className={`botaoxper group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold transition-all duration-300 ${variants[variant]} ${className}`} 
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    const sequence = async () => {
      setStep(0);
      await new Promise(r => timeoutId = window.setTimeout(r, 2000));
      setIsTyping(true);
      await new Promise(r => timeoutId = window.setTimeout(r, 1500));
      setIsTyping(false);
      setStep(1);
      await new Promise(r => timeoutId = window.setTimeout(r, 2000));
      setIsTyping(true);
      await new Promise(r => timeoutId = window.setTimeout(r, 1200));
      setIsTyping(false);
      setStep(2);
      await new Promise(r => timeoutId = window.setTimeout(r, 4000));
      setStep(-1);
      await new Promise(r => timeoutId = window.setTimeout(r, 500));
      sequence();
    };
    sequence();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full h-full bg-[#efe7de] flex flex-col font-sans relative overflow-hidden text-left select-none">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://theme.zdassets.com/theme_assets/11624835/9c48b2e7c37107738226067b5e82110c4314c185.png')] bg-repeat"></div>
      <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between shadow-md relative z-10">
        <div className="flex items-center gap-3">
          <ChevronLeft size={18} className="text-white/70" />
          <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center border-2 border-white/20 shadow-sm overflow-hidden">
             <Bot size={20} />
          </div>
          <div>
            <h4 className="text-[14px] font-bold leading-none">Fluxora Bot</h4>
            <span className="text-[10px] opacity-80 font-medium mt-0.5 block flex items-center gap-1">
              {isTyping ? <span className="italic">a escrever...</span> : <><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> online</>}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto relative z-10">
        {step >= 0 && (
          <div className="flex flex-col items-end animate-in slide-in-from-right-4 duration-500">
            <div className="bg-[#dcf8c6] p-3 rounded-2xl rounded-tr-none shadow-sm text-[12px] text-slate-800 max-w-[85%]">
              <p>Quero marcar barba para hoje às 15h. 🇦🇴</p>
            </div>
          </div>
        )}
        {step >= 1 && (
          <div className="flex flex-col items-start animate-in slide-in-from-left-4 duration-500">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-md text-[12px] text-slate-800">
              <p className="font-bold text-slate-900 mb-2">Olá! Sim, temos vaga com o Nelson. Posso confirmar?</p>
              <div className="flex gap-2 my-2">
                <span className="bg-emerald-50 text-emerald-600 text-[10px] px-3 py-1.5 rounded-full font-bold">SIM, POR FAVOR</span>
              </div>
            </div>
          </div>
        )}
        {step >= 2 && (
          <div className="flex flex-col items-start animate-in slide-in-from-left-4 duration-500">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-md text-[12px] text-slate-800 border border-slate-100">
              <p>Agendado! ✅ Enviamos um lembrete em breve.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SavingsCalculator = () => {
  const [appointments, setAppointments] = useState(15);
  const timePerAppointment = 4;
  const monthlySavings = Math.round((appointments * timePerAppointment * 26) / 60);

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 reveal">
      <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-slate-900">
        <TrendingUp className="text-emerald-500" />
        Calculadora de Lucro
      </h3>
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
            Atendimentos por dia: <span className="text-slate-900 text-lg ml-2">{appointments}</span>
          </label>
          <input 
            type="range" min="5" max="50" value={appointments} 
            onChange={(e) => setAppointments(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100">
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">Tempo Poupado</p>
            <p className="text-3xl font-black text-emerald-700">{monthlySavings}h<span className="text-sm ml-1 font-bold">/mês</span></p>
          </div>
          <div className="bg-slate-900 p-6 rounded-3xl text-white">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Produtividade</p>
            <p className="text-3xl font-black text-white">+32%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ number, title, desc, icon }: { number: string, title: string, desc: string, icon: React.ReactNode }) => (
  <div className="flex flex-col items-center text-center group reveal">
    <div className="relative mb-8">
      <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-black border-4 border-white">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-black mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-500 font-medium text-sm leading-relaxed">{desc}</p>
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      
      {/* Banner de Urgência */}
      <div className="bg-emerald-600 text-white py-2 px-4 text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest relative z-[70]">
        🔥 Apenas 5 vagas restantes para o teste grátis de 7 dias esta semana!
      </div>

      <header className={`fixed top-10 md:top-14 left-0 right-0 z-[60] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className={`px-6 py-4 rounded-3xl flex items-center justify-between transition-all duration-500 ${scrolled ? 'header-glass shadow-lg' : 'bg-transparent'}`}>
            <a href="#" className="flex items-center gap-2 group cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg rotate-3">F</div>
              <span className="text-xl font-black tracking-tighter text-slate-900">Fluxora</span>
            </a>
            <nav className="hidden md:flex items-center gap-10 text-sm font-bold">
              {['Solução', 'Preços', 'FAQ'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={(e) => smoothScroll(e, `#${item.toLowerCase()}`)} className="text-slate-600 hover:text-emerald-500 transition-colors">{item}</a>
              ))}
              <Button variant="primary" className="py-2.5 px-6 text-xs" href={FORM_URL}>Ativar Teste</Button>
            </nav>
            <button className="md:hidden p-3 rounded-2xl bg-white shadow-md text-slate-900" onClick={() => setIsMenuOpen(true)}><Menu size={20} /></button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="relative pt-40 pb-20 md:pt-64 md:pb-40 overflow-hidden hero-grid">
          <div className="absolute top-0 right-0 w-full md:w-[45%] h-full bg-slate-900 hidden md:block rounded-l-[120px] z-10"></div>
          <div className="container mx-auto px-4 max-w-7xl relative z-20">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 text-center md:text-left reveal">
                <Badge className="mb-6"><Rocket size={14} /> Sistema #1 em Luanda</Badge>
                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tight text-slate-900">
                  Pare de digitar, <br/><span className="text-emerald-500 italic">comece a faturar.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl font-medium leading-relaxed">
                  Automatize o seu WhatsApp. Agendamentos instantâneos 24h por dia, mesmo enquanto você corta ou dorme.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
                  <Button variant="emerald" className="px-12 py-7 text-xl shadow-emerald-500/30" href={FORM_URL}>
                    Dobrar o Meu Atendimento
                    <ArrowRight size={20} className="ml-2" />
                  </Button>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} className="w-10 h-10 rounded-full border-4 border-white shadow-sm" />)}
                    </div>
                    <p className="text-xs font-bold text-slate-400">+200 negócios ativos</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative w-full reveal">
                <div className="relative z-20 mx-auto md:ml-auto w-full max-w-[320px] aspect-[9/18.5] bg-slate-800 rounded-[3.5rem] p-3 shadow-2xl border border-white/10">
                  <div className="w-full h-full rounded-[2.8rem] overflow-hidden border-2 border-slate-700 bg-white">
                    <WhatsAppMockup />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-12 bg-slate-900 text-white reveal">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Clientes Felizes", val: "200+" },
                { label: "Marcações/Mês", val: "12.000+" },
                { label: "Tempo Poupado", val: "1.500h" },
                { label: "Setup em", val: "5 min" }
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-5xl font-black text-emerald-400 mb-2">{s.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 md:py-40 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-24 reveal">
              <Badge className="mb-4">Simplicidade</Badge>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900">Configuração em 3 passos</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-50 hidden md:block -translate-y-1/2 -z-10"></div>
              <StepCard number="1" icon={<MousePointer2 size={32}/>} title="Conecta o WhatsApp" desc="Lê o QR Code como se estivesses a entrar no WhatsApp Web. Seguro e rápido." />
              <StepCard number="2" icon={<Clock size={32}/>} title="Define o Teu Horário" desc="Diz à IA os teus horários de serviço e os preços dos teus cortes." />
              <StepCard number="3" icon={<Zap size={32}/>} title="Recebe Agendamentos" desc="A IA atende, agenda e envia lembretes. Tu só precisas de aparecer para trabalhar." />
            </div>
          </div>
        </section>

        {/* CALCULATOR & ROI */}
        <section id="solucao" className="py-24 md:py-40 bg-slate-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="reveal">
                <Badge className="mb-4">ROI Garantido</Badge>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Fluxora paga-se <br/><span className="text-emerald-500">sozinha.</span></h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                  Cada cliente que desiste por falta de resposta rápida custa dinheiro. 
                  Com a Fluxora, o seu salão atende 24h por dia, 7 dias por semana. 
                  Basta 1 corte recuperado por mês para pagar a mensalidade.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-emerald-500 mt-1"/>
                    <p className="font-bold text-slate-900">Recuperação de Inativos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-emerald-500 mt-1"/>
                    <p className="font-bold text-slate-900">Marcações 23h da noite</p>
                  </div>
                </div>
              </div>
              <SavingsCalculator />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SLIDER MOCK */}
        <section className="py-24 md:py-40 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
               <div>
                  <Badge className="mb-4">Depoimentos</Badge>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900">Histórias de Sucesso em Luanda</h2>
               </div>
               <div className="flex gap-4 mt-8">
                 <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all"><ChevronLeft/></button>
                 <button className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xl"><ArrowRight/></button>
               </div>
             </div>
             <div className="grid md:grid-cols-2 gap-10 reveal">
               {[
                 { name: "Nelson Pedro", role: "Barbearia Real (Talatona)", txt: "O robô atende às 23h quando estou a dormir. Acordo de manhã com a agenda cheia. É fenomenal!" },
                 { name: "Bela Santos", role: "Studio Bela (Kilamba)", txt: "Parei de contratar uma rececionista só para o WhatsApp. Poupei 80.000 Kz por mês!" }
               ].map((t, i) => (
                 <div key={i} className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 relative group hover:bg-emerald-500 transition-all duration-700">
                   <Quote className="absolute top-10 right-10 text-emerald-500/20 group-hover:text-white/20" size={60} />
                   <p className="text-xl font-medium text-slate-600 mb-10 group-hover:text-white transition-colors">"{t.txt}"</p>
                   <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden border-2 border-white">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`} alt=""/>
                     </div>
                     <div>
                       <h4 className="font-black text-slate-900 group-hover:text-white">{t.name}</h4>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-white/70">{t.role}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="preços" className="py-24 md:py-40 bg-slate-900 rounded-[4rem] mx-4">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-24 reveal">
              <Badge className="bg-white/10 text-emerald-400 mb-6">Investimento</Badge>
              <h2 className="text-4xl md:text-7xl font-black text-white">Escolha o seu plano.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10 reveal">
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] flex flex-col hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-black text-white mb-2">Essencial</h3>
                <p className="text-emerald-400 font-bold text-4xl mb-10">6.000 Kz <span className="text-sm text-slate-400">/mês</span></p>
                <ul className="space-y-6 mb-12 flex-grow text-slate-300 font-medium">
                  <li className="flex gap-3"><Check className="text-emerald-500"/> Atendimento IA 24/7</li>
                  <li className="flex gap-3"><Check className="text-emerald-500"/> Agenda Digital</li>
                </ul>
                <Button variant="white" className="w-full" href={FORM_URL}>Começar Agora</Button>
              </div>
              <div className="bg-emerald-600 p-12 rounded-[3.5rem] flex flex-col relative shadow-2xl shadow-emerald-500/20 scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest">Mais Vendido</div>
                <h3 className="text-2xl font-black text-white mb-2">Profissional</h3>
                <p className="text-white font-black text-4xl mb-10">15.000 Kz <span className="text-sm text-emerald-100">/mês</span></p>
                <ul className="space-y-6 mb-12 flex-grow text-white font-medium">
                  <li className="flex gap-3"><Check className="text-slate-900"/> Lembretes Automáticos</li>
                  <li className="flex gap-3"><Check className="text-slate-900"/> Recuperação de Clientes</li>
                  <li className="flex gap-3"><Check className="text-slate-900"/> Gestão de Equipa</li>
                </ul>
                <Button variant="primary" className="w-full" href={FORM_URL}>Ativar Teste 7 Dias</Button>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 reveal">
          <div className="container mx-auto px-4 max-w-4xl text-center">
             <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Não deixes o teu <br/>salão no passado.</h2>
             <p className="text-xl text-slate-500 mb-12 font-medium">Junta-te aos negócios que estão a liderar o mercado em Angola.</p>
             <Button variant="emerald" className="px-16 py-8 text-2xl" href={FORM_URL}>Quero Começar Grátis</Button>
             <p className="mt-8 text-slate-400 font-bold text-sm">Sem cartão de crédito • Cancela quando quiseres</p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black">F</div>
                <span className="text-xl font-black text-slate-900">Fluxora</span>
              </div>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">© 2024 Fluxora AO • Luanda, Angola</p>
              <div className="flex gap-6">
                 <a href={WHATSAPP_URL} className="text-slate-400 hover:text-emerald-500"><MessageSquare size={20}/></a>
                 <a href="#" className="text-slate-400 hover:text-emerald-500 font-bold text-xs uppercase tracking-widest">Suporte</a>
              </div>
           </div>
        </div>
      </footer>

      {/* FAB Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100 z-[100] md:hidden reveal">
        <Button variant="emerald" className="w-full py-5 text-lg" href={FORM_URL}>
          Experimentar Grátis
        </Button>
      </div>

      {/* Menu Mobile */}
      <div className={`fixed inset-0 z-[200] bg-slate-900/60 backdrop-blur-md transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-xs bg-white p-8 flex flex-col transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-black tracking-tighter text-slate-900">Fluxora</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-100 rounded-xl text-slate-900"><X size={24} /></button>
          </div>
          <nav className="flex flex-col gap-8 text-4xl font-black text-slate-900">
            <a href="#solução" onClick={(e) => smoothScroll(e, '#solução')}>Solução</a>
            <a href="#preços" onClick={(e) => smoothScroll(e, '#preços')}>Preços</a>
            <a href="#faq" onClick={(e) => smoothScroll(e, '#faq')}>Dúvidas</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default App;
