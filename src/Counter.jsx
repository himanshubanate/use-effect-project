import React, { useState } from "react";

export default function Counter() {
  const [name, setName] = useState(" ");
  const [hits, setHits] = useState(0);

  return (
    <>
      input: <input onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setHits(hits + 1)}>Hit Me</button>
      <br />
      <br />
      <label html for="">{`${name} have hit  ${hits} time`}</label>
    </>
  );
}
