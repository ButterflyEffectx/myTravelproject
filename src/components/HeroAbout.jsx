import { Link } from 'react-router-dom'

function HeroAbout() {
    return (
        <div className="bg-gray-900 py-28">
            <div className="container mx-auto text-white">
                <div className="text-2xl md:text-3xl font-extrabold text-center">
                    เกี่ยวกับเรา
                </div>
                <div className="text-base font-medium md:text-2xl text-center mt-5 px-10 md:px-0">
                    “กิจการเช่าเหมารถตู้ VIP ของเราเริ่มต้นจากความรักในการเดินทางและความมุ่งมั่นที่จะให้บริการที่ดีและเป็นมิตรกับลูกค้า การได้เห็นรอยยิ้มและความพึงพอใจของลูกค้าคือแรงบันดาลใจที่ทำให้เรายังคงพัฒนาบริการของเราอยู่เสมอ”
                </div>
                <div className="flex justify-center ">
                    <button className='bg-purple-600 text-white p-4 hover:bg-yellow-400 hover:text-black font-bold rounded-full mt-10'><Link to='/Booking'>
                        กดจอง / Booking</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroAbout