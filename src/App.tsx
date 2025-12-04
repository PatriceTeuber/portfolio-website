import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Experiences from './components/Experience'
import Footer from './components/Footer'

const App = () => {

  return (
    <BrowserRouter basename="/portfolio-website">
      <Hero />
      <AboutMe />
      <Experiences />
      <Footer />
    </BrowserRouter>
  )
}

export default App
