import React from "react";

const FormButton = ({ title, bgColor, textColor = 'text-white', onClick }) => {
  return (
    <>
      <button
        className={`${bgColor} ${textColor} px-3 py-2 rounded-sm`}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default FormButton;
