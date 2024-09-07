import { Link } from 'react-router-dom'

//images
import facebooklogo from '../images/facebooklogo.svg'
import fanpagelogo from '../images/fanpagelogo.svg'
import linelogo from '../images/linelogo.svg'

function Hero() {
  return (
    <>
      <div className="pt-[9rem] pb-[2rem] min-h-screen bg-cover bg-center bg-[url('/src/images/backgruond.png')] bg-gray-400 bg-blend-multiply ">
        <div className="container mx-auto text-center">
          <div className="text-white text-xl md:text-2xl font-bold md:font-extrabold">
            <h1>EODRODTU VIP PHITSANULOK</h1>
          </div>
          <hr className="border-t-4 border-gray-400 my-4 w-2/3 mx-auto md:w-1/3" />
          <div className="text-xl md:text-2xl text-white font-bold">
            <h3>โอ๊ตรถตู้เช่า VIP พิษณุโลก</h3>
          </div>
        </div>
        <div className="py-20">
          <div className="container mx-auto text-center">
            <div>
              <Link>
                <button className='text-2xl text-center font-semibold bg-blue-600 hover:bg-yellow-300 hover:text-black text-white py-3 px-7 rounded-full'>
                  จองเลย
                </button>
              </Link>
            </div>
            <div className="flex py-7 md:py-10 justify-center items-center space-x-3 md:space-x-6 text-black">
              <div className="w-24 flex flex-col items-center">
                <Link>
                  <img src={facebooklogo} alt="facelogo" className='w-16 h-16 object-contain ' />
                  <p className='text-white mt-2 font-bold'>Facebook</p>
                </Link>
              </div>
              <div className="w-24 flex flex-col items-center">
                <Link>
                  <img src={fanpagelogo} alt="pagelogo" className='w-16 h-16 object-contain' />
                  <p className='text-white mt-2 font-bold'>Fanpage</p>
                </Link>
              </div>
              <div className="w-24 flex flex-col items-center">
                <Link>
                  <img src={linelogo} alt="linelogo" className='w-16 h-16 object-contain' />
                  <p className='text-white mt-2 font-bold'>Line</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="container mx-auto">
            <div className="text-3xl font-extrabold text-center text-white pb-7">
              <h1>สถานที่ท่องเที่ยว</h1>
              <div className="text-lg md:text-2xl py-3"><h1>ประสบการณ์ขับรถมากกว่า 25 ปี</h1></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card bg-white pb-6 rounded-lg shadow-2xl hover:shadow-xl relative overflow-hidden">
                <a href="#">
                  <div className="w-full h-[250px] overflow-hidden">
                    <img src="https://th.bing.com/th/id/OIP.81Sd1WIs7IFJms9QL6D4NgHaE6?rs=1&pid=ImgDetMain" alt="ชื่อ" className="w-full h-full object-cover rounded-t-lg mb-4" />
                  </div>
                  <div className="px-5 mt-5">
                    <h1 className='text-center text-lg font-bold '>SEASIDE</h1>
                    <p className="text-center text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quas.</p>
                  </div>
                </a>
              </div>
              <div className="card bg-white pb-6 rounded-lg shadow-2xl hover:shadow-xl relative overflow-hidden">
                <a href="#">
                  <div className="w-full h-[250px] overflow-hidden">
                    <img src="https://th.bing.com/th/id/OIP.81Sd1WIs7IFJms9QL6D4NgHaE6?rs=1&pid=ImgDetMain" alt="ชื่อ" className="w-full h-full object-cover rounded-t-lg mb-4" />
                  </div>
                  <div className="px-5 mt-5">
                    <h1 className='text-center text-lg font-bold '>SEASIDE</h1>
                    <p className="text-center text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quas.</p>
                  </div>
                </a>
              </div>
              <div className="card bg-white pb-6 rounded-lg shadow-2xl hover:shadow-xl relative overflow-hidden">
                <a href="#">
                  <div className="w-full h-[250px] overflow-hidden">
                    <img src="https://th.bing.com/th/id/OIP.81Sd1WIs7IFJms9QL6D4NgHaE6?rs=1&pid=ImgDetMain" alt="ชื่อ" className="w-full h-full object-cover rounded-t-lg mb-4" />
                  </div>
                  <div className="px-5 mt-5">
                    <h1 className='text-center text-lg font-bold '>SEASIDE</h1>
                    <p className="text-center text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quas.</p>
                  </div>
                </a>
              </div>
              <div className="card bg-white pb-6 rounded-lg shadow-2xl hover:shadow-xl relative overflow-hidden">
                <a href="#">
                  <div className="w-full h-[250px] overflow-hidden">
                    <img src="https://th.bing.com/th/id/OIP.81Sd1WIs7IFJms9QL6D4NgHaE6?rs=1&pid=ImgDetMain" alt="ชื่อ" className="w-full h-full object-cover rounded-t-lg mb-4" />
                  </div>
                  <div className="px-5 mt-5">
                    <h1 className='text-center text-lg font-bold '>SEASIDE</h1>
                    <p className="text-center text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quas.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero