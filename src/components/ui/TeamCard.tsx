import { merriweather, open_sans, oswald } from "@/app/fonts";
import Image from "next/image";

type TTeamCardProps = {
  imageURL: string;
  name: string;
  details: string;
};

const TeamCard = ({ imageURL, name, details }: TTeamCardProps) => {
  return (
    <div className="text-center">
      <Image width={800} height={642} src={imageURL} alt="team" />
      <div>
        <h4 className={`${oswald.className} text-xl uppercase font-bold mt-4`}>
          {name}
        </h4>
        <p
          className={`text-[#C7A17A] text-sm italic font-light ${merriweather.className} my-2`}
        >
          Owner, Coffee House
        </p>
        <p className={`text-sm ${open_sans.className}`}>{details}</p>
      </div>
    </div>
  );
};

export default TeamCard;
