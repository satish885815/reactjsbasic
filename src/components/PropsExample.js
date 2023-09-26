import React from "react";

function PropsExample(props) {
  //destructer the name from props
  const { name } = props;
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default PropsExample;
