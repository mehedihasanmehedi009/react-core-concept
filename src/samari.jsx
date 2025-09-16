// import { use } from "react";
//
// export default function Users({ fetchUsers }) {
//   const masses = use(fetchUsers);
//   return (
//     <div className="student">
//       <h2>Users:{masses.length}</h2>
//     </div>
//   );
// }
import { use } from "react";
import "./App.css";
export default function Friends({ friend }) {
  const counts = use(friend);
  return (
    <div className="student">
      <p>Count:{counts.length}</p>
    </div>
  );
}
