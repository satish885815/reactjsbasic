import React, { useMemo, useState } from "react";

function UseMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const handelIncrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const handelIncrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <div>
        <button onClick={handelIncrementOne}>Click{counterOne}</button>
        {isEven ? "Even" : "Odd"}
      </div>
      <div>
        <button onClick={handelIncrementTwo}>Click{counterTwo}</button>
      </div>
    </div>
  );
}

export default UseMemo;
