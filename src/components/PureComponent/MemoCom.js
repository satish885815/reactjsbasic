import React from "react";

function MemoCom({ name }) {
  console.log("memo component");
  return <div>{name}</div>;
}

export default React.memo(MemoCom);
