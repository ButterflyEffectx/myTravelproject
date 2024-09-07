import './App.css'
import { ScrollRestoration } from 'react-router-dom';

//components
import Nav from './components/nav'
import Hero from './components/hero'
import Section  from './components/section'
import AboutSection from './components/aboutsection'
import Footer from './components/footer'

function App() {

  return (
    <>

      <Nav/>
      <Hero/>
      <Section/>
      <AboutSection/>
      <Footer/>
      <ScrollRestoration/>

    </>
  )
}

export default App
