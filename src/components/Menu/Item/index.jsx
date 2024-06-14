import React, { useState, useEffect } from "react";
import { addDoc, updateDoc, collection, doc } from "firebase/firestore";
import { database } from "../../../firebase/config";

import FormInput from "../../Common/Inputs/FormInput";
import FormSelect from "../../Common/Inputs/FormSelect";
import FormGroup from "../../Common/FormGroup";
import FormButton from "../../Common/Buttons/FormButton";
import showToast from "../../Common/ToastMessages";

const MenuItem = ({
  currentId,
  setCurrentId,
  selectedItem,
  setSelectedItem,
}) => {
  const initialState = {
    category: "",
    name: "",
    options: "",
    price: 0,
    cost: 0,
    amountInStock: 0,
  };

  const [menuItem, setMenuItem] = useState(initialState);

  useEffect(() => {
    setMenuItem(selectedItem ? selectedItem : initialState);
  }, [selectedItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem({ ...menuItem, [name]: value });
  };

  const handleSelectChange = (selectedValue) => {
    setMenuItem({ ...menuItem, options: selectedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !menuItem.category ||
      !menuItem.name ||
      !menuItem.options ||
      !menuItem.price ||
      !menuItem.cost ||
      !menuItem.amountInStock
    ) {
      showToast.error("All fields are required!");
      return;
    }

    try {
      if (currentId === "") {
        await addDoc(collection(database, "menuItems"), menuItem);
        showToast.success("Successfully added!");
      } else {
        await updateDoc(doc(database, "menuItems", currentId), menuItem);
        showToast.success("Successfully updated!");
        setCurrentId("");
      }

      setMenuItem(initialState);
      setSelectedItem(null);
    } catch (error) {
      console.error("Error adding/updating document: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border shadow-lg rounded-xl bg-white p-6"
    >
      <div className="mb-6">
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
      </div>

      {selectedItem ? (
        <FormButton title="Update" bgColor="bg-green-600" />
      ) : (
        <FormButton title="Add" bgColor="bg-blue-600" />
      )}
    </form>
  );
};

export default MenuItem;
