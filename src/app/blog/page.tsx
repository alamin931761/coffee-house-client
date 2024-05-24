import PageTitle from "@/components/ui/PageTitle";
import Container from "@/components/shared/Container";
import BlogCard from "@/components/ui/BlogCard";
import { TBlog } from "@/types";

const BlogPage = async () => {
  const response = await fetch(`http://localhost:5000/blog`);
  const blogs = await response.json();

  return (
    <div>
      <PageTitle title="blog" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
