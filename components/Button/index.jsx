import React from "react";

const Button = ({ children, onClick, className = "" }) => (
  <button
    className={`bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
