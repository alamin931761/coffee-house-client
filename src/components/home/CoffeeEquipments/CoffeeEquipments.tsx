import CoffeeEquipment from "./CoffeeEquipment";
import coffeeCups from "../../../assets/images/coffeeEquipments/coffee-cups.png";
import coffeeGrinder from "../../../assets/images/coffeeEquipments/coffee-grinder.png";
import coffeeMaker from "../../../assets/images/coffeeEquipments/coffee-maker.png";
import expressoMachine from "../../../assets/images/coffeeEquipments/expresso-machine.png";
import Container from "../../shared/Container";
import CoffeeExperience from "@/components/ui/CoffeeExperience";

const CoffeeEquipments = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-10">
          <CoffeeEquipment
            image={coffeeMaker}
            title="COFFEEMAKER"
            details="Discover the perfect brew with our curated selection of coffeemakers
        at Coffee House."
          />

          <CoffeeEquipment
            image={coffeeGrinder}
            title="COFFEE GRINDER"
            details="Elevate your coffee experience with precision-ground beans using our premium coffee grinders at Coffee House."
          />

          <CoffeeEquipment
            image={coffeeCups}
            title="COFFEE CUPS"
            details="Sip in style with our collection of chic coffee cups, perfect for elevating your daily brew at Coffee House."
          />

          <CoffeeEquipment
            image={expressoMachine}
            title="ESPRESSO MACHINE"
            details="Craft the perfect shot of espresso with our state-of-the-art espresso machines at Coffee House."
          />
        </div>
      </div>

      <div className="mt-10">
        <CoffeeExperience />
      </div>
    </Container>
  );
};

export default CoffeeEquipments;
