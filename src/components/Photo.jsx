import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'

const toneGradients = {
  warm: 'linear-gradient(180deg, rgba(53,40,32,0.05) 0%, rgba(53,40,32,0.35) 70%, rgba(53,40,32,0.75) 100%)',
  deep: 'linear-gradient(180deg, rgba(53,40,32,0.15) 0%, rgba(53,40,32,0.55) 60%, rgba(53,40,32,0.9) 100%)',
  soft: 'linear-gradient(180deg, rgba(53,40,32,0.0) 0%, rgba(53,40,32,0.25) 80%, rgba(53,40,32,0.5) 100%)',
}

export function Photo({
  src,
  alt = '',
  tone = 'warm',
  aspect = 'landscape',
  parallax = false,
  className = '',
  loading = 'lazy',
  priority = false,
  position = '50% 50%',
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  const aspectClass = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/5] sm:aspect-[4/3]',
    square: 'aspect-square',
    full: '',
  }[aspect]

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduced || !parallax ? [0, 0] : ['-6%', '6%'])
  const scale = useTransform(scrollYProgress, [0, 1], reduced || !parallax ? [1, 1] : [1.08, 1.14])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-espresso ${aspectClass} ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        decoding="async"
        fetchpriority={priority ? 'high' : 'auto'}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y, scale, objectPosition: position }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: toneGradients[tone] }}
      />
      <div className="grain-overlay" />
      {/* Framed inner line, barely visible */}
      <div className="pointer-events-none absolute inset-2 sm:inset-3 border border-ivory/10" />
    </div>
  )
}
