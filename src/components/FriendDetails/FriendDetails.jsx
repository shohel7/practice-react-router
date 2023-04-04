import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  //   const friend = useLoaderData();
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h1>Friend Details</h1>
      <h1>Name: {friend.name}</h1>
      <h1>Email: {friend.email}</h1>
      <h1>Phone: {friend.phone}</h1>
    </div>
  );
};

export default FriendDetails;
