import Container from "@/components/shared/Container";
import ContactLocationCard from "@/components/ui/ContactLocationCard";
import ContactUsForm from "@/components/ui/ContactUsForm";
import PageTitle from "@/components/ui/PageTitle";
import { open_sans, oswald } from "../fonts";
import HorizontalLine from "@/components/ui/HorizontalLine";

const ContactUsPage = () => {
  return (
    <div>
      <PageTitle title="contact us" />
      <Container>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* write us */}
          <div>
            <div>
              <h2
                className={`uppercase text-4xl ${oswald.className} font-bold`}
              >
                write us
              </h2>
              <HorizontalLine className="w-[120px] border-b-4 border-[#CAA782] my-5" />
            </div>

            <div className={`${open_sans.className} text-sm mb-10`}>
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

            {/* form */}
            <ContactUsForm />
          </div>

          {/* locations */}
          <div>
            <div>
              <h2
                className={`uppercase text-4xl ${oswald.className} font-bold`}
              >
                locations
              </h2>
              <HorizontalLine className="w-[120px] border-b-4 border-[#CAA782] my-5" />
            </div>

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
                  email="Khulna, Bangladesh"
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
