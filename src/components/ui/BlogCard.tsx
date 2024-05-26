import { merriweather, open_sans, oswald } from "@/app/fonts";
import { TBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({
  _id,
  title,
  author,
  category,
  imageURL,
  description,
  createdAt,
}: TBlog) => {
  return (
    <div>
      {/* Blog image */}
      <Image
        src={imageURL}
        alt="blog image"
        width={1300}
        height={840}
        className="transition ease-linear duration-500 hover:grayscale"
      />

      <div className="flex flex-col mt-2">
        {/* Blog title */}
        <h3
          className={`${oswald.className} font-bold text-lg sm:text-2xl uppercase hover:text-whiskey transition ease-linear duration-500 mb-2 w-fit`}
        >
          {title}
        </h3>

        {/* author, category and date */}
        <p
          className={`${merriweather.className} italic text-sm text-whiskey mb-5`}
        >
          by {author} / {category} /{" "}
          {new Date(createdAt).toLocaleDateString("en-US").split("/").join("-")}
        </p>

        {/* Blog description */}
        <p>
          {description.slice(0, 300)}... {/* Read more link */}
          <Link
            href={`blog/${_id}`}
            className={`lowercase text-whiskey hover:text-black transition ease-linear duration-500 font-bold ${open_sans.className} text-xs mt-3`}
          >
            read more <FaArrowRightLong className="inline" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
