import { Star } from './Ornament.jsx'
import { event } from '../config/photos.js'

export function Footer() {
  return (
    <footer className="relative w-full border-t border-ivory/10 bg-espresso py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
        <Star className="h-2 w-2 text-tan/80" />
        <p className="font-editorial italic text-ivory/80 text-sm">
          {event.name} · {event.date.month} {event.date.day}, {event.date.year}
        </p>
      </div>
    </footer>
  )
}
