import React, { useState } from "react";
import MenuItem from "../components/Menu/Item";
import MenuList from "../components/Menu/List";

const App = () => {
  const [currentId, setCurrentId] = useState("");

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-screen gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-6">Simple CRUD</h1>
        </div>

        <div className="grid grid-cols-2 p-6 sm:p-10 w-full lg:w-4/5 gap-10 mx-4 lg:m-0 ">
          <div>
            <MenuItem
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </div>

          <div>
            <MenuList
              className="border shadow-lg rounded-xl"
              setCurrentId={setCurrentId}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
