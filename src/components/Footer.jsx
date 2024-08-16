import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#28231D] py-6 text-white mt-20">
      <div className="container mx-auto">
        <Link
          to={"/"}
          className="text-4xl font-semibold mt-5 mb-5 block text-white text-center"
        >
          Mobile Mart
        </Link>
        <div className="divider container bg-gray-50 my-2 mx-auto h-[1px] rounded-sm"></div>

        <div className="flex justify-between my-6">
          <div className="">
            <p className="text-xl mb-3 text-gray-400">Support</p>
            <div className="inline-flex gap-2 items-center">
              <IoIosCall size={18} />
              <p>+880 1676 782636</p>
            </div>{" "}
            <br />
            <div className="inline-flex gap-2 items-center">
              <IoLocationSharp size={18} />
              <p>Mirpur-10, Dhaka</p>
            </div>
          </div>

          <div className="">
            <p className="text-xl mb-3 text-gray-400">About</p>
            <Link to={"/contact"} className="">
              Contact Us
            </Link>{" "}
            <br />
            <Link className="">Terms & Conditions</Link>
            <br />
            <Link className="">Online Delivery</Link>
          </div>

          <div className="">
            <p className="text-xl mb-3 text-gray-400">Stay Connected</p>
            <a
              href="https://x.com/"
              target="_blank"
              className="inline-flex gap-2 items-center"
            >
              <FaTwitter size={18} />
              <p>Twitter</p>
            </a>
            <br />
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="inline-flex gap-2 items-center justify-center"
            >
              <FaFacebook size={18} />
              <p>Facebook</p>
            </a>{" "}
          </div>
        </div>
        <div className="divider container bg-gray-50 my-2 mx-auto h-[1px] rounded-sm"></div>
        <div className="flex justify-between">
          <p className="text-xs">
            © 2024 Mobile Mart Ltd | All rights reserved
          </p>
          <p className="text-xs">Powered By: Mobile Mart</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
