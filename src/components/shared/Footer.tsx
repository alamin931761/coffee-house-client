import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import HorizontalLine from "../ui/HorizontalLine";
import { oswald } from "@/app/fonts";

const Footer = () => {
  return (
    <footer>
      <div
        className={`${oswald.className} text-white bg-[url('https://i.ibb.co/TR5Lq9B/footer-background-image.jpg')] bg-no-repeat bg-cover bg-top bg-fixed`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 px-16 py-20 bg-black bg-opacity-80">
          {/* opening hours */}
          <div className="uppercase w-[220px]">
            <h6 className="text-xl font-bold">Opening Hours</h6>
            <div className="text-sm mt-5 flex flex-col gap-y-3">
              <p className="flex text-nowrap">
                Monday{" "}
                <HorizontalLine className="w-full border-b-2 border-[#acacac] mx-1 mb-1" />{" "}
                <span className="text-[#C7A17A]">Closed</span>
              </p>

              <p className="flex text-nowrap">
                Tuesday{" "}
                <HorizontalLine className="w-full border-b-2 border-[#acacac] mx-1 mb-1" />{" "}
                <span className="text-[#acacac]">9:00 - 22:00</span>
              </p>

              <p className="flex text-nowrap">
                Wednesday{" "}
                <HorizontalLine className="w-full border-b-2 border-[#acacac] mx-1 mb-1" />{" "}
                <span className="text-[#acacac]">9:00 - 22:00</span>
              </p>

              <p className="flex text-nowrap">
                Thursday{" "}
                <HorizontalLine className="w-full border-b-2 border-[#acacac] mx-1 mb-1" />{" "}
                <span className="text-[#acacac]">9:00 - 22:00</span>
              </p>

              <p className="flex text-nowrap">
                Friday *{" "}
                <HorizontalLine className="w-full border-b-2 border-[#acacac] mx-1 mb-1" />{" "}
                <span className="text-[#acacac]">9:00 - 1:00</span>
              </p>
              <p className="flex text-nowrap">
                Saturday *{" "}
                <HorizontalLine className="w-full border-b-2 border-[#acacac] mx-1 mb-1" />{" "}
                <span className="text-[#acacac]">12:00 - 1:00</span>
              </p>

              <p className="flex text-nowrap">
                Sunday *{" "}
                <HorizontalLine className="w-full border-b-2 border-[#acacac] mx-1 mb-1" />{" "}
                <span className="text-[#acacac]">9:00 - 12:00</span>
              </p>
            </div>
          </div>

          {/* locations */}
          <div className="lg:flex flex-col items-center">
            <div>
              <h6 className="text-xl font-bold uppercase">locations</h6>
              <div className="text-sm mt-5">
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

          {/* Favourite picks */}
          <div className="lg:flex flex-col items-center">
            <div>
              <h6 className="text-xl font-bold uppercase">Favourite picks</h6>
              <div className="text-sm mt-5 capitalize">
                <p className="my-3 text-[#acacac]">esspreso</p>
                <p className="text-[#acacac]">cafe latte</p>
                <p className="my-3 text-[#acacac]">cafe americano</p>
                <p className="my-3 text-[#acacac]">white chocolate mocha</p>
                <p className="my-3 text-[#acacac]">Honey almond latte</p>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="lg:flex flex-col items-center">
            <div>
              <h6 className="text-xl font-bold uppercase">Important Links</h6>
              <div className="text-sm mt-5 flex flex-col gap-y-3 text-[#acacac] uppercase">
                <Link
                  className="hover:text-[#CAA782] transition ease-linear duration-500"
                  href="/about-us"
                >
                  About Us
                </Link>
                <Link
                  className="hover:text-[#CAA782] transition ease-linear duration-500"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
                <Link
                  className="hover:text-[#CAA782] transition ease-linear duration-500"
                  href="/reservation"
                >
                  Reservation
                </Link>
                <Link
                  className="hover:text-[#CAA782] transition ease-linear duration-500"
                  href="/what-we-offer"
                >
                  What we offer
                </Link>
              </div>
            </div>
          </div>

          {/* contact us */}
          <div className="lg:flex flex-col items-center">
            <div>
              <h6 className="text-xl font-bold uppercase">Contact us</h6>
              <div className="text-sm mt-5 text-[#acacac]">
                <p>
                  Phone:{" "}
                  <a
                    className="hover:text-[#CAA782] transition ease-linear duration-500"
                    href="tel:+8801741931761"
                  >
                    +8801741931761
                  </a>
                </p>

                <p className="my-3 ">
                  Email:{" "}
                  <a
                    className="hover:text-[#CAA782] transition ease-linear duration-500"
                    href="mailto:alamin931761@gmail.com"
                  >
                    alamin931761@gmail.com
                  </a>
                </p>
                <p>Address: Gazipur, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm flex flex-col items-center lg:flex-row lg:justify-between gap-5 py-5 text-white bg-black px-16">
        <p className="text-[#acacac]">&copy; Coffee House</p>

        {/* social media */}
        <div className="text-base flex gap-x-5">
          {/* instagram */}
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram className="hover:text-[#CAA782] transition ease-linear duration-500" />
          </a>

          {/* twitter */}
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter className="hover:text-[#CAA782] transition ease-linear duration-500" />
          </a>

          {/* facebook */}
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebookF className="hover:text-[#CAA782] transition ease-linear duration-500" />
          </a>

          {/* facebook */}
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn className="hover:text-[#CAA782] transition ease-linear duration-500" />
          </a>

          {/* youtube */}
          <a href="https://www.youtube.com" target="_blank">
            <FaYoutube className="hover:text-[#CAA782] transition ease-linear duration-500" />
          </a>
        </div>

        <p className="text-[#acacac]">
          {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
