import Container from "../shared/Container";
import CoffeeExperienceCarousel from "./carousel/CoffeeExperienceCarousel";

const CoffeeExperience = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 bg-[url('https://i.ibb.co/0t27QBG/background-image-1.jpg')]">
        <div>
          <h4 className="uppercase text-4xl">
            try the best coffee in the city
          </h4>
          <p className="text-sm">
            Indulge in the ultimate coffee experience at Coffee House, where
            every cup is crafted with care and expertise. Join us in exploring
            the finest blends and flavors that make us the top destination for
            coffee aficionados. Step into our world and discover why we&apos;re
            renowned for serving the best coffee in the city.
          </p>
        </div>

        <CoffeeExperienceCarousel />
      </div>
    </Container>
  );
};

export default CoffeeExperience;
