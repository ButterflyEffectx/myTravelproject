import client1 from '../images/review1.svg'
import client2 from '../images/review2.svg'
import client3 from '../images/review3.svg'
import star from '../images/star.png'


function Client() {
    return (
        <>
            <div className="p-8">
                <h2 className="text-2xl text-white font-bold text-center mb-8">What Our Clients Say</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4 lg:text-center">บริการประทับใจ
                            ไว้ใจได้ตลอดทุกระยะเส้นทาง
                            ที่ใช้บริการ
                        </p>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src={client1} alt="Client 1" />
                            <div>
                                <p className="text-sm font-semibold ">Pom Teetouch</p>
                                <img className="w-2/3 lg:w-4/5" src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4 lg:text-center">สนุกดีเยี่ยมแนะนำเลยค่ะ</p>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src={client2} alt="Client 2" />
                            <div>
                                <p className="text-sm font-semibold">Anny panya</p>
                                <img className="w-2/3 lg:w-4/5" src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4 lg:text-center">รถใหม่สะอาดบริการดีประทับใจ
                        </p>
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src={client3} alt="Client 3" />
                            <div>
                                <p className="text-sm font-semibold">Nuttanont P</p>
                                <img className="w-2/3 lg:w-4/5" src={star} alt="star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Client