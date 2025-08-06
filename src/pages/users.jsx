import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-12">
      <h1 className="text-3xl font-bold text-center mb-6">Users</h1>
      <div className="w-full max-w-4xl">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
