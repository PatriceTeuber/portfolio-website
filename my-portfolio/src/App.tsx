import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'

const App = () => {

  return (
    <BrowserRouter>
      <Hero />
      <AboutMe />
    </BrowserRouter>
  )
}

export default App
