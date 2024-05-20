import CoffeeEquipments from "@/components/home/CoffeeEquipments/CoffeeEquipments";
import FavouriteCoffeeFlavours from "@/components/home/FavouriteCoffeeFlavours";
import Gallery from "@/components/home/Gallery";
import OurPlantations from "@/components/home/OurPlantations";
import Carousel from "@/components/home/carousel/Carousel";
import CoffeeExperience from "@/components/ui/CoffeeExperience";

const HomePage = async () => {
  const response = await fetch(
    "http://localhost:5000/menu?favoriteFlavor=true"
  );
  const favouriteCoffeeFlavoursData = await response.json();

  return (
    <div>
      <Carousel />
      <FavouriteCoffeeFlavours
        favouriteCoffeeFlavoursData={favouriteCoffeeFlavoursData}
      />

      <OurPlantations />
      <CoffeeEquipments />
      <CoffeeExperience />
      <Gallery />
    </div>
  );
};

export default HomePage;
