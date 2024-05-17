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
import { oswald } from "@/app/fonts";

const Footer = () => {
  return (
    <footer>
      <div
        className={`grid grid-cols-1 lg:grid-cols-5 bg-black ${oswald.className} bg-opacity-50 text-white`}
      >
        {/* opening hours */}
        <div className="uppercase border border-red-500 ">
          <h6 className="text-xl font-bold">Opening Hours</h6>
          <div className="text-sm mt-10 flex flex-col gap-y-3">
            <p>
              Monday <HorizontalLine className="w-28 border-b-2" />{" "}
              <span className="text-[#C7A17A]">Closed</span>
            </p>

            <p>
              Tuesday <HorizontalLine className="w-[82px] border-b-2" />{" "}
              <span className="text-[#acacac]">9:00 - 22:00</span>
            </p>

            <p>
              Wednesday <HorizontalLine className="w-[59px] border-b-2" />{" "}
              <span className="text-[#acacac]">9:00 - 22:00</span>
            </p>

            <p>
              Thursday <HorizontalLine className="w-[71px] border-b-2" />{" "}
              <span className="text-[#acacac]">9:00 - 22:00</span>
            </p>

            <p>
              Friday * <HorizontalLine className="w-[97px] border-b-2" />{" "}
              <span className="text-[#acacac]">9:00 - 1:00</span>
            </p>
            <p>
              Saturday * <HorizontalLine className="w-[70px] border-b-2" />{" "}
              <span className="text-[#acacac]">12:00 - 1:00</span>
            </p>

            <p>
              Sunday * <HorizontalLine className="w-[80px] border-b-2" />{" "}
              <span className="text-[#acacac]">9:00 - 12:00</span>
            </p>
          </div>
        </div>

        {/* contact us */}
        <div className="border border-blue-500">
          <h6 className="text-xl font-bold uppercase">Contact us</h6>
          <div className="text-sm mt-10">
            <p className="text-[#C7A17A]">+8801741931761</p>
            <p className="my-3 text-[#acacac]">alamin931761@gmail.com</p>
            <p className="text-[#acacac]">Gazipur, Bangladesh</p>
          </div>
        </div>

        {/* image */}
        <div className="border border-indigo-700 flex lg:justify-center">
          <Image src={coffeaImage} width={200} height={200} alt="coffea" />
        </div>

        {/* information */}
        <div className="border border-green-500">
          <h6 className="text-xl font-bold uppercase">Information</h6>
          <div className="text-sm mt-10 flex flex-col gap-y-3 text-[#acacac]">
            <Link href="/about-us">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/reservation">Reservation</Link>
            <Link href="/meet-our-team">Meet Our Team</Link>
            <Link href="/what-we-offer">What We Offer</Link>
          </div>
        </div>

        {/* other locations */}
        <div className="border border-purple-500">
          <h6 className="text-xl font-bold uppercase">Other locations</h6>
          <div className="text-sm mt-10">
            <div>
              <p className="font-bold uppercase">Coffee House</p>
              <p className="text-[#acacac]">Dhaka, Bangladesh</p>
            </div>

            <div className="my-3">
              <p className="font-bold uppercase">Coffee House</p>
              <p className="text-[#acacac]">Chittagong, Bangladesh</p>
            </div>

            <div>
              <p className="font-bold uppercase">Coffee House</p>
              <p className="text-[#acacac]">Sylhet, Bangladesh</p>
            </div>

            <div className="mt-3">
              <p className="font-bold uppercase">Coffee House</p>
              <p className="text-[#acacac]">Khulna, Bangladesh</p>
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
