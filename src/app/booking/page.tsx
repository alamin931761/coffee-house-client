import Container from "@/components/shared/Container";
import { open_sans, oswald } from "../fonts";
import Image from "next/image";
import image from "../../assets/images/booking.jpg";
import HorizontalLine from "@/components/ui/HorizontalLine";
import PageTitle from "@/components/ui/PageTitle";
import BookingForm from "@/components/ui/BookingForm";
const BookingPage = () => {
  return (
    <div>
      <PageTitle title="Booking Page" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className={`uppercase ${oswald.className} text-3xl font-bold`}>
              reserve your table here
            </h2>
            <HorizontalLine className="w-[120px] border-b-4 border-whiskey my-5" />

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
            <Image src={image} height={644} width={416} alt="" />
          </div>
        </div>

        {/* booking form */}
        <div className="mt-10">
          <BookingForm />
        </div>
      </Container>
    </div>
  );
};

export default BookingPage;
