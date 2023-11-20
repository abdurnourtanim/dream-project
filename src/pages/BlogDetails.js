import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import userAvatar from "../assets/image/user_avatar.webp";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { removeBlog } from "../container/blogSlice";
import { deleteBlog } from "../services/blog.service";

const BlogDetails = () => {
  const [blog, setBlog] = useState({
    title: " ",
    description: " ",
    image: " ",
    authorName: " ",
    authorImage: " ",
    authorId: "",
  });
  const [loading, setLoading] = useState(false);
  let blogState = useSelector((state) => state.blogReducer.blog);
  const userState = useSelector((state) => state.userReducer.user);
  const { blogId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchBlog = blogState?.filter((item) => item?._id.includes(blogId));
    const { title, description, image, author } = searchBlog[0];
    const { name, profilePhoto, userId } = author[0];
    setBlog({
      ...blog,
      title,
      description,
      image,
      authorName: name,
      authorImage: profilePhoto,
      authorId: userId,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogId]);

  const deleteBlogHandle = async () => {
    setLoading(true);
    // delete blog from database
    await deleteBlog(blogId)
      .then(async (res) => {
        // const message = res.data?.message;
        // delte blog from redux store
        dispatch(removeBlog(blogId));

        setLoading(false);
        navigate("/blog");
      })
      .catch((error) => {
        setLoading(false);
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
                src={`${blog.authorImage || userAvatar}`}
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
                  to={`/profile/${blog.authorId}`}
                  className="font-medium text-black dark:text-indigo-100"
                >
                  {blog.authorName}
                </Link>
              </div>
            </div>

            {blog.authorId === userState.userId && (
              <Button onClick={deleteBlogHandle} className="py-2 px-3">
                <Link>{loading ? "Deleting..." : "Delete"}</Link>
              </Button>
            )}
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
