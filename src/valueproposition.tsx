"use client";

import { useEffect, useState, useRef } from "react";
import { Check, Zap, Users, Target, Sparkles, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Desarrollo ágil",
    description:
      "Metodologías iterativas que permiten entregas rápidas y ajustes continuos según tus necesidades.",
    metricLabel: "Más rápido",
  },
  {
    icon: Users,
    title: "Equipo experto",
    description:
      "Profesionales con amplia experiencia en tecnologías modernas y mejores prácticas de desarrollo.",
    metricLabel: "Excelentes prácticas",
  },
  {
    icon: Target,
    title: "Soluciones a medida",
    description:
      "Cada proyecto es único. Diseñamos soluciones personalizadas que se ajustan a tu modelo de negocio.",
    metricLabel: "Personalizado",
  },
  {
    icon: Sparkles,
    title: "Tecnología moderna",
    description:
      "Stack tecnológico actualizado con frameworks y herramientas de última generación.",
    metricLabel: "Tecnologías",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description:
      "Arquitecturas preparadas para crecer con tu negocio, soportando aumentos de usuarios y datos.",
    metricLabel: "Crecimiento",
  },
];

const highlights = [
  "Entrega en sprints de 2 semanas",
  "Código limpio y documentado",
  "Testing y QA incluido",
  "Soporte post-lanzamiento",
  "Capacitación del equipo",
  "Metodología transparente",
];

export function ValueProposition() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
       id={'valores'}
      className="relative py-32 lg:py-40 bg-background-black overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-border to-transparent" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column */}
          <div>
            <span
              className={`inline-block text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-6
                transition-all duration-1000 ease-elegant ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
            >
              Por qué Klyra Works
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance leading-tight
                transition-all duration-1000 delay-100 ease-elegant ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
            >
              Tu aliado en{" "}
              <span className="relative inline-block">
                transformación digital
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,4 Q50,8 100,4 T200,4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent/40"
                  />
                </svg>
              </span>
            </h2>
            <p
              className={`text-xl text-muted-foreground mb-10 leading-relaxed
                transition-all duration-1000 delay-200 ease-elegant ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
            >
              Convertimos desafíos tecnológicos complejos en soluciones elegantes que impulsan el crecimiento de tu negocio.
            </p>

            <div
              className={`grid sm:grid-cols-2 gap-4 transition-all duration-1000 delay-300 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {highlights.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`transition-all duration-700 ease-elegant ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div
                  className={`relative flex gap-5 p-6 rounded-2xl border transition-all duration-500 cursor-pointer
                    ${
                      activeIndex === index
                        ? "bg-card border-accent/30 shadow-lg shadow-accent/5"
                        : "bg-card/50 border-border/50 hover:border-border"
                    }`}
                >
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full bg-accent transition-all duration-500 ${
                      activeIndex === index ? "h-12 opacity-100" : "h-0 opacity-0"
                    }`}
                  />

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      activeIndex === index
                        ? "bg-accent/20 scale-110"
                        : "bg-primary/5"
                    }`}
                  >
                    <benefit.icon
                      className={`w-6 h-6 transition-colors duration-500 ${
                        activeIndex === index ? "text-accent" : "text-primary"
                      }`}
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground text-lg">
                        {benefit.title}
                      </h3>
                      <div
                        className={`text-right transition-all duration-500 ${
                          activeIndex === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      >
                        <span className="text-xs text-muted-foreground">
                          {benefit.metricLabel}
                        </span>
                      </div>
                    </div>
                    <p
                      className={`text-muted-foreground leading-relaxed transition-all duration-500 ${
                        activeIndex === index ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}