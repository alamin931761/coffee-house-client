import { merriweather, open_sans, oswald } from "@/app/fonts";
import Container from "@/components/shared/Container";
import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

type TParams = {
  blogId: string;
};

const SingleBlogPage = async ({ params }: { params: TParams }) => {
  const response = await fetch(`http://localhost:5000/blog/${params.blogId}`);
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

  //   // params.blogId
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
          className={`${oswald.className} font-bold text-2xl uppercase hover:text-[#CAA782] transition ease-linear duration-500 mb-2 mt-5  w-fit`}
        >
          {blog.title}
        </h3>

        <p
          className={`${merriweather.className} italic text-sm text-[#CAA782] mb-5`}
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
