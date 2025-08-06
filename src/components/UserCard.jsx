import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <Link
        to={`/users/${user.id}`}
        className="userss"
      >
        {user.name}
      </Link>
    </div>
  );
};

export default UserCard;
