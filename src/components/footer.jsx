import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLine, faSquareFontAwesomeStroke } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
        <div className="py-6 bg-slate-800">
            <div className="container mx-auto">
                <div className="text-white text-3xl font-bold text-center">
                    <h1>ช่องทางติดต่อ</h1>
                </div>
                <div className="flex py-8 space-x-[3rem] text-black text-3xl justify-center">
                    <Link to='https://www.facebook.com/krachaphat'><FontAwesomeIcon icon={faFacebook} className='bg-white p-3 rounded-full'/></Link>
                    <Link to='https://line.me/ti/p/fechVFPHOI'><FontAwesomeIcon icon={faLine} className='bg-white p-3 rounded-full'/></Link>
                    <Link to='https://www.facebook.com/profile.php?id=61551558142973'><FontAwesomeIcon icon={faSquareFontAwesomeStroke} className='bg-white p-3 rounded-full'/></Link>
                </div>
                <div className="py-2 text-white text-xl md:text-2xl font-bold text-center">
                    <a href='tel:0882542462'>กด 👉🏻 <span>Tel : 088-254-2462</span></a>
                </div>
                <ul className="hidden py-3 md:flex justify-center space-x-10 text-white text-lg font-medium text-center">
                    <Link to='/'>Home</Link>
                    <Link>About</Link>
                    <Link to='/Gallery'>Gallery</Link>
                    <Link to='/Booking'>Booking</Link>
                    <Link>Contact</Link>
                </ul>

            </div>
        </div>
        <div className="bg-gray-950">
            <div className="container mx-auto text-white">
                <h1 className='p-3 md:text-base text-center md:font-medium '>Copyright ©2024, Design by nom Coding by Peeraphat</h1>
            </div>
        </div>
    </>
  )
}

export default Footer