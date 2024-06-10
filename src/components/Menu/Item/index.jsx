import React, { useState } from "react";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { database } from "../../../firebase/config";

import FormInput from "../../Inputs/FormInput";
import FormSelect from "../../Inputs/FormSelect";
import FormGroup from "../../FormGroup";
import ToastMessage from "../../ToastMessages";
import FormButton from "../../Buttons/FormButton";

const MenuItemForm = ({ currentId, setCurrentId }) => {
  const initialState = {
    category: "",
    name: "",
    options: "",
    price: 0,
    cost: 0,
    amountInStock: 0,
  };

  const [menuItem, setMenuItem] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({ ...menuItem, [name]: value });
  };

  const handleSelectChange = (selectedValue) => {
    setMenuItem({ ...menuItem, options: selectedValue });
  };

  const value = collection(database, "menuItems");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentId === "") {
        await addDoc(value, menuItem);
      } else {
        await updateDoc(doc(database, "menuItems", currentId), menuItem);
        setCurrentId("");
      }
      ToastMessage();
      setMenuItem(initialState);
    } catch (error) {
      console.error("Error adding/updating document: ", error);
    }
  };

  return (
    <form className="flex flex-col border shadow-lg rounded-xl p-6">
      <FormGroup htmlFor="category" label="Category" required>
        <FormInput
          type="text"
          name="category"
          placeholder="Category"
          value={menuItem.category}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup htmlFor="name" label="Name" required>
        <FormInput
          type="text"
          name="name"
          placeholder="Name"
          value={menuItem.name}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup htmlFor="options" label="Options" required>
        <FormSelect
          label="Options"
          value={menuItem.options}
          onChange={handleSelectChange}
        />
      </FormGroup>

      <FormGroup htmlFor="price" label="Price" required>
        <FormInput
          type="number"
          name="price"
          placeholder="Price"
          value={menuItem.price}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup htmlFor="cost" label="Cost" required>
        <FormInput
          type="number"
          name="cost"
          placeholder="Cost"
          value={menuItem.cost}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup htmlFor="amountInStock" label="Amount In Stock" required>
        <FormInput
          type="number"
          name="amountInStock"
          placeholder="Amount in Stock"
          value={menuItem.amountInStock}
          onChange={handleChange}
          required
        />
      </FormGroup>

      {currentId === "" ? (
        <FormButton title="Add" onClick={handleSubmit} bgColor="bg-blue-600" />
      ) : (
        <FormButton title="Add" onClick={handleSubmit} bgColor="bg-green-600" />
      )}
     </form>
  );
};

export default MenuItemForm;
