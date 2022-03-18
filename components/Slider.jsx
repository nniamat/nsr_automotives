import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

const Slider = () => {
    return <section data-aos="fade-right" id='slider' className='h-screen flex flex-col justify-center items-center ' >
        <h1 className='flex justify-center items-center text-3xl py-5 font-semibold underline ' >Bodywork</h1>
        <div className='grid grid-cols-2' >
            <p className='w-[80%] text-center mx-auto text-xl flex justify-center items-center flex-col' >
                We understand that discovering scratches and dents on your car is infuriating. At NSR Automotive we endeavor to provide our customers with a specialist mobile service to fit your schedule and your budget. <br /> <span className='mt-14' >We offer a complementary mobile service so you can rest assured that everything is being handled after handing us your vehicle for repair.</span>
            </p>
        <div data-aos="fade-left" className='h-[70vh] w-full m-auto mt-10  ' >
            <Swiper
                loop
                navigation={true}
                className='mySwiper flex justify-center items-center overflow-hidden '
                slidesPerView={1}
                autoplay
                spaceBetween={30}
            >
                <SwiperSlide>
                    <img className='hover:scale-105 transition-all cursor-pointer' src="/bodywork1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='hover:scale-105 transition-all cursor-pointer' src="/bodywork2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='hover:scale-105 transition-all cursor-pointer' src="/bodywork3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='hover:scale-105 transition-all cursor-pointer' src="/bodywork4.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
        <p>

        </p>
    </section>
}

export default Slider