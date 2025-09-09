import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] pt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center md:grid-cols-5 gap-8 text-center md:text-left">
          {/* logo details */}
          <div className="md:col-span-2">
            <h1 className="text-2xl font-bold mb-4">
              <Link to={"/"}>Panto</Link>
            </h1>
            <p className="md:mr-[12px]">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-amber-600 mb-4">Services</h2>
            <ul className="list-none">
              <li className="hover:text-amber-600">
                <Link to={"/"}>Email Marketing</Link>
              </li>
              <li className="hover:text-amber-600">
                <Link to={"/"}>Campaigns</Link>
              </li>
              <li className="hover:text-amber-600">
                <Link to={"/"}>Branding</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-amber-600 mb-4">Furniture</h2>
            <ul className="list-none">
              <li className="hover:text-amber-600">
                <Link to={"/"}>Beads</Link>
              </li>
              <li className="hover:text-amber-600">
                <Link to={"/"}>Chari</Link>
              </li>
              <li className="hover:text-amber-600">
                <Link to={"/"}>All</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-amber-600 mb-4 text-center md:text-left">
              Follow Us
            </h2>
            <ul className="list-none flex flex-col items-center md:items-start gap-2">
              <li>
                <a href="#" className="flex items-center gap-1">
                  <FaFacebookF /> FaceBook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  <AiOutlineTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1">
                  <IoLogoInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6 border-t-blue-300">
        <hr className="text-gray-500 my-3" />
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-base">
            CopyRight &copy; {new Date().getUTCFullYear()}
          </p>
          <div className="mt-2 md:mt-0">
            <Link to={"/"}>Terms & Conditions</Link>
            <Link className="ml-2" to={"/"}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
