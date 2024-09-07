import { faFacebook, faLine, faSquareFontAwesomeStroke } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
//images
import bankbooking from '../images/Bank2.svg';
import bgbooking from '../images/bgbooking.png';


function Bookinghero() {
    return (
        <>
            <div className="pt-[9rem] min-h-screen bg-cover" style={{backgroundImage: `url(${bgbooking})`}}>
                <div className="container mx-auto text-center">
                    <div className="text-white text-xl md:text-2xl font-bold md:font-extrabold">
                        <h1>BOOKING PROCEDURES AND PRICES</h1>
                    </div>
                    <hr className="border-t-4 border-gray-400 my-2 w-2/3 mx-auto md:w-1/3" />
                    <div className="text-xl md:text-2xl text-white font-bold">
                        <h3>ขั้นตอนการจองและราคา</h3>
                    </div>
                    <div className="relative bg-cover bg-center p-6" style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}>
                        {/* Glass effect container */}
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between gap-8">

                            {/* Price Section */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-lg font-bold text-white">ราคา / Price</h2>
                                <p className="text-white mt-2">
                                    โชว์รถตู้เช่า VIP ราคาเริ่มต้น
                                    <span className="text-lime-400 font-bold">1,800 - 2,000</span> บาท <br />
                                    เริ่มต้นมัดจำ <span className="text-lime-400 font-bold">1,000</span> บาท
                                </p>
                                <p className="text-white mt-2">
                                    ล้างรถทั้งคันทั้ง ภายนอก ภายใน<br />
                                    ดูแลทำความสะอาดก่อนออกทริปทุกครั้งเพื่อความสะอาดและสุขอนามัยของลูกค้า <br />
                                    ต้องการเช่ารถตู้ไว้ใจเรา
                                </p>
                                <p className="flex text-red-600 bg-black items-center justify-center w-fit font-bold mt-2 mx-auto">
                                    *** หากยกเลิกการเดินทางก่อน 20 วัน เรายินดีคืนมัดจำให้ทั้งหมด ***
                                </p>
                            </div>

                            {/* Booking Steps Section */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-lg font-bold text-white">ขั้นตอนการจอง</h2>
                                <ul className="list-none text-white mt-2 space-y-2">
                                    <li>
                                        1. เลือกช่องทางการติดต่อ
                                        <span className="inline-block ml-2 space-x-2">
                                            <Link><FontAwesomeIcon icon={faFacebook} className=' rounded-full' /></Link>
                                            <Link><FontAwesomeIcon icon={faLine} className=' rounded-full' /></Link>
                                            <Link><FontAwesomeIcon icon={faSquareFontAwesomeStroke} className=' rounded-full' /></Link>
                                        </span>
                                    </li>
                                    <li>2. ตกลงพูดคุยรายละเอียด ราคา วันที่และวันเวลา</li>
                                    <li>3. ส่งหลักฐานการโอนเงินมัดจำในช่องทางที่ติดต่อ</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="w-2/3 flex justify-center items-center md:w-full mx-auto md:pb-12">
                        <img src={bankbooking} alt="ธนาคาร" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookinghero