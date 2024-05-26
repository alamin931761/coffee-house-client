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
      {/* Footer background */}
      <div
        className={`${oswald.className} text-white bg-[url('https://i.ibb.co/TR5Lq9B/footer-background-image.jpg')] bg-no-repeat bg-cover bg-top bg-fixed`}
      >
        {/* Grid layout for footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 px-16 py-20 bg-black bg-opacity-80">
          {/* Opening hours section */}
          <div className="uppercase w-[220px]">
            {/* title */}
            <h6 className="text-xl font-bold">Opening Hours</h6>

            {/* Monday */}
            <div className="text-sm mt-5 flex flex-col gap-y-3">
              <p className="flex text-nowrap">
                Monday{" "}
                <HorizontalLine className="w-full border-b-2 border-silver-chalice mx-1 mb-1" />{" "}
                <span className="text-whiskey">Closed</span>
              </p>

              {/* Tuesday */}
              <p className="flex text-nowrap">
                Tuesday{" "}
                <HorizontalLine className="w-full border-b-2 border-silver-chalice mx-1 mb-1" />{" "}
                <span className="text-silver-chalice">9:00 - 22:00</span>
              </p>

              {/* Wednesday */}
              <p className="flex text-nowrap">
                Wednesday{" "}
                <HorizontalLine className="w-full border-b-2 border-silver-chalice mx-1 mb-1" />{" "}
                <span className="text-silver-chalice">9:00 - 22:00</span>
              </p>

              {/* Thursday */}
              <p className="flex text-nowrap">
                Thursday{" "}
                <HorizontalLine className="w-full border-b-2 border-silver-chalice mx-1 mb-1" />{" "}
                <span className="text-silver-chalice">9:00 - 22:00</span>
              </p>

              {/* Friday */}
              <p className="flex text-nowrap">
                Friday{" "}
                <HorizontalLine className="w-full border-b-2 border-silver-chalice mx-1 mb-1" />{" "}
                <span className="text-silver-chalice">9:00 - 22:00</span>
              </p>

              {/* Saturday */}
              <p className="flex text-nowrap">
                Saturday{" "}
                <HorizontalLine className="w-full border-b-2 border-silver-chalice mx-1 mb-1" />{" "}
                <span className="text-silver-chalice">9:00 - 22:00</span>
              </p>

              {/* Sunday  */}
              <p className="flex text-nowrap">
                Sunday{" "}
                <HorizontalLine className="w-full border-b-2 border-silver-chalice mx-1 mb-1" />{" "}
                <span className="text-silver-chalice">9:00 - 22:00</span>
              </p>
            </div>
          </div>

          {/* Locations section */}
          <div className="lg:flex flex-col items-center">
            <div>
              {/* title */}
              <h6 className="text-xl font-bold uppercase">locations</h6>

              <div className="text-sm mt-5">
                {/* location - 1 */}
                <div>
                  <p className="font-bold uppercase">Coffee House</p>
                  <p className="text-silver-chalice">Dhaka, Bangladesh</p>
                </div>

                {/* location - 2 */}
                <div className="my-3">
                  <p className="font-bold uppercase">Coffee House</p>
                  <p className="text-silver-chalice">Chittagong, Bangladesh</p>
                </div>

                {/* location - 3 */}
                <div>
                  <p className="font-bold uppercase">Coffee House</p>
                  <p className="text-silver-chalice">Sylhet, Bangladesh</p>
                </div>

                {/* location - 4 */}
                <div className="mt-3">
                  <p className="font-bold uppercase">Coffee House</p>
                  <p className="text-silver-chalice">Khulna, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Favourite picks section */}
          <div className="lg:flex flex-col items-center">
            <div>
              {/* title */}
              <h6 className="text-xl font-bold uppercase">Favourite picks</h6>

              {/* Favourite picks */}
              <div className="text-sm mt-5 capitalize">
                <p className="my-3 text-silver-chalice">esspreso</p>

                <p className="text-silver-chalice">cafe latte</p>

                <p className="my-3 text-silver-chalice">cafe americano</p>

                <p className="my-3 text-silver-chalice">
                  white chocolate mocha
                </p>

                <p className="my-3 text-silver-chalice">Honey almond latte</p>
              </div>
            </div>
          </div>

          {/* Important Links section */}
          <div className="lg:flex flex-col items-center">
            <div>
              {/* title */}
              <h6 className="text-xl font-bold uppercase">Important Links</h6>
              <div className="text-sm mt-5 flex flex-col gap-y-3 text-silver-chalice uppercase">
                {/* about us */}
                <Link
                  className="hover:text-whiskey transition ease-linear duration-500"
                  href="/about-us"
                >
                  About Us
                </Link>

                {/* contact us */}
                <Link
                  className="hover:text-whiskey transition ease-linear duration-500"
                  href="/contact-us"
                >
                  Contact Us
                </Link>

                {/* reservation */}
                <Link
                  className="hover:text-whiskey transition ease-linear duration-500"
                  href="/reservation"
                >
                  Reservation
                </Link>

                {/* What we offer */}
                <Link
                  className="hover:text-whiskey transition ease-linear duration-500"
                  href="/what-we-offer"
                >
                  What we offer
                </Link>
              </div>
            </div>
          </div>

          {/* Contact us section */}
          <div className="lg:flex flex-col items-center">
            <div>
              {/* title */}
              <h6 className="text-xl font-bold uppercase">Contact us</h6>
              <div className="text-sm mt-5 text-silver-chalice">
                {/* phone */}
                <p>
                  Phone:{" "}
                  <a
                    className="hover:text-whiskey transition ease-linear duration-500"
                    href="tel:+8801741931761"
                  >
                    +8801741931761
                  </a>
                </p>

                {/* email */}
                <p className="my-3 ">
                  Email:{" "}
                  <a
                    className="hover:text-whiskey transition ease-linear duration-500"
                    href="mailto:alamin931761@gmail.com"
                  >
                    alamin931761@gmail.com
                  </a>
                </p>

                {/* address */}
                <p>Address: Gazipur, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="text-sm flex flex-col items-center lg:flex-row lg:justify-between gap-5 py-5 text-white bg-black px-16">
        <p className="text-silver-chalice">&copy; Coffee House</p>

        {/* Social media links */}
        <div className="text-base flex gap-x-5">
          {/* instagram */}
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram className="hover:text-whiskey transition ease-linear duration-500" />
          </a>

          {/* twitter */}
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter className="hover:text-whiskey transition ease-linear duration-500" />
          </a>

          {/* facebook */}
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebookF className="hover:text-whiskey transition ease-linear duration-500" />
          </a>

          {/* linkedin */}
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn className="hover:text-whiskey transition ease-linear duration-500" />
          </a>

          {/* youtube */}
          <a href="https://www.youtube.com" target="_blank">
            <FaYoutube className="hover:text-whiskey transition ease-linear duration-500" />
          </a>
        </div>

        {/* Copyright year */}
        <p className="text-silver-chalice">
          {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
