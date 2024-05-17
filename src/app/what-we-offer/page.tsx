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

        <div>
          <div>
            <h3>Discover Our Specialty Coffee Selection</h3>
            <p>
              At Coffee House, we take pride in offering a diverse range of
              specialty coffees to satisfy every palate. Our beans are sourced
              from the finest coffee-growing regions around the world, ensuring
              that each cup delivers a unique and exquisite flavor. Whether
              you&apos;re a fan of rich, full-bodied dark roasts or prefer the
              subtle nuances of light and medium roasts, our expertly curated
              selection has something for everyone. Our baristas are passionate
              about crafting the perfect cup, using precise brewing techniques
              to highlight the distinct characteristics of each coffee variety.
              Come explore our menu and find your new favorite brew today.
            </p>
          </div>

          <div>
            <h3>Experience the Ambiance at Coffee House</h3>
            <p>
              At Coffee House, we believe that enjoying coffee is more than just
              a drink—it&apos;s an experience. Our coffee shop is designed to be
              a cozy and inviting space where you can relax, unwind, and connect
              with friends. With comfortable seating, warm lighting, and a
              welcoming atmosphere, Coffee House is the perfect place to take a
              break from the hustle and bustle of daily life. Whether
              you&apos;re here to catch up on work, read a book, or simply enjoy
              a moment of tranquility, our friendly staff is here to make your
              visit special. Come in and feel at home at Coffee House.
            </p>
          </div>

          <div>
            <h3>Indulge in Our Freshly Baked Pastries and Snacks</h3>
            <p>
              At Coffee House, we understand that the perfect coffee experience
              is incomplete without a delicious treat to accompany your
              beverage. That&apos;s why we offer a variety of freshly baked
              pastries and snacks made with high-quality ingredients. From flaky
              croissants and decadent muffins to healthy granola bars and savory
              sandwiches, our menu has something to satisfy every craving. Our
              pastries are baked daily to ensure freshness and taste, making
              them the perfect complement to our specialty coffees. Stop by and
              indulge in a delightful pairing of coffee and pastries at Coffee
              House.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeOfferPage;
