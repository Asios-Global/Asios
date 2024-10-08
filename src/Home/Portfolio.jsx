import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';
// Import images as needed

const Portfolio = () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL;

    const [portfoliodata, setPortfoliodata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseURL}/category/getAllCategories`);
                setPortfoliodata(response.data.data);
            } catch (error) {
                console.error('Error fetching category data:', error);
            }
        };

        fetchData();
    }, [baseURL]);
    console.log('portfoliodata',portfoliodata)
    return (
        <div className='container mt-10'>
            <div className='font-bold md:text-4xl sm:text-2xl text-xl text-center flex flex-col justify-center'>
                Product
            </div>
            <div className='mt-4 py-4 md:flex hidden'>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="4"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    mousewheel={{ releaseOnEdges: true }}
                    freeMode={true}
                    watchOverflow={true}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Mousewheel]}
                    className="mySwiper"
                >
                    {Array.isArray(portfoliodata) && portfoliodata.length > 0 ? (
                        portfoliodata.map((item, index) => (
                            <SwiperSlide key={index} style={{width:'334px'}}>
                                <div className='relative'>
                                    <img src={item.image || 'fallback-image.jpg'} alt={item.title} className='w-[290px] h-[466px] object-cover' />
                                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-left pl-6'>
                                        <p className='font-bold text-white'>{item.title}</p>
                                        <button className='button mt-2 bg-blue-500 text-white py-1 px-3 rounded'>
                                            View Product
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ):
                    (
                        <p>No products available.</p>
                    )
                    }
                </Swiper>
            </div>
            {/* Mobile Swiper Slider */}
            <div className='mt-4 py-4 md:hidden'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {portfoliodata.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative'>
                                <img src={item.img || 'fallback-image.jpg'} alt={item.title} className='w-full h-[200px] object-cover' />
                                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-left pl-6'>
                                    <p className='font-bold text-white'>{item.title}</p>
                                    <button className='button mt-2 bg-blue-500 text-white py-1 px-3 rounded'>
                                        View Product
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Portfolio;
