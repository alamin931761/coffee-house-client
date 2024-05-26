import { merriweather, open_sans, oswald } from "@/app/fonts";
import { TTestimonial } from "@/types";
import HorizontalLine from "./HorizontalLine";
import Image from "next/image";

const Testimonials = ({ testimonials }: { testimonials: TTestimonial[] }) => {
  return (
    <div className="mt-16 lg:mt-24">
      <div className="flex flex-col items-center">
        {/* Section title */}
        <h2
          className={`uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl ${oswald.className} font-bold text-center`}
        >
          What Our visitors say
        </h2>

        {/* Horizontal line */}
        <HorizontalLine className="w-28 border-b-2 border-whiskey mt-5 mb-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {/* Map through testimonials array */}
        {testimonials.map((data: TTestimonial) => (
          <div
            key={data._id}
            className="border-2 border-whiskey border-dotted rounded-sm p-5"
          >
            {/* Testimonial title */}
            <h4
              className={`${oswald.className} font-bold text-base sm:text-2xl mb-2`}
            >
              {data.title}
            </h4>

            {/* Testimonial review */}
            <p className={`${open_sans.className} text-sm`}>{data.review}</p>

            {/* Horizontal line */}
            <HorizontalLine className="w-full border-b-2 border-dotted border-whiskey my-5" />

            {/* Testimonial user information */}
            <div
              className={`flex justify-between items-center ${merriweather.className}`}
            >
              <div className="flex items-center">
                {/* User profile picture */}
                <Image
                  src={data.imageURL}
                  alt="user"
                  height={30}
                  width={30}
                  className="rounded-full"
                />

                {/* User name */}
                <h6 className="font-bold text-sm sm:text-base ms-2">
                  {data.name}
                </h6>
              </div>

              {/* Testimonial creation date */}
              <p className="text-sm sm:text-base">
                {new Date(data.createdAt)
                  .toLocaleDateString("en-US")
                  .split("/")
                  .join("-")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
