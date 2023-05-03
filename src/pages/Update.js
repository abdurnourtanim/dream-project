import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileUpdateForm from "../components/ProfileUpdateForm";

const Update = () => {
  const navigate = useNavigate();

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (!route()) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <ProfileUpdateForm />
      <Footer />
    </div>
  );
};
export default Update;
