import { oswald } from "@/app/fonts";
import CoffeeExperienceCarousel from "../home/carousel/CoffeeExperienceCarousel";
import Container from "../shared/Container";

const CoffeeExperience = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 text-white relative">
        <div className="bg-[url('https://i.ibb.co/c3RMH8M/coffee-experience-background-image.jpg')] bg-no-repeat bg-cover bg-right-bottom bg-local h-full">
          <div className="px-10 my-16 w-[395px]">
            <h4 className={`${oswald.className} uppercase text-4xl font-bold`}>
              try the best coffee in the city
            </h4>
            <p className="text-sm mt-5">
              Indulge in the ultimate coffee experience at Coffee House, where
              every cup is crafted with care and expertise. Join us in exploring
              the finest blends and flavors that make us the top destination for
              coffee aficionados. Step into our world and discover why
              we&apos;re renowned for serving the best coffee in the city.
            </p>
          </div>
        </div>

        <div className="my-2">
          <CoffeeExperienceCarousel />
        </div>
      </div>
    </Container>
  );
};

export default CoffeeExperience;
