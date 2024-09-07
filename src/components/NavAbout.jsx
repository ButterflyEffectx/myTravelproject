import { useState } from 'react'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function NavAbout() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return (

        <nav className='fixed top-0 left-0 w-full h-auto bg-purple-travel p-4 z-50 shadow-md'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className="text-white font-extrabold text-2xl flex justify-center items-center">
                    <a href="#">Logo</a>
                </div>

                <div className="flex md:hidden text-white text-2xl font-extrabold cursor-pointer" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
                <div className="hidden md:block">
                    <ul className='flex space-x-10 text-xl font-semibold text-white'>
                        <li className='hover:text-yellow-500 cursor-pointer'><Link to='/'>Home</Link></li>
                        <li className='hover:text-yellow-500 cursor-pointer'><Link to='/Gallery'>Gallery</Link></li>
                    </ul>
                </div>


                {/* Mobile Nav */}
                <div className={`fixed top-0 left-0 h-full w-[35%]  bg-purple-800 shadow-md z-50 md:hidden transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
                >
                    <div className="flex justify-end p-4">
                        <FontAwesomeIcon icon={faTimes} className='text-white text-2xl font-exteabold cursor-pointer' onClick={toggleMenu}></FontAwesomeIcon>
                    </div>
                    <ul className='text-white text-xl font-bold space-y-9 flex flex-col items-center mt-12'>
                        <li className='hover:text-yellow-500 cursor-pointer'><Link to='/'>Home</Link></li>
                        <li className='hover:text-yellow-500 cursor-pointer'><Link to='/Gallery'>Gallery</Link></li>
                    </ul>

                </div>
            </div>
        </nav>


    )
}

export default NavAbout