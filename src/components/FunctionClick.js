import React from "react";

function FunctionClick() {
  const clickHandler = () => {
    console.log("Button Click");
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      {/* Don't Call function like below this automaticaly called without onClick*/}
      {/* <button onClick={clickHandler()}></button> */}
    </div>
  );
}

export default FunctionClick;
