import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#355872] text-black p-6 flex items-center justify-between ">
      <h2 className="text-3xl font-bold text-white">Coursify</h2>
      <div className="flex gap-10 ">
        <Link to="/" className="text-white hover:underline text-2xl">Home</Link>
        <Link to="/about" className="text-white hover:underline text-2xl">About</Link>
        <Link to="/products" className="text-white hover:underline text-2xl">Products</Link>
        <Link to="/courses" className="text-white hover:underline text-2xl">Courses</Link>
      </div>
    </div>
  );
};

export default Navbar;
