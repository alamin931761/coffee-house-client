import { merriweather, oswald } from "@/app/fonts";
import HorizontalLine from "./HorizontalLine";

const SectionTitle = ({ sectionTitle }: { sectionTitle: string }) => {
  return (
    <div className="text-center">
      {/* Subtitle */}
      <h6
        className={`capitalize text-lg text-whiskey ${merriweather.className} italic`}
      >
        what happens here
      </h6>

      {/* Main Title */}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl uppercase mt-2 ${oswald.className} font-bold`}
      >
        {sectionTitle}
      </h2>

      {/* Horizontal Line */}
      <HorizontalLine className="w-28 border-b-2 border-whiskey mt-5 mb-10" />
    </div>
  );
};

export default SectionTitle;
