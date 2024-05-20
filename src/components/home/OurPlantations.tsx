"use client";

import { merriweather, open_sans, oswald } from "@/app/fonts";
import Typewriter from "typewriter-effect";

const OurPlantations = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/zG0VLKS/plantations.jpg')] bg-no-repeat bg-cover bg-top bg-local h-[500px] text-white ">
      <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h2 className={`text-sm ${oswald.className} mb-4`}>OUR PLANTATIONS</h2>

        <p className={`text-2xl ${merriweather.className} font-bold`}>
          We Make the Best Coffee Blends
        </p>

        <div className={`flex text-2xl ${merriweather.className} font-bold`}>
          <p className="me-1">Our coffee is </p>
          <Typewriter
            options={{
              strings: ["Natural", "Palatable", "Fragrant"],
              autoStart: true,
              loop: true,
              delay: 100,
              cursor: "_",
            }}
          />
        </div>

        <p className={`mt-4 text-base ${open_sans.className} italic`}>
          Good morning begins with aromatic coffee.
        </p>
      </div>
    </div>
  );
};

export default OurPlantations;
