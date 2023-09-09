import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { MdCreate } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import InputBox from "../components/InputBox";
import Navbar from "../components/Navbar";
import { updateBlog } from "../container/blogSlice";
import convertToBase64 from "../helper/convert";
import { createBlog, getBlogs } from "../services/blog.service";

const CreateBlog = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer.user);
  const navigate = useNavigate();

  const cover =
    "https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg";

  const coverChange = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, profilePhoto } = userState;

    const newBlog = {
      title,
      description,
      image: file,
      user: userState.userId,
      author: { name, image: profilePhoto },
    };

    await createBlog(newBlog)
      .then(async (res) => {
        console.log(res);
        await getBlogs()
          .then((response) => {
            console.log(response);
            dispatch(updateBlog(response.data));
            navigate("/blog");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />

      <form>
        <div className="bg-white px-0 md:px-52 mt-10 pt-10 dark:bg-gray-800">
          <div className="container bg-white dark:bg-gray-800 rounded px-5">
            <div className="mx-auto">
              <div className="rounded relative mt-8 h-48">
                <img
                  src={file || cover}
                  alt="avatar"
                  className="w-full h-full md:h-80 object-cover rounded  shadow"
                />
                <label htmlFor="todoImg">
                  <div className="flex w-full md:w-1/2 items-center justify-start px-3 py-2 rounded  mt-4 cursor-pointer border border-indigo-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 hover:bg-indigo-100">
                    <div className="mr-2 text-black dark:text-white">
                      <BsCardImage />
                    </div>
                    <p className="text-lg  text-black dark:text-white">
                      Select photo
                    </p>
                  </div>
                  <input
                    required
                    hidden
                    onChange={coverChange}
                    type="file"
                    id="todoImg"
                    name="todoImg"
                  />
                </label>
              </div>

              <div className="mt-20 md:mt-52 flex flex-col  md:w-1/2 w-full">
                <label
                  htmlFor="title"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Title
                </label>
                <InputBox
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="dark:text-white"
                />
              </div>
              <div className="mt-8 flex flex-col w-full md:w-2/3">
                <label
                  htmlFor="about"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  required
                  className=" h-36 px-8 py-4 rounded-lg font-medium text-black dark:text-white bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 placeholder-gray-500  text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-200 focus:bg-white dark:focus:bg-black"
                  rows={10}
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto w-11/12 xl:w-full">
            <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
              <Button onClick={handleSubmit} className="px-5 py-2">
                <MdCreate className="mr-2" />
                <span>Create</span>
              </Button>
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default CreateBlog;
