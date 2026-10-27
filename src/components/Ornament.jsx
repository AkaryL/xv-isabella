import { motion } from 'motion/react'

// Thin western-inspired star-and-rule ornament.
// Subtle, hand-drawn feel — no clipart motifs.
export function Ornament({ className = '', color = 'currentColor', delay = 0 }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 240 24"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0, scaleX: 0.6 }}
      whileInView={{ opacity: 0.9, scaleX: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <line x1="0" y1="12" x2="96" y2="12" stroke={color} strokeWidth="0.6" />
      <line x1="144" y1="12" x2="240" y2="12" stroke={color} strokeWidth="0.6" />
      <g transform="translate(120 12)">
        <path
          d="M0,-8 L1.6,-1.6 L8,0 L1.6,1.6 L0,8 L-1.6,1.6 L-8,0 L-1.6,-1.6 Z"
          fill={color}
          opacity="0.9"
        />
        <circle cx="-14" cy="0" r="0.9" fill={color} opacity="0.6" />
        <circle cx="14" cy="0" r="0.9" fill={color} opacity="0.6" />
      </g>
    </motion.svg>
  )
}

// Minimal four-point compass star, used as a tiny flourish.
export function Star({ className = '', color = 'currentColor' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8,0 L9.6,6.4 L16,8 L9.6,9.6 L8,16 L6.4,9.6 L0,8 L6.4,6.4 Z"
        fill={color}
      />
    </svg>
  )
}

// Hairline rule with a single centered diamond — used in headers.
export function Hairline({ className = '', color = 'currentColor' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 8"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="4" x2="52" y2="4" stroke={color} strokeWidth="0.5" />
      <line x1="68" y1="4" x2="120" y2="4" stroke={color} strokeWidth="0.5" />
      <path d="M60,0 L63,4 L60,8 L57,4 Z" fill={color} />
    </svg>
  )
}
