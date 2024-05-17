import Container from "@/components/shared/Container";
import ContactLocationCard from "@/components/ui/ContactLocationCard";
import ContactUsForm from "@/components/ui/ContactUsForm";
import PageTitle from "@/components/ui/PageTitle";

const ContactUsPage = () => {
  return (
    <div>
      <PageTitle title="contact us" />
      <Container>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* write us */}
          <div>
            <h2>write us</h2>
            <p>
              We&apos;d love to hear from you! Whether you have questions, or
              feedback, or just want to share your thoughts, please don&apos;t
              hesitate to reach out. Our team at Coffee House is here to help
              and ensure you have the best experience possible.
            </p>
            <p>
              You can fill out the form below, and we&apos;ll get back to you as
              soon as possible. Your input is invaluable to us, and we look
              forward to connecting with you.
            </p>
            <p>Thank you for being a part of the Coffee House community!</p>

            {/* form */}
            <ContactUsForm />
          </div>

          {/* locations */}
          <div>
            <h2>locations</h2>
            <p>
              Discover your nearest Coffee House! We have multiple locations to
              serve you, each offering a cozy atmosphere, friendly baristas,
              and, of course, our signature brews. Whether you&apos;re looking
              for a quiet spot to work, a casual place to catch up with friends,
              or just a great cup of coffee, you&apos;ll find it at any of our
              locations.
            </p>

            <div className="grid grid-cols-2">
              <div>
                <ContactLocationCard
                  address="Dhaka, Bangladesh"
                  phone="+8801741931761"
                  email="alamin@gmail.com"
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
