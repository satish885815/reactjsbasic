import React, { useEffect, useMemo, useState } from "react";
import "./style.css";

function Shap({ data }) {
  const [selected, setSelected] = useState(new Set());
  const [counter, setCounter] = useState(0);

  function handleClick(e) {
    const { target } = e;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");

    if (index == null || status === "hidden") {
      return;
    }

    setSelected((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  }

  const shapeData = useMemo(() => data.flat(Infinity), [data]);

  useEffect(() => {
    const newCounter = shapeData.reduce((acc, curr) => {
      if (curr === 1) {
        acc += 1;
      }
      return acc;
    }, 0);
    setCounter(newCounter);
  }, [shapeData]);

  useEffect(() => {
    if (selected.size === 0 || counter === 0) return;

    if (selected.size === counter) {
      const intervalId = setInterval(() => {
        setSelected((prev) => {
          const newSet = new Set(prev);
          const firstItem = newSet.values().next().value;
          if (firstItem !== undefined) {
            newSet.delete(firstItem);
            setCounter((prevCounter) => prevCounter - 1);
          }
          return newSet;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [selected, counter, shapeData]);

  return (
    <div className="boxes" onClick={handleClick}>
      {shapeData.map((box, index) => {
        const status = box === 1 ? "visible" : "hidden";
        const isSelected = selected.has(index.toString());

        return (
          <div
            className={`box ${status} ${isSelected ? "selected" : ""}`}
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
