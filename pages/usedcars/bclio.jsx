import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

function bclio() {

  const bmwcars = [
    { img: "/bclio/bclio1.jpg"},
    { img: "/bclio/bclio2.jpg"},    
    { img: "/bclio/bclio3.jpg"},
    { img: "/bclio/bclio4.jpg"},
    { img: "/bclio/bclio5.jpg"},    
    { img: "/bclio/bclio6.jpg"},   
    { img: "/bclio/bclio7.jpg"},    
    { img: "/bclio/bclio8.jpg"},
    { img: "/bclio/bclio9.jpg"},
    { img: "/bclio/bclio10.jpg"},    
    { img: "/bclio/bclio11.jpg"},
    { img: "/bclio/bclio12.jpg"},
    { img: "/bclio/bclio13.jpg"},    
    { img: "/bclio/bclio14.jpg"},
    { img: "/bclio/bclio15.jpg"},
    { img: "/bclio/bclio16.jpg"},    
]

  return (
      <div className='bg-white text-black' >
          <h1 className='text-4xl  font-semibold flex justify-center pt-10  bg-white shadow-lg py-10 items-center  ' >Renault clio </h1>
    <section className="h-screen grid grid-cols-2 " >
        
        <div className='h-[70vh] pb-24 my-auto' >
        <Swiper
                loop
                navigation={true}
                className='mySwiper flex justify-center items-center overflow-hidden '
                slidesPerView={1}
                autoplay
                spaceBetween={30}
            >
                {
                    bmwcars.map((r,i)=><SwiperSlide key={i} >
                    <img className='hover:scale-105 object-contain transition-all cursor-pointer' src={r.img} />
                </SwiperSlide>)
                }
            </Swiper>
        </div>
        <div className='flex flex-col justify-center ' >
            <section className='h-[50vh]' >
                        <h1 className='text-3xl font-semibold tracking-wider py-6  bg-yellow-200 w-fit px-8 hover:px-12 transition-all cursor-pointer' >Renault Clio</h1>
                        <h3 className='text-2xl font-mono my-4 py-4 bg-green-300 w-fit px-8 hover:px-12 transition-all cursor-pointer' > <span className='font-sans font-medium ' >Price : </span> £4,500</h3>
                        <p className=' font-medium text-gray-500 w-[90%] text-lg pt-6 bg-blue-100 p-8 transition-all '  >Absolutely stunning Renault Clio 2014 (63 reg). Genuine low mileage. Smooth engine and gearbox. Has had a Full service and new MOT (no advisories, due 1/12/2022). The car has parking sensors, cruise control, folding electric side mirrors, all electric windows, hill start assist, start stop, multifunction steering wheel, day time running lights, phone and audio Bluetooth connectivity, Sat Nav and many more... *IDEAL FIRST CAR * CHEAP INSURANCE* £30 ROAD TAX  * VERY ECONOMICAL * FIRST TO SEE WILL BUY * CAT N professionally repaired. £4500 

</p><br />
                     
            </section>
        </div>

    </section>
      </div>
  )
  
}
export default bclio