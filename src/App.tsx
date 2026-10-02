import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GridBackground from './components/GridBackground'

export default function App() {
  return (
    <>
      {/* Fixed, full-page animated grid — sits behind everything below */}
      <GridBackground />
      <div className="relative min-h-screen">
        <Nav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
