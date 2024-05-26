import Container from "@/components/shared/Container";
import OfferCard from "@/components/ui/OfferCard";
import { IoWifiSharp, IoStarOutline } from "react-icons/io5";
import { AiOutlineGift } from "react-icons/ai";
import { PiMicrophoneStageLight, PiArmchair, PiCoffee } from "react-icons/pi";
import { SlBookOpen, SlMusicToneAlt } from "react-icons/sl";
import { BsPinMap } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiGotomeeting } from "react-icons/si";
import PageTitle from "@/components/ui/PageTitle";
import { Metadata } from "next";

// Metadata for the What We Offer page
export const metadata: Metadata = {
  title: "What We Offer - Coffee House",
  description:
    "Discover the wide range of offerings at Coffee House. From free WiFi to special offers, events, premium coffee, cozy ambiance, and health-conscious options, we provide everything you need for a delightful coffee experience. Explore our menu of specialty drinks, relax in our inviting atmosphere, and enjoy the best of what Coffee House has to offer.",
};

const WhatWeOfferPage = () => {
  return (
    <div>
      <PageTitle title="what we offer" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* free wifi */}
          <OfferCard
            icon={<IoWifiSharp className="text-[42px] rotate-[45deg]" />}
            title="free wifi"
            description="Stay connected while you sip on your favorite brew. Our high-speed WiFi is free for all customers, making Coffee House the perfect spot for work, study, or catching up with friends online."
          />

          {/* Special Offers */}
          <OfferCard
            icon={<AiOutlineGift className="text-[42px]" />}
            title="Special Offers"
            description="Enjoy exclusive deals and discounts! Whether it's a seasonal promotion or a loyalty reward, our special offers bring you more value with every visit."
          />

          {/* Events */}
          <OfferCard
            icon={<PiMicrophoneStageLight className="text-[42px]" />}
            title="Events"
            description="Join us for regular events that bring the community together. From open mic nights and live music to art exhibitions and book readings, there's always something happening at Coffee House."
          />

          {/* Books and Newspapers */}
          <OfferCard
            icon={<SlBookOpen className="text-[42px]" />}
            title="Books and Newspapers"
            description="Immerse yourself in a good read with our selection of books and newspapers. Whether you prefer the latest bestsellers or daily news, we've got you covered."
          />

          {/* New Flavors */}
          <OfferCard
            icon={<IoStarOutline className="text-[42px]" />}
            title="New Flavors"
            description="Discover exciting new flavors with our rotating menu of specialty drinks. Each month, we introduce unique blends and seasonal favorites to tantalize your taste buds."
          />

          {/* New Locations */}
          <OfferCard
            icon={<BsPinMap className="text-[42px]" />}
            title="New Locations"
            description="We're expanding! Stay tuned for new Coffee House locations opening near you. Our commitment to quality and community is spreading to new neighborhoods."
          />

          {/* Best Music */}
          <OfferCard
            icon={<SlMusicToneAlt className="text-[42px]" />}
            title="Best Music"
            description="Enjoy the perfect soundtrack to your coffee experience with our curated playlists. From soothing acoustic tunes to upbeat jazz, our music sets the ideal atmosphere."
          />

          {/* Friendly Staff */}
          <OfferCard
            icon={<FaRegHandshake className="text-[42px]" />}
            title="Friendly Staff"
            description="Our friendly and knowledgeable staff are here to make your visit enjoyable. Whether you need a recommendation or just a smile, we're always happy to help."
          />

          {/* Cozy Ambiance */}
          <OfferCard
            icon={<PiArmchair className="text-[42px]" />}
            title="Cozy Ambiance"
            description="Relax in our warm and inviting environment. With comfortable seating and a welcoming decor, Coffee House is your home away from home."
          />

          {/* Premium Coffee */}
          <OfferCard
            icon={<PiCoffee className="text-[42px]" />}
            title="Premium Coffee"
            description="Taste the difference with our premium coffee, sourced from the finest beans around the world. Our baristas are trained to craft the perfect cup, just for you."
          />

          {/* Health-Conscious Options */}
          <OfferCard
            icon={<MdOutlineHealthAndSafety className="text-[42px]" />}
            title="Health-Conscious Options"
            description="Choose from a variety of health-conscious options, including vegan, gluten-free, and low-calorie choices. We cater to all dietary preferences."
          />

          {/* Private Meeting Spaces */}
          <OfferCard
            icon={<SiGotomeeting className="text-[42px]" />}
            title="Private Meeting Spaces"
            description="Need a place for a business meeting or group study session? Reserve our private meeting spaces equipped with all the amenities you need."
          />
        </div>
      </Container>
    </div>
  );
};

export default WhatWeOfferPage;
