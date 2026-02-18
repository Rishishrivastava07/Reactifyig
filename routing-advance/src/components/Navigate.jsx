import React from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {

const handleNavigate = useNavigate();

  return (
    <div className="text-white text-xl flex gap-5 justify-center my-5 ">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={() => handleNavigate("/")}>Home</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleNavigate(-1)}>Previous</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleNavigate(+1)}>Next</button>
    </div>
  );
};

export default Navigate;
