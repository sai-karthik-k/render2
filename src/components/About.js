import React, { useState, useCallback } from "react";

// Child component used only by About.js
const AboutChild = React.memo(function AboutChild({ count, onIncrement, onAlert }) {
  console.log("About Child rendered");

  return (
    <div style={{ border: "1px solid green", padding: "10px", marginTop: "10px" }}>
      <h3>About Child Component</h3>
      <h2>Count: {count}</h2>
      <button onClick={onIncrement}>Increase Count</button>
      <button onClick={onAlert}>Show Alert</button>
    </div>
  );
});

export default function About() {
  console.log("About Parent rendered");

  const [count, setCount] = useState(0);

  const handleAlert = useCallback(() => {
    alert("Hello from About Child!");
  }, []);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <AboutChild count={count} onIncrement={increment} onAlert={handleAlert} />
    </div>
  );
}
