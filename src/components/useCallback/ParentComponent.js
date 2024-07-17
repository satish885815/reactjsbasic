import React, { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(11);
  const handleClickAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const handleIncrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={handleClickAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={handleIncrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
