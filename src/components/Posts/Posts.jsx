import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  //   console.log(posts);
  return (
    <div>
      <h1>Posts Page: {posts.length}</h1>
      <div className="grid md:grid-cols-3">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
