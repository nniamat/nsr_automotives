import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

function clio() {

  const bmwcars = [
    { img: "/clio/clio1.jpg" },
    { img: "/clio/clio2.jpg" },
    { img: "/clio/clio3.jpg" },
    { img: "/clio/clio4.jpg" },
    { img: "/clio/clio5.jpg" },
    { img: "/clio/clio6.jpg" },
    { img: "/clio/clio7.jpg" },
    { img: "/clio/clio8.jpg" },
    { img: "/clio/clio9.jpg" },
    { img: "/clio/clio10.jpg" },
    { img: "/clio/clio11.jpg" },
    { img: "/clio/clio12.jpg" },
    { img: "/clio/clio13.jpg" },
    { img: "/clio/clio14.jpg" },
    { img: "/clio/clio15.jpg" },
    { img: "/clio/clio16.jpg" },
    { img: "/clio/clio17.jpg" },
    { img: "/clio/clio18.jpg" },
    { img: "/clio/clio19.jpg" },

]

  return (
      <div className='bg-white text-black' >
          <h1 className='text-4xl  font-semibold flex justify-center pt-10  bg-white shadow-lg py-10 items-center  ' >Clio </h1>
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
                        <h1 className='text-3xl font-semibold tracking-wider py-6  bg-yellow-200 w-fit px-8 hover:px-12 transition-all cursor-pointer' >Renalt Clio</h1>
                        <h3 className='text-2xl font-mono my-4 py-4 bg-green-300 w-fit px-8 hover:px-12 transition-all cursor-pointer' > <span className='font-sans font-medium ' >Price : </span> £9,750</h3>
                        <p className=' font-medium text-gray-500 w-[90%] text-lg pt-6 bg-blue-100 p-8 transition-all '  >Renault Clio 2017 Dynamique S Nav Tce Auto facelift model in a stunning blue. Fully loaded, top spec. The car runs, drives and feels like new. Incredibly smooth engine and automatic gearbox. Has had a full service and new MOT. The car has reverse camera, front and rear parking sensors, half leather seats, leather steering wheel, sun roof, sat nav, folding electric side mirrors, cruise control, speed restricter, front and rear electric windows, start stop, keyless entry, keyless start, multifunction steering wheel, bluetooth and many more? Sadly cat s, has been professionally repaired to very high standard with genuine parts. * CHEAP INSURANCE * CHEAP ROAD TAX  * VERY ECONOMICAL * CAT S PROFESSIONALLY REPAIRED * </p><br />
                     
            </section>
        </div>

    </section>
      </div>
  )
}

export default clio