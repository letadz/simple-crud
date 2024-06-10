import React from "react";

const FormButton = ({ title, bgColor, onClick }) => {
  return (
    <>
      <button
        className={`${bgColor} px-3 py-2 mr-3 rounded-sm text-white`}
        onClick={(e) => onClick(e.target.value)}
      >
        {title}
      </button>
    </>
  );
};

export default FormButton;
