import React from "react";

function Title() {
  console.log("title");
  return <div>Hello Guy's</div>;
}

export default React.memo(Title);
