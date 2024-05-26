import Container from "@/components/shared/Container";
import ContactLocationCard from "@/components/ui/ContactLocationCard";
import PageTitle from "@/components/ui/PageTitle";
import { open_sans, oswald } from "../fonts";
import HorizontalLine from "@/components/ui/HorizontalLine";
import ContactUsForm from "@/components/ui/Form/ContactUsForm";
import { Metadata } from "next";

// Metadata for the Contact Us Page
export const metadata: Metadata = {
  title: "Contact Us - Coffee House",
  description:
    "Connect with Coffee House. Whether you have inquiries, feedback, or just want to share your thoughts, we're here to listen. Fill out the form or visit one of our locations to experience the warmth of our café and the quality of our brews.",
};

const ContactUsPage = () => {
  return (
    <div>
      {/* Page title */}
      <PageTitle title="contact us" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Write Us Section */}
          <div>
            <div>
              {/* Section title */}
              <h2
                className={`uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl ${oswald.className} font-bold`}
              >
                write us
              </h2>

              {/* Horizontal line */}
              <HorizontalLine className="w-[60px] sm:w-[80px] lg:w-[120px] border-b-4 border-whiskey mt-5 mb-10" />
            </div>

            <div className={`${open_sans.className} text-sm mb-10`}>
              {/* Description */}
              <p>
                We&apos;d love to hear from you! Whether you have questions, or
                feedback, or just want to share your thoughts, please don&apos;t
                hesitate to reach out. Our team at Coffee House is here to help
                and ensure you have the best experience possible.
              </p>
              <p>
                You can fill out the form below, and we&apos;ll get back to you
                as soon as possible. Your input is invaluable to us, and we look
                forward to connecting with you.
              </p>
              <p>Thank you for being a part of the Coffee House community!</p>
            </div>

            {/* Contact Us form */}
            <ContactUsForm />
          </div>

          {/* Locations Section */}
          <div>
            <div>
              {/* Section title */}
              <h2
                className={`uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl ${oswald.className} font-bold`}
              >
                locations
              </h2>

              {/* Horizontal line */}
              <HorizontalLine className="w-[70px] sm:w-[90px] lg:w-[120px] border-b-4 border-whiskey my-5" />
            </div>

            {/* Description */}
            <p className={`${open_sans.className} text-sm mb-10`}>
              Discover Your Nearest Coffee House! We have multiple locations to
              serve you, each offering a cozy atmosphere, friendly baristas, and
              our signature brews. Whether you need a quiet spot to work, a
              casual place to catch up with friends, or just a great cup of
              coffee, you&apos;ll find it here. Our welcoming spaces and skilled
              baristas ensure every visit is enjoyable. Visit us today to
              experience the warm environment that sets us apart. Find your
              nearest location and join our coffee-loving community!
            </p>

            {/* Grid layout for contact location cards */}
            <div className="grid grid-cols-2">
              <div>
                <ContactLocationCard
                  address="Dhaka, Bangladesh"
                  phone="+8801741931761"
                  email="alamin931761@gmail.com"
                />

                <ContactLocationCard
                  address="Chittagong, Bangladesh"
                  phone="+8801741931761"
                  email="alamin931761@gmail.com"
                />
              </div>

              <div>
                <ContactLocationCard
                  address="Sylhet, Bangladesh"
                  phone="+8801741931761"
                  email="alamin931761@gmail.com"
                />

                <ContactLocationCard
                  address="Sylhet, Bangladesh"
                  phone="+8801741931761"
                  email="alamin931761@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsPage;
