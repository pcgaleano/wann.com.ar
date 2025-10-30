import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WANN - Paulo Galeano | Asesor Tecnológico | Migración Sistemas | Rafaela',
  description: 'WANN - Asesor tecnológico especializado en migración de sistemas, automatización y seguridad. 17+ años experiencia. Consulta gratuita. Rafaela, Santa Fe.',
  keywords: 'WANN, asesor tecnológico, migración sistemas, automatización, seguridad informática, Rafaela, Santa Fe',
  authors: [{ name: 'Paulo Galeano' }],
  creator: 'Paulo Galeano',
  publisher: 'WANN',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.wann.com.ar',
    siteName: 'WANN - Paulo Galeano',
    title: 'WANN - Paulo Galeano | Asesor Tecnológico | Migración Sistemas | Rafaela',
    description: 'WANN - Asesor tecnológico especializado en migración de sistemas, automatización y seguridad. 17+ años experiencia. Consulta gratuita. Rafaela, Santa Fe.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WANN - Paulo Galeano Asesor Tecnológico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WANN - Paulo Galeano | Asesor Tecnológico',
    description: 'Especialista en migración de sistemas y automatización. 17+ años experiencia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://www.wann.com.ar'),
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.wann.com.ar/#person',
      name: 'Paulo Galeano',
      jobTitle: 'Asesor Tecnológico',
      worksFor: {
        '@type': 'Organization',
        name: 'WANN',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rafaela',
        addressRegion: 'Santa Fe',
        addressCountry: 'AR',
      },
      email: 'contacto@wann.com.ar',
      telephone: '+54 9 3492 XXX-XXX',
      url: 'https://www.wann.com.ar',
      sameAs: [
        'https://www.linkedin.com/in/paulo-galeano',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.wann.com.ar/#business',
      name: 'WANN - Paulo Galeano',
      description: 'Asesor tecnológico especializado en migración de sistemas, automatización y seguridad informática.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rafaela',
        addressRegion: 'Santa Fe',
        addressCountry: 'AR',
      },
      telephone: '+54 9 3492 XXX-XXX',
      email: 'contacto@wann.com.ar',
      url: 'https://www.wann.com.ar',
      priceRange: '$$$',
      areaServed: {
        '@type': 'Country',
        name: 'Argentina',
      },
      serviceType: [
        'Migración de Sistemas',
        'Asesoría Tecnológica',
        'Automatización de Procesos',
        'Seguridad Informática',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.wann.com.ar/#website',
      url: 'https://www.wann.com.ar',
      name: 'WANN - Paulo Galeano',
      description: 'Asesor tecnológico especializado en migración de sistemas y automatización.',
      inLanguage: 'es-AR',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}