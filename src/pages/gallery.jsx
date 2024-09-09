import { ScrollRestoration } from 'react-router-dom';
//components
import Footer from "../components/footer"
import Galleryhero from "../components/Galleryhero"
import Navg from "../components/Navgallery"
function Gallery() {
  return (
    <div className='bg-slate-900'>
        
        <Navg/>
        <Galleryhero/>
        <Footer/>
        <ScrollRestoration/>
    </div>
  )
}

export default Gallery