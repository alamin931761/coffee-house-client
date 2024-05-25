import { open_sans, oswald } from "@/app/fonts";
import { ReactNode } from "react";

type TWhyPeopleChooseUsCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};
const WhyPeopleChooseUsCard = ({
  icon,
  title,
  description,
}: TWhyPeopleChooseUsCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-9xl text-whiskey hover:text-black transition ease-linear duration-500">
        {icon}
      </h1>
      <h3 className={`${oswald.className} text-xl uppercase font-bold`}>
        {title}
      </h3>
      <p
        className={`${open_sans.className} text-sm text-silver-chalice text-center mt-3`}
      >
        {description}
      </p>
    </div>
  );
};

export default WhyPeopleChooseUsCard;
