import React from "react";

const UserAvatar = ({ userPhoto }) => {
  return (
    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
      <div className="relative">
        <label htmlFor="profile">
          <img
            alt="user"
            src={userPhoto}
            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 cursor-pointer"
            style={{ maxWidth: "150px" }}
          />
        </label>
        {/* <input type="file" name="profile" id="profile" hidden /> */}
      </div>
    </div>
  );
};

export default UserAvatar;
