import { ScrollRestoration } from 'react-router-dom';
//components
import Bookinghero from "../components/Bookinghero"
import Nav from "../components/nav"
import Footer from '../components/footer'
//images
function Booking() {
  return (
    <>
        <Nav/>
        <Bookinghero/>
        <Footer/>
        <ScrollRestoration/>
    </>
)
}

export default Booking