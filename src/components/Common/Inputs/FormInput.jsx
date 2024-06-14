import React from "react";

const FormInput = ({ type, name, value, onChange, required }) => {
  const inputType = type === "number" ? 0 : "";
  const inputValue = value || "";

  return (
    <>
      <input
        className="border mb-3 px-2 py-1.5 w-full"
        type={type}
        name={name}
        value={inputValue}
        min={inputType}
        onChange={onChange}
        required={required}
      />
    </>
  );
};

export default FormInput;
