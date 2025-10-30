'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary-200">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-xl md:text-2xl font-heading font-bold text-primary hover:text-primary-700 transition-colors"
            >
              Paulo Galeano
              <span className="block text-sm font-medium text-secondary-600">
                Asesor Tecnológico
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-secondary-700 hover:text-primary transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-secondary-700 hover:text-primary transition-colors font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('sobre-mi')}
              className="text-secondary-700 hover:text-primary transition-colors font-medium"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-secondary-700 hover:text-primary transition-colors font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contacto')}
              className="btn-primary"
            >
              Consulta Gratuita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-secondary-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t border-secondary-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-secondary-700 hover:text-primary transition-colors font-medium py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-left text-secondary-700 hover:text-primary transition-colors font-medium py-2"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="text-left text-secondary-700 hover:text-primary transition-colors font-medium py-2"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left text-secondary-700 hover:text-primary transition-colors font-medium py-2"
              >
                Contacto
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="btn-primary w-full mt-4"
              >
                Consulta Gratuita
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}