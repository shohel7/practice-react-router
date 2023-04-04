import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className="space-x-5 bg-purple-300 text-purple-600">
      <Link to="/">Home</Link>
      <ActiveLink to="/friends">Friends</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
    </nav>
  );
};

export default Header;
