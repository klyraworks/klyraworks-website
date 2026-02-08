"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from '@/public/logo-light.svg'
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Desarrollo Web", href: "#" },
    { name: "Aplicaciones Móviles", href: "#" },
    { name: "Sistemas Personalizados", href: "#" },
    { name: "Consultoría Tech", href: "#" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#" },
    { name: "Portafolio", href: "#" },
    { name: "Casos de Éxito", href: "#" },
    { name: "Contacto", href: "mailto:contacto@klyraworks.com" },
  ],
  legal: [
    { name: "Privacidad", href: "#" },
    { name: "Términos", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const contactInfo = [
  { icon: Mail, text: "contacto@klyraworks.com", href: "mailto:contacto@klyraworks.com" },
  { icon: Phone, text: "+593 99 999 9999", href: "tel:+593999999999" },
  { icon: MapPin, text: "Cotopaxi, Ecuador" },
];

export function Footer() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }} />
      </div>

      <div className="container relative mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img src="/logo-light.svg" alt="Logo" />
              </div>
              <span className="font-bold text-2xl text-foreground">KLYRA WORKS</span>
            </Link>
            
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. Desarrollo de software personalizado para impulsar tu negocio.
            </p>

            <div className="space-y-3 mb-8">
              {contactInfo.map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
                  aria-label={social.name}
                  onMouseEnter={() => setIsHovered(social.name)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <social.icon
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isHovered === social.name ? "scale-110" : ""
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-5 text-sm">SERVICIOS</h4>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group inline-block"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-5 text-sm">EMPRESA</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group inline-block"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-5 text-sm">LEGAL</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group inline-block"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Klyra Works. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Hecho con ❤️ en Ecuador
          </p>
        </div>
      </div>
    </footer>
  );
}