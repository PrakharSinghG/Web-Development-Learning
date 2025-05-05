import React, { useState } from "react";

function Buttons({ color, setColor }) {
  return (
    <button
      onClick={() => setColor(color)}
      className="outline-none px-4 py-1 rounded-full text-white"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
}

export default Buttons;
