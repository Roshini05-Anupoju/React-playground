import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  function click() {
    setShow(!show);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={click}>"show/hide"</button>
      {show && <h2>Start editing to see some magic happen!</h2>}
    </div>
  );
}