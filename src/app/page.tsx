import Image from 'next/image'
import Contact from './components/contect'
import Hero from './components/hero'
import Projects from './components/project'
import About from './components/about'
import Skills from './components/skills'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Contact/>
      <Projects/>
      <About/>
      <Skills/>

    </div>
  )
}
