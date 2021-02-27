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
  let count = 0;
  const { lineDegs } = props;
  const rouletteLines = lineDegs.map((lineDeg) => (
    <Line key={count++} lineDeg={lineDeg} />
  ));
  return <>{rouletteLines}</>;
};

export default RouletteLine;
