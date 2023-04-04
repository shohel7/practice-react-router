import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  //   const post = useLoaderData();
  const { id, title, body } = useLoaderData();
  //   console.log(post);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Post Details</h1>
      <h1>Id: {id}</h1>
      <h1>Title: {title}</h1>
      <h1>Body: {body}</h1>
      <button
        onClick={handleGoBack}
        className="bg-purple-300 text-purple-600 py-2 px-5 rounded-md mt-5 text-center"
      >
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
