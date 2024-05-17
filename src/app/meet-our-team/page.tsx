import Container from "@/components/shared/Container";
import PageTitle from "@/components/ui/PageTitle";
import TeamCard from "@/components/ui/TeamCard";

const MeetOurTeamPage = () => {
  return (
    <div>
      <PageTitle title="meet our team" />
      <Container>
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
