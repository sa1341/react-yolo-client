import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Edit } from "@material-ui/icons";
import { useRouletteDispatch } from "components/Roulette/RouletteContext";
import DoneIcon from "@material-ui/icons/Done";
import TextField from "@material-ui/core/TextField";

const Content = styled.div`
  font-size: 26px;
  font-weight: bold;
  width: 280px;
  height: 288px;
  position: relative;
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
  const { id, foodName, color, segmentDeg, isEdit } = props.food;
  const [input, setInput] = useState(foodName);
  const dispatch = useRouletteDispatch();

  console.log(id);
  console.log(foodName);
  console.log(color);
  console.log(segmentDeg);
  console.log(isEdit);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const modifyFoodItem = () => {
    dispatch({ type: "MODIFY", id: id, foodName: input });
  };

  return (
    <>
      <Segment color={color} segmentDeg={segmentDeg}>
        {isEdit ? (
          <Content key={id}>
            {foodName}
            <Edit
              weight="light"
              onClick={() => dispatch({ type: "TOGGLE", id: id })}
            ></Edit>
          </Content>
        ) : (
          <>
            <Content key={id}>
              <TextField
                style={{
                  width: "100px",
                  height: "100px",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
                onChange={onChange}
                value={input}
              />
              <DoneIcon onClick={modifyFoodItem} />
            </Content>
          </>
        )}
        ;
      </Segment>
    </>
  );
};

export default React.memo(RouletteFood);
