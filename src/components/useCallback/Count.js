import React from "react";

function Count({ text, count }) {
  console.log("count", text);
  return (
    <div>
      {text}-{count}
    </div>
  );
}

export default React.memo(Count);
