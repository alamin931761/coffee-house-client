import { merriweather, open_sans, oswald } from "@/app/fonts";
import { TTeam } from "@/types";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const TeamCard = ({
  imageURL,
  name,
  description,
  position,
  facebookURL,
  twitterURL,
  instagramURL,
}: TTeam) => {
  return (
    <div className="text-center">
      <Image width={800} height={642} src={imageURL} alt="team" />
      <div>
        <h4 className={`${oswald.className} text-xl uppercase font-bold mt-4`}>
          {name}
        </h4>
        <p
          className={`text-[#C7A17A] text-sm italic font-light ${merriweather.className} mt-2 mb-4`}
        >
          {position}, Coffee House
        </p>
        <p className={`text-sm ${open_sans.className}`}>{description}</p>

        <div className="mt-4 flex justify-center gap-x-5">
          <a href={facebookURL}>
            <FaFacebookF className="text-xl text-[#CAA782] hover:text-black transition ease-linear duration-500" />
          </a>
          <a href={twitterURL}>
            <FaTwitter className="text-xl text-[#CAA782] hover:text-black transition ease-linear duration-500" />
          </a>
          <a href={instagramURL}>
            <FaInstagram className="text-xl text-[#CAA782] hover:text-black transition ease-linear duration-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
