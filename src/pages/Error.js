import React from "react";
import { Link } from "react-router-dom";
import errorImag from "../assets/image/error.svg";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen bg-gray-100 dark:bg-gray-800  flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 dark:text-gray-100">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <Button>
              <Link to="/">Back to homepage</Link>
            </Button>
          </div>
          <div className="max-w-lg">
            <img src={errorImag} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
