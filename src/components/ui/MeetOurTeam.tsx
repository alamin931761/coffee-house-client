import Container from "@/components/shared/Container";
import PageTitle from "@/components/ui/PageTitle";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamCard from "@/components/ui/TeamCard";

const MeetOurTeamPage = () => {
  return (
    <div>
      <PageTitle title="meet our team" />
      <Container>
        <SectionTitle sectionTitle="Meet Our Team/They are ready to treat you" />
        <p>
          At Coffee House, our team of passionate baristas and friendly staff
          are dedicated to making your experience exceptional. Whether
          you&apos;re here to enjoy a quiet morning with a freshly brewed
          coffee, indulge in a delicious pastry, or catch up with friends over a
          latte, our skilled team is ready to treat you with the warmth and
          hospitality that makes Coffee House your favorite spot. Each member of
          our staff is trained not only in the art of crafting perfect beverages
          but also in creating a welcoming atmosphere where you can relax and
          feel at home. Come in and let us make your day a little brighter with
          our outstanding service and love for coffee.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
          <TeamCard
            imageURL="https://i.ibb.co/BnZtL7J/team-img-1.jpg"
            name="John Doe"
            details="John is the visionary behind Coffee House. With over 20 years of experience in the coffee industry, he is passionate about bringing the finest coffee to our community. When he's not brewing the perfect cup, John enjoys exploring new coffee trends and mentoring aspiring baristas."
          />
          <TeamCard
            imageURL="https://i.ibb.co/BnZtL7J/team-img-1.jpg"
            name="John Doe"
            details="John is the visionary behind Coffee House. With over 20 years of experience in the coffee industry, he is passionate about bringing the finest coffee to our community. When he's not brewing the perfect cup, John enjoys exploring new coffee trends and mentoring aspiring baristas."
          />
          <TeamCard
            imageURL="https://i.ibb.co/BnZtL7J/team-img-1.jpg"
            name="John Doe"
            details="John is the visionary behind Coffee House. With over 20 years of experience in the coffee industry, he is passionate about bringing the finest coffee to our community. When he's not brewing the perfect cup, John enjoys exploring new coffee trends and mentoring aspiring baristas."
          />
          <TeamCard
            imageURL="https://i.ibb.co/BnZtL7J/team-img-1.jpg"
            name="John Doe"
            details="John is the visionary behind Coffee House. With over 20 years of experience in the coffee industry, he is passionate about bringing the finest coffee to our community. When he's not brewing the perfect cup, John enjoys exploring new coffee trends and mentoring aspiring baristas."
          />
          <TeamCard
            imageURL="https://i.ibb.co/BnZtL7J/team-img-1.jpg"
            name="John Doe"
            details="John is the visionary behind Coffee House. With over 20 years of experience in the coffee industry, he is passionate about bringing the finest coffee to our community. When he's not brewing the perfect cup, John enjoys exploring new coffee trends and mentoring aspiring baristas."
          />
          <TeamCard
            imageURL="https://i.ibb.co/BnZtL7J/team-img-1.jpg"
            name="John Doe"
            details="John is the visionary behind Coffee House. With over 20 years of experience in the coffee industry, he is passionate about bringing the finest coffee to our community. When he's not brewing the perfect cup, John enjoys exploring new coffee trends and mentoring aspiring baristas."
          />
        </div>
      </Container>
    </div>
  );
};

export default MeetOurTeamPage;
