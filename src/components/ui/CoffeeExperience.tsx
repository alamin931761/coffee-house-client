import { oswald } from "@/app/fonts";
import CoffeeExperienceCarousel from "../home/carousel/CoffeeExperienceCarousel";

const CoffeeExperience = () => {
  return (
    <div className="text-white grid grid-cols-1 lg:grid-cols-2">
      {/* Left section with background image */}
      <div className="bg-[url('https://i.ibb.co/c3RMH8M/coffee-experience-background-image.jpg')] bg-no-repeat bg-cover bg-right-bottom bg-local h-[420px]">
        <div className="lg:mx-10 p-5 lg:my-16 h-full">
          {/* Title */}
          <h4
            className={`${oswald.className} uppercase text-2xl sm:text-3xl lg:text-4xl font-bold`}
          >
            try the best coffee in the city
          </h4>

          {/* Description */}
          <p className="text-sm mt-5 text-black">
            Indulge in the ultimate coffee experience at Coffee House, where
            every cup is crafted with care and expertise. Join us in exploring
            the finest blends and flavors that make us the top destination for
            coffee aficionados. Step into our world and discover why we&apos;re
            renowned for serving the best coffee in the city.
          </p>
        </div>
      </div>

      {/* Right section with CoffeeExperienceCarousel */}
      <div className="h-[420px] lg:h-[404px] lg:my-2">
        <CoffeeExperienceCarousel />
      </div>
    </div>
  );
};

export default CoffeeExperience;
