import React from "react";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex justify-center flex-1">
        {/* form content  */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          {/* logo  */}
          <Logo />
          {/* form  */}
          <LoginForm />
        </div>
        {/* illustration  */}
        <div className="flex-1 bg-indigo-100 dark:bg-indigo-950 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
