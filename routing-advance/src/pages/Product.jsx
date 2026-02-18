import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="text-3xl font-bold text-center flex justify-center gap-10 mt-10">
      <div className="flex gap-10">
        <Link to="/products/men" className="text-white">
          Men
        </Link>
        <Link to="/products/women" className="text-white">
          Women
        </Link>
      </div>

      
      <Outlet />
    </div>
  );
};

export default Product;
