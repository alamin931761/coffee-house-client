import { merriweather, open_sans, oswald } from "@/app/fonts";
import HorizontalLine from "./HorizontalLine";
import { TMenuItem } from "@/types";

const Menu = ({ name, description, price, newFlavour }: TMenuItem) => {
  return (
    <div>
      {/* Menu item name and price */}
      <div
        className={`flex justify-between ${oswald.className} text-lg sm:text-2xl uppercase font-bold`}
      >
        {/* name */}
        <h4 className={`text-nowrap`}>{name}</h4>

        {/* horizontal line */}
        <HorizontalLine className="w-full border-b mb-[6px] mx-2" />

        {/* price */}
        <p>${price}</p>
      </div>

      {/* Description and new flavor indicator */}
      <div className="flex justify-between">
        {/* description */}
        <p className={`text-whiskey ${open_sans.className} text-xs sm:text-sm`}>
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
