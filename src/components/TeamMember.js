import React from "react";
import { Link } from "react-router-dom";

const TeamMember = ({ avatar, name, position }) => {
  return (
    <div className="focus:outline-none">
      <Link to="/profile">
        <img src={avatar} alt={`Display avatar of ${name}`} />
        <p className="text-base font-semibold leading-none text-gray-800 dark:text-indigo-100 mt-2">
          {name}
        </p>
        <p className="text-base leading-none text-gray-600 dark:text-gray-200 mt-2">
          {position}
        </p>
      </Link>
    </div>
  );
};

export default TeamMember;
