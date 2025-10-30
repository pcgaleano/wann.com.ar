'use client'

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-corporate-platinum">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="mb-6">
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Perfil Profesional
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
                  Paulo Galeano
                </h2>
                <h3 className="text-xl md:text-2xl text-corporate-steel font-medium mb-8">
                  Ingeniero en Informática | Subdirector de Sistemas
                </h3>
              </div>
              
              <div className="space-y-8 text-lg text-secondary-700 leading-relaxed">
                <p className="text-xl font-light">
                  Ingeniero en Informática con más de 17 años de experiencia ejecutiva 
                  liderando transformaciones tecnológicas en el sector público. 
                  Especialista en arquitectura de sistemas críticos y gestión de infraestructura.
                </p>
                
                <p>
                  Como Subdirector de Sistemas en una administración municipal de 100.000 habitantes, 
                  lidero equipos multidisciplinarios en la implementación de soluciones tecnológicas 
                  estratégicas, modernización de infraestructura y optimización de procesos operativos.
                </p>
                
                <div className="bg-gradient-to-r from-accent-50 to-accent-100 border-l-4 border-accent p-6 rounded-r-lg">
                  <p className="font-semibold text-accent-800 text-lg mb-2">
                    Consultoría Estratégica Remota
                  </p>
                  <p className="text-accent-700">
                    Disponible para proyectos de transformación digital en toda Argentina, 
                    con metodologías probadas y resultados medibles.
                  </p>
                </div>
              </div>

              {/* Professional credentials */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-secondary-900 mb-6">Competencias Clave</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-secondary-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-secondary-900">Arquitectura</div>
                    <div className="text-xs text-secondary-600">de Sistemas</div>
                  </div>
                  <div className="bg-white border border-secondary-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-secondary-900">Gestión</div>
                    <div className="text-xs text-secondary-600">Ejecutiva IT</div>
                  </div>
                  <div className="bg-white border border-secondary-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-secondary-900">Seguridad</div>
                    <div className="text-xs text-secondary-600">Empresarial</div>
                  </div>
                </div>
              </div>

              {/* Location and contact */}
              <div className="mt-8 flex items-center text-secondary-600">
                <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Rafaela, Santa Fe, Argentina</span>
              </div>
            </div>

            {/* Professional image placeholder */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-secondary-800 via-primary-900 to-secondary-900 rounded-2xl shadow-2xl flex items-center justify-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-2xl font-semibold mb-2">Paulo Galeano</div>
                    <div className="text-white/80 mb-4">Consultor Tecnológico</div>
                    <div className="text-sm text-white/70">Rafaela, Santa Fe</div>
                  </div>
                  
                  {/* Geometric decoration */}
                  <div className="absolute top-6 right-6 w-16 h-16 border border-white/20 rounded-lg rotate-12"></div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-accent/30 rounded-full"></div>
                </div>

                {/* Floating professional badge */}
                <div className="absolute -bottom-4 -right-4 bg-white border border-secondary-200 rounded-xl shadow-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">17+</div>
                  <div className="text-xs text-secondary-600 font-medium">Años de<br/>Experiencia</div>
                </div>
                
                {/* Certification badge */}
                <div className="absolute -top-4 -left-4 bg-primary text-white rounded-lg px-3 py-2 text-sm font-semibold shadow-lg">
                  Certificado
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}