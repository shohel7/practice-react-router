import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="border border-red-500 p-8 m-3 rounded-lg">
      <h1>Post Id: {id}</h1>
      <h1>Post Title: {title}</h1>
      <h1>Post Body: {body}</h1>
      <p className="bg-purple-300 text-purple-600 py-2 px-5 rounded-md mt-5 text-center">
        <Link to={`/post/${id}`}>Post Details</Link>
      </p>
      <button
        className="bg-purple-300 text-purple-600 py-2 px-5 rounded-md mt-5 text-center"
        onClick={handleNavigation}
      >
        Post Details with Button Navigate
      </button>
    </div>
  );
};

export default Post;
