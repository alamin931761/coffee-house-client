import { merriweather, open_sans, oswald } from "@/app/fonts";
import HorizontalLine from "./HorizontalLine";

type TMenuProps = {
  name: string;
  description: string;
  price: number;
  newFlavour: boolean;
};

const Menu = ({ name, description, price, newFlavour }: TMenuProps) => {
  return (
    <div>
      <div
        className={`flex justify-between ${oswald.className} text-2xl uppercase font-bold`}
      >
        <h4 className={`text-nowrap`}>{name}</h4>
        <HorizontalLine className="w-full border-b mb-[6px] mx-2" />
        <p>${price}</p>
      </div>

      <div className="flex justify-between">
        <p className={`text-[#C7A17A] ${open_sans.className} text-sm`}>
          {description}
        </p>
        {newFlavour ? (
          <p
            className={`uppercase text-sm ${merriweather.className} italic bg-[#C7A17A] px-3 py-[2px]`}
          >
            new
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Menu;
