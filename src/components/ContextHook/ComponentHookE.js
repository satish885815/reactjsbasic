import React, { useContext } from "react";
import { UserContext } from "../Context/userContex";
function ComponentHookE() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>{user}</h1>
      ComponentHookE
    </div>
  );
}

export default ComponentHookE;
