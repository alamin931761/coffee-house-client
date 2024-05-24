import Container from "@/components/shared/Container";
import { open_sans, oswald } from "../fonts";
import HorizontalLine from "@/components/ui/HorizontalLine";
import ReservationForm from "@/components/ui/ReservationForm";
import Image from "next/image";
import PageTitle from "@/components/ui/PageTitle";
import image from "../../assets/images/reservation.jpg";

const ReservationPage = () => {
  return (
    <div>
      <PageTitle title="Reservation" />

      <Container>
        <div>
          <h2 className={`uppercase ${oswald.className} text-3xl font-bold`}>
            reservation form
          </h2>
          <HorizontalLine className="w-[120px] border-b-4 border-[#CAA782] my-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className={`mb-5 ${open_sans.className} text-sm`}>
              Welcome to Coffee House! We&apos;re excited to host you for a
              delightful coffee experience. Please fill out the reservation form
              below to secure your spot. Whether you&apos;re planning a casual
              meet-up with friends, a cozy solo work session, or a special
              gathering, we&apos;ll ensure your visit is nothing short of
              exceptional.
            </p>
            <ReservationForm />
          </div>

          <div className="flex justify-center lg:col-span-1">
            <Image src={image} height={661} width={485} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReservationPage;
