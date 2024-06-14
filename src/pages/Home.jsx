import React, { useState } from "react";
import MenuItem from "../components/Menu/Item";
import MenuList from "../components/Menu/List";

const Home = () => {
  const [currentId, setCurrentId] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center h-screen gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-6">Simple CRUD</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 p-6 sm:p-10 w-full lg:max-w-fit gap-10 mx-4 lg:m-0 ">
          <div>
            <MenuItem
              currentId={currentId}
              setCurrentId={setCurrentId}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>

          <div>
            <MenuList
              currentId={currentId}
              setCurrentId={setCurrentId}
              setSelectedItem={setSelectedItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
