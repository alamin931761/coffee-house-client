import Link from "next/link";
import Container from "../shared/Container";
import SectionTitle from "../ui/SectionTitle";
import { TMenuItem } from "@/types";
import Menu from "../ui/Menu";

const FavouriteCoffeeFlavours = ({
  favouriteCoffeeFlavoursData,
}: {
  favouriteCoffeeFlavoursData: TMenuItem[];
}) => {
  return (
    <Container>
      <SectionTitle sectionTitle="favourite coffee flavours." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-5">
        {favouriteCoffeeFlavoursData.map((data: TMenuItem) => (
          <Menu
            key={data._id}
            name={data.name}
            description={data.description}
            price={data.price}
            newFlavour={data.newFlavour}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/"
          className="btn btn-outline btn-success uppercase rounded-none mt-5"
        >
          View menu
        </Link>
      </div>
    </Container>
  );
};

export default FavouriteCoffeeFlavours;
