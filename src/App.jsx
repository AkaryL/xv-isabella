import { Hero } from './components/Hero.jsx'
import { PhotoComposition } from './components/PhotoComposition.jsx'
import { DateCard } from './components/DateCard.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  return (
    <main className="relative w-full">
      <Hero />
      <PhotoComposition />
      <DateCard />
      <Footer />
    </main>
  )
}
