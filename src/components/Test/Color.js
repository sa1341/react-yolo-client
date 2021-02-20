import React from "react";

const Color = ({ color, active, onClick }) => {
  return (
    <div
      className={`color ${active && "active"}`}
      style={{ background: color }}
      onClick={onClick}
    ></div>
  );
};

export default Color;
