import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return  <div className="nav">
      <h2>100xdevs</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
};

export default Nav;
