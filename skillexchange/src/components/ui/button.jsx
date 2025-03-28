import React from "react";

export const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
