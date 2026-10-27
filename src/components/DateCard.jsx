import { motion } from 'motion/react'
import { event, photos } from '../config/photos.js'
import { Ornament, Star } from './Ornament.jsx'

const easeOut = [0.22, 1, 0.36, 1]

export function DateCard() {
  return (
    <section className="relative isolate w-full py-24 sm:py-32 overflow-hidden">
      {/* Background photograph with heavy wash */}
      <div className="absolute inset-0 -z-10">
        <img
          src={photos.closing.src}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-60"
          style={{ objectPosition: photos.closing.position }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(53,40,32,0.75) 0%, rgba(103,35,42,0.5) 50%, rgba(53,40,32,0.95) 100%)',
          }}
        />
        <div className="grain-overlay" />
      </div>

      <div className="relative mx-auto flex max-w-xl flex-col items-center px-6 text-center">
        {/* Framed card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1.5, ease: easeOut }}
          className="relative w-full border border-ivory/25 bg-espresso/40 backdrop-blur-sm px-8 py-14 sm:px-12 sm:py-16"
        >
          {/* Decorative corner diamonds */}
          {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
            <span key={i} className={`absolute ${pos}`}>
              <Star className="h-2 w-2 text-tan" />
            </span>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-sans text-[11px] uppercase tracking-widest3 text-tan"
          >
            {event.savePhrase}
          </motion.p>

          <Ornament className="mx-auto mt-6 h-5 w-48 text-ivory/60" delay={0.3} />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.4, ease: easeOut }}
            className="font-display mt-8 text-6xl sm:text-7xl text-ivory leading-none"
          >
            {event.name}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="mt-3 font-sans text-[11px] uppercase tracking-widest3 text-ivory/85"
          >
            {event.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-5 text-ivory"
          >
            <span className="h-px w-10 bg-ivory/40" />
            <div className="flex flex-col items-center">
              <span className="font-sans text-[10px] uppercase tracking-widest2 text-ivory/80">
                {event.date.month}
              </span>
              <span className="font-editorial text-5xl sm:text-6xl leading-none mt-1">
                {event.date.day}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest2 text-ivory/80 mt-1">
                {event.date.year}
              </span>
            </div>
            <span className="h-px w-10 bg-ivory/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
