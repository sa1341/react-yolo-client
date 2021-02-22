import React, { useState } from "react";
import "./Roulette.css";
import styled, { css, keyframes, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: sans-serif;
  background: #e9ecef;
}
`;

const loopAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(620deg);
  }
`;

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RouletteTemplate = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: white;
  border: 3px solid black;
  position: relative;
  ${(props) =>
    props.isAnimate &&
    css`
      animation-name: ${loopAnimation};
      animation-fill-mode: ${props.loopAnimationOptions.fill};
      border: 1px solid #38d9a9;
      animation-duration: ${props.loopAnimationOptions.duration};
      animation-timing-function: ${props.loopAnimationOptions.easing};
    `}
`;

const Content = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 260px;
  height: 260px;
  position: absolute;
  top: 20px;
  left: 20px;
  text-align: center;
  transform: rotate(-67deg);
`;

const Segment1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  -webkit-clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  transform: rotate(90deg);
  background: lightcoral;
`;

const Segment2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  -webkit-clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  transform: rotate(45deg);
  background: #dddddd;
`;

const Segment3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  -webkit-clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  ransform: rotate(90deg);
  background: lightgreen;
`;

const Segment4 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  -webkit-clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  transform: rotate(135deg);
  background: lightseagreen;
`;

const Segment5 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  -webkit-clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  transform: rotate(180deg);
  background: #dddddd;
`;

const Segment6 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  -webkit-clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  transform: rotate(225deg);
  background: lightsalmon;
`;

const Segment7 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  -webkit-clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  transform: rotate(270deg);
  background: lightpink;
`;

const Segment8 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  -webkit-clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  clip-path: polygon(0% 0%, 50% 50%, 0% 50%, 0% 0%);
  transform: rotate(315deg);
  background: #dddddd;
`;

const Line1 = styled.div`
  width: 300px;
  height: 3px;
  background: black;
  position: absolute;
  top: 149px;
  left: 0;
  transform: rotate(45deg);
`;

const Line2 = styled.div`
  width: 300px;
  height: 3px;
  background: black;
  position: absolute;
  top: 149px;
  left: 0;
  transform: rotate(90deg);
`;

const Line3 = styled.div`
  width: 300px;
  height: 3px;
  background: black;
  position: absolute;
  top: 149px;
  left: 0;
  transform: rotate(135deg);
`;

const Line4 = styled.div`
  width: 300px;
  height: 3px;
  background: black;
  position: absolute;
  top: 149px;
  left: 0;
  transform: rotate(180deg);
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #000;
  margin-bottom: 10px;
`;

const Trigger = styled.div`
  margin-top: 20px;
  font-size: 30px;
  border-radius: 15px;
  padding: 10px 20px;
  border: 3px solid black;
  cursor: pointer;
`;

// data from server
const ROUTLETTE_DATA = [
  "소호반점",
  0,
  "북청",
  "코엔라면",
  0,
  "담소",
  "교동",
  0,
];
const DEFAULT_TEXT_ZERO = "X";
const BASE_ROTATE_DEG = 7200;

const RouletteApp = () => {
  const [isAnimate, setAnimate] = useState(false);
  const [loopAnimation, setLoopAnimation] = useState(null);
  const [loopAnimationOptions, setLoopAnimationOptions] = useState(null);

  const onClickTrigger = () => {
    const selectedIdx = Math.floor(Math.random() * 7);
    const additionalDeg = 22.5 * (2 * (1 - selectedIdx) + 1);
    const totalDeg = BASE_ROTATE_DEG + additionalDeg;
    console.log(selectedIdx);
    console.log(additionalDeg);
    console.log(totalDeg);
    setAnimate(!isAnimate);
    setLoopAnimationOptions({
      fill: "forwards",
      duration: "7s",
      easing: "ease-in-out",
    });
    setLoopAnimation([
      { transform: "rotate(0deg)" },
      { transform: `rotate(${totalDeg}deg)` },
    ]);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Arrow />
        <RouletteTemplate
          isAnimate={isAnimate}
          loopAnimation={loopAnimation}
          loopAnimationOptions={loopAnimationOptions}
        >
          <Segment1>
            <Content>맥도날드</Content>
          </Segment1>
          <Segment2>
            <Content>X</Content>
          </Segment2>
          <Segment3>
            <Content>북청</Content>
          </Segment3>
          <Segment4>
            <Content>소호반점</Content>
          </Segment4>
          <Segment5>
            <Content>X</Content>
          </Segment5>
          <Segment6>
            <Content>탄탄맨</Content>
          </Segment6>
          <Segment7>
            <Content>코엔라면</Content>
          </Segment7>
          <Segment8>
            <Content>X</Content>
          </Segment8>
          <Line1 />
          <Line2 />
          <Line3 />
          <Line4 />
        </RouletteTemplate>
        <Trigger onClick={onClickTrigger}>가즈아!!</Trigger>
      </Container>
    </>
  );
};

export default RouletteApp;
