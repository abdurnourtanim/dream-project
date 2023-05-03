import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProfileOverlay from "../components/profile/ProfileOverlay";
import UserAvatar from "../components/profile/UserAvatar";
import UserBio from "../components/profile/UserBio";
import UserDetails from "../components/profile/UserDetails";
import { logout } from "../services/auth.service";

const Profile = () => {
  const user = {
    userphoto: "https://avatars.githubusercontent.com/u/71883296?v=4",
    name: "Abdur Nour Tanim",
    collage: "University of Computer Science",
    address: {
      city: "Chattogram",
      country: "Bangladesh",
    },
    company: {
      name: "Coding for KiDs",
      position: "CEO",
    },
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-800">
      <Navbar />
      <ProfileOverlay />
      <section className="relative py-16 -mt-5 bg-gray-300 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-6 pb-10 md:pb-16 shadow-xl rounded-lg -mt-80">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <UserAvatar userPhoto={user.userphoto} />
                <div className="md:flex w-full lg:w-4/12 px-0 md:px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="flex  justify-between py-0 md:py-6 px-0 md:px-3 mt-32  sm:mt-10">
                    <Button className="py-2 px-5">
                      <Link to={`/update`}>Edit Profile</Link>
                    </Button>
                    <Button onClick={logout} className="py-2 px-5 ml-0 md:ml-5">
                      <Link to={`/profile`}>Logout</Link>
                    </Button>
                  </div>
                </div>
                <UserDetails />
              </div>
              <UserBio user={user} />
            </div>
          </div>
        </div>
      </section>
      <Footer />/
    </div>
  );
};

export default Profile;
