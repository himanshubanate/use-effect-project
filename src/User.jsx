import React, { useEffect } from "react";

export default function User({name}) {
  useEffect(() => {
    document.title = name;
  }, [name]);
  return <h1>Hello {name}</h1>;
}
