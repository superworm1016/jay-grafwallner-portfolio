import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { BackToTop, Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Process } from './components/Process'
import { RagPipeline } from './components/RagPipeline'
import { Stack } from './components/Stack'
import { Terminal } from './components/Terminal'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <Stack />
        <Work />
        <Process />
        <Experience />
        <Terminal />
        <RagPipeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
