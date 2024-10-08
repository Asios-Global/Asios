import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';

import b1 from '../assets/1.jpg';
import b2 from '../assets/2.jpg';
import b3 from '../assets/3.jpg';
import b4 from '../assets/4.webp';

const Banner = () => {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 3000, // Adjust the delay to your preferred speed (2000ms = 2s)
                disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={b1} alt="Slide 1" className="md:h-[600px] h-[250px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={b2} alt="Slide 2" className="md:h-[600px] h-[250px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={b3} alt="Slide 3" className="md:h-[600px] h-[250px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={b4} alt="Slide 4" className="md:h-[600px] h-[250px] w-full object-cover" />
            </SwiperSlide>
        </Swiper>
    );
}

export default Banner;
