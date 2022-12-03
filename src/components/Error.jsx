import React from "react";
import { sad } from "../assets";

const Error = () => (
  <div className="w-full flex flex-col justify-center items-center mt-10">
    <img src={sad} alt="sad" className="w-32 h-32 object-contain" />

    <h1 className=" font-semi-bold text-2xl text-center text-white mt-2">
      <span className="text-4xl font-bold">Opss...</span> <br />
      Something when wrong. Please try again.
    </h1>
  </div>
);

export default Error;
