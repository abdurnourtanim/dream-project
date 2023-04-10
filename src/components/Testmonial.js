import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/image/avatar-anisha.png";
import Button from "./Button";

const Testmonial = () => {
  return (
    <div className="max-w-6xl px-5 mx-auto pt-10 md:pt-20 pb-5 bg-gray-100 dark:bg-gray-800  text-center">
      <h2 className="text-4xl text-indigo-900 dark:text-indigo-100 font-bold text-center">
        What's Different About Manage?
      </h2>
      <div className="flex flex-col mt-16 md:mt-24 md:flex-row md:space-x-6">
        <div className="mt-10 md:mt-0 flex flex-col items-center p-6 space-y-6 rounded-lg bg-indigo-100 dark:bg-gray-700 md:w-1/3 ">
          <img src={avatar} className="w-16 -mt-14" alt="avatar" />
          <h5 className="text-lg font-bold text-black dark:text-white">
            Anisha Li
          </h5>
          <p className="text-sm text-gray-900 dark:text-indigo-200">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
        <div className="mt-10 md:mt-0 flex flex-col items-center p-6 space-y-6 rounded-lg bg-indigo-100 dark:bg-gray-700 md:w-1/3 ">
          <img src={avatar} className="w-16 -mt-14" alt="avatar" />
          <h5 className="text-lg font-bold text-black dark:text-white">
            Anisha Li
          </h5>
          <p className="text-sm text-gray-900 dark:text-indigo-200">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
        <div className="mt-10 md:mt-0 flex flex-col items-center p-6 space-y-6 rounded-lg bg-indigo-100 dark:bg-gray-700 md:w-1/3 ">
          <img src={avatar} className="w-16 -mt-14" alt="avatar" />
          <h5 className="text-lg font-bold text-black dark:text-white">
            Anisha Li
          </h5>
          <p className="text-sm text-gray-900 dark:text-indigo-200">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>
      </div>
      <div className="my-5 md:my-10">
        <Button className="py-3 px-5">
          <Link to="/login">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default Testmonial;
