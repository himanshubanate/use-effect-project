import React from "react";

export  function getColors() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const colors = ["green", "red", "blue", "yellow"];
      resolve(colors);
    }, 3000);
  });
  return p;
}
