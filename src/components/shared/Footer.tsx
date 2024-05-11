import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import coffeaImage from "../../assets/images/coffea.png";
import HorizontalLine from "../HorizontalLine";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* opening hours */}
        <div className="uppercase border border-red-500">
          <h6 className="text-xl font-bold">Opening Hours</h6>
          <div className="text-sm mt-10 flex flex-col gap-y-3">
            <p>
              Monday <HorizontalLine className="w-28 border-b-2" /> Closed
            </p>

            <p>
              Tuesday <HorizontalLine className="w-[82px] border-b-2" /> 9:00 -
              22:00
            </p>

            <p>
              Wednesday <HorizontalLine className="w-[59px] border-b-2" /> 9:00
              - 22:00
            </p>

            <p>
              Thursday <HorizontalLine className="w-[71px] border-b-2" /> 9:00 -
              22:00
            </p>

            <p>
              Friday * <HorizontalLine className="w-[97px] border-b-2" /> 9:00 -
              1:00
            </p>
            <p>
              Saturday * <HorizontalLine className="w-[70px] border-b-2" />
              12:00 - 1:00
            </p>

            <p>
              Sunday * <HorizontalLine className="w-[80px] border-b-2" /> 9:00 -
              12:00
            </p>
          </div>
        </div>

        {/* contact us */}
        <div className="border border-blue-500">
          <h6 className="text-xl font-bold uppercase">Contact us</h6>
          <div className="text-sm mt-10">
            <p>+8801741931761</p>
            <p className="my-3">alamin931761@gmail.com</p>
            <p>Gazipur, Bangladesh</p>
          </div>
        </div>

        {/* image */}
        <div className="border border-indigo-700 flex lg:justify-center">
          <Image src={coffeaImage} width={200} height={200} alt="coffea" />
        </div>

        {/* information */}
        <div className="border border-green-500">
          <h6 className="text-xl font-bold uppercase">Information</h6>
          <div className="text-sm mt-10 flex flex-col gap-y-3">
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Reservation</Link>
          </div>
        </div>

        {/* other locations */}
        <div className="border border-purple-500">
          <h6 className="text-xl font-bold uppercase">Other locations</h6>
          <div className="text-sm mt-10">
            <div>
              <p className="font-bold uppercase">Coffee House</p>
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="my-3">
              <p className="font-bold uppercase">Coffee House</p>
              <p>Chittagong, Bangladesh</p>
            </div>

            <div>
              <p className="font-bold uppercase">Coffee House</p>
              <p>Sylhet, Bangladesh</p>
            </div>

            <div className="mt-3">
              <p className="font-bold uppercase">Coffee House</p>
              <p>Khulna, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm flex flex-col items-center lg:flex-row lg:justify-between gap-y-2 py-5 border-t-2 mt-3">
        <p>&copy; Coffee House</p>

        {/* social media */}
        <div className="text-base flex gap-x-5">
          {/* instagram */}
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram />
          </a>

          {/* twitter */}
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter />
          </a>

          {/* facebook */}
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebookF />
          </a>

          {/* facebook */}
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn />
          </a>

          {/* youtube */}
          <a href="https://www.youtube.com" target="_blank">
            <FaYoutube />
          </a>
        </div>

        <p>{new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
