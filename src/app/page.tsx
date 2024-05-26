import CoffeeEquipments from "@/components/home/CoffeeEquipments/CoffeeEquipments";
import FavouriteCoffeeFlavours from "@/components/home/FavouriteCoffeeFlavours";
import Gallery from "@/components/home/Gallery";
import OurPlantations from "@/components/home/OurPlantations";
import Carousel from "@/components/home/carousel/Carousel";
import Container from "@/components/shared/Container";
import BlogCard from "@/components/ui/BlogCard";
import BookingForm from "@/components/ui/Form/BookingForm";
import SectionTitle from "@/components/ui/SectionTitle";
import { TBlog } from "@/types";
import { Metadata } from "next";

// Metadata for the Home page
export const metadata: Metadata = {
  title: "Home - Coffee House",
  description:
    "Welcome to Coffee House - Your go-to place for all things coffee!",
};

const HomePage = async () => {
  // Fetch favourite coffee flavours data
  const favouriteCoffeeFlavoursResponse = await fetch(
    "https://coffee-house-server-six.vercel.app/menu?favoriteFlavor=true"
  );
  const favouriteCoffeeFlavoursData =
    await favouriteCoffeeFlavoursResponse.json();

  // Fetch blogs data
  const blogsResponse = await fetch(
    `https://coffee-house-server-six.vercel.app/blogs`
  );
  const blogs = await blogsResponse.json();

  return (
    <div>
      <Carousel />
      {/* COFFEE BUILD YOUR BASE section */}
      <Container>
        <SectionTitle sectionTitle="coffee build your base." />
        <div className="flex justify-center w-full mt-5 mb-20">
          <div className="w-full">
            <BookingForm />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.slice(5, 8).map((blog: TBlog) => (
            <BlogCard
              key={blog._id}
              _id={blog._id}
              title={blog.title}
              author={blog.author}
              category={blog.category}
              imageURL={blog.imageURL}
              description={blog.description}
              createdAt={blog.createdAt}
            />
          ))}
        </div>
      </Container>

      <FavouriteCoffeeFlavours
        favouriteCoffeeFlavoursData={favouriteCoffeeFlavoursData}
      />

      <OurPlantations />
      <CoffeeEquipments />
      <Gallery />

      {/* read our latest blogs section */}
      <div className="bg-fantasy">
        <Container>
          <SectionTitle sectionTitle="read our latest blogs" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.slice(0, 3).map((blog: TBlog) => (
              <BlogCard
                key={blog._id}
                _id={blog._id}
                title={blog.title}
                author={blog.author}
                category={blog.category}
                imageURL={blog.imageURL}
                description={blog.description}
                createdAt={blog.createdAt}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
