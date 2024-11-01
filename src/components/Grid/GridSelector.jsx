import React, { useMemo, useState } from "react";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

function GridSelector() {
  const shape = useMemo(() => config.flat(Infinity), []);
  const [order, setOrder] = useState(new Set());
  function activeShape(event) {
    const { target } = event;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");
    if (index === null || status === "hidden") {
      return;
    }
    setOrder((prev) => {
      const newOrder = new Set(prev);
      newOrder.add(index);
      if (newOrder.size === shape.filter(Boolean).length) {
        deSelecting();
      }
      return newOrder;
    });
  }

  function deSelecting() {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const newOrder = new Set(prev);
        const firstItem = newOrder.values().next().value;
        // from last lastItem=Array.from(newOrder).pop()
        if (firstItem !== undefined) {
          newOrder.delete(firstItem);
        }
        return newOrder;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }
  return (
    <div
      onClick={activeShape}
      style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}
      class="grid gap-10 w-56 m-auto"
    >
      {shape.map((ele, index) => {
        const status = ele === 1 ? "visible" : "hidden";
        const isSelected = order.has(index.toString());
        return ele ? (
          <div
            style={{
              background: isSelected ? "green" : "white",
              border: isSelected ? "none" : "",
            }}
            class="border-2 border-black w-24 h-24"
            key={index}
            data-index={index}
            data-status={status}
          ></div>
        ) : (
          <span></span>
        );
      })}
    </div>
  );
}

export default GridSelector;
