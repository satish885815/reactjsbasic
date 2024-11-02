import React, { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: false,
  });

  const handleAddNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

  return (
    <>
      {explorer.isFolder ? (
        <div>
          <div
            onClick={() => setExpand(true)}
            class="bg-gray-200 mt-2 flex justify-between"
          >
            <div>
              <span>📁 {explorer.name}</span>
            </div>
            <div>
              <button
                class="border-2 border-black mr-2"
                onClick={(e) => handleAddNewFolder(e, true)}
              >
                Folder +
              </button>
              <button
                class="border-2 border-black "
                onClick={(e) => handleAddNewFolder(e, false)}
              >
                File +
              </button>
            </div>
          </div>

          <div
            style={{ display: expand ? "flex" : "none" }}
            class="pl-6 flex-col"
          >
            {showInput.isVisible && (
              <div>
                <span>{showInput.isFolder ? "📁" : "📄"}</span>
                <input />
              </div>
            )}
            {explorer.items.map((ele) => {
              return <Folder explorer={ele} />;
            })}
          </div>
        </div>
      ) : (
        <span>📄 {explorer.name}</span>
      )}
    </>
  );
}

export default Folder;
