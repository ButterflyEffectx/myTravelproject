import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import banner from '../Images/Banner.svg';
import bodyimg1 from "../Images/bodyimg1.svg";
import 'flowbite';


function Section() {

    useEffect(() => {
        initFlowbite();

        const intervalId = setInterval(() => {
            // เลื่อน Carousel ไปที่ Item ถัดไป
            const nextButton = document.querySelector('[data-carousel-next]');
            if (nextButton) {
                nextButton.click();
            }
        }, 4000); // เลื่อนทุกๆ 2 วินาที

        // ทำความสะอาดเมื่อคอมโพเนนต์ถูกยกเลิก
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>

            <div className="bg-gray-800 p-4 md:p-8">
                <h1 className='text-center text-white text-lg md:text-3xl font-semibold md:font-bold'>ล้างรถทั้งคันทั้ง ภายนอก ภายใน ดูแลทำความสะอาด
                    ก่อนไปออกทริปทุกครั้ง เพื่อความสะอาดและสุขอนามัย
                    ของลูกค้า ต้องการเช่ารถตู้ไว้ใจเรา
                </h1>
            </div>
            <div id="controls-carousel" className="relative w-full h-[250px] md:h-[600px] shadow-xl" data-carousel="static">
                {/* Carousel wrapper */}
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                    {/* Item 1 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src={banner} className="absolute inset-0 w-full h-full object-cover" alt="Banner" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={bodyimg1} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                </div>
                {/* Slider controls */}
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </>
    );
}

export default Section;
