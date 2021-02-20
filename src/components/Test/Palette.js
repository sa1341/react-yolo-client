import React from "react";
import Color from "components/Test/Color";
import "./Palette.css";

const Palette = ({ colors, selected, onSelect }) => {
  const colorList = colors.map((color) => (
    <Color
      color={color}
      active={selected === color}
      onClick={() => onSelect(color)}
      key={color}
    />
  ));
  return <div className="palette">{colorList}</div>;
};

export default Palette;
