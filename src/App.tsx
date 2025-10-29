import { useState } from "react";

export const App = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  const push = () => {
    setArr((prevState) => [...prevState, 1]);
  };
  return (
    <>
      <h3>{arr}</h3>
      <button onClick={push}>Push</button>
    </>
  );
};
