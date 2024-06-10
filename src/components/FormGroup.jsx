import React from "react";

const FormGroup = ({ htmlFor, label, required, children }) => {
  return (
    <>
      <label className="block mb-1.5 2 text-sm font-medium" htmlFor={htmlFor}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </>
  );
};

export default FormGroup;
