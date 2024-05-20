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
import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import { GiCoffeeBeans } from "react-icons/gi";
import { PiCoffeeLight } from "react-icons/pi";
import { CiCoffeeCup } from "react-icons/ci";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { merriweather, open_sans, oswald } from "@/app/fonts";

// animation
const intro: Variants = {
  hidden: { opacity: 0.7 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
      delayChildren: 0.25,
    },
  },
};

const introChildren: Variants = {
  hidden: { opacity: 0, y: -500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
      // repeat: Infinity,
      // repeatType: "reverse",
      // ease: "easeInOut",
    },
  },
};

const Carousel = () => {
  return (
    <div className="relative h-[calc(100vh-64px)]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="h-full">
          {/* image 1 */}
          <motion.div
            variants={intro}
            initial="hidden"
            animate="visible"
            className="absolute h-full flex flex-col justify-center items-center text-white w-full bg-black bg-opacity-50"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div variants={introChildren}>
              <PiCoffeeLight
                className={`text-[50px] sm:text-[70px] md:text-[100px] lg:text-[150px] ${oswald.className} font-bold`}
              />
            </motion.div>

            <motion.h1
              variants={introChildren}
              className={`text-2xl sm:text-4xl md:text-6xl lg:text-7xl uppercase my-5 ${oswald.className} font-bold`}
            >
              importance of coffee
            </motion.h1>

            <motion.p
              variants={introChildren}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-center ${merriweather.className} italic`}
            >
              Fuel Your Day with Our Premium Brews!
              <br />
              Discover the True Importance of Coffee at Our Shop.
            </motion.p>

            <motion.button
              variants={introChildren}
              className={`uppercase my-5 btn btn-outline text-white hover:text-black hover:bg-white border-2 hover:border-white hover:border-2 transition ease-linear duration-500 rounded-none ${open_sans.className} font-extrabold`}
            >
              Read more
            </motion.button>
          </motion.div>
          <Image src={image1} height={600} width={1200} alt="" />
        </SwiperSlide>

        {/* image 2  */}
        <SwiperSlide className="h-full">
          <motion.div
            variants={intro}
            initial="hidden"
            animate="visible"
            className="absolute h-full flex flex-col justify-center items-center text-white w-full bg-black bg-opacity-50"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div variants={introChildren}>
              <CiCoffeeCup
                className={`text-[50px] sm:text-[70px] md:text-[100px] lg:text-[150px] ${oswald.className} font-bold`}
              />
            </motion.div>

            <motion.h1
              variants={introChildren}
              className={`text-2xl sm:text-4xl md:text-6xl lg:text-7xl uppercase my-5 ${oswald.className} font-bold`}
            >
              The home of coffee
            </motion.h1>
            <motion.p
              variants={introChildren}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-center ${merriweather.className} italic`}
            >
              Sip, savor, and indulge in the finest brews at our coffee haven.{" "}
              <br />
              Welcome to the true home of coffee.
            </motion.p>

            <motion.button
              variants={introChildren}
              className={`uppercase my-5 btn btn-outline text-white hover:text-black hover:bg-white border-2 hover:border-white hover:border-2 transition ease-linear duration-500 rounded-none ${open_sans.className} font-extrabold`}
            >
              Read more
            </motion.button>
          </motion.div>
          <Image src={image2} height={600} width={1200} alt="" />
        </SwiperSlide>

        {/* image 3 */}
        <SwiperSlide className="h-full">
          <motion.div
            variants={intro}
            initial="hidden"
            animate="visible"
            className="absolute h-full flex flex-col justify-center items-center text-white w-full bg-black bg-opacity-50"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div variants={introChildren}>
              <GiCoffeeBeans
                className={`text-[50px] sm:text-[70px] md:text-[100px] lg:text-[150px] ${oswald.className} font-bold`}
              />
            </motion.div>

            <motion.h1
              variants={introChildren}
              className={`text-2xl sm:text-4xl md:text-6xl lg:text-7xl uppercase my-5 ${oswald.className} font-bold`}
            >
              Special coffee beans
            </motion.h1>

            <motion.p
              variants={introChildren}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-center ${merriweather.className} italic`}
            >
              Indulge in our exclusive blend of special coffee beans,
              <br />
              crafted to perfection for your ultimate coffee experience.
            </motion.p>

            <motion.button
              variants={introChildren}
              className={`uppercase my-5 btn btn-outline text-white hover:text-black hover:bg-white border-2 hover:border-white hover:border-2 transition ease-linear duration-500 rounded-none ${open_sans.className} font-extrabold`}
            >
              Read more
            </motion.button>
          </motion.div>
          <Image src={image3} height={600} width={1200} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
