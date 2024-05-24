import CoffeeEquipments from "@/components/home/CoffeeEquipments/CoffeeEquipments";
import FavouriteCoffeeFlavours from "@/components/home/FavouriteCoffeeFlavours";
import Gallery from "@/components/home/Gallery";
import OurPlantations from "@/components/home/OurPlantations";
import Carousel from "@/components/home/carousel/Carousel";
import Container from "@/components/shared/Container";
import BookingForm from "@/components/ui/BookingForm";
import CoffeeExperience from "@/components/ui/CoffeeExperience";
import SectionTitle from "@/components/ui/SectionTitle";

const HomePage = async () => {
  const response = await fetch(
    "http://localhost:5000/menu?favoriteFlavor=true"
  );
  const favouriteCoffeeFlavoursData = await response.json();

  return (
    <div>
      <Carousel />
      <Container>
        <SectionTitle sectionTitle="coffee build your base." />
        <div className="flex justify-center w-full">
          <div className="w-full">
            <BookingForm />
          </div>
        </div>
      </Container>
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
