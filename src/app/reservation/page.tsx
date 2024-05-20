import Container from "@/components/shared/Container";
import { oswald } from "../fonts";
import HorizontalLine from "@/components/ui/HorizontalLine";
import ReservationForm from "@/components/ui/ReservationForm";
import Image from "next/image";
import image from "../../assets/images/reservation-2.jpg";
import PageTitle from "@/components/ui/PageTitle";

const ReservationPage = () => {
  return (
    <div>
      <PageTitle title="Reservation" />

      <Container>
        <div>
          <h2 className={`uppercase ${oswald} text-3xl font-bold`}>
            reservation form
          </h2>
          <HorizontalLine className="w-[120px] border-b-4 mb-[6px]" />

          <p>
            Welcome to Coffee House! We&apos;re excited to host you for a
            delightful coffee experience. Please fill out the reservation form
            below to secure your spot. Whether you&apos;re planning a casual
            meet-up with friends, a cozy solo work session, or a special
            gathering, we&apos;ll ensure your visit is nothing short of
            exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mx-5">
          <div className="col-span-2">
            <ReservationForm />
          </div>

          <div className="border border-red-500 flex justify-center">
            <Image src={image} height={661} width={485} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReservationPage;
