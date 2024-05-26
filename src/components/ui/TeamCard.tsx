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
      {/* Team member image */}
      <Image
        width={800}
        height={642}
        src={imageURL}
        alt="team"
        className="transition ease-linear duration-500 hover:grayscale"
      />
      <div>
        {/* Team member name */}
        <h4
          className={`${oswald.className} text-lg sm:text-xl uppercase font-bold mt-4`}
        >
          {name}
        </h4>

        {/* Team member position */}
        <p
          className={`text-whiskey text-sm italic font-light ${merriweather.className} mt-2 mb-4`}
        >
          {position}, Coffee House
        </p>

        {/* Team member description */}
        <p className={`text-sm ${open_sans.className}`}>{description}</p>

        {/* Social media links */}
        <div className="mt-4 flex justify-center gap-x-5">
          {/* facebook */}
          <a href={facebookURL}>
            <FaFacebookF className="text-xl text-whiskey hover:text-black transition ease-linear duration-500" />
          </a>

          {/* twitter */}
          <a href={twitterURL}>
            <FaTwitter className="text-xl text-whiskey hover:text-black transition ease-linear duration-500" />
          </a>

          {/* instagram */}
          <a href={instagramURL}>
            <FaInstagram className="text-xl text-whiskey hover:text-black transition ease-linear duration-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
