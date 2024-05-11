import HomePageSectionTitle from "@/components/home/HomePageSectionTitle";
import CoffeeFlavour from "@/components/CoffeeFlavour";
import Link from "next/link";

const FavouriteCoffeeFlavours = async () => {
  return (
    <div>
      <HomePageSectionTitle sectionTitle="favourite coffee flavours." />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <CoffeeFlavour
          image="https://static.vecteezy.com/system/resources/previews/010/789/868/original/coffee-latte-with-heart-pattern-close-up-transparent-background-png.png"
          flavourName="CAFFE LATTE"
          details="Fresh brewed coffee and steamed milk"
          price="2.95"
          newFlavour={true}
        />

        <CoffeeFlavour
          image="https://static.vecteezy.com/system/resources/previews/010/789/868/original/coffee-latte-with-heart-pattern-close-up-transparent-background-png.png"
          flavourName="WHITE CHOCOLATE MOCHA"
          details="Fresh brewed coffee and steamed milk"
          price="2.95"
        />

        <CoffeeFlavour
          image="https://static.vecteezy.com/system/resources/previews/010/789/868/original/coffee-latte-with-heart-pattern-close-up-transparent-background-png.png"
          flavourName="ICED GINGERBREAD LATTE"
          details="Fresh brewed coffee and steamed milk"
          price="2.95"
          newFlavour={true}
        />

        <CoffeeFlavour
          image="https://static.vecteezy.com/system/resources/previews/010/789/868/original/coffee-latte-with-heart-pattern-close-up-transparent-background-png.png"
          flavourName="WHITE CHOCOLATE MOCHA"
          details="Fresh brewed coffee and steamed milk"
          price="2.95"
        />
      </div>

      <div className="flex justify-center">
        <Link
          href="/"
          className="btn btn-outline btn-success uppercase rounded-none mt-5"
        >
          View menu
        </Link>
      </div>
    </div>
  );
};

export default FavouriteCoffeeFlavours;
