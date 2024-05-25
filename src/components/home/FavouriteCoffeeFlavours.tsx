import Link from "next/link";
import Container from "../shared/Container";
import SectionTitle from "../ui/SectionTitle";
import { TMenuItem } from "@/types";
import Menu from "../ui/Menu";
import { open_sans } from "@/app/fonts";

const FavouriteCoffeeFlavours = ({
  favouriteCoffeeFlavoursData,
}: {
  favouriteCoffeeFlavoursData: TMenuItem[];
}) => {
  return (
    <div className="bg-fantasy">
      <Container>
        <SectionTitle sectionTitle="favourite coffee flavours." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-5">
          {favouriteCoffeeFlavoursData.map((data: TMenuItem) => (
            <Menu
              key={data._id}
              _id={data._id}
              name={data.name}
              description={data.description}
              price={data.price}
              newFlavour={data.newFlavour}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/our-menu"
            className={`btn btn-outline rounded-none px-10 border-none bg-whiskey uppercase font-extrabold transition ease-linear duration-500 ${open_sans.className} mt-10`}
          >
            View menu
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FavouriteCoffeeFlavours;
