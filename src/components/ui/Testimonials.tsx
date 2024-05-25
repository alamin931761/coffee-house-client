import { merriweather, open_sans, oswald } from "@/app/fonts";
import { TTestimonial } from "@/types";
import HorizontalLine from "./HorizontalLine";
import Image from "next/image";

const Testimonials = ({ testimonials }: { testimonials: TTestimonial[] }) => {
  return (
    <div className="mt-16 lg:mt-24">
      <h2
        className={`uppercase text-4xl ${oswald.className} font-bold text-center`}
      >
        What Our visitors say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {testimonials.map((data: TTestimonial) => (
          <div
            key={data._id}
            className="border-2 border-whiskey border-dotted rounded-sm p-5"
          >
            <h4 className={`${oswald.className} font-bold text-2xl mb-2`}>
              {data.title}
            </h4>
            <p className={`${open_sans.className} text-sm`}>{data.review}</p>
            <HorizontalLine className="w-full border-b-2 border-dotted border-whiskey my-5" />

            <div
              className={`flex justify-between items-center ${merriweather.className}`}
            >
              <div className="flex items-center">
                <Image
                  src={data.imageURL}
                  alt="user"
                  height={30}
                  width={30}
                  className="rounded-full"
                />

                <h6 className="font-bold text-base ms-2">{data.name}</h6>
              </div>

              <p>
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
