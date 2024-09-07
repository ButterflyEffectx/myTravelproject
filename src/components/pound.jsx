
//Images
import pound1 from '../images/pound1.jpg'
import pound2 from '../images/pound2.jpg'

function Pound() {
    return (
        <section className='flex py-16'>
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col items-center text-center">
                    <div className="w-4/5 h-full">
                        <h1 className='text-xl lg:text-3xl mb-3'>เพราะรอยยิ้มของลูกค้าคืองานของเรา</h1>
                        <img src={pound1} alt="image1" className='mb-6 md:mb-0 lg:w-[700px] lg:h-[740px] rounded-md' />
                    </div>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="w-4/5 h-full">
                        <h1 className='text-xl lg:text-3xl mb-3'>เรื่องเที่ยวไว้ใจเรา</h1>
                        <img src={pound2} alt="image2" className='lg:w-[700px] lg:h-[740px] rounded-md' />
                    </div>
                </div>
            </div>
        </section>
        




    )
}

export default Pound
