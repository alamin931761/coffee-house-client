import Container from "@/components/shared/Container";
import Menu from "@/components/ui/Menu";
import PageTitle from "@/components/ui/PageTitle";
import { TMenuItem } from "@/types";
import { Metadata } from "next";

// Metadata for the Our Menu Page
export const metadata: Metadata = {
  title: "Our Menu - Coffee House",
  description:
    "Explore the delightful menu at Coffee House. From classic favorites to exciting new flavors, we have something for every coffee lover!",
};

const OurMenuPage = async () => {
  // Fetching menu data from the server
  const response = await fetch(
    "https://coffee-house-server-six.vercel.app/menu"
  );
  const menuData = await response.json();

  return (
    <div>
      {/* Page title */}
      <PageTitle title="our menu" />

      <Container>
        {/* Grid layout for menu items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-5">
          {menuData.map((data: TMenuItem) => (
            <Menu
              key={data._id}
              _id={data._id}
              name={data.name}
              description={data.description}
              price={data.price}
              newFlavour={data.newFlavour}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurMenuPage;
