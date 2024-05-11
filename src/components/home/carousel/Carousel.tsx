"use client";

import image1 from "../../../assets/images/carousel/carousel-1.jpg";
import image2 from "../../../assets/images/carousel/carousel-2.jpg";
import image3 from "../../../assets/images/carousel/carousel-3.jpg";

// import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { GiCoffeeBeans } from "react-icons/gi";
import { PiCoffeeLight } from "react-icons/pi";
import { CiCoffeeCup } from "react-icons/ci";

const Carousel = () => {
  return (
    <Container>
      <div className="relative h-[calc(100vh-64px)]">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="h-full">
            <div
              className="absolute h-full flex flex-col justify-center items-center text-white w-full bg-black bg-opacity-50"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <PiCoffeeLight className="text-[250px]" />
              <h1 className="text-8xl uppercase my-5">importance of coffee</h1>
              <p className="text-3xl text-center">
                Fuel Your Day with Our Premium Brews!
                <br />
                Discover the True Importance of Coffee at Our Shop.
              </p>

              <button className="uppercase my-5 btn btn-outline text-white rounded-none border-2 px-4 hover:bg-black hover:text-white text-xl hover:border-0">
                Book a table
              </button>
            </div>
            <Image src={image1} height={600} width={1200} alt="" />
          </SwiperSlide>

          <SwiperSlide className="h-full">
            <div
              className="absolute h-full flex flex-col justify-center items-center text-white w-full bg-black bg-opacity-50"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <CiCoffeeCup className="text-[250px]" />
              <h1 className="text-8xl uppercase">The home of coffee</h1>
              <p className="text-3xl text-center mt-5">
                Sip, savor, and indulge in the finest brews at our coffee haven.{" "}
                <br />
                Welcome to the true home of coffee.
              </p>

              <button className="uppercase my-5 btn btn-outline text-white rounded-none border-2 px-4 hover:bg-black hover:text-white text-xl hover:border-0">
                Book a table
              </button>
            </div>
            <Image src={image2} height={600} width={1200} alt="" />
          </SwiperSlide>

          <SwiperSlide className="h-full">
            <div
              className="absolute h-full flex flex-col justify-center items-center text-white w-full bg-black bg-opacity-50"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <GiCoffeeBeans className="text-[250px]" />
              <h1 className="text-8xl uppercase">Special coffee beans</h1>
              <p className="text-3xl text-center mt-5">
                Indulge in our exclusive blend of special coffee beans,
                <br />
                crafted to perfection for your ultimate coffee experience.
              </p>

              <button className="uppercase my-5 btn btn-outline text-white rounded-none border-2 px-4 hover:bg-black hover:text-white text-xl hover:border-0">
                Book a table
              </button>
            </div>
            <Image src={image3} height={600} width={1200} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Carousel;
