import { PiChefHatThin } from "react-icons/pi";
import { CiCoffeeBean } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import WhyPeopleChooseUsCard from "./WhyPeopleChooseUsCard";
import { oswald } from "@/app/fonts";
import HorizontalLine from "@/components/ui/HorizontalLine";

const WhyPeopleChooseUs = () => {
  return (
    <div className="lg:mt-24 mt-10">
      <div className="flex flex-col items-center">
        {/* Title */}
        <h2
          className={`${oswald.className} font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center capitalize`}
        >
          why people choose us
        </h2>

        {/* Horizontal line */}
        <HorizontalLine className="w-28 border-b-2 border-whiskey mt-5 mb-10" />
      </div>

      {/* Grid layout for displaying reasons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Card 1: Menu for every taste */}
        <WhyPeopleChooseUsCard
          icon={<PiChefHatThin />}
          title="Menu for every taste"
          description="At Coffee House, we believe that everyone deserves a perfect cup and a delightful bite. Our diverse menu caters to every palate, featuring a range of beverages from classic coffees to innovative blends, along with a variety of delicious pastries, sandwiches, and healthy options. Whether you crave something sweet, savory, or somewhere in between, we have something to satisfy your taste buds."
        />

        {/* Card 2: Always fresh ingredients */}
        <WhyPeopleChooseUsCard
          icon={<CiCoffeeBean />}
          title="Always fresh ingredients"
          description="Quality is at the heart of everything we do at Coffee House. We are committed to using only the freshest, highest-quality ingredients in all our offerings. From locally-sourced produce to sustainably-harvested beans, every ingredient is carefully selected to ensure our food and drinks are not only delicious but also nutritious. Experience the difference that fresh ingredients make in every sip and every bite."
        />

        {/* Card 3: Experienced chefs */}
        <WhyPeopleChooseUsCard
          icon={<MdOutlineRestaurantMenu />}
          title="Experienced chefs"
          description="Our team of experienced chefs brings passion and expertise to the table, crafting each dish with creativity and care. With years of culinary experience and a dedication to excellence, our chefs transform simple ingredients into extraordinary meals. Their skill and artistry ensure that every visit to Coffee House is a memorable culinary experience, delighting your senses with every taste."
        />
      </div>
    </div>
  );
};

export default WhyPeopleChooseUs;
