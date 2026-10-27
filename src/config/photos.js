// ───────────────────────────────────────────────────────────────────────────
// FOTOS DE ISABELLA
//
// Las imágenes están en `public/photos/`.
// Para reemplazar: sube una imagen con el mismo nombre o actualiza el `src`.
// `alt` describe la imagen (accesibilidad). `tone` controla el overlay:
//   'warm' | 'deep' | 'soft'
// ───────────────────────────────────────────────────────────────────────────

// Prefijo de la base — en dev es '/', en GitHub Pages es '/xv-isabella/'
const B = import.meta.env.BASE_URL

export const photos = {
  hero: {
    src: `${B}photos/hero.jpeg`,
    alt: 'Isabella al atardecer con vestido rojo y sombrero',
    tone: 'deep',
    position: '55% 40%',
  },
  composition: [
    {
      src: `${B}photos/portrait-1.jpeg`,
      alt: 'Retrato de Isabella con vestido rojo y botas vaqueras',
      tone: 'warm',
      aspect: 'portrait',
      position: '55% 35%',
    },
    {
      src: `${B}photos/portrait-2.jpeg`,
      alt: 'Isabella al atardecer, mirando sobre el hombro',
      tone: 'soft',
      aspect: 'landscape',
      position: '50% 50%',
    },
    {
      src: `${B}photos/portrait-3.jpeg`,
      alt: 'Isabella de espaldas al atardecer',
      tone: 'warm',
      aspect: 'portrait',
      position: '50% 40%',
    },
  ],
  closing: {
    src: `${B}photos/closing.jpeg`,
    alt: 'Isabella al atardecer',
    tone: 'deep',
    position: '50% 40%',
  },
}

export const event = {
  name: 'Isabella',
  tagline: 'My Quinceañera',
  savePhrase: 'Save the Date',
  date: {
    month: 'September',
    day: '18',
    year: '2027',
  },
}
