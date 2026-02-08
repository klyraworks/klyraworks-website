"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Descubrimiento",
    description: "Analizamos tus necesidades, objetivos y desafíos para entender el alcance del proyecto.",
    duration: "1-2 semanas",
  },
  {
    number: "02",
    title: "Diseño y Planificación",
    description: "Creamos wireframes, mockups y definimos la arquitectura técnica del proyecto.",
    duration: "2-3 semanas",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos tu solución en sprints iterativos con entregas y feedback constante.",
    duration: "4-12 semanas",
  },
  {
    number: "04",
    title: "Testing y QA",
    description: "Probamos exhaustivamente para garantizar calidad, rendimiento y seguridad.",
    duration: "1-2 semanas",
  },
  {
    number: "05",
    title: "Lanzamiento y Soporte",
    description: "Desplegamos tu proyecto y brindamos capacitación y soporte continuo.",
    duration: "Continuo",
  },
];

export function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
      id="procesos"
      className="relative py-32 lg:py-40 bg-card overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span
            className={`inline-block text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-6
              transition-all duration-1000 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            Nuestro Proceso
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance
              transition-all duration-1000 delay-100 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            De la idea al{" "}
            <span className="text-muted-foreground">lanzamiento</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground leading-relaxed
              transition-all duration-1000 delay-200 ease-elegant ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
          >
            Un proceso probado que garantiza resultados excepcionales en cada proyecto.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute left-0 right-0 top-20 h-px bg-border/50" />
            <div
              className="hidden lg:block absolute left-0 top-20 h-px bg-accent transition-all duration-1000 ease-out"
              style={{
                width: isVisible ? `${(activeStep / (steps.length - 1)) * 100}%` : "0%",
              }}
            />

            {/* Steps */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`transition-all duration-700 ease-elegant ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="relative">
                    {/* Number badge */}
                    <div
                      className={`relative z-10 w-40 h-40 lg:w-full lg:h-40 mx-auto mb-6 rounded-2xl border-2 transition-all duration-500 flex items-center justify-center
                        ${
                          activeStep === index
                            ? "bg-card border-accent shadow-xl shadow-accent/10 scale-105"
                            : "bg-card/50 border-border/50"
                        }`}
                    >
                      <span
                        className={`text-5xl font-bold transition-colors duration-500 ${
                          activeStep === index
                            ? "text-accent"
                            : "text-muted-foreground/30"
                        }`}
                      >
                        {step.number}
                      </span>
                      
                      {/* Check icon overlay when completed */}
                      {activeStep > index && (
                        <div className="absolute inset-0 flex items-center justify-center bg-accent/10 rounded-2xl">
                          <CheckCircle2 className="w-12 h-12 text-accent" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="text-center lg:text-left">
                      <h3
                        className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
                          activeStep === index
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {step.description}
                      </p>

                      {/*
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-500 ${
                          activeStep === index
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "bg-muted text-muted-foreground border border-transparent"
                        }`}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.duration}
                      </div>
                      */}
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}