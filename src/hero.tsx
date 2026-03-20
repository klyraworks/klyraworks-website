"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, ChevronDown } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id={'inicio'} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-black grain-overlay">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[100px] animate-float-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/3 blur-[150px] animate-subtle-pulse"
        />
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 mb-10 shadow-lg shadow-primary/5
              transition-all duration-1000 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-sm font-medium text-foreground/80 tracking-wide">
              Soluciones de software a tu medida
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] tracking-tight mb-8">
            <span
              className={`block text-balance transition-all duration-1000 delay-150 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              Transformamos tus ideas
            </span>
            <span
              className={`block mt-2 transition-all duration-1000 delay-300 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              en{" "}
              <span className="relative inline-block">
                <span className="gradient-text-static">soluciones digitales</span>
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
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed text-pretty
              transition-all duration-1000 delay-500 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            Desarrollo de software a la medida, páginas web y consultorías tecnológicas para impulsar tu negocio al siguiente nivel.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20
              transition-all duration-1000 delay-600 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            <Button
              size="lg"
              className="group relative w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-base font-medium overflow-hidden btn-shine hover-lift"
            >
              <a href={'#contacto'} className="relative z-10 flex items-center">
                Solicitar consultoría
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            {/*<Button*/}
            {/*  variant="outline"*/}
            {/*  size="lg"*/}
            {/*  className="group w-full sm:w-auto px-10 py-7 text-base font-medium border-border hover:text-accent hover:bg-card hover:border-accent/30 bg-transparent transition-all duration-300 hover-lift"*/}
            {/*>*/}
            {/*  <MessageSquare className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />*/}
            {/*  Ver portafolio*/}
            {/*</Button>*/}
          </div>

          {/* Visual showcase */}
          <div
            className={`relative transition-all duration-1200 delay-800 ease-elegant ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-20 scale-95"
            }`}
          >
            <div
              className="relative mx-auto max-w-5xl"
              style={{
                transform: `perspective(1200px) rotateX(${mousePosition.y * 0.03}deg) rotateY(${mousePosition.x * 0.03}deg)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <div className="absolute -inset-8 bg-accent/15 rounded-[32px] blur-[60px] animate-glow-pulse" />
              <div className="absolute -inset-2 from-accent/10 via-transparent to-primary/10 rounded-3xl blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <a
          href="#servicios"
          className="group flex flex-col items-center gap-3 text-muted-foreground/60 hover:text-accent transition-colors duration-300"
        >
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">
            Conoce más
          </span>
      <div className="scroll-indicator opacity-50 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </section>
  );
}