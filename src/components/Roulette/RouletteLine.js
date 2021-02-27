import React from "react";
import styled, { css } from "styled-components";

const Line = styled.div`
  width: 700px;
  height: 3px;
  background: black;
  position: absolute;
  top: 349px;
  left: 0;
  ${(props) => css`
    transform: rotate(${props.lineDeg});
  `}
`;

const RouletteLine = (props) => {
  const { lineDegs } = props;
  const rouletteLines = lineDegs.map((lineDeg) => <Line lineDeg={lineDeg} />);
  return <>{rouletteLines}</>;
};

export default RouletteLine;
