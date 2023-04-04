import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { email, name, id, phone } = friend;
  return (
    <div className="border border-red-500 rounded-lg p-8 m-3">
      <h1>Friend Id: {id}</h1>
      <h1>Friend Name: {name}</h1>
      <h1>Friend Email: {email}</h1>
      <h1>Friend Phone: {phone}</h1>
      <p className="bg-purple-300 text-purple-600 py-2 px-5 rounded-md mt-5 text-center">
        <Link to={`/friend/${id}`}>Show me Details</Link>
      </p>
    </div>
  );
};

export default Friend;
