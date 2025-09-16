import { use } from "react";
import Friend from "./friend";
import "./App.css";
export default function Boundu({ FriendsPromise }) {
  const oun = use(FriendsPromise);
  return (
    <div className="student">
      <h3>Bon:{oun.length}</h3>
      {oun.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
}
