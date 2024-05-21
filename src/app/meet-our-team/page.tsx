import Container from "@/components/shared/Container";
import PageTitle from "@/components/ui/PageTitle";
import TeamCard from "@/components/ui/TeamCard";
import { TTeam } from "@/types";

const MeetOurTeamPage = async () => {
  const response = await fetch("http://localhost:5000/team");
  const teamData = await response.json();

  return (
    <div>
      <PageTitle title="meet our team" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-20">
          {teamData.map((data: TTeam) => (
            <TeamCard
              key={data._id}
              _id={data._id}
              imageURL={data.imageURL}
              name={data.name}
              position={data.position}
              description={data.description}
              facebookURL={data.facebookURL}
              twitterURL={data.twitterURL}
              instagramURL={data.instagramURL}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MeetOurTeamPage;
