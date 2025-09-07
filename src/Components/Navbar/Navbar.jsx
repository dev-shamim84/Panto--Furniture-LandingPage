import { Link, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

const NavItem = ({ handleToggle }) => {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-8 gap-8 ">
      {navItems.map((item, index) => (
        <li key={index} onClick={handleToggle} className="font-semibold">
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-[#c757e6] font-bold text-[16px]"
                : "hover:text-[#ca46d6] text-[16px] transition duration-300 ease-out"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [iScroll, setIScroll] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIScroll(true);
      } else {
        setIScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50  transition duration-300 ease-in-out ${
        iScroll ? "bg-white shadow-md" : "text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-6 ">
        <nav className="flex justify-between items-center">
          {/* logo */}
          <Link className="font-bold text-[20px]" to="/">
            Panto
          </Link>
          {/* humburger menu for mobliel */}
          <div onClick={handleToggle} className="md:hidden ">
            {open ? null : <MdMenu size={22} />}
          </div>
          {/* nav item  for desktop*/}
          <div className="hidden md:flex">
            <NavItem />
          </div>
          {/* Mobile menu Item */}
          <div
            className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center space-y-8 bg-blue-100 text-black transition-transform transform ${
              open ? "translate-x-0" : "-translate-x-full"
            } md:hidden text-center`}
          >
            <div
              onClick={handleToggle}
              className="md:hidden absolute top-0 right-4 py-3"
            >
              <IoCloseSharp size={22} />
            </div>
            <NavItem handleToggle={handleToggle} />
          </div>
          {/* cart */}
          <div className="hidden md:block cursor-pointer relative">
            <FaCartPlus className="text-xl" />
            <sup className="absolute top-0 -right-3 flex justify-center items-center bg-amber-600 text-white w-5 h-5 rounded-full">
              0
            </sup>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
