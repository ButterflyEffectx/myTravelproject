import { ScrollRestoration } from 'react-router-dom';
//components
import Footer from "../components/footer"
import Galleryhero from "../components/Galleryhero"
import Navg from "../components/Navgallery"
function Gallery() {
  return (
    <>
        <Navg/>
        <Galleryhero/>
        <Footer/>
        <ScrollRestoration/>
    </>
  )
}

export default Gallery