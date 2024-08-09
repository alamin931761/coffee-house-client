"use client";

import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import Image from "next/image";

const CoffeeExperienceCarousel = () => {
  return (
    <div className="h-[420px] lg:h-[404px]">
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
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        {/* image 1 */}
        <SwiperSlide>
          <Image
            src="https://i.postimg.cc/cLQsS5Dr/expand-your-mind.jpg"
            height={420}
            width={650}
            alt=""
          />
        </SwiperSlide>

        {/* image - 2 */}
        <SwiperSlide>
          <Image
            src="https://i.postimg.cc/Gt8CSM83/full-taste.jpg"
            height={420}
            width={650}
            alt=""
          />
        </SwiperSlide>

        {/* image - 3 */}
        <SwiperSlide>
          <Image
            src="https://i.postimg.cc/GpdbhJNz/elevate-your-expectations.jpg"
            height={420}
            width={650}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoffeeExperienceCarousel;
