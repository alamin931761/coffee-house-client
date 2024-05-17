import { oswald } from "@/app/fonts";
import Link from "next/link";
import { IoReorderTwoOutline } from "react-icons/io5";

const Navbar = () => {
  const menuItems = (
    <>
      <Link
        className="lg:py-5 transition ease-linear duration-500 hover:text-[#CAA782]"
        href="/"
      >
        Home
      </Link>
      <Link
        className="lg:py-5 transition ease-linear duration-500 hover:text-[#CAA782]"
        href="/"
      >
        Our Menu
      </Link>

      <div className="dropdown dropdown-hover lg:py-5 cursor-pointer">
        <div
          className="transition ease-linear duration-500 hover:text-[#CAA782] outline-none"
          tabIndex={0}
        >
          <Link
            className="transition ease-linear duration-500 hover:text-[#CAA782]"
            href="/reservation"
          >
            Reservation
          </Link>
        </div>
        <ul
          tabIndex={0}
          className="lg:dropdown-content menu p-0 mx-2 lg:mx-0 lg:shadow-lg lg:bg-white lg:w-[170px] top-[62px] lg:border-t-4 lg:border-[#CAA782]"
          style={{
            transitionDuration: "500ms",
            transitionTimingFunction: "linear",
          }}
        >
          <Link
            className="mx-2 mt-2 transition ease-linear duration-500 hover:text-[#CAA782]"
            href="/booking"
          >
            Booking Page
          </Link>
          <Link
            className="m-2 transition ease-linear duration-500 hover:text-[#CAA782]"
            href="/reservation"
          >
            Reservation
          </Link>
        </ul>
      </div>

      <Link
        className="lg:py-5 transition ease-linear duration-500 hover:text-[#CAA782]"
        href="/"
      >
        About Us
      </Link>

      <Link
        className="lg:py-5 transition ease-linear duration-500 hover:text-[#CAA782]"
        href="/contact-us"
      >
        Contact us
      </Link>

      <Link
        className="lg:py-5 transition ease-linear duration-500 hover:text-[#CAA782]"
        href="/"
      >
        Blog
      </Link>

      <Link
        className="lg:py-5 transition ease-linear duration-500 hover:text-[#CAA782]"
        href="/meet-our-team"
      >
        Meet Our Team
      </Link>

      <Link
        className="lg:py-5 transition ease-linear duration-500 hover:text-[#CAA782]"
        href="/what-we-offer"
      >
        What We Offer
      </Link>

      <Link
        className="lg:py-5 pr-5 transition ease-linear duration-500 hover:text-[#CAA782]"
        href="/our-process"
      >
        Our Process
      </Link>
    </>
  );

  return (
    <div
      className={`p-0 navbar fixed bg-white uppercase z-10 shadow-lg ${oswald.className} font-bold`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            className="lg:hidden cursor-pointer px-2 text-5xl transition ease-linear duration-500 hover:text-[#CAA782] outline-none"
          >
            <IoReorderTwoOutline />
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content w-screen bg-white mt-2 px-4 flex gap-y-3 navbar-dropdown z-10 transition ease-linear duration-500"
            style={{
              transitionDuration: "500ms",
              transitionTimingFunction: "linear",
            }}
          >
            {menuItems}
          </ul>
        </div>

        <Link
          href="/"
          className="text-xl lg:text-2xl lg:pl-4 text-nowrap transition ease-linear duration-500 hover:text-[#CAA782]"
        >
          Coffee House
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 flex gap-x-5">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
