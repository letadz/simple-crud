// src/components/MenuList.js

import React, { useEffect, useState } from "react";
import { getDocs, deleteDoc, collection } from "firebase/firestore";
import { database } from "../../../firebase/config";
import FormButton from "../../Buttons/FormButton";
import ToastMessage from "../../ToastMessages";

const MenuList = ({ setCurrentId }) => {
  const [menuItems, setMenuItems] = useState([]);
  const value = collection(database, "menuItems");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuLists = await getDocs(value, "menuItems");
        const data = menuLists.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(database, "menuItems", id));
      ToastMessage();
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  return (
    <div className="overflow-y-auto h-auto border shadow-lg rounded-xl p-6">
      {menuItems ? (
        menuItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between gap-3 mb-3 last:mb-0"
          >
            <div className="flex gap-2 flex-wrap">
              <span>
                {item.name} - ({item.category})
              </span>
              <span>Options: {item.options}</span>
              <span>Price: ₱ {item.price}</span>
              <span>Cost: ₱ {item.cost}</span>
              <span>Stock: {item.amountInStock}</span>
            </div>

            <div>
              <FormButton
                bgColor="bg-blue-600"
                onClick={setCurrentId(item.id)}
                title="Edit"
              />
              <FormButton
                bgColor="bg-red-600"
                onClick={() => handleDelete(item.id)}
                title="Delete"
              />
            </div>
          </div>
        ))
      ) : (
        <span>There are no menu items available as of the moment.</span>
      )}
    </div>
  );
};

export default MenuList;
