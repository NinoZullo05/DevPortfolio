import React from "react";

const Language = ({ name, icon, bgColor, textColor }) => {
  return (
    <div
      className="flex items-center justify-center px-4 py-2 rounded-lg shadow-md"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <div className="mr-2 text-2xl">{icon}</div>

      <span className="font-semibold text-lg">{name}</span>
    </div>
  );
};

export default Language;
