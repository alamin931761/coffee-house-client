import WhyPeopleChooseUs from "@/components/home/WhyPeopleChooseUs/WhyPeopleChooseUs";
import Container from "@/components/shared/Container";
import PageTitle from "@/components/ui/PageTitle";
import Testimonials from "@/components/ui/Testimonials";
import VisitOurRestaurant from "@/components/ui/VisitOurRestaurant";

const page = async () => {
  const testimonialResponse = await fetch("http://localhost:5000/testimonial");
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
