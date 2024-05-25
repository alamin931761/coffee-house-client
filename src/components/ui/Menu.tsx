import { merriweather, open_sans, oswald } from "@/app/fonts";
import HorizontalLine from "./HorizontalLine";
import { TMenuItem } from "@/types";

const Menu = ({ name, description, price, newFlavour }: TMenuItem) => {
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
        <p className={`text-whiskey ${open_sans.className} text-sm`}>
          {description}
        </p>
        {newFlavour ? (
          <p
            className={`uppercase text-sm ${merriweather.className} italic bg-whiskey px-3 py-[2px]`}
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
