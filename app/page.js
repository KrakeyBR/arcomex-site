import Image from "next/image";

import {
  Phone,
  ShieldCheck,
  Drill,
  Truck,
  BadgeCheck,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Building2,
  Mountain,
  Factory,
  MapPinned,
  HardHat,
} from "lucide-react";

export const metadata = {
  title: "ARCOMEX | Perfuração e Desmonte de Rocha",
  description:
    "ARCOMEX é especializada em perfuração e desmonte de rocha para obras de infraestrutura, terraplenagem, loteamentos e projetos industriais em todo o Brasil.",
  keywords:
    "desmonte de rocha, perfuração de rocha, desmonte controlado, desmonte de rocha goias, empresa de desmonte, perfuração para terraplenagem",
};

export default function ArcomexSite() {
  const services = [
    {
      title: "Desmonte de rocha para obras e terraplenagem",
      text: "Execução técnica para liberar frentes de serviço com velocidade, previsibilidade e controle operacional.",
      icon: Mountain,
    },
    {
      title: "Desmonte controlado em áreas urbanas",
      text: "Operações com alto rigor técnico para cenários sensíveis, reduzindo impacto no entorno e elevando a segurança.",
      icon: ShieldCheck,
    },
    {
      title: "Perfuração técnica e gabaritada",
      text: "Perfuração precisa para melhor aproveitamento da operação e mais qualidade no resultado final.",
      icon: Drill,
    },
    {
      title: "Pré-fissuramento e pré-cortes",
      text: "Mais precisão no corte da rocha e melhor proteção de estruturas próximas à frente de serviço.",
      icon: CheckCircle2,
    },
    {
      title: "Logística especializada e transporte",
      text: "Estrutura preparada para atender com agilidade, conformidade e suporte operacional completo.",
      icon: Truck,
    },
    {
      title: "Consultoria técnica para operações",
      text: "Avaliação estratégica para definir a solução ideal conforme a demanda, o risco e o objetivo da obra.",
      icon: BadgeCheck,
    },
  ];

  const stats = [
    { number: "21+", label: "anos de atuação" },
    { number: "300+", label: "operações executadas" },
    { number: "100%", label: "planejamento técnico" },
    { number: "Alta", label: "capacidade operacional" },
  ];

  const sectors = [
    { title: "Infraestrutura", icon: Factory },
    { title: "Terraplenagem", icon: HardHat },
    { title: "Rodovias", icon: MapPinned },
    { title: "Empreendimentos industriais", icon: Building2 },
    { title: "Loteamentos", icon: Building2 },
    { title: "Obras urbanas sensíveis", icon: ShieldCheck },
  ];

  const pillars = [
    {
      title: "Segurança como prioridade operacional",
      text: "Planejamento técnico, controle de execução e protocolos voltados à mitigação de risco em cada etapa.",
    },
    {
      title: "Força de execução em campo",
      text: "Equipe experiente, logística preparada e estrutura para responder com eficiência às demandas da obra.",
    },
    {
      title: "Precisão para ambientes críticos",
      text: "Atuação em cenários que exigem desmonte controlado, previsibilidade e menor impacto no entorno.",
    },
    {
      title: "Visão comercial orientada a resultado",
      text: "A operação é desenhada para ajudar o cliente a avançar cronograma, reduzir perdas e ganhar produtividade.",
    },
  ];

  const process = [
    "Entendimento técnico da demanda",
    "Definição da solução operacional",
    "Planejamento, perfuração e execução",
    "Acompanhamento para máxima eficiência",
  ];

  const gallery = [
    {
      title: "Desmonte de rocha em rodovia",
      location: "Área com tráfego e entorno sensível",
      description:
        "Operação de desmonte em rodovia com técnicas de detonação controlada, priorizando segurança, controle de fragmentos e mínima interferência no entorno.",
      image: "/images/terraplanagem.png",
    },
    {
      title: "Desmonte controlado com explosivos",
      location: "Operação em ambiente controlado - Fábrica da Nestlé",
      description:
        "Execução de desmonte com uso de explosivos para fragmentação eficiente, com controle de vibração, ruído e dispersão de materiais.",
      image: "/images/nestle.DNG",
    },
    {
      title: "Fragmentação de rocha",
      location: "Preparação para remoção e escavação",
      description:
        "Fragmentação de rocha após desmonte, facilitando a remoção do material e garantindo maior produtividade para as etapas seguintes da obra.",
      image: "/images/explosao.jpg",
    },
    {
      title: "Perfuração e Detonação de rocha com equipamento especializado",
      location: "Autódromo de Goiânia",
      description:
        "Perfuração gabaritada com uso de perfuratriz e compressor de alta pressão, garantindo precisão no posicionamento e eficiência na preparação do desmonte.",
      image: "/images/autodromo.HEIC",
    },
    {
      title: "Escavação e conformação de talude",
      location: "Obra de infraestrutura em encosta",
      description:
        "Execução de escavação e conformação de talude para estabilização e preparação do terreno, com foco em segurança geotécnica e continuidade da obra.",
      image: "/images/talude.png",
    },
    {
      title: "Terraplenagem em rodovia",
      location: "Preparação de base para infraestrutura viária",
      description:
        "Serviço de terraplenagem com equipamentos pesados para nivelamento, compactação e preparação do solo para as etapas posteriores da obra.",
      image: "/images/terraplanagem.png",
    },
  ];

  const testimonials = [
    {
      quote:
        "A ARCOMEX conseguiu unir segurança e produtividade em uma frente crítica da obra. O impacto no cronograma foi extremamente positivo.",
      author: "Engenheiro Civil — Infraestrutura",
    },
    {
      quote:
        "Precisávamos de uma operação controlada próxima a uma área sensível. A equipe conduziu tudo com precisão e postura profissional.",
      author: "Gestor de Obra — Loteamento",
    },
    {
      quote:
        "A operação foi bem planejada, bem executada e com resposta rápida. Isso trouxe confiança para avançarmos etapas relevantes do projeto.",
      author: "Coordenador de Engenharia",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-600 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.18),transparent_22%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_18%),linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(0,0,0,0))]" />

      <a
        href="https://wa.me/5562996452450"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-red-950/40 transition hover:scale-[1.03] hover:bg-red-500"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black tracking-[0.35em] text-white">ARCOMEX</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-red-500">
              Perfuração e Desmonte de Rocha
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm text-neutral-300 md:flex">
            <a href="#servicos" className="transition hover:text-white">Serviços</a>
            <a href="#estrutura" className="transition hover:text-white">Estrutura</a>
            <a href="#obras" className="transition hover:text-white">Obras</a>
            <a href="#contato" className="transition hover:text-white">Contato</a>
            <a
              href="#contato"
              className="rounded-xl border border-red-500/40 bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-500"
            >
              Solicitar proposta
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-300">
              <ShieldCheck className="h-4 w-4 text-red-500" />
              Operação, segurança e resultado
            </div>

            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] sm:text-6xl xl:text-7xl">
              Soluções em
              <span className="block text-red-500">Desmonte de Rocha</span>
              com padrão de execução de grande operação.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300">
              A ARCOMEX atua em perfuração e desmonte de rocha para obras de infraestrutura,
              terraplenagem, loteamentos e operações sensíveis, combinando planejamento técnico,
              força de execução e controle operacional em campo.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-500"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#obras"
                className="rounded-2xl border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Ver obras executadas
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20"
              >
                <div className="text-4xl font-black text-red-500">{item.number}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-neutral-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black/50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              "Execução técnica em campo",
              "Operações controladas",
              "Resposta comercial ágil",
              "Foco total em segurança",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-semibold text-neutral-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-500">Serviços</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Capacidade técnica para operações exigentes</h2>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            Serviços estruturados para destravar a obra, reduzir impacto operacional e dar mais previsibilidade ao andamento do projeto.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-red-500/35"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-red-500/20 bg-red-600/10 p-3 text-red-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold leading-8">{service.title}</h3>
                <p className="mt-3 leading-7 text-neutral-400">{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="estrutura" className="border-y border-white/10 bg-black/55">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-500">Estrutura ARCOMEX</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Presença de empresa grande, resposta de operação especializada</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-300">
              A ARCOMEX combina experiência prática, planejamento técnico e estrutura operacional para atender projetos que exigem força de execução, precisão e controle em campo.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-xl font-bold">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-neutral-400">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-500">Setores atendidos</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Atuação em diferentes frentes de obra</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div key={sector.title} className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                <div className="rounded-2xl bg-red-600/10 p-3 text-red-500">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-lg font-semibold">{sector.title}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/55">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-500">Como operamos</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Fluxo claro, técnico e orientado a performance</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item, index) => (
              <div key={item} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                <div className="text-sm font-black uppercase tracking-[0.25em] text-red-500">0{index + 1}</div>
                <p className="mt-4 text-lg font-semibold leading-8">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="obras" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-500">Obras executadas</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Cases reais executados em campo</h2>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            Operações executadas em campo, do desmonte à preparação final do terreno, com controle técnico e segurança em todas as etapas.
          </p>
          <p className="mt-3 font-semibold text-red-500">
            Portfólio técnico com aplicações em rodovias, áreas industriais, taludes, loteamentos e frentes de corte.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-black shadow-2xl shadow-black/30"
            >
              <div className="relative h-[340px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10 transition duration-500 group-hover:via-black/75" />

              <div className="absolute left-0 top-0 m-5 rounded-2xl border border-red-500/30 bg-red-600 px-4 py-2 text-sm font-black text-white shadow-lg shadow-red-950/30">
                0{index + 1}
              </div>

              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-bold leading-8 text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-red-400">
                  {item.location}
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-300 opacity-90 transition duration-500 md:opacity-0 md:translate-y-3 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/55">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-500">Depoimentos</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Confiança gerada na prática</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.quote} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
                <p className="text-lg leading-8 text-neutral-200">“{item.quote}”</p>
                <div className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-red-500">{item.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[36px] border border-red-500/20 bg-gradient-to-r from-red-800 via-red-700 to-red-900 p-10 shadow-2xl shadow-red-950/30 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-red-100/75">Contato comercial</p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Pronto para avançar com mais força, segurança e controle operacional?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-red-50/90">
                Fale com a ARCOMEX e solicite uma proposta para sua obra, operação de terraplenagem ou demanda de desmonte de rocha.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/20 bg-black/20 p-7 backdrop-blur-sm">
              <div className="space-y-5 text-white">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-red-100/70">WhatsApp / Telefone</div>
                  <div className="mt-2 text-2xl font-bold">(62) 99645-2450</div>
                  <div className="text-xl font-semibold">(62) 98236-2288</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-red-100/70">E-mail</div>
                  <div className="mt-2 break-all text-lg font-semibold">arcomexltda@hotmail.com</div>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://wa.me/5562996452450"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-red-700 transition hover:scale-[1.02]"
                  >
                    Falar no WhatsApp
                    <Phone className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:arcomexltda@hotmail.com"
                    className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Enviar e-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
