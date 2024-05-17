import { open_sans, oswald } from "@/app/fonts";
import { ReactNode } from "react";

type TOfferCard = {
  icon: ReactNode;
  title: string;
  description: string;
};

const OfferCard = ({ icon, title, description }: TOfferCard) => {
  return (
    <div>
      <div className="flex">
        {/* icon */}
        <div className="text-[#C7A17A] transition ease-linear duration-500 hover:text-black">
          {icon}
        </div>

        {/* title and description */}
        <div className="ms-2 mt-3">
          {/* title */}
          <h6 className={`uppercase ${oswald.className} text-lg font-bold`}>
            {title}
          </h6>
          {/* description */}
          <p className={`${open_sans.className} text-sm mt-2`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
