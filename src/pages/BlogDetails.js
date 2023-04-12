import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BlogDetails = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Navbar />
      <div className="bg-white dark:bg-gray-800 container mt-10 pt-20 px-6 md:px-24 mx-auto">
        <section className="mb-32 text-gray-800">
          <img
            src="https://mdbootstrap.com/img/new/slides/198.jpg"
            className="w-full shadow-lg rounded-lg mb-6"
            alt="not-found"
          />

          <div className="flex items-center mb-6">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
              className="rounded-full mr-2 h-8"
              alt="not-found"
              loading="lazy"
            />
            <div>
              <span className="text-black dark:text-gray-100">
                Published{" "}
                <span className="underline text-indigo-900 dark:text-indigo-300">
                  15.07.2020
                </span>{" "}
                by{" "}
              </span>
              <Link
                to="/profile"
                className="font-medium text-black dark:text-indigo-100"
              >
                Anna Maria Doe
              </Link>
            </div>
          </div>

          <h1 className="font-bold text-3xl mb-6 text-black dark:text-gray-100">
            An intriguing title for an interesting article
          </h1>

          <hr classNameName="mb-5" />

          <p className="text-black dark:text-indigo-100 mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            harum tempore cupiditate asperiores provident, itaque, quo ex iusto
            rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
            sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
            soluta labore! Expedita quas, nesciunt similique autem, sunt,
            doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
            Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
            ducimus consequatur corporis, architecto nesciunt vitae ipsum
            consequuntur perspiciatis nulla esse voluptatem quos dolorum
            delectus similique eum vero in est velit quasi pariatur blanditiis
            incidunt quam.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
