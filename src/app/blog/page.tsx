import PageTitle from "@/components/ui/PageTitle";
import Container from "@/components/shared/Container";
import BlogCard from "@/components/ui/BlogCard";
import { TBlog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Coffee House",
  description:
    "Explore the latest blogs from Coffee House and discover articles that celebrate the joy of coffee, community, and creativity.",
};

const BlogPage = async () => {
  // Fetching team data from the server
  const response = await fetch(
    `https://coffee-house-server-six.vercel.app/blogs`
  );
  const blogs = await response.json();

  return (
    <div>
      {/* Page title */}
      <PageTitle title="blog" />
      <Container>
        {/* Grid layout for team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Mapping through blogs data and rendering BlogCard component for each blog */}
          {blogs.map((blog: TBlog) => (
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
  );
};

export default BlogPage;
