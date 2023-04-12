import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";

const UserBio = ({ user }) => {
  const { name, address, collage, company } = user;
  return (
    <div className="text-center mt-0 md:mt-12">
      <h3 className="text-3xl md:text-4xl font-bold leading-normal mb-2 text-gray-800 dark:text-amber-200">
        {name}
      </h3>
      <div className="text-sm flex items-center justify-center leading-normal mt-0 mb-2 text-gray-500  dark:text-gray-100 font-bold uppercase">
        <FaMapMarkerAlt className="mr-2" />
        {`${address.city},${address.country}`}
      </div>
      <div className="mb-2 flex items-center justify-center text-gray-700 dark:text-gray-100 mt-3 md:mt-10">
        <BsFillBriefcaseFill className="mr-2" />
        {`${company.position},${company.name}`}
      </div>
      <div className="mb-2 flex items-center justify-center text-gray-700 dark:text-gray-100">
        <FaUniversity className="mr-2" />
        {collage}
      </div>
      <hr className="my-5" />
      <div className="mx-0 md:mx-32 px-3 md:px-10 border py-5 border-indigo-100 dark:border-gray-500 rounded">
        <div className="mb-2 mr-auto w-fit flex items-center justify-center">
          <MdOutlineDescription className="text-2xl text-black dark:text-white" />
          <h3 className="text-2xl text-black dark:text-white">Description</h3>
        </div>
        <hr className="h-1 bg-indigo-100 dark:bg-indigo-300 rounded" />

        <p className="mt-5 text-black dark:text-gray-100 text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          unde! Blanditiis architecto recusandae, expedita aspernatur
          dignissimos consectetur odit, debitis quis commodi aperiam,
          exercitationem atque repudiandae esse praesentium iste ipsam adipisci.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          unde! Blanditiis architecto recusandae, expedita aspernatur
          dignissimos consectetur odit, debitis quis commodi aperiam,
          exercitationem atque repudiandae esse praesentium iste ipsam adipisci.
        </p>
      </div>
    </div>
  );
};

export default UserBio;
