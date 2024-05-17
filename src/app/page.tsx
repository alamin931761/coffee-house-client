import CoffeeEquipments from "@/components/home/CoffeeEquipments";
import CoffeeExperience from "@/components/home/CoffeeExperience";
import FavouriteCoffeeFlavours from "@/components/home/FavouriteCoffeeFlavours";
import Gallery from "@/components/home/Gallery";
import Carousel from "@/components/home/carousel/Carousel";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <FavouriteCoffeeFlavours />
      <CoffeeEquipments />
      <CoffeeExperience />
      <Gallery />
    </div>
  );
};

export default HomePage;
