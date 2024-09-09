import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/Logo.png"

function Navg() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className="relative">
                <nav className='fixed top-0 left-0 w-full py-4 z-50 bg-black bg-opacity-20 rounded-lg shadow-lg'>
                    <div className="container mx-auto px-7 md:px-0">
                        <div className="flex justify-between items-center text-white">
                            <div className="text-xl md:text-2xl font-bold">
                                <h1 className='hover:text-red-600'><Link to='/'><img src={logo} alt="logo" className='w-2/3' /></Link></h1>
                            </div>

                            {/* ToggleMenuButton */}
                            <div className="md:hidden flex items-center z-51">
                                <button id='Menu-toggle' onClick={toggleMenu}>
                                    <svg 
                                        fill='none' 
                                        stroke='currentColor' 
                                        strokeLinecap='round' 
                                        strokeLinejoin='round' 
                                        strokeWidth='2' 
                                        viewBox='0 0 24 24' 
                                        className='w-6 h-6'
                                    > 
                                        <path d='M4 6h16M4 12h16M4 18h16'></path>
                                    </svg>
                                </button>
                            </div>

                            <ul className="hidden md:flex justify-center gap-x-4 items-center">
                                <Link to = '/' className='cursor-pointer hover:text-blue-500'>หน้าแรก</Link>
                                <Link to = '/About' className='cursor-pointer hover:text-blue-500'>เกี่ยวกับเรา</Link>
                                <Link to = '/Gallery' className='cursor-pointer hover:text-blue-500'>แกเลอรี่</Link>
                                <Link to = '/Booking' className='cursor-pointer hover:text-blue-500'>การจอง</Link>
                            </ul>
                        </div>
                    </div>

                    {/* MobileMenuToggle */}
                    <div className={`md:hidden fixed top-0 left-0 h-full w-1/2 bg-gray-800 text-white p-6 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="text-xl text-white text-center font-semibold mb-5"><span className='text-blue-600'>EOD</span>VIP</div>
                        <ul className="flex flex-col space-y-4">
                            <Link to = '/' className='cursor-pointer hover:text-blue-500'>หน้าแรก</Link>
                            <Link to = '/About' className='cursor-pointer hover:text-blue-500'>เกี่ยวกับเรา</Link>
                            <Link to = '/Gallery' className='cursor-pointer hover:text-blue-500'>แกเลอรี่</Link>
                            <Link to = '/Booking' className='cursor-pointer hover:text-blue-500'>การจอง</Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navg
