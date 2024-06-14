import React, { useState, useEffect } from "react";
import { getDocs, deleteDoc, collection, doc } from "firebase/firestore";
import { database } from "../../../firebase/config";
import { MENUS } from "../../../constants/menu-header";
import FormButton from "../../Common/Buttons/FormButton";
import showToast from "../../Common/ToastMessages";

const MenuList = ({ currentId, setCurrentId, setSelectedItem }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const getItems = collection(database, "menuItems");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuLists = await getDocs(getItems);
        const data = menuLists.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };
    fetchData();
  }, [getItems]);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(database, "menuItems", currentId));
      showToast.error("Successfully deleted!");
      setCurrentId(null);
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const openDeleteModal = (id) => {
    setCurrentId(id);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setCurrentId(null);
    setShowDeleteModal(false);
  };

  return (
    <div className="overflow-auto max-h-[577px] border shadow-lg rounded-xl bg-white p-6">
      {menuItems && menuItems.length > 0 ? (
        <>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {MENUS.map((menu) => (
                  <th key={menu.id} className="border p-2">
                    {menu.name}
                  </th>
                ))}
                <th className="border p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.category}</td>
                  <td className="border p-2">
                    {item.options === "0"
                      ? "Small"
                      : item.options === "1"
                        ? "Medium"
                        : "Large"}
                  </td>
                  <td className="border p-2">₱ {item.price}</td>
                  <td className="border p-2">₱ {item.cost}</td>
                  <td className="border p-2">{item.amountInStock}</td>

                  <td className="border p-2 flex items-center gap-3">
                    <FormButton
                      bgColor="bg-blue-600"
                      onClick={() => {
                        setCurrentId(item.id);
                        setSelectedItem(item);
                      }}
                      title="Edit"
                    />
                    <FormButton
                      bgColor="bg-red-600"
                      onClick={() => openDeleteModal(item.id)}
                      title="Delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Delete Confirmation Modal */}
          {showDeleteModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded shadow-lg w-80">
                <p className="text-lg font-semibold mb-4">
                  Are you sure you want to delete this item?
                </p>

                <div className="flex justify-end gap-4">
                  <FormButton
                    bgColor="bg-red-600"
                    onClick={handleDelete}
                    title="Delete"
                  />
                  <FormButton
                    bgColor="bg-gray-300"
                    textColor="text-black"
                    onClick={closeDeleteModal}
                    title="Cancel"
                  />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <span>There are no menu items available as of the moment.</span>
      )}
    </div>
  );
};

export default MenuList;
