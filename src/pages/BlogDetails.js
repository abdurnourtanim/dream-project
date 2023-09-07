import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { deleteBlog, fetchSingleBlog } from "../services/blog.service";
import fetchUser from "../services/fetchUser.service";

const BlogDetails = () => {
  const [blog, setBllog] = useState({});
  const { blogId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleBlog(blogId)
      .then((res) => {
        const { title, description, image } = res.data;
        fetchUser(res.data?.user)
          .then((res) => {
            const { name, profile_picture } = res.data;
            setBllog((state) => ({
              ...state,
              author: name,
              authorImage: profile_picture,
            }));
          })
          .catch((error) => {
            console.log(error);
          });
        setBllog({
          title,
          description,
          image,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [blogId]);

  const deleteBlogHandle = async () => {
    await deleteBlog(blogId)
      .then((res) => {
        console.log(res);
        navigate("/blog");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white dark:bg-gray-800">
      <Navbar />
      <div className="bg-white dark:bg-gray-800 container mt-10 pt-20 px-6 md:px-24 mx-auto">
        <section className="mb-32 text-gray-800">
          <img
            src={blog.image}
            className="w-full shadow-lg rounded-lg mb-6"
            alt="not-found"
          />

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center ">
              <img
                src={`${blog.authorImage}`}
                className="rounded-full mr-2 h-8"
                alt="not-found"
                loading="lazy"
              />
              <div>
                <span className="text-black dark:text-gray-100">
                  Published{" "}
                  <span className="underline text-indigo-900 dark:text-indigo-300">
                    {blog.date}
                  </span>{" "}
                  by{" "}
                </span>
                <Link
                  to="/profile"
                  className="font-medium text-black dark:text-indigo-100"
                >
                  {blog.author}
                </Link>
              </div>
            </div>
            <Button onClick={deleteBlogHandle} className="py-2 px-3">
              <Link>Delete</Link>
            </Button>
          </div>

          <h1 className="font-bold text-3xl mb-6 text-black dark:text-gray-100">
            {blog.title}
          </h1>

          <hr className="mb-5" />

          <p className="text-black dark:text-indigo-100 mt-5">
            {blog.description}
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
