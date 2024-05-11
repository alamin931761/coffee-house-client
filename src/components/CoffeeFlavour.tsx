import Image from "next/image";
import HorizontalLine from "./HorizontalLine";

type CoffeeFlavourProps = {
  image: string;
  flavourName: string;
  details: string;
  price: string;
  newFlavour?: boolean;
};

const CoffeeFlavour = ({
  image,
  flavourName,
  details,
  price,
  newFlavour = false,
}: CoffeeFlavourProps) => {
  return (
    <div className="border border-red-500 flex items-center">
      <Image
        className="border border-red-900"
        src={image}
        height={83}
        width={83}
        alt="CAPPUCCINO"
      />

      <div className="w-full">
        <div className="flex justify-between">
          <h6 className="text-2xl text-nowrap">{flavourName}</h6>
          <HorizontalLine className="w-full border-b mb-[6px]" />
          <h6 className="text-2xl text-end">${price}</h6>
        </div>

        <div className="flex justify-between">
          <p className="text-sm">{details}</p>
          {newFlavour && <p className="text-sm bg-green-300 px-2">New</p>}
        </div>
      </div>
    </div>
  );
};

export default CoffeeFlavour;
