// import { Suspense } from "react";
import { Suspense } from "react";
import "./App.css";
import Counter from "./count";
import PlayAer from "./play";
// import Users from "./samari";
// import Friends from "./samari";
// import Boundu from "./samiri1";
import Post from "./post1";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );
// const friend = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//   res.json()
// );
// const fetchfrinds = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };
// const fatchname = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

const postName = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  return res.json();
};

function App() {
  const postPromise = postName();
  // const FriendsPromise = fetchfrinds();
  // const FriendsPromise = fatchname();
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
      {/* <Suspense fallback={<p>waiting for message...</p>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<p>Loading Now.....</p>}>
        <Friends friend={friend}></Friends>
      </Suspense> */}

      <Suspense fallback={<p>Post Loading....</p>}>
        <Post postPromise={postPromise}></Post>
      </Suspense>

      {/* <Suspense fallback={<p>Loading...</p>}>
        <Boundu FriendsPromise={FriendsPromise}></Boundu>
      </Suspense> */}
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
