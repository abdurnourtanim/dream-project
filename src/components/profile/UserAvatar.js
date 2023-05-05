import React from "react";

const UserAvatar = ({ userPhoto }) => {
  return (
    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
      <div className="relative">
        <label htmlFor="profile">
          <img
            alt="user"
            src={userPhoto}
            className="shadow-xl rounded-full    align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 "
            style={{
              minWidth: "150px",
              maxHeight: "150px",
              objectFit: "cover",
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default UserAvatar;
