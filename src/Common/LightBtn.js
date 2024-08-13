import React from "react";
import "./style.css";
function LightBtn({text}) {
  return (
    <div>
      <button className='lightBtn'>{text}</button>
    </div>
  )
}

export default LightBtn;
