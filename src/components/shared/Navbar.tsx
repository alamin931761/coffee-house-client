"use client";

import { oswald } from "@/app/fonts";
import Link from "next/link";
import { useState } from "react";
import { IoReorderTwoOutline, IoClose } from "react-icons/io5";

const Navbar = () => {
  // State to handle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Define menu items JSX
  const menuItems = (
    <>
      {/* Home */}
      <Link
        onClick={() => setIsDropdownOpen(false)}
        className="lg:py-5 transition ease-linear duration-500 hover:text-whiskey"
        href="/"
      >
        Home
      </Link>

      {/* Our Menu */}
      <Link
        onClick={() => setIsDropdownOpen(false)}
        className="lg:py-5 transition ease-linear duration-500 hover:text-whiskey"
        href="/our-menu"
      >
        Our Menu
      </Link>

      {/* Dropdown for Reservation */}
      <div className="dropdown dropdown-hover lg:py-5 cursor-pointer">
        <div
          className="transition ease-linear duration-500 hover:text-whiskey outline-none"
          tabIndex={0}
        >
          {/* reservation */}
          <Link
            onClick={() => setIsDropdownOpen(false)}
            className="transition ease-linear duration-500 hover:text-whiskey"
            href="/reservation"
          >
            Reservation
          </Link>
        </div>
        <ul
          tabIndex={0}
          className="lg:dropdown-content menu p-0 mx-2 lg:mx-0 lg:shadow-lg lg:bg-white lg:w-[170px] top-[62px] lg:border-t-4 lg:border-whiskey"
          style={{
            transitionDuration: "500ms",
            transitionTimingFunction: "linear",
          }}
        >
          {/* booking page */}
          <Link
            onClick={() => setIsDropdownOpen(false)}
            className="mx-2 mt-2 transition ease-linear duration-500 hover:text-whiskey"
            href="/booking"
          >
            Booking Page
          </Link>

          {/* reservation */}
          <Link
            onClick={() => setIsDropdownOpen(false)}
            className="m-2 transition ease-linear duration-500 hover:text-whiskey"
            href="/reservation"
          >
            Reservation
          </Link>
        </ul>
      </div>

      {/* About Us */}
      <Link
        onClick={() => setIsDropdownOpen(false)}
        className="lg:py-5 transition ease-linear duration-500 hover:text-whiskey"
        href="/about-us"
      >
        About Us
      </Link>

      {/* Contact Us */}
      <Link
        onClick={() => setIsDropdownOpen(false)}
        className="lg:py-5 transition ease-linear duration-500 hover:text-whiskey"
        href="/contact-us"
      >
        Contact us
      </Link>

      {/* blog */}
      <Link
        onClick={() => setIsDropdownOpen(false)}
        className="lg:py-5 transition ease-linear duration-500 hover:text-whiskey"
        href="/blog"
      >
        Blog
      </Link>

      {/* Meet Our Team */}
      <Link
        onClick={() => setIsDropdownOpen(false)}
        className="lg:py-5 transition ease-linear duration-500 hover:text-whiskey"
        href="/meet-our-team"
      >
        Meet Our Team
      </Link>

      {/* What We Offer */}
      <Link
        onClick={() => setIsDropdownOpen(false)}
        className="lg:py-5 transition ease-linear duration-500 hover:text-whiskey"
        href="/what-we-offer"
      >
        What We Offer
      </Link>

      {/* Our Process */}
      <Link
        onClick={() => setIsDropdownOpen(false)}
        className="lg:py-5 pr-5 transition ease-linear duration-500 hover:text-whiskey"
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
      {/* Navbar start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="lg:hidden cursor-pointer px-2 text-5xl transition ease-linear duration-500 hover:text-whiskey outline-none"
          >
            {/* Conditionally render the icon based on dropdown state */}
            {isDropdownOpen ? <IoClose /> : <IoReorderTwoOutline />}
          </div>

          {/* Dropdown menu for mobile */}
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu dropdown-content w-screen bg-white mt-1 px-4 flex gap-y-3 navbar-dropdown z-10"
            >
              {menuItems}
            </ul>
          )}
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-xl lg:text-2xl lg:pl-4 text-nowrap transition ease-linear duration-500 hover:text-whiskey"
        >
          Coffee House
        </Link>
      </div>

      {/* Navbar end */}
      <div className="navbar-end">
        {/* Navbar for desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 flex gap-x-5">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
