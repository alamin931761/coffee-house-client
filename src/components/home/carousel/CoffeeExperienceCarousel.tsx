"use client";

import image1 from "../../../assets/images/carousel/carousel-4.jpg";
import image2 from "../../../assets/images/carousel/carousel-5.jpg";
import image3 from "../../../assets/images/carousel/carousel-6.jpg";

import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

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
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={image1} height={600} width={1200} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} height={600} width={1200} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} height={600} width={1200} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoffeeExperienceCarousel;
