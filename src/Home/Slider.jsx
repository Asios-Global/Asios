import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { gsap } from "gsap";

import b1 from "../assets/1.jpg";
import b2 from "../assets/2.jpg";
import b3 from "../assets/3.jpg";
import b4 from "../assets/4.webp";

const splitText = (text) => {
  return text.split("").map((char, index) => (
    <span key={index} className="inline-block">
      {char}
    </span>
  ));
};

const images = [
  {
    src: b1,
    alt: "Slide 1",
    title: "Vitrified Tiles",
    description:
      "Vitrified tiles are durable, stain-resistant, and low-maintenance, making them ideal for both residential and commercial spaces. With a glossy finish and a variety of designs, they provide an elegant look while being suitable for high foot traffic areas."
  },
  {
    src: b2,
    alt: "Slide 2",
    title: "Sanitaryware",
    description:
      "Sanitaryware includes essential bathroom fixtures such as sinks, toilets, and bathtubs, designed for both functionality and aesthetics. Available in various styles and finishes, they enhance hygiene and comfort in any bathroom while ensuring easy maintenance and long-lasting performance."
  },
  {
    src: b3,
    alt: "Slide 3",
    title: "Porcelain Tiles",
    description:
      "Porcelain tiles are known for their exceptional strength and water resistance. Available in an array of colors and patterns, they are perfect for flooring and walls, providing a sophisticated look. Their durability makes them ideal for both indoor and outdoor applications."
  },
  {
    src: b4,
    alt: "Slide 4",
    title: "Slab Tiles",
    description:
      "Slab tiles are large format tiles that offer a seamless and modern appearance. Ideal for both floors and walls, they come in various materials like stone and porcelain, providing a luxurious look. Their size minimizes grout lines, enhancing the overall aesthetic of any area."
  }
];

const Banner = () => {
  const titleRefs = useRef([]);
  const descriptionRefs = useRef([]);

  const animateText = (refs) => {
    refs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref.children,
          { y: -50, autoAlpha: 0 },
          {
            duration: 0.5,
            y: 0,
            autoAlpha: 1,
            stagger: 0.1,
            ease: "power1.out"
          }
        );
      }
    });
  };

  useEffect(() => {
    animateText(titleRefs);
    animateText(descriptionRefs);
  }, []);

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false
      }}
      speed={2000}
      modules={[Navigation, Autoplay]}
      className="mySwiper h-screen"
      onSlideChange={(swiper) => {
        titleRefs.current.forEach((ref) => {
          if (ref) {
            gsap.killTweensOf(ref.children);
            gsap.set(ref.children, { y: -50, autoAlpha: 0 });
          }
        });
        descriptionRefs.current.forEach((ref) => {
          if (ref) {
            gsap.killTweensOf(ref.children);
            gsap.set(ref.children, { y: -50, autoAlpha: 0 });
          }
        });
        animateText(titleRefs);
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative flex items-center justify-center h-full overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute md:top-[30%] md:left-5 md:text-left text-center p-4">
              <h2
                className="lg:text-4xl sm:text-3xl text-xl font-bold text-white mb-4"
                ref={(el) => (titleRefs.current[index] = el)}
              >
                {splitText(image.title).map((letter, letterIndex) => (
                  <span key={letterIndex} className="inline-block">
                    {letter}
                  </span>
                ))}
              </h2>
              <p
                className="text-white w-full md:w-1/2 md:text-sm text-xs"
                ref={(el) => (descriptionRefs.current[index] = el)}
              >
                {image.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
