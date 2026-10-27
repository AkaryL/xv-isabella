import { motion } from 'motion/react'
import { photos } from '../config/photos.js'
import { Photo } from './Photo.jsx'
import { Ornament } from './Ornament.jsx'

const easeOut = [0.22, 1, 0.36, 1]

export function PhotoComposition() {
  const [p1, p2, p3] = photos.composition

  return (
    <section className="relative w-full py-20 sm:py-28 leather-texture">
      <div className="grain-overlay" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6">
        <Ornament className="h-5 w-56 text-tan/70" />

        {/* Editorial 3-photo composition — purely visual, no copy */}
        <div className="mt-12 grid w-full grid-cols-12 gap-4 sm:gap-6">
          {/* Tall left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.4, ease: easeOut }}
            className="col-span-7 sm:col-span-5"
          >
            <Photo
              src={p1.src}
              alt={p1.alt}
              tone={p1.tone}
              aspect="portrait"
              position={p1.position}
              parallax
              className="shadow-editorial"
            />
            <p className="mt-3 font-sans text-[10px] uppercase tracking-widest2 text-ivory/55">
              № I
            </p>
          </motion.div>

          {/* Right stack with offset */}
          <div className="col-span-5 sm:col-span-7 flex flex-col gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1.4, delay: 0.15, ease: easeOut }}
              className="sm:ml-10 sm:-mt-6"
            >
              <Photo
                src={p2.src}
                alt={p2.alt}
                tone={p2.tone}
                aspect="landscape"
                position={p2.position}
                parallax
                className="shadow-editorial"
              />
              <p className="mt-3 font-sans text-[10px] uppercase tracking-widest2 text-ivory/55">
                № II
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1.4, delay: 0.3, ease: easeOut }}
              className="sm:ml-20 sm:mt-2 w-2/3 self-end sm:w-1/2"
            >
              <Photo
                src={p3.src}
                alt={p3.alt}
                tone={p3.tone}
                aspect="square"
                position={p3.position}
                parallax
                className="shadow-editorial"
              />
              <p className="mt-3 text-right font-sans text-[10px] uppercase tracking-widest2 text-ivory/55">
                № III
              </p>
            </motion.div>
          </div>
        </div>

        <Ornament className="mt-16 h-5 w-56 text-tan/70" />
      </div>
    </section>
  )
}
