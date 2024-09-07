import { initFlowbite } from 'flowbite';
import 'flowbite';
import { useEffect } from 'react';



// X-Images
import imgX1 from '../gallery/imgX1.jpg';
import imgX2 from '../gallery/imgX2.jpg';
import imgX3 from '../gallery/imgX3.jpg';
import imgX4 from '../gallery/imgX4.jpg';
import imgX5 from '../gallery/imgX5.jpg';
import imgX6 from '../gallery/imgX6.jpg';
import imgX7 from '../gallery/imgX7.jpg';
import imgX8 from '../gallery/imgX8.jpg';
import imgX9 from '../gallery/imgX9.jpg';
import imgX10 from '../gallery/imgX10.jpg';
import imgX11 from '../gallery/imgX11.jpg';
import imgX12 from '../gallery/imgX12.jpg';
import imgX13 from '../gallery/imgX13.jpg';
import imgX14 from '../gallery/imgX14.jpg';
import imgX15 from '../gallery/imgX15.jpg';
import imgX16 from '../gallery/imgX16.jpg';
import imgX17 from '../gallery/imgX17.jpg';
import imgX18 from '../gallery/imgX18.jpg';
import imgX19 from '../gallery/imgX19.jpg';
import imgX20 from '../gallery/imgX20.jpg';
import imgX21 from '../gallery/imgX21.jpg';
import imgX22 from '../gallery/imgX22.jpg';
import imgX23 from '../gallery/imgX23.jpg';
import imgX24 from '../gallery/imgX24.jpg';
import imgX25 from '../gallery/imgX25.jpg';
import imgX26 from '../gallery/imgX26.jpg';
import imgX27 from '../gallery/imgX27.jpg';
import imgX28 from '../gallery/imgX28.jpg';
import imgX29 from '../gallery/imgX29.jpg';
import imgX30 from '../gallery/imgX30.jpg';
import imgX31 from '../gallery/imgX31.jpg';
import imgX32 from '../gallery/imgX32.jpg';
import imgX33 from '../gallery/imgX33.jpg';
import imgX34 from '../gallery/imgX34.jpg';
import imgX35 from '../gallery/imgX35.jpg';
import imgX36 from '../gallery/imgX36.jpg';
import imgX37 from '../gallery/imgX37.jpg';
import imgX38 from '../gallery/imgX38.jpg';
import imgX39 from '../gallery/imgX39.jpg';
import imgX40 from '../gallery/imgX40.jpg';
import imgX41 from '../gallery/imgX41.jpg';
import imgX42 from '../gallery/imgX42.jpg';
import imgX43 from '../gallery/imgX43.jpg';
import imgX44 from '../gallery/imgX44.jpg';
import imgX45 from '../gallery/imgX45.jpg';
import imgX46 from '../gallery/imgX46.jpg';
import imgX47 from '../gallery/imgX47.jpg';
import imgX48 from '../gallery/imgX48.jpg';
import imgX49 from '../gallery/imgX49.jpg';
import imgX50 from '../gallery/imgX50.jpg';
import imgX51 from '../gallery/imgX51.jpg';
import imgX52 from '../gallery/imgX52.jpg';

// XX-Images
import imgXX1 from '../gallery/imgXX1.jpg';
import imgXX2 from '../gallery/imgXX2.jpg';
import imgXX3 from '../gallery/imgXX3.jpg';
import imgXX4 from '../gallery/imgXX4.jpg';
import imgXX5 from '../gallery/imgXX5.jpg';
import imgXX6 from '../gallery/imgXX6.jpg';
import imgXX7 from '../gallery/imgXX7.jpg';
import imgXX8 from '../gallery/imgXX8.jpg';
import imgXX9 from '../gallery/imgXX9.jpg';
import imgXX10 from '../gallery/imgXX10.jpg';
import imgXX11 from '../gallery/imgXX11.jpg';

// Y-Images
import imgY1 from '../gallery/imgY1.jpg';
import imgY2 from '../gallery/imgY2.jpg';
import imgY3 from '../gallery/imgY3.jpg';
import imgY4 from '../gallery/imgY4.jpg';
import imgY7 from '../gallery/imgY7.jpg';
import imgY8 from '../gallery/imgY8.jpg';
import imgY9 from '../gallery/imgY9.jpg';
import imgY10 from '../gallery/imgY10.jpg';
import imgY11 from '../gallery/imgY11.jpg';
import imgY12 from '../gallery/imgY12.jpg';
import imgY13 from '../gallery/imgY13.jpg';
import imgY14 from '../gallery/imgY14.jpg';
import imgY15 from '../gallery/imgY15.jpg';
import imgY16 from '../gallery/imgY16.jpg';
import imgY17 from '../gallery/imgY17.jpg';
import imgY18 from '../gallery/imgY18.jpg';
import imgY19 from '../gallery/imgY19.jpg';
import imgY20 from '../gallery/imgY20.jpg';
import imgY21 from '../gallery/imgY21.jpg';
import imgY22 from '../gallery/imgY22.jpg';
import imgY23 from '../gallery/imgY23.jpg';


function Gallery() {


    useEffect(() => {
        initFlowbite();

        const intervalId = setInterval(() => {
            // เลื่อน Carousel ไปที่ Item ถัดไป
            const nextButton = document.querySelector('[data-carousel-next]');
            if (nextButton) {
                nextButton.click();
            }
        }, 2000); // เลื่อนทุกๆ 2 วินาที

        // ทำความสะอาดเมื่อคอมโพเนนต์ถูกยกเลิก
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>

            <div className="bg-gray-800 mt-[5rem] px-4 pb-4 pt-10 md:p-8">
                <h1 className='text-center text-white text-lg md:text-3xl font-semibold md:font-bold'>
                    Galley | แกเลอรี่
                </h1>
            </div>
            <div id="controls-carousel" className="p-5 md:p-12 relative w-full h-[250px] md:h-[600px] shadow-xl" data-carousel="static">
                {/* Carousel wrapper */}
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                    {/* Item 1 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src={imgXX1} className="absolute inset-0 w-full h-full object-cover" alt="Banner" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={imgXX2} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={imgXX3} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={imgXX4} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={imgXX5} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={imgXX6} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={imgXX7} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={imgXX8} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={imgXX9} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={imgXX10} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={imgXX11} className="absolute inset-0 w-full h-full object-cover" alt="Body Image" />
                    </div>
                </div>
                {/* Slider controls */}
                <button type="button" className="hidden absolute top-0 start-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="hidden absolute top-0 end-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>


            <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX1} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX2} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX3} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX4} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX5} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX6} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX7} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX8} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX9} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX10} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX11} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX12} alt="Gallery"></img>
                </div>
                {/* Y-img */}
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY1} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY2} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY3} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY4} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY13} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY14} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY7} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY8} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY9} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY10} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY11} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY12} alt="Gallery"></img>
                </div>
                {/* X-img 13-25*/}
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX13} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX14} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX15} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX16} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX17} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX18} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX19} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX20} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX21} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX22} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX23} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX24} alt="Gallery"></img>
                </div>
                {/* Y-img 15-27*/}
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY15} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY16} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY17} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY18} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY19} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY20} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY21} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY22} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY23} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY2} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY1} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgY3} alt="Gallery"></img>
                </div>
                {/* X-img 25-37*/}
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX25} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX26} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX27} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX28} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX29} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX30} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX31} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX32} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX33} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX34} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX35} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX36} alt="Gallery"></img>
                </div>
                {/* X-img 38-50*/}
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX39} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX40} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX41} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX42} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX43} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX44} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX45} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX46} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX47} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX48} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX49} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX51} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX37} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX38} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX50} alt="Gallery"></img>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={imgX52} alt="Gallery"></img>
                </div>

            </div>

        </>
    );
}

export default Gallery;
