"use client";

import { open_sans, oswald } from "@/app/fonts";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import HorizontalLine from "./HorizontalLine";

const VisitOurRestaurant = () => {
  // State to track whether the video is playing or not
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle click on the play button
  const handlePlayButtonClick = () => {
    // Set isPlaying to true when the play button is clicked
    setIsPlaying(true);
  };

  return (
    <div>
      {/* Section inviting visitors to the restaurant */}
      <div className="flex flex-col items-center">
        {/* Title */}
        <h2
          className={`${oswald.className} text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold capitalize`}
        >
          We invite you to <br />
          visit our restaurant
        </h2>
        {/* Horizontal line */}
        <HorizontalLine className="w-28 border-b-2 border-whiskey mt-5 mb-10" />
      </div>

      {/* Description of the restaurant */}
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

      {/* Video section with background image */}
      <div className="bg-[url('https://i.postimg.cc/GpdbhJNz/elevate-your-expectations.jpg')] bg-no-repeat bg-cover bg-top h-[80vh]">
        {/* Overlay with play button */}
        <div className="h-full w-full flex justify-center items-center bg-black bg-opacity-30">
          {/* Show play button if the video is not playing */}
          {!isPlaying ? (
            <span
              className="relative flex h-[100px] w-[100px] cursor-pointer"
              onClick={handlePlayButtonClick}
            >
              {/* Animated pulse effect for play button */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fantasy opacity-75"></span>
              <span className="relative flex justify-center items-center rounded-full h-[100px] w-[100px] bg-whiskey">
                <FaPlay className="text-black text-[20px]" />
              </span>
            </span>
          ) : (
            // Show video in iframe when isPlaying is true
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
