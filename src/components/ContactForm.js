import React from "react";
import Button from "./Button";
import InputBox from "./InputBox";

const ContactForm = () => {
  return (
    <form>
      <div className="md:flex items-center mt-12">
        <div className="md:w-72 flex flex-col">
          <label className="text-base font-semibold leading-none text-gray-800 dark:text-gray-100">
            Name
          </label>
          <InputBox type="name" className="mt-2 text-black dark:text-white " />
        </div>
        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
          <label className="text-base font-semibold leading-none text-gray-800 dark:text-gray-100">
            Email Address
          </label>
          <InputBox type="email" className="mt-2 text-black dark:text-white" />
        </div>
      </div>
      <div className="md:flex items-center mt-8">
        <div className="md:w-72 flex flex-col">
          <label className="text-base font-semibold leading-none text-gray-800 dark:text-gray-100">
            Company name
          </label>
          <InputBox type="name" className="mt-2 text-black dark:text-white" />
        </div>
        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
          <label className="text-base font-semibold leading-none text-gray-800 dark:text-gray-100">
            Country
          </label>
          <InputBox type="name" className="mt-2 text-black dark:text-white" />
        </div>
      </div>
      <div>
        <div className="w-full flex flex-col mt-8">
          <label className="text-base font-semibold leading-none text-gray-800 dark:text-gray-100">
            Message
          </label>
          <textarea
            tabIndex={0}
            aria-label="leave a message"
            type="name"
            className="mt-2 w-full h-36 px-8 py-4 rounded-lg font-medium text-black dark:text-white bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 placeholder-gray-500  text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-200 focus:bg-white dark:focus:bg-black"
          />
        </div>
      </div>
      <p className="text-xs leading-3 text-gray-600 dark:text-gray-300 mt-4">
        By clicking submit you agree to our terms of service, privacy policy and
        how we use data as stated
      </p>

      <Button className="mx-auto w-full  md:w-fit px-8 py-3 mt-9">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
