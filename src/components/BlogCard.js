import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { description, title, date, author, image, primary, blogId } = props;

  console.log(author);

  return (
    <div>
      <img className="w-full" src={image} alt={title} />
      <div className="py-4 px-4 w-full flex justify-between bg-indigo-700">
        <p className="text-sm text-white font-semibold tracking-wide">
          {author?.name}
        </p>
        <p className="text-sm text-white font-semibold tracking-wide">{date}</p>
      </div>
      <div
        className={`bg-white dark:bg-gray-800 px-5 py-6 rounded-bl-3xl rounded-br-3xl ${
          primary ? "md:px-10" : "px-5"
        }`}
      >
        <h1
          className={`${
            primary ? "text-4xl" : "text-2xl"
          } text-gray-900 dark:text-gray-100 font-semibold tracking-widez`}
        >
          {primary ? title : title.slice(0, 10).concat("...")}
        </h1>
        <p className="text-gray-700 dark:text-indigo-100 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
          {primary
            ? description.slice(0, 200)
            : description.slice(0, 100).concat("...")}
        </p>
        <Link
          to={`/blog/${blogId}`}
          className="w-full mt-4 justify-end flex items-center cursor-pointer "
        >
          <p className="text-base tracking-wide text-indigo-500 dark:text-indigo-100">
            Read more
          </p>
          <BsArrowRight className="text-2xl ml-2 text-black dark:text-indigo-300" />
        </Link>
        <div className="h-5 w-2" />
      </div>
    </div>
  );
};

export default BlogCard;
