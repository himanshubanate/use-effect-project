import React from "react";
import { getColors } from "./colors";
import { useState, useEffect } from "react";
export default function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getColors().then((myData) => setData(myData));
    console.log("i am in use Effect!!!!!");
  }, []);
  return (
    <ul>
      {data.length > 0 ? (
        data.map((item) => <li key={item}>{item}</li>)
      ) : (
        <h3>Loading.......</h3>
      )}
    </ul>
  );
}
