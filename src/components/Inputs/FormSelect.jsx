import React from "react";

const FormSelect = ({ value, onChange }) => {
  const menuOption = [
    {
      value: "",
      name: "Select an option",
    },
    {
      value: 0,
      name: "Small",
    },
    {
      value: 1,
      name: "Medium",
    },
    {
      value: 2,
      name: "Large",
    },
  ];

  return (
    <div className="mb-4">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-base cursor-pointer"
      >
        {menuOption.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.value === ""}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
