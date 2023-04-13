import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <>
      <footer className=" bg-gray-200 dark:bg-gray-800 pt-10 md:pt-20 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold dark:text-gray-100">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700 dark:text-gray-100">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-5 flex items-center">
                <SocialIcon to="https://twitter.com/abdurnourtanim">
                  <GrTwitter />
                </SocialIcon>
                <SocialIcon to="https://facebook.com/abdurnourtanim">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon to="https://linkedin.com/in/abdurnourtanim">
                  <AiFillLinkedin />
                </SocialIcon>
                <SocialIcon to="https://github.com/abdurnourtanim">
                  <AiFillGithub />
                </SocialIcon>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 dark:text-indigo-100 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300  hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300  hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/FAQ"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300  hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/products"
                      >
                        Free Products
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2 dark:text-indigo-100 ">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/license"
                      >
                        MIT License
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/terms"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900  dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/privacy"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-semibold block pb-2 text-sm"
                        to="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Tailwind Starter Kit by{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
