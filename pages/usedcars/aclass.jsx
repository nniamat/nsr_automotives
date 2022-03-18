import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

function bmw() {

  const bmwcars = [
    { img: "/usedcar/aclass1.jpg" },
    { img: "/usedcar/aclass2.jpg" },
    { img: "/usedcar/aclass3.jpg" },
    { img: "/usedcar/aclass4.jpg" },
    { img: "/usedcar/aclass5.jpg" },
    { img: "/usedcar/aclass6.jpg" },
    { img: "/usedcar/aclass7.jpg" },
    { img: "/usedcar/aclass8.jpg" },
    { img: "/usedcar/aclass9.jpg" },
    { img: "/usedcar/aclass10.jpg" },
    { img: "/usedcar/aclass11.jpg" },
    { img: "/usedcar/aclass12.jpg" },
]

  return (
      <div className='bg-white text-black' >
          <h1 className='text-4xl  font-semibold flex justify-center pt-10  bg-white shadow-lg py-10 items-center  ' >Mercades A Class </h1>
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
                        <h1 className='text-3xl font-semibold tracking-wider py-6  bg-yellow-200 w-fit px-8 hover:px-12 transition-all cursor-pointer' >Mercades A Class</h1>
                        <h3 className='text-2xl font-mono my-4 py-4 bg-green-300 w-fit px-8 hover:px-12 transition-all cursor-pointer' > <span className='font-sans font-medium ' >Price : </span> £10,000</h3>
                        <p className=' font-medium text-gray-500 w-[90%] text-lg pt-6 bg-blue-100 p-8 transition-all '  >Absolutely stunning Mercedes-Benz A180 Blue-Cy Amg Sport. Great spec. The car runs, drives and feels like new. Incredibly smooth engine and automatic gearbox. The car has front and rear parking sensors, half leather seats, leather steering wheel, cruise control, start stop, multifunction steering wheel, bluetooth and many more… Sadly cat N, has been repaired. 

</p><br />
                     
            </section>
        </div>

    </section>
      </div>
  )
}

export default bmw