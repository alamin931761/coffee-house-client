import Image from "next/image";
import { open_sans } from "./fonts";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import image from "../assets/images/404.png";

// Metadata for the Not Found page
export const metadata = {
  title: "Page Not Found - Coffee House",
  description: "Oops! The page you are looking for does not exist.",
};

const NotFoundPage = () => {
  return (
    <div className="h-full">
      <Image src={image} height={840} width={1300} alt="404" />

      {/* Back to Home link */}
      <div className="h-full flex justify-center py-10">
        <Link
          href="/"
          className={`btn btn-outline rounded-none px-10 border-none bg-whiskey uppercase font-extrabold transition ease-linear duration-500 ${open_sans.className}>Back to home`}
        >
          <FaArrowLeft />
          back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
