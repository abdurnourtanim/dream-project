import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex bg-gray-100 dark:bg-gray-900 items-center justify-center mt-16 md:py-16">
        <div className=" bg-white dark:bg-gray-800 shadow rounded lg:px-28 px-8 py-10">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 dark:text-white">
            Let's chat and get a quote!
          </p>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
