"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Check, Mail } from "lucide-react";

const benefits = [
  "Consultoría gratuita",
  "Cotización sin compromiso",
  "Respuesta en 24 horas",
];

export function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
      setMousePosition({ x, y });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      id={'contacto'}
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-primary overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl animate-float"
          style={{
            animationDelay: "2s",
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 text-balance leading-tight
              transition-all duration-1000 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-8 blur-sm"
              }`}
          >
            Transforma tu visión en{" "}
            <span className="relative inline-block gradient-text-static">
              realidad digital
              <svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,6 Q50,0 100,6 T200,6"
                    fill="none"
                    stroke="url(#underlineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 200,
                      strokeDashoffset: isVisible ? 0 : 200,
                      transition: "stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s",
                    }}
                  />
                  <defs>
                    <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
            </span>{" "}
            hoy
          </h2>

          <p
            className={`text-xl md:text-2xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed
              transition-all duration-1000 delay-200 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            Agenda una consultoría gratuita y descubre cómo podemos impulsar tu
            negocio con tecnología de vanguardia.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12
              transition-all duration-1000 delay-300 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            <a
              href="mailto:contacto@klyraworks.com?subject=Solicitud de consultoría&body=Hola, estoy interesado en solicitar una consultoría."
              className="inline-flex rounded-2xl transition-transform group relative w-full sm:w-auto bg-primary-foreground text-primary px-10 py-7 text-lg font-medium overflow-hidden shadow-lg shadow-accent/25 hover-lift"
            >
              <span className="relative z-10 flex items-center">
                Solicitar consultoría
                <Mail className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-card translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Benefits list */}
          <div
            className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-400 ease-elegant ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`flex items-center gap-2 text-primary-foreground/60 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="w-5 h-5 rounded-full bg-background/30 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-card"
          />
        </svg>
      </div>
    </section>
  );
}
