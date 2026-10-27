import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { event, photos } from '../config/photos.js'
import { Hairline } from './Ornament.jsx'

const easeOut = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.22,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.4, ease: easeOut },
  },
}

export function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '14%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], reduced ? [1.04, 1.04] : [1.06, 1.14])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.9])

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden"
      aria-label="Save the Date"
    >
      {/* Background photograph */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src={photos.hero.src}
          alt={photos.hero.alt}
          className="h-full w-full object-cover"
          style={{ objectPosition: photos.hero.position }}
          fetchpriority="high"
          decoding="async"
        />
      </motion.div>

      {/* Vignette to anchor the type */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ opacity: overlayOpacity }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(130% 90% at 50% 25%, rgba(53,40,32,0.0) 0%, rgba(53,40,32,0.35) 45%, rgba(53,40,32,0.9) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(27,20,15,0.55) 0%, rgba(27,20,15,0.0) 25%, rgba(27,20,15,0.0) 55%, rgba(27,20,15,0.85) 100%)',
          }}
        />
      </motion.div>

      {/* Grain */}
      <div className="pointer-events-none absolute inset-0 -z-10 grain-overlay" />

      {/* Hairline inner frame with corner marks */}
      <div className="pointer-events-none absolute inset-4 sm:inset-6 border border-ivory/15" />
      <div className="pointer-events-none absolute inset-4 sm:inset-6">
        {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
          <span key={i} className={`absolute ${pos} h-3 w-3`} aria-hidden="true">
            <span className="absolute inset-0 border border-ivory/40" />
          </span>
        ))}
      </div>

      {/* Main content block */}
      <motion.div
        className="relative z-10 w-full px-6 pb-16 sm:pb-24 pt-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* SAVE THE DATE */}
          <motion.div variants={item} className="flex items-center gap-4 text-ivory/90">
            <span className="h-px w-10 bg-ivory/50" />
            <p className="font-sans text-[11px] sm:text-xs uppercase tracking-widest3 text-ivory">
              {event.savePhrase}
            </p>
            <span className="h-px w-10 bg-ivory/50" />
          </motion.div>

          {/* Isabella */}
          <motion.h1
            variants={item}
            className="font-display mt-6 sm:mt-8 text-[22vw] leading-[0.88] text-ivory sm:text-[128px] md:text-[172px]"
            style={{ letterSpacing: '0.02em' }}
          >
            {event.name}
          </motion.h1>

          {/* MY QUINCEAÑERA */}
          <motion.p
            variants={item}
            className="mt-4 font-sans text-[11px] sm:text-xs uppercase tracking-widest3 text-ivory/90"
          >
            {event.tagline}
          </motion.p>

          {/* ornamental divider */}
          <motion.div variants={item} className="mt-10 sm:mt-12">
            <Hairline className="h-2 w-56 sm:w-72 text-tan/80" />
          </motion.div>

          {/* SEPTEMBER 18, 2027 */}
          <motion.div
            variants={item}
            className="mt-8 flex items-end justify-center gap-5 sm:gap-8 text-ivory"
          >
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest2 text-ivory/85">
              {event.date.month}
            </span>
            <span className="font-editorial text-6xl sm:text-7xl leading-none">
              {event.date.day}
            </span>
            <span className="font-sans text-[11px] sm:text-xs uppercase tracking-widest2 text-ivory/85">
              {event.date.year}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint (purely UI, not event text) */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-5 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.4 }}
      >
        <span className="h-6 w-px bg-ivory/50 animate-soft-shimmer" />
      </motion.div>
    </section>
  )
}
