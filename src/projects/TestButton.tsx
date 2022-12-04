import React from "react";

function handleClick(message:string) {
    console.log(message);
  }
  
  function TestButton() {
    return <button onClick={()=>handleClick('you clicked me')}>Click Me!</button>;
  }

  export default TestButton;