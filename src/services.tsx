"use client";

import { useEffect, useState, useRef } from "react";
import {
  Code2,
  Globe,
  Lightbulb,
  Smartphone,
  Database,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Code2,
    title: "Desarrollo a la Medida",
    description:
      "Soluciones de software personalizadas que se adaptan perfectamente a las necesidades de tu negocio."
  },
  {
    icon: Globe,
    title: "Páginas Web",
    description:
      "Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes."
  },
  {
    icon: Lightbulb,
    title: "Consultoría",
    description:
      "Asesoría tecnológica estratégica para optimizar procesos y acelerar tu transformación digital."
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description:
      "Apps nativas y multiplataforma con experiencias fluidas en iOS y Android."
  },
  {
    icon: Database,
    title: "Integración de Sistemas",
    description:
      "Conectamos tus plataformas existentes para automatizar flujos de trabajo y sincronizar datos."
  },
  {
    icon: Wrench,
    title: "Soporte y Mantenimiento",
    description:
      "Mantenimiento continuo, actualizaciones y soporte técnico para tus aplicaciones."
  },
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative py-32 lg:py-40 bg-background-black overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span
            className={`inline-block text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-6
              transition-all duration-1000 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            Servicios
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance
              transition-all duration-1000 delay-100 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            Soluciones completas,{" "}
            <span className="text-muted-foreground">resultados reales</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground leading-relaxed
              transition-all duration-1000 delay-200 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            Desde la idea hasta el lanzamiento, cubrimos todas las etapas del desarrollo tecnológico de tu proyecto.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`group relative h-full p-8 lg:p-10 rounded-2xl bg-card border border-border/50
                  transition-all duration-500 ease-elegant overflow-hidden
                  ${
                    hoveredIndex === index
                      ? "border-accent/50 shadow-xl shadow-accent/5 -translate-y-2"
                      : "hover:border-border"
                  }`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 
                    transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : ""
                    }`}
                />

                {/* Content */}
                <div className="relative">
                  {/* Icon container */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6
                      transition-all duration-500 ${
                        hoveredIndex === index
                          ? "bg-accent/20 scale-110"
                          : ""
                      }`}
                  >
                    <service.icon
                      className={`w-7 h-7 text-accent transition-transform duration-500 ${
                        hoveredIndex === index ? "scale-110" : ""
                      }`}
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Animated arrow */}
                  <div
                    className={`mt-6 flex items-center gap-2 text-accent font-medium
                      transition-all duration-500 ${
                        hoveredIndex === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                  >
                    <span className="text-sm">Saber más</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Corner decoration */}
                <div
                  className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-accent/5
                    transition-transform duration-700 ${
                      hoveredIndex === index ? "scale-150" : "scale-100"
                    }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}