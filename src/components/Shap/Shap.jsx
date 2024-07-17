import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
function Shap({ data }) {
  const [selected, setSelected] = useState(new Set());
  function handleClick(e) {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");
    if (index == null || status === "hodden") {
      return;
    }
    setSelected((prev) => {
      return new Set(prev.add(index));
    });
  }
  useEffect(() => {
    if (selected.size === 0) return;

    const intervalId = setInterval(() => {
      setSelected((prev) => {
        const newSet = new Set(prev);
        const firstItem = newSet.values().next().value;
        if (firstItem !== undefined) {
          newSet.delete(firstItem);
        }
        return newSet;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [selected]);
  const shapData = useMemo(() => data.flat(Infinity));

  return (
    <div className="boxes" onClick={handleClick}>
      {shapData.map((box, index) => {
        const status = box === 1 ? "visible" : "hidden";
        const isSelected = selected.has(index.toString());
        return (
          <div
            className={`box ${status} ${isSelected && "selected"}`}
            key={index}
            data-index={index}
            data-status={status}
          ></div>
        );
      })}
    </div>
  );
}

export default Shap;
