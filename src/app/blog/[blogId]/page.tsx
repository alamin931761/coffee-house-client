import { merriweather, oswald } from "@/app/fonts";
import Container from "@/components/shared/Container";
import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";

type TParams = {
  blogId: string;
};

const SingleBlogPage = async ({ params }: { params: TParams }) => {
  const response = await fetch(
    `https://coffee-house-server-six.vercel.app/blogs/${params.blogId}`
  );
  const blog = await response.json();

  const formattedDescription = blog?.description
    .split("\n")
    .map((line: string, index: number) => (
      <div key={index}>
        <p>
          {line}
          <br />
        </p>
      </div>
    ));

  return (
    <div>
      <PageTitle title={blog.title} />

      <Container>
        <Image
          src={blog.imageURL}
          height={840}
          width={1300}
          alt=""
          className="h-[70vh]"
        />

        <h3
          className={`${oswald.className} font-bold text-xl sm:text-2xl uppercase hover:text-whiskey transition ease-linear duration-500 mb-2 mt-5 w-fit`}
        >
          {blog.title}
        </h3>

        <p
          className={`${merriweather.className} italic text-sm text-whiskey mb-5`}
        >
          by {blog.author} / {blog.category} /{" "}
          {new Date(blog.createdAt)
            .toLocaleDateString("en-US")
            .split("/")
            .join("-")}
        </p>

        {formattedDescription}
      </Container>
    </div>
  );
};

export default SingleBlogPage;
