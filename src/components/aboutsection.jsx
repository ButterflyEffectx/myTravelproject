import Client from './client'

import car1 from '../images/car1.jpg'
import car2 from '../images/car2.jpg'
import carvideo from '../video/carvideo.mp4'

function AboutSection() {

    
    return (
        <>
        
            <div className="px-4 py-7 bg-[url('/src/images/backgruond.png')] bg-gray-400 bg-blend-multiply bg-cover bg-center">
                <div className="flex flex-col justify-center items-center space-y-8 container mx-auto">
                    <div className="text-center text-white py-3 text-xl md:text-3xl font-bold">
                        <h1>“ให้เราเลือกทริปของคุณจะไม่ผิดหวัง บริการไว้ใจเรา”<hr className='mt-3 mb-3'/>
                                 ใส่ใจดูแลเหมือนพี่เหมือนน้อง
                        </h1>
                    </div>
                    <a href="#" className="p-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={car1} alt=""/>
                        <div className="text-center md:text-start flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">All New Toyota Commuter.</h5>
                        </div>
                    </a>
                    <a href="#" className="p-3 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={car2} alt=""/>
                        <div className="text-center md:text-start flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Toyota Commuter New Se.</h5>
                        </div>
                    </a>
                </div>
                <hr className='border-t-4 border-white my-4 w-4/5 mx-auto md:w-1/2'/>
                <div className="flex justify-center items-center ">
                    <video autoPlay muted loop className="object-cover w-full rounded-lg lg:w-2/3" src={carvideo} type="video/mp4"></video>
                </div>
                <Client/>
            </div>
        </>
    )
}

export default AboutSection