import { useState } from "react";

export default function PlayAer() {
  const [run, getRun] = useState(0);
  const [six, getSix] = useState(0);
  const [Singles, getSingles] = useState(0);
  const [four, getFour] = useState(0);

  const lock = () => {
    getRun(run + 1);
    getSingles(Singles + 1);
  };
  const lok = () => {
    getRun(run + 4);
    getFour(four + 1);
  };
  const loks = () => {
    getRun(run + 6);
    getSix(six + 1);
  };
  return (
    <div>
      <h1>This is result</h1>
      <h3>
        <small> six :{six}</small>
      </h3>
      <h3>
        <small> Singles :{Singles}</small>
      </h3>
      <h2>
        <small> Four :{four}</small>
      </h2>
      {run > 50 && <p>Mehedi score:50</p>}
      {run > 50 && <p>hossen score:45</p>}
      <h2>Score:{run}</h2>
      <button onClick={lok}>four run</button>
      <button onClick={lock}>Singles run</button>
      <button onClick={loks}>six run</button>
    </div>
  );
}
