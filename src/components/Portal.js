import React from "react";
import { createPortal } from "react-dom";

function Portal() {
  return createPortal(<h1>Portal Demo</h1>);
}
