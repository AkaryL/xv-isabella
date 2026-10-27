// ───────────────────────────────────────────────────────────────────────────
// FOTOS DE ISABELLA
//
// Las imágenes están en `public/photos/`.
// Para reemplazar: sube una imagen con el mismo nombre o actualiza el `src`.
// `alt` describe la imagen (accesibilidad). `tone` controla el overlay:
//   'warm' | 'deep' | 'soft'
// ───────────────────────────────────────────────────────────────────────────

export const photos = {
  hero: {
    src: '/photos/hero.jpeg',
    alt: 'Isabella al atardecer con vestido rojo y sombrero',
    tone: 'deep',
    // object-position: ajusta encuadre del hero en pantallas pequeñas
    position: '55% 40%',
  },
  composition: [
    {
      src: '/photos/portrait-1.jpeg',
      alt: 'Retrato de Isabella con vestido rojo y botas vaqueras',
      tone: 'warm',
      aspect: 'portrait',
      position: '55% 35%',
    },
    {
      src: '/photos/portrait-2.jpeg',
      alt: 'Isabella al atardecer, mirando sobre el hombro',
      tone: 'soft',
      aspect: 'landscape',
      position: '50% 50%',
    },
    {
      src: '/photos/portrait-3.jpeg',
      alt: 'Isabella de espaldas al atardecer',
      tone: 'warm',
      aspect: 'portrait',
      position: '50% 40%',
    },
  ],
  closing: {
    src: '/photos/closing.jpeg',
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
