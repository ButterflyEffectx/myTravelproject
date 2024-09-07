
import { ScrollRestoration } from 'react-router-dom';

//components
import Navg from '../components/Navgallery';
import HeroAbout from '../components/HeroAbout'
import BodyAbout from '../components/BodyAbout'
import InfoAbout from '../components/InfoAbout'
import Footer from '../components/footer'
import Pound from '../components/pound'


function About() {
  return (
    <>
        <Navg/>
        <HeroAbout/>
        <BodyAbout/>
        <InfoAbout/>
        <Pound/>
        <Footer/>
        <ScrollRestoration />
    </>
  )
}

export default About