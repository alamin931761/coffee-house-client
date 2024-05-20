import Container from "@/components/shared/Container";
import Menu from "@/components/ui/Menu";
import PageTitle from "@/components/ui/PageTitle";
import { TMenuItem } from "@/types";

const OurMenuPage = async () => {
  const response = await fetch("http://localhost:5000/menu");
  const menuData = await response.json();

  return (
    <div>
      <PageTitle title="our menu" />
      <Container>
        {/* Our Coffee Flavours */}
        <div>
          <h2>Our Coffee Flavours</h2>
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
        </div>
      </Container>
    </div>
  );
};

export default OurMenuPage;
