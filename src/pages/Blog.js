import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Blog() {
  const blogState = useSelector((state) => state.blogReducer.blog);

  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-24 mt-16 bg-gray-100 dark:bg-gray-900  py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900 dark:text-white">
            Latest from our Blog
          </h1>
          <div className="mt-12 lg:mt-24">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
                  {blogState[0]?.map((blog) => {
                    return (
                      <BlogCard
                        key={blog._id}
                        image={blog.image}
                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                        author={blog.author}
                        blogId={blog._id}
                      />
                    );
                  })}
                </div>

                <div className="flex justify-center items-center ">
                  <Button className="px-5 py-2 mt-5 ml-auto">See more</Button>
                  <Button className="px-5 py-2 mt-5 ml-auto">
                    <Link to={`/create-blog`}>Create Blog</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
