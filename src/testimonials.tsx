"use client";

import { useEffect, useState, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Klyra Works nos entregó una plataforma que superó nuestras expectativas. El equipo entendió perfectamente nuestras necesidades.",
    author: "María González",
    role: "CEO",
    company: "TechStart Solutions",
    image: "MG",
  },
  {
    quote:
      "La capacidad técnica y el compromiso del equipo fueron excepcionales. Entregaron en tiempo y forma, con calidad superior.",
    author: "Carlos Mendoza",
    role: "Director de Tecnología",
    company: "Innovatech Corp",
    image: "CM",
  },
  {
    quote:
      "Trabajar con Klyra Works fue una experiencia increíble. Desde el primer día se sintieron como parte de nuestro equipo.",
    author: "Ana Ramírez",
    role: "Fundadora",
    company: "Digital Commerce",
    image: "AR",
  },
];

const logos = [
  { name: "TechStart", initials: "TS" },
  { name: "Innovatech", initials: "IT" },
  { name: "Digital Commerce", initials: "DC" },
  { name: "CloudSystems", initials: "CS" },
  { name: "DataFlow", initials: "DF" },
  { name: "WebPro", initials: "WP" },
];

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="testimonios"
      className="relative py-32 lg:py-40 bg-background-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            Testimonios
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance
              transition-all duration-1000 delay-100 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            Clientes que{" "}
            <span className="text-muted-foreground">confían en nosotros</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground leading-relaxed
              transition-all duration-1000 delay-200 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            Empresas de diversos sectores han transformado sus operaciones con nuestras soluciones.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`transition-all duration-700 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={() => setActiveTestimonial(index)}
            >
              <div
                className={`group relative h-full p-8 lg:p-10 rounded-2xl border transition-all duration-500 ease-elegant ${
                  activeTestimonial === index
                    ? "bg-card border-accent/30 shadow-xl shadow-accent/5 -translate-y-2"
                    : "bg-card/50 border-border/50 hover:border-border"
                }`}
              >
                {/* Quote icon */}
                <div
                  className={`absolute -top-4 -left-2 transition-all duration-500 ${
                    activeTestimonial === index
                      ? "opacity-100 scale-100"
                      : "opacity-30 scale-90"
                  }`}
                >
                  <Quote className="w-12 h-12 text-accent/20 fill-accent/10" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 transition-all duration-300 ${
                        activeTestimonial === index
                          ? "fill-accent text-accent"
                          : "fill-accent/50 text-accent/50"
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground mb-8 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeTestimonial === index
                        ? "bg-accent/20 scale-110"
                        : "bg-primary/10"
                    }`}
                  >
                    <span
                      className={`text-sm font-bold transition-colors duration-500 ${
                        activeTestimonial === index
                          ? "text-accent"
                          : "text-primary"
                      }`}
                    >
                      {testimonial.image}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Active indicator line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-0.5 bg-accent transition-all duration-500 ${
                    activeTestimonial === index
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mb-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeTestimonial === index
                  ? "w-8 bg-accent"
                  : "w-1.5 bg-border hover:bg-muted-foreground/30"
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Logos section */}
        <div
          className={`transition-all duration-1000 delay-700 ease-elegant ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-center text-sm text-muted-foreground mb-10 tracking-wide">
            EMPRESAS QUE HAN CONFIADO EN NUESTROS SERVICIOS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {logos.map((logo, index) => (
              <div
                key={logo.name}
                className={`group flex items-center gap-3 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(index + 8) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center group-hover:border-accent/30 group-hover:bg-muted transition-all duration-300">
                  <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                    {logo.initials}
                  </span>
                </div>
                <span className="font-medium text-muted-foreground/60 group-hover:text-foreground/80 transition-colors hidden sm:block">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}