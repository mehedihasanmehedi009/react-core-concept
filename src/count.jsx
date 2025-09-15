import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const counterStyle = {
    border: "2px solid red ",
    borderRadius: "12px",
  };
  return (
    <div style={counterStyle}>
      <h2> Counter{count}:</h2>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
