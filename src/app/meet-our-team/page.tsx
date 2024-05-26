import Container from "@/components/shared/Container";
import PageTitle from "@/components/ui/PageTitle";
import TeamCard from "@/components/ui/TeamCard";
import { TTeam } from "@/types";
import { Metadata } from "next";

// Metadata for the Meet Our Team Page
export const metadata: Metadata = {
  title: "Meet Our Team - Coffee House",
  description:
    "Get to know the talented individuals behind the scenes at Coffee House. Our dedicated team brings passion, expertise, and a love for coffee to every cup we serve.",
};

const MeetOurTeamPage = async () => {
  // Fetching team data from the server
  const response = await fetch(
    "https://coffee-house-server-six.vercel.app/team"
  );
  const teamData = await response.json();

  return (
    <div>
      {/* Page title */}
      <PageTitle title="meet our team" />
      <Container>
        {/* Grid layout for team members */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-20">
          {/* Mapping over team data to render TeamCard components */}
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
