import React, { useMemo, useState, useEffect } from "react";

const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

function GridSelector() {
  const shape = config.flat(Infinity);
  const [order, setOrder] = useState(new Set());

  const activeShape = (event) => {
    const { target } = event;
    const index = target.getAttribute("data-index");
    const status = target.getAttribute("data-status");

    if (index === null || status === "hidden") {
      return;
    }

    setOrder((prev) => {
      const newOrder = new Set(prev);
      newOrder.add(index);

      // Trigger deselection when all visible cells are selected
      if (newOrder.size === shape.filter(Boolean).length) {
        startDeselecting();
      }
      return newOrder;
    });
  };

  function startDeselecting() {
    setDeselecting(true);
  }

  // Use useEffect to handle the deselection interval
  const [deselecting, setDeselecting] = useState(false);

  useEffect(() => {
    if (!deselecting) return;

    const interval = setInterval(() => {
      setOrder((prev) => {
        const newOrder = new Set(prev);
        const firstItem = newOrder.values().next().value;

        if (firstItem !== undefined) {
          newOrder.delete(firstItem);
        }

        // Stop deselecting when all items are deselected
        if (newOrder.size === 0) {
          clearInterval(interval);
          setDeselecting(false);
        }

        return newOrder;
      });
    }, 300);

    // Cleanup interval when component unmounts or on next render
    return () => clearInterval(interval);
  }, [deselecting]);

  return (
    <div
      onClick={activeShape}
      style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      className="grid gap-10 w-56 m-auto"
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
            className="border-2 border-black w-24 h-24"
            key={index}
            data-index={index}
            data-status={status}
          ></div>
        ) : (
          <span key={index}></span>
        );
      })}
    </div>
  );
}

export default React.memo(GridSelector);
