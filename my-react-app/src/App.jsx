import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ResumeModal from './components/ResumeModal/ResumeModal'

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation 
        onResumeClick={() => setIsResumeOpen(true)}
        scrollToSection={scrollToSection}
      />
      <Hero 
        onResumeClick={() => setIsResumeOpen(true)}
        scrollToSection={scrollToSection}
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  )
}

export default App
