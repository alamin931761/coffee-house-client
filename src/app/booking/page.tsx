import Container from "@/components/shared/Container";
import { open_sans, oswald } from "../fonts";
import Image from "next/image";
import image from "../../assets/images/booking.jpg";
import HorizontalLine from "@/components/ui/HorizontalLine";
import PageTitle from "@/components/ui/PageTitle";
import BookingForm from "@/components/ui/Form/BookingForm";
import { Metadata } from "next";

// Metadata for the Booking Page
export const metadata: Metadata = {
  title: "Booking Page - Coffee House",
  description:
    "Reserve your table at Coffee House and experience a haven of relaxation and indulgence. Whether you seek camaraderie with friends, a productive meeting spot, or a quiet escape, our inviting ambiance and premium coffee blends await you. Book now and elevate your coffeehouse experience.",
};

const BookingPage = () => {
  return (
    <div>
      {/* Page title */}
      <PageTitle title="Booking Page" />

      <Container>
        {/* Grid layout for content */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            {/* Section title */}
            <h2
              className={`uppercase ${oswald.className} text-xl sm:text-2xl lg:text-3xl font-bold`}
            >
              reserve your table here
            </h2>

            {/* Horizontal line */}
            <HorizontalLine className="w-[80px] sm:w-[100px] lg:w-[120px] border-b-4 border-whiskey my-5" />

            {/* Description */}
            <p className={`${open_sans.className} text-sm text-silver-chalice`}>
              Step into Coffee House, where every moment is steeped in warmth
              and flavor. Our &apos;Reserve Your Table Here&apos; section
              welcomes you to a haven of relaxation and indulgence. Whether you
              seek camaraderie with friends, a productive meeting spot, or a
              quiet escape, we have the perfect table waiting. Savor our premium
              coffee blends and delectable treats as you unwind in our inviting
              ambiance. Let us tailor your experience, ensuring each visit is a
              memorable journey of taste and tranquility. Your table awaits your
              presence – book now and elevate your coffeehouse experience.
            </p>
          </div>

          <div className="flex justify-center items-center">
            {/* Image */}
            <Image
              src={image}
              height={644}
              width={416}
              alt=""
              className="transition ease-linear duration-500 hover:grayscale"
            />
          </div>
        </div>

        {/* Booking form */}
        <div className="mt-10">
          <BookingForm />
        </div>
      </Container>
    </div>
  );
};

export default BookingPage;
