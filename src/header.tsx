'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const klyraInfo = {
  name: 'KLYRA WORKS',
  tagline: 'Soluciones de software',
}

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Valores', href: '#valores' },
  { name: 'Contacto', href: '#contacto' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#inicio')
            }}
          >
            <div className={`flex font-bold text-xl md:text-2xl tracking-[0.15em] ${
              isScrolled
                ? 'text-card':
                  'text-foreground'
              }`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img src={`${
              isScrolled
                ? '/logo-dark-card.svg':
                  '/logo-light.svg'
              }`} alt="Logo" />
              </div>
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                {klyraInfo.name}
              </div>

            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center gap-1 ${
                isScrolled
                  ? 'text-[#1e293b]':
                    'text-foreground'
              }`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="px-4 py-2 font-medium hover:text-gray-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contacto')}
              className="px-6 py-2.5 bg-card text-[#F0E7D5] font-semibold rounded-md hover:bg-[#334155] transition-colors"
            >
              Contactar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-card p-2 hover:bg-card/60 rounded-md transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background-black shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="block px-4 py-3 hover:bg-card rounded-lg transition-colors font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t">
            <button
              onClick={() => handleNavClick('#contacto')}
              className="w-full px-6 py-2.5 bg-background text-[#F0E7D5] font-semibold rounded-md hover:bg-[#334155] transition-colors"
            >
              Contactar
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}