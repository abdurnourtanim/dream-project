import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const CTASection = () => {
  return (
    <div className="container flex flex-col items-center justify-between px-4 md:px-6 py-10 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0 bg-indigo-700 dark:bg-indigo-800 rounded-lg">
      <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
        Simplify how your team works today
      </h2>

      <div>
        <Button>
          <Link
            className="px-5 py-3 bg-white text-indigo-900 rounded-lg"
            to="/"
          >
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
