import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button
      className="flex justify-center ite gap-2 px-7
    py-4 border font-montserrat text-lg leading-none
    bg-red-400 border-red-400 rounded-full text-white"
    >
      Click Me
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
