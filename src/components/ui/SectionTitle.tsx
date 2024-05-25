import { merriweather, oswald } from "@/app/fonts";
import HorizontalLine from "./HorizontalLine";

const SectionTitle = ({ sectionTitle }: { sectionTitle: string }) => {
  return (
    <div className="text-center">
      <h6
        className={`capitalize text-lg text-whiskey ${merriweather.className} italic`}
      >
        what happens here
      </h6>
      <h2 className={`text-4xl uppercase mt-2 ${oswald.className} font-bold`}>
        {sectionTitle}
      </h2>
      <HorizontalLine className="w-28 border-b-2 border-whiskey my-5" />
    </div>
  );
};

export default SectionTitle;
