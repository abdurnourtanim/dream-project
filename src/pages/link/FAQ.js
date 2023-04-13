import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import {
  MdDashboardCustomize,
  MdOutlinePayment,
  MdOutlineSecurity,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import FAQCard from "../../components/FAQCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SearchBox from "../../components/SearchBox";
import TeamMember from "../../components/TeamMember";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mt-16 relative py-16 bg-gradient-to-b from-indigo-700 dark:from-indigo-400 to-indigo-600 dark:bg-indigo-400 flex justify-center items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white dark:text-gray-100">
              How can we help you?
            </h1>
            <SearchBox />
          </div>
        </div>
        <div className="container mx-auto py-9 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
          <div className="w-11/12 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FAQCard
              icon={FiSettings}
              title=" Getting Started"
              description="Get started fast with installation and theme setup instructions"
            />
            <FAQCard
              icon={AiOutlineUsergroupAdd}
              title="User Account"
              description="Get started fast with installation and theme setup instructions"
            />
            <FAQCard
              icon={MdProductionQuantityLimits}
              title="Product Features"
              description="Get started fast with installation and theme setup instructions"
            />
            <FAQCard
              icon={MdDashboardCustomize}
              title="Customization Option"
              description="Get started fast with installation and theme setup instructions"
            />
            <FAQCard
              icon={MdOutlinePayment}
              title="Payment Getways"
              description="Get started fast with installation and theme setup instructions"
            />
            <FAQCard
              icon={MdOutlineSecurity}
              title="Security Options"
              description="Get started fast with installation and theme setup instructions"
            />
          </div>
          <div className="mt-9 md:mt-11 lg:mt-16">
            <div className="text-center">
              <h1 className="text-3xl font-medium leading-loose text-gray-800 dark:text-gray-100">
                Didn’t find an answer?
              </h1>
              <p className="mx-4 md:mx-0 mb-4 text-base leading-none text-gray-600 dark:text-gray-200 mt-4">
                Our team is just an email away and ready to answer your
                questions
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-around mt-2 px-3 md:px-0">
              <TeamMember
                avatar="https://i.ibb.co/zS3y67Q/Unsplash-Avatars-0000s-0019-analise-benevides-88w-Kdd-JTwp8-unsplash-1.png"
                name=" Julia John"
                position="Designer"
              />
              <TeamMember
                avatar="https://i.ibb.co/zS3y67Q/Unsplash-Avatars-0000s-0019-analise-benevides-88w-Kdd-JTwp8-unsplash-1.png"
                name=" Julia John"
                position="Designer"
              />
              <TeamMember
                avatar="https://i.ibb.co/zS3y67Q/Unsplash-Avatars-0000s-0019-analise-benevides-88w-Kdd-JTwp8-unsplash-1.png"
                name=" Julia John"
                position="Designer"
              />
              <TeamMember
                avatar="https://i.ibb.co/zS3y67Q/Unsplash-Avatars-0000s-0019-analise-benevides-88w-Kdd-JTwp8-unsplash-1.png"
                name=" Julia John"
                position="Designer"
              />
            </div>
            <div className="flex justify-center items-center">
              <Link to="/contact">
                <Button className="mt-4 md:mt-6 py-3 px-5">Contact us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
