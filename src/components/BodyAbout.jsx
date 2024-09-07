
//Images
import person1 from '../images/person1.png'
import imgAbout1 from '../images/imgAbout1.jpg'



function BodyAbout() {
  return (
    <>
      <div className='container mx-auto flex flex-col justify-center md:flex-row items-center py-16'>
        <div id='img1' className="w-full md:w-1/2">
          <img src={imgAbout1} alt="car" className='w-full h-auto rounded-lg' />
        </div>
        <div id='parameter1' className="w-full text-center md:text-start md:w-1/2 px-6">
          <h1 className='text-3xl font-bold my-5 md:my-0'>บริการของเรา</h1>
          <p className='text-xl font-medium'>“เรามีรถตู้ VIP ที่พร้อมให้บริการสำหรับทุกการเดินทาง ไม่ว่าจะเป็นการเดินทางในครอบครัว การเดินทางไปทำงาน หรือการท่องเที่ยวกับเพื่อนฝูง รถของเรามีความสะดวกสบายพร้อมทั้งสิ่งอำนวยความสะดวกต่าง ๆ เช่น เบาะนั่งนุ่มสบาย เครื่องเสียงคุณภาพ ระบบความบันเทิงในรถ รวมถึงการดูแลความสะอาดภายในรถเป็นอย่างดีทุกครั้งก่อนการให้บริการ”</p>
        </div>
      </div>

      <div className='container mx-auto flex flex-col justify-center md:flex-row items-center py-16'>
        <div id='img2' className="md:hidden w-full md:w-1/2 shadow-sm">
          <img src={person1} alt="car" className='w-full h-auto rounded-lg' />
        </div>
        <div id='parameter1' className="w-full text-center md:text-end md:w-1/2 px-6">
          <h1 className='text-3xl font-bold my-5 md:my-0'>คนขับที่มีประสบการณ์</h1>
          <p className='text-xl font-medium'>“คนขับของเราคือคนในครอบครัวที่มีประสบการณ์ในการขับรถมาหลายปี เรารู้จักเส้นทางและมีทักษะในการขับขี่ที่ปลอดภัย พร้อมทั้งมีความเป็นมิตรและยินดีให้บริการลูกค้าอย่างเต็มที่ ลูกค้าทุกท่านจะรู้สึกสบายใจและปลอดภัยตลอดการเดินทาง”</p>
        </div>
        <div id='img3' className="hidden md:block w-full md:w-1/2 lg:w-1/4">
          <img src={person1} alt="car" className='w-full h-auto rounded-lg' />
        </div>
      </div>
    </>
  )
}

export default BodyAbout