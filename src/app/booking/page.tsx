import Container from "@/components/shared/Container";
import { oswald } from "../fonts";
import Image from "next/image";
import image from "../../assets/images/reservation-2.jpg";
import HorizontalLine from "@/components/HorizontalLine";
import BookingForm from "@/components/ui/BookingForm";
import PageTitle from "@/components/ui/PageTitle";

const BookingPage = () => {
  return (
    <div className="bg-[#EAE7DE]">
      <PageTitle title="Booking Page" />

      <Container>
        <div className="grid lg:grid-cols-2">
          <div>
            <h2 className={`uppercase ${oswald} text-3xl font-bold`}>
              reserve your table here
            </h2>
            <HorizontalLine className="w-[120px] border-b-4 mb-[6px]" />

            <p>
              Welcome to Coffee House, where every cup of coffee tells a story.
              Whether you&apos;re planning a cozy date, a catch-up with friends,
              or a business meeting, securing your perfect spot at our café is
              just a few clicks away.
            </p>
          </div>

          <div className="-rotate-90 border border-red-500 flex justify-center items-center">
            <Image src={image} height={661} width={485} alt="" />
          </div>
        </div>

        {/* booking form */}
        <BookingForm />
      </Container>
    </div>
  );
};

export default BookingPage;
