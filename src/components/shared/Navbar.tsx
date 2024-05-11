import Link from "next/link";
import { IoReorderTwoOutline } from "react-icons/io5";

const Navbar = () => {
  const menuItems = (
    <>
      <Link href="/about">Home</Link>
      <Link href="/">Our Menu</Link>
      <Link href="/">Reservation</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact us</Link>
    </>
  );

  return (
    <div className="p-0 navbar fixed bg-pink-100 uppercase z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="lg:hidden cursor-pointer px-2 text-5xl">
            <IoReorderTwoOutline />
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content w-screen bg-green-100 mt-2 px-4 flex gap-y-5 navbar-dropdown z-10"
          >
            {menuItems}
          </ul>
        </div>

        <Link href="/" className="text-xl lg:pl-4">
          Coffee House
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-4 flex gap-x-5">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
