import React, { useState, useCallback } from "react";
import MyChild from "./MyChild";

function MyParent() {
  console.log("MyParent rendered!");

  const [count, setCount] = useState(0);

  const handleAlert = useCallback(() => {
    alert("Alert from MyParent Child component!");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>

      <MyChild onAlert={handleAlert} />
    </div>
  );
}

export default MyParent;
