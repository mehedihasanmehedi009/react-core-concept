import "./App.css";
import Counter from "./count";
import PlayAer from "./play";
import play from "./play";

function App() {
  function handleClick() {
    alert(" I am  clicked");
  }
  const handleClick3 = () => {
    alert("Click Now");
  };

  const handleClick4 = (num) => {
    const number = num + 45;
    alert(number);
  };

  return (
    <>
      <PlayAer></PlayAer>
      <Counter></Counter>

      {/* <button onClick="handleClick()">click me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("I am click2");
        }}
      >
        {" "}
        Click 2
      </button>
      <button onClick={handleClick3}>Click Now Button</button>
      <button
        onClick={() => {
          alert(" Click4");
        }}
      >
        Click Now Button4
      </button>
      <button onClick={() => handleClick4(50)}>Button Click</button>
    </>
  );
}

export default App;
