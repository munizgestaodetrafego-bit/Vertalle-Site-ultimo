import { useEffect } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  HeartPulse, 
  ShieldCheck, 
  ChevronDown,
  Instagram,
  MessageCircle,
  Clock,
  MapPin,
  Quote,
  Star
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import ogImage from "@assets/ogImage.png";

const WHATSAPP_LINK = "http://wa.me/5531985189079";
const INSTAGRAM_LINK = "https://www.instagram.com/vertallebh";

export default function Home() {
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8", "duration-1000", "fill-mode-forwards");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      el.classList.add("opacity-0");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-[60] group flex items-center gap-3 bg-primary text-primary-foreground px-5 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards"
      >
        <span className="absolute inset-0 rounded-full bg-primary opacity-60 animate-ping pointer-events-none"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 relative z-10"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="hidden sm:inline relative z-10 font-semibold">Fale conosco</span>
      </a>
      {/* Navigation / Header */}
      <header className="absolute top-0 w-full z-50 py-6 px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={ogImage} alt="Vertalle Logo" className="h-10 w-auto" />
          <span className="font-serif font-bold text-xl tracking-wide text-foreground">Vertalle</span>
        </div>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all hover:bg-primary/90 hover:scale-105 shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          Agendar Consulta
        </a>
      </header>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32 px-6 lg:px-12 overflow-hidden">
        {/* Abstract shapes / background texture */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl opacity-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="max-w-2xl space-y-8 scroll-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium tracking-wide mb-4">
              <ShieldCheck className="w-4 h-4 text-primary" />
              FISIOTERAPIA ESPECIALIZADA EM COLUNA & PILATES
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] tracking-tight">
              Transforme sua vida com <span className="text-primary italic">movimento</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Não deixe a dor na coluna limitar sua vida e impedir você de viver bem. Espaço dedicado ao bem-estar, com foco no tratamento da coluna vertebral e Pilates.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg transition-all hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1"
              >
                Fale conosco no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="relative scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src="/images/studio.webp" 
                alt="Interior do estúdio de Pilates Vertalle" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-card text-card-foreground p-6 rounded-2xl shadow-xl max-w-xs animate-in fade-in zoom-in duration-1000 delay-500 fill-mode-forwards opacity-0">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <HeartPulse className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg leading-tight mb-1">Cuidado humanizado</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Atendimento personalizado focado no seu tempo e nos seus limites.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pain Points Section */}
      <section className="py-24 bg-card px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Você se identifica com isso?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-md">
              Seu corpo está dando sinais de que precisa de atenção e ignorar isso pode piorar o problema.
            </p>
            
            <div className="space-y-6">
              {[
                "Dor nas costas ao longo do dia",
                "Desconforto na lombar ou cervical",
                "Corpo travado ao acordar",
                "Medo de movimentar"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4 bg-background p-4 rounded-2xl shadow-sm border border-border">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-lg">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden scroll-reveal" style={{ transitionDelay: "200ms" }}>
             <img 
                src="/images/therapy.jpg" 
                alt="Fisioterapia especializada" 
                className="w-full h-full object-cover"
              />
          </div>
        </div>
      </section>
      {/* Highlight / Stat Section */}
      <section className="py-24 px-6 lg:px-12 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 scroll-reveal relative z-10">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
            Até quando você vai conviver com a dor?
          </h2>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 font-light max-w-3xl mx-auto">
            O tratamento para dores na coluna, dores irradiadas e ciática pode ser muito mais simples e rápido do que você imagina.
          </p>
          
          <div className="py-8">
            <div className="inline-block border-2 border-primary-foreground/20 rounded-3xl p-8 backdrop-blur-sm bg-black/5">
              <p className="text-5xl lg:text-7xl font-serif font-bold text-secondary mb-2">97%</p>
              <p className="text-xl font-medium tracking-wide">dos casos de hérnia de disco não precisam de cirurgia.</p>
            </div>
          </div>
          
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 px-10 py-5 rounded-full bg-secondary text-secondary-foreground font-bold text-xl transition-all hover:bg-white hover:scale-105 shadow-xl text-center"
          >
            Quero parar de sentir dor
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
      {/* What we treat & Approach */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <div className="space-y-8 scroll-reveal">
              <h2 className="text-4xl font-serif font-bold text-foreground">Podemos ajudar você nos seguintes casos:</h2>
              <ul className="space-y-4">
                {[
                  "Hérnia de disco",
                  "Dor no nervo ciático",
                  "Dores irradiadas para as pernas",
                  "Dor lombar",
                  "Dor cervical",
                  "Limitações de movimento e rigidez muscular",
                  "Dores comuns no envelhecimento e cuidados com a mobilidade do idoso",
                  "Reabilitação pós-lesão ou pós-cirúrgica"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-secondary/30 rounded-[3rem] p-10 lg:p-14 scroll-reveal" style={{ transitionDelay: "200ms" }}>
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-8 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-6">E se você não sente dor, também podemos ajudar:</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Oferecemos atendimentos no Pilates como prática de exercício físico para quem deseja cuidar do corpo, prevenir dores e conquistar mais qualidade de vida e bem-estar.
              </p>
            </div>
          </div>

          {/* Comparison */}
          <div className="mb-24 scroll-reveal">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">Por que escolher a Vertalle?</h2>
              <p className="text-xl text-muted-foreground">Onde estúdios tradicionais falham, nós focamos em você.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Problem column */}
              <div className="space-y-4">
                <div className="text-center pb-4 text-muted-foreground font-medium text-sm tracking-widest uppercase">ESTÚDIOS GenéricOS</div>
                {[
                  "Sessões avulsas e tratamentos eternos",
                  "Turmas lotadas de pilates",
                  "Atendimento genérico",
                  "Falta de acompanhamento"
                ].map((item, i) => (
                  <div key={`bad-${i}`} className="bg-card p-6 rounded-2xl border border-border text-muted-foreground flex items-center opacity-70">
                    <span className="w-3 h-0.5 bg-muted-foreground/30 mr-4 shrink-0"></span>
                    {item}
                  </div>
                ))}
              </div>
              
              {/* Solution column */}
              <div className="space-y-4">
                <div className="text-center pb-4 text-primary font-bold text-sm tracking-widest uppercase">A Abordagem Vertalle</div>
                {[
                  "Planos de tratamento curto e eficiente",
                  "Turmas reduzidas de pilates",
                  "Atendimento personalizado",
                  "Acompanhamento de perto"
                ].map((item, i) => (
                  <div key={`good-${i}`} className="bg-secondary/50 p-6 rounded-2xl border border-secondary text-foreground font-medium flex items-center shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-4 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {/* Process Section */}
      <section className="py-24 bg-card px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="scroll-reveal">
               <img 
                  src="/images/interior.png" 
                  alt="Interior da Vertalle" 
                  className="w-full aspect-square md:aspect-[4/3] object-cover rounded-[2rem] shadow-xl"
                />
            </div>
            
            <div className="space-y-16 scroll-reveal" style={{ transitionDelay: "200ms" }}>
              <div className="space-y-6">
                <h3 className="text-3xl font-serif font-bold text-foreground">Como funcionam os atendimentos fisioterapêuticos?</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Todo tratamento fisioterapêutico começa com uma consulta inicial minuciosa. Nela, realizamos exame físico detalhado, testes funcionais e avaliações específicas para identificar a real causa da sua queixa. A partir disso, elaboramos e definimos, junto com você, a frequência das sessões e o tempo de tratamento ideal.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-serif font-bold text-foreground">Como funcionam os atendimentos no Pilates?</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Os atendimentos de Pilates começam com uma avaliação individual para identificar suas necessidades e objetivos. São realizadas em grupos de até três pessoas, com duração de 50 minutos, conduzida por fisioterapeuta, garantindo acompanhamento personalizado e de qualidade.
                </p>
                <div className="pt-4">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg transition-all hover:bg-primary/90 shadow-md hover:-translate-y-1"
                  >
                    Quero conhecer!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery — Conheça o espaço */}
      <section className="py-24 px-6 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal max-w-2xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Nosso espaço</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Conheça a Vertalle
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Um ambiente cuidadosamente preparado, com equipamentos de alta qualidade e um clima acolhedor que faz toda a diferença no seu tratamento.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
            {[
              { src: "/images/gallery/04.jpeg", alt: "Estúdio Vertalle com equipamentos de Pilates", className: "col-span-2 row-span-2" },
              { src: "/images/gallery/01.jpeg", alt: "Sala de Pilates com tapetes e logo Vertalle", className: "col-span-2 row-span-1" },
              { src: "/images/gallery/03.jpeg", alt: "Aparelhos Reformer no estúdio", className: "col-span-1 row-span-1" },
              { src: "/images/gallery/05.jpeg", alt: "Cadillac e Reformer no espaço Vertalle", className: "col-span-1 row-span-1" },
              { src: "/images/gallery/07.jpeg", alt: "Vista ampla do estúdio Vertalle", className: "col-span-2 row-span-2" },
              { src: "/images/gallery/02.jpeg", alt: "Detalhe dos aparelhos Classic Pilates", className: "col-span-1 row-span-1" },
              { src: "/images/gallery/06.jpeg", alt: "Sala de avaliação fisioterapêutica", className: "col-span-1 row-span-1" }
            ].map((img, i) => (
              <div
                key={i}
                className={`${img.className} relative rounded-2xl overflow-hidden group shadow-md scroll-reveal`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 scroll-reveal">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg transition-all hover:bg-primary/90 shadow-md hover:-translate-y-1"
            >
              Agendar uma visita
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-24 px-6 lg:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 scroll-reveal relative">
            <div className="aspect-[3/4] rounded-full overflow-hidden shadow-2xl relative border-8 border-background p-2 bg-secondary">
               <img 
                  src="/images/founder.jpg" 
                  alt="Giselle Gomide - Fundadora" 
                  className="w-full h-full object-cover rounded-full"
                />
            </div>
            {/* Decorative element */}
            <div className="absolute top-1/2 -left-8 w-24 h-24 bg-primary rounded-full mix-blend-multiply opacity-20 blur-xl"></div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Conheça a fundadora</h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-2">Giselle Gomide</h3>
              <p className="text-muted-foreground font-medium">FISIOTERAPEUTA — CREFITO: 237462F · RQE nº 473/2026</p>
            </div>
            
            <div className="text-lg lg:text-xl text-foreground/80 leading-relaxed space-y-6 font-light">
              <p>
                "É um prazer ter você aqui! Meu nome é Giselle Gomide, sou a fundadora da Vertalle, fisioterapeuta há 10 anos e especialista no atendimento à pessoa idosa.
              </p>
              <p>
                Ao longo da minha caminhada, fui me aproximando cada vez mais do tratamento da coluna vertebral, especialmente de pessoas que convivem com dores, limitações e inseguranças. Acredito em um cuidado individualizado, com escuta, acolhimento e respeito ao tempo de cada paciente.
              </p>
              <p className="font-serif font-medium text-2xl text-primary italic pt-4">
                Na Vertalle, você encontra um espaço preparado para cuidar de você!"
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Depoimentos</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
              O que dizem nossos pacientes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Atendimento impecável! O espaço da clínica é lindo e muito organizado. A profissional é extremamente preparada, cuidadosa e dedicada, me senti acolhida do início ao fim. Experiência muito positiva. Recomendo demais!!",
                name: "Adriana Soares"
              },
              {
                quote: "Realizei o meu primeiro atendimento com a Giselle e fiquei admirada com a competência já me sinto muito melhor, além do espaço ser de muita qualidade, bom gosto e conforto! Super indico!",
                name: "Jéssica Lima"
              },
              {
                quote: "Ambiente adequado e muito bem equipado. Destaque para a qualificação profissional, bem como a comprovada experiência da fisioterapeuta responsável!",
                name: "Luiz Geraldo"
              }
            ].map((t, i) => (
              <div
                key={i}
                className="relative bg-background rounded-[2rem] p-10 shadow-sm border border-border flex flex-col scroll-reveal"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <Quote className="w-10 h-10 text-primary/30 mb-6" />
                <p className="text-foreground/80 leading-relaxed text-lg font-light italic flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="font-serif font-bold text-foreground text-lg">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-24 bg-secondary/20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <h2 className="text-4xl font-serif font-bold text-center text-foreground mb-16">Dúvidas frequentes</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "A Vertalle atende apenas casos relacionados à coluna?",
                a: "Não. A Vertalle não atende apenas coluna. Embora tenhamos uma atuação especializada no cuidado da coluna vertebral, também oferecemos atendimento fisioterapêutico para outras condições musculoesqueléticas, além de programas de reabilitação e prevenção de dores, sempre de forma individualizada."
              },
              {
                q: "Estou com uma dor forte na coluna. Devo fazer Pilates ou Fisioterapia?",
                a: "Nos casos de dor aguda na coluna (sintomas que surgiram há menos de 15 dias ou até 3 meses, especialmente com limitação importante) o mais indicado é iniciar o tratamento fisioterapêutico especializado. Nesse período, o foco é controlar a dor, reduzir a incapacidade e recuperar os movimentos com segurança. O Pilates não costuma ser a melhor opção nessa fase inicial, sendo mais adequado após a melhora clínica."
              },
              {
                q: "Tenho artrose. O Pilates é indicado?",
                a: "A artrose é um desgaste da cartilagem das articulações e o exercício é fundamental para o controle da dor, para a melhora da mobilidade e para o fortalecimento da musculatura. O Pilates costuma ser uma ótima opção por oferecer acompanhamento próximo e progressão gradual, respeitando seus limites. Em fases de crise ou dor intensa, o ideal pode ser iniciar com fisioterapia e, depois, evoluir para o Pilates."
              },
              {
                q: "Tenho dor crônica há meses ou anos. Devo fazer fisioterapia ou Pilates?",
                a: "Quando a dor é crônica, mas encontra-se controlada e não gera grandes limitações no dia a dia, o Pilates pode ser uma excelente opção para promover fortalecimento, melhorar a mobilidade e prevenir agravamentos. Por outro lado, quando há piora recente do quadro, episódios de travamento ou dificuldade para realizar atividades cotidianas, o mais indicado é iniciar com fisioterapia individualizada. Após a estabilização dos sintomas, a continuidade pode ser feita com o Pilates."
              },
              {
                q: "Quando posso sair da fisioterapia e ir para o Pilates?",
                a: "Essa transição acontece quando a dor está controlada, os movimentos estão mais seguros e você já recuperou melhor sua capacidade funcional. Nesse momento, o Pilates passa a ser uma excelente ferramenta para manter os resultados conquistados, ganhar força, melhorar a postura e evitar novas crises."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-background rounded-2xl border border-border px-6 py-2 shadow-sm data-[state=open]:border-primary/50 transition-colors">
                <AccordionTrigger className="text-left font-serif font-bold text-lg hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-32 px-6 lg:px-12 bg-foreground text-background text-center relative overflow-hidden">
        {/* Subtle texture/glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto space-y-10 scroll-reveal relative z-10">
          <h2 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
            Um novo começo para a sua saúde
          </h2>
          <div className="pt-8">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-xl transition-all hover:bg-primary/90 hover:scale-105 shadow-2xl text-center"
            >
              Quero agendar uma avaliação
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
      {/* Location */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 space-y-6 scroll-reveal">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Onde estamos</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              Venha nos visitar
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Um espaço pensado para receber você com conforto, acolhimento e tudo o que é necessário para o seu tratamento.
            </p>
            <div className="flex items-start gap-4 pt-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-serif font-bold text-xl text-foreground">Rua Conselheiro Lafaiete, 44</p>
                <p className="text-muted-foreground">Floresta · Belo Horizonte / MG</p>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Conselheiro+Lafaiete+44+Floresta+Belo+Horizonte+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 shadow-md hover:-translate-y-0.5"
              >
                Ver rota no Google Maps
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 scroll-reveal" style={{ transitionDelay: "200ms" }}>
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-background aspect-[4/3] lg:aspect-[16/10]">
              <iframe
                title="Localização Vertalle"
                src="https://maps.google.com/maps?q=Rua%20Conselheiro%20Lafaiete%2044%20Floresta%20Belo%20Horizonte%20MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card pt-20 pb-10 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={ogImage} alt="Vertalle Logo" className="h-8 w-auto" />
              <span className="font-serif font-bold text-xl text-foreground">Vertalle</span>
            </div>
            <p className="text-muted-foreground">Fisioterapia especializada em coluna e Pilates.
            Cuidado humanizado para o seu bem-estar.</p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Horários de atendimento
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex flex-col">
                <strong className="text-foreground font-medium">Pilates:</strong>
                <span>Segunda a Quinta-feira: 8h, 9h e 10h</span>
              </li>
              <li className="flex flex-col pt-2">
                <strong className="text-foreground font-medium">Fisioterapia:</strong>
                <span>Sextas-feiras: 8h às 13h</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground">
                <p className="text-foreground font-medium">Rua Conselheiro Lafaiete, 44</p>
                <p className="text-sm">Floresta · Belo Horizonte / MG</p>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border text-foreground hover:border-primary hover:text-primary transition-colors text-sm font-medium">
                  <MessageCircle className="w-4 h-4" />
                  Iniciar conversa pelo WhatsApp
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  @vertallebh
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Vertalle · Fisioterapia Especializada</p>
          <p>CREFITO: 237462F · RQE nº 473/2026</p>
        </div>
      </footer>
    </div>
  );
}
