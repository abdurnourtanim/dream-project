import React from "react";
import CTASection from "../components/CTASection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Testmonial from "../components/Testmonial";

const Home = () => {
  return (
    <div className="px-0 md:px-20 bg-white dark:bg-gray-900">
      <Navbar />
      <Header />
      <Features />
      <Testmonial />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
