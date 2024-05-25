"use client";

import { open_sans, oswald } from "@/app/fonts";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const VisitOurRestaurant = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      <h2
        className={`${oswald.className} text-center text-4xl font-bold mb-5 capitalize`}
      >
        We invite you to <br />
        visit our restaurant
      </h2>
      <p className={`${open_sans.className} text-sm text-center mb-5`}>
        Step into Coffee House, where the rich aroma of freshly brewed coffee
        greets you at the door. Our cozy atmosphere is the perfect setting for a
        relaxing break from your busy day. Whether you&apos;re looking for a
        quiet corner to catch up on work, a comfortable spot to enjoy a book, or
        a place to gather with friends, Coffee House offers the ideal
        environment. Savor our selection of gourmet coffees, teas, and freshly
        baked pastries, all crafted with the finest ingredients. Our friendly
        staff is dedicated to providing you with an exceptional experience. We
        look forward to welcoming you and making Coffee House your favorite spot
        to unwind and enjoy the finer things in life.
      </p>

      <div className="bg-[url('https://i.ibb.co/qnP095P/elevate-your-expectations.jpg')] bg-no-repeat bg-cover bg-top h-[80vh]">
        <div className="h-full w-full flex justify-center items-center bg-black bg-opacity-30">
          {!isPlaying ? (
            <span
              className="relative flex h-[100px] w-[100px] cursor-pointer"
              onClick={handlePlayButtonClick}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fantasy opacity-75"></span>
              <span className="relative flex justify-center items-center rounded-full h-[100px] w-[100px] bg-whiskey">
                <FaPlay className="text-black text-[20px]" />
              </span>
            </span>
          ) : (
            <div className="relative w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jFtHnpg9cdE?autoplay=1"
                title="Coffee House"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisitOurRestaurant;
