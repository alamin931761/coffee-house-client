"use client";

import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";

import Image from "next/image";

const CoffeeExperienceCarousel = () => {
  return (
    <div className="h-[420px]">
      <Swiper
        direction={"vertical"}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {/* image 1 */}
        <SwiperSlide>
          <Image
            layout="intrinsic"
            src="https://i.ibb.co/GJQj64N/expand-your-mind.jpg"
            height={420}
            width={650}
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>

        {/* image - 2 */}
        <SwiperSlide>
          <Image
            src="https://i.ibb.co/4Khn5f0/full-taste.jpg"
            layout="intrinsic"
            height={420}
            width={650}
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>

        {/* image - 3 */}
        <SwiperSlide>
          <Image
            src="https://i.ibb.co/qnP095P/elevate-your-expectations.jpg"
            layout="intrinsic"
            height={420}
            width={650}
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoffeeExperienceCarousel;
