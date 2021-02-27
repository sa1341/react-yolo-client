import React from "react";
import styled, { css } from "styled-components";
import { Edit } from "@material-ui/icons";
import { useRouletteDispatch } from "components/Roulette/RouletteContext";

const Content = styled.div`
  font-size: 26px;
  font-weight: bold;
  width: 260px;
  height: 260px;
  position: absolute;
  top: 160px;
  left: 80px;
  text-align: center;
  transform: rotate(-67deg);
`;

const Segment = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  -webkit-clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  transform: ${(props) =>
    css`
      rotate(${props.segmentDeg})
    `};
  background: ${(props) =>
    css`
      ${props.color}
    `};
`;

const RouletteFood = (props) => {
  const { foodName, color, segmentDeg, isEdit } = props.food;
  const dispatch = useRouletteDispatch();
  console.log(foodName);
  console.log(color);
  console.log(segmentDeg);
  console.log(isEdit);

  return (
    <>
      <Segment color={color} segmentDeg={segmentDeg}>
        <Content>
          {foodName}
          <Edit onClick={() => dispatch({ type: "TOGGLE" })}></Edit>
        </Content>
        ;
      </Segment>
    </>
  );
};

export default RouletteFood;
