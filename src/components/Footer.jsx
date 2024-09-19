import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Follow Us Section */}
          <div className="bg-white p-6 rounded-lg text-center border border-gray-600">
            <br />

            <h3 className="text-xl font-semibold mb-4 p-5 ">Follow Us</h3>
            <div className="flex justify-center gap-4 mb-4 ">
              <a href="#" aria-label="Email">
                <EmailIcon className="text-black hover:text-gray-300 transition" />
              </a>
              <a href="#" aria-label="Facebook">
                <FacebookIcon className="text-black hover:text-gray-300 transition" />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon className="text-black hover:text-gray-300 transition" />
              </a>
              <a href="#" aria-label="Twitter">
                <XIcon className="text-black hover:text-gray-300 transition" />
              </a>
              <a href="#" aria-label="YouTube">
                <YouTubeIcon className="text-black hover:text-gray-300 transition" />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div className="bg-white p-6 rounded-lg text-center border border-gray-600">
            <h3 className="text-xl font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Bras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Panties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Gift Card
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Gift Wrap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  My Account
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="bg-white p-6 rounded-lg text-center border border-gray-600">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  GoAffPro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Influencers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Email Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="bg-white p-6 rounded-lg text-center border border-gray-600">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg text-center border border-gray-600">
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="mb-4">Subscribe & get 15% off your first order!</p>
            <div className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 mb-2 w-full max-w-xs rounded-md border border-gray-500"
              />
              <button className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-800 transition">
                Sign Up
              </button>
              <br />

              {/* Dropdown Section */}
              <div className="relative inline-block text-center mt-4 ml-auto py-4">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center px-1 py-1 text-base font-extralight text-gray-800 bg-gray-200 border border-gray-800 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 transition ease-in-out duration-200 ">
                  Spain (EUR €)
                  <ChevronDownIcon
                    className="w-5 h-5 ml-2 text-gray-600 transition-transform transform duration-300 ease-in-out"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}/>
                </button>

                {isOpen && (
                  <div className="absolute right-0 z-20 mt-1 w-40 origin-top-right bg-white border border-gray-300 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transition-transform transform duration-300 ease-in-out overflow-y-scroll h-28">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        Canada (CAD $)
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Austria (EUR €)
                      </a>
                      <a href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        Malta (EUR €)
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Austria (EUR €)
                      </a>
                      <a href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        Malta (EUR €)
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        Canada (CAD $)
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8">
        <p>About Us | FAQ | Blog | Reviews</p>
        <p className="mt-2">Copyright © 2024 Schakauf Lingerie</p>
      </div>
    </footer>
  );
};

export default Footer;
