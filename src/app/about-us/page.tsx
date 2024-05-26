import WhyPeopleChooseUs from "@/components/home/WhyPeopleChooseUs/WhyPeopleChooseUs";
import Container from "@/components/shared/Container";
import PageTitle from "@/components/ui/PageTitle";
import Testimonials from "@/components/ui/Testimonials";
import VisitOurRestaurant from "@/components/ui/VisitOurRestaurant";
import { Metadata } from "next";

// Define metadata for the page
export const metadata: Metadata = {
  title: "About Us - Coffee House",
  description:
    "Learn more about Coffee House - why people choose us, our testimonials, and how to visit our restaurant.",
};

const page = async () => {
  // Fetch testimonials data
  const testimonialResponse = await fetch(
    "https://coffee-house-server-six.vercel.app/testimonials"
  );
  const testimonials = await testimonialResponse.json();

  return (
    <div>
      <PageTitle title="about us" />

      <Container>
        <VisitOurRestaurant />

        <WhyPeopleChooseUs />

        <Testimonials testimonials={testimonials} />
      </Container>
    </div>
  );
};

export default page;
