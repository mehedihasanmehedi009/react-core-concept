import { use } from "react";
import Post2 from "./post2";
import "./App.css";
export default function Post({ postPromise }) {
  const cp = use(postPromise);
  return (
    <div className=" student">
      <h3>All Post Now : {cp.length}</h3>
      {cp.map((Posts) => (
        <Post2 Posts={Posts}></Post2>
      ))}
    </div>
  );
}
