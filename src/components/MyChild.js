import React from "react";

const MyChild = React.memo(function MyChild({ onAlert }) {
  console.log("MyParent Child rendered!");
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h3>I am the MyParent Child component.</h3>
      <button onClick={onAlert}>Click me to alert</button>
    </div>
  );
});

export default MyChild;
