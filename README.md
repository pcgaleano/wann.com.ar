# WANN - Paulo Galeano Landing Page

Landing page profesional para Paulo Galeano, Asesor Tecnológico especializado en migración de sistemas, automatización y seguridad informática.

## 🚀 Tecnologías

- **Next.js 14** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **SEO optimizado** con metadata completa
- **Mobile-first** responsive design
- **Optimización de rendimiento** para Core Web Vitals

## 📋 Características

### Conversión Optimizada
- Formulario de contacto principal con validación
- Múltiples CTAs estratégicamente ubicados
- Botón flotante de WhatsApp
- Respuesta garantizada en 24 horas

### Secciones Completas
1. **Header** - Navegación sticky con logo y CTA
2. **Hero** - Propuesta de valor principal con trust indicators
3. **Sobre Mí** - Presentación personal y credenciales
4. **Por Qué Elegir** - 4 beneficios clave
5. **Servicios** - 4 servicios principales con precios
6. **Proceso** - 4 pasos del workflow
7. **FAQ** - 8 preguntas frecuentes colapsables
8. **Contacto** - Formulario optimizado + información
9. **Footer** - Links de servicios y contacto

### SEO y Performance
- Schema markup para LocalBusiness, Person y Service
- Meta tags completos para redes sociales
- Core Web Vitals optimizados
- Imágenes WebP con lazy loading
- Lighthouse 90+ score target

## 🛠️ Desarrollo

### Instalación
```bash
npm install
```

### Comandos Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # ESLint
npm run type-check   # TypeScript checks
```

### Configuración del Formulario
Para que el formulario funcione en producción, necesitás configurar:

1. **Formspree** (recomendado):
   - Crear cuenta en [formspree.io](https://formspree.io)
   - Crear nuevo formulario
   - Reemplazar la URL en `ContactForm.tsx`

2. **Netlify Forms** (alternativa):
   - Agregar `netlify` attribute al form
   - Configurar en Netlify dashboard

### Configuración de Contacto
Actualizar en los archivos correspondientes:
- Número de WhatsApp: `+54 9 3492 XXX-XXX`
- Email: `contacto@wann.com.ar`
- LinkedIn: `/in/paulo-galeano`

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio GitHub a Vercel
2. Configurar variables de entorno si es necesario
3. Deploy automático en cada push

### Netlify
1. Conectar repositorio a Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

### Configuración DNS
Apuntar dominio `www.wann.com.ar` a la plataforma elegida.

## 📊 Analytics y Tracking

### Google Analytics 4
- Configurar en `layout.tsx`
- Trackear conversiones de formulario
- Eventos de CTA clicks
- Scroll depth tracking

### Google Search Console
- Verificar propiedad
- Enviar sitemap
- Monitorear rendimiento SEO

### Google My Business
- Crear perfil para Rafaela, Santa Fe
- Optimizar para búsquedas locales

## 🎯 Optimización de Conversión

### KPIs Objetivo
- **Conversion rate**: 3-5%
- **Form submissions**: 10+ por mes
- **Page speed**: <3 segundos
- **Mobile usability**: 100% Google score

### Elementos Clave
- Consulta gratuita destacada
- WhatsApp integration
- Trust signals (17+ años experiencia)
- Testimonials (agregar en Phase 2)

## 🔧 Personalización

### Colores
Configurados en `tailwind.config.ts`:
- Primary: `#2563eb` (Azul profesional)
- Secondary: `#374151` (Gris oscuro)
- Accent: `#10b981` (Verde confianza)

### Tipografía
- Headings: Poppins
- Body: Inter
- Mobile-first responsive

### Imágenes
- Agregar foto profesional en `public/images/`
- Optimizar como WebP
- Agregar alt text descriptivo

## 📱 WhatsApp Integration

El botón flotante aparece después de hacer scroll y envía un mensaje predefinido:
```
Hola Paulo, vi tu sitio web y me interesa una consulta gratuita sobre servicios tecnológicos.
```

## 🚦 Estado del Proyecto

✅ **Completado**:
- Estructura base Next.js 14 + TypeScript
- Diseño responsive mobile-first
- 9 secciones completas
- Formulario de contacto optimizado
- SEO y metadata configurado
- WhatsApp integration
- Build de producción funcionando

🔄 **Pendiente para Phase 2**:
- Integración real con Formspree/Netlify Forms
- Google Analytics implementation
- Foto profesional real
- Testimonials de clientes
- Blog section
- Casos de estudio detallados

## 📞 Soporte

Para consultas sobre el desarrollo o modificaciones:
- Revisar documentación en `CLAUDE.md`
- Seguir las mejores prácticas de Next.js
- Priorizar velocidad y conversión en cualquier cambio