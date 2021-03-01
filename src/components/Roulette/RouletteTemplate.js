import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #000;
  margin-bottom: 10px;
`;

const loopAnimation = (totalDeg) => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(${totalDeg}deg);
  }
`;

const loopAnimationOptions = {
  fill: "forwards",
  duration: "7s",
  easing: "ease-in-out",
};

const RouletteTemplateBlock = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: white;
  border: 3px solid black;
  position: relative;
  ${(props) =>
    props.rotate &&
    css`
      ${console.log(props.rotate)};
      animation-name: ${loopAnimation(props.totalDeg)};
      animation-fill-mode: ${props.loopAnimationOptions.fill};
      animation-duration: ${props.loopAnimationOptions.duration};
      animation-timing-function: ${props.loopAnimationOptions.easing};
    `}
`;

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RouletteButton = styled.div`
  margin-top: 20px;
  font-size: 30px;
  border-radius: 15px;
  padding: 10px 20px;
  border: 3px solid black;
  cursor: pointer;
  background: white;
`;

const BASE_ROTATE_DEG = 7200;

const RouletteTemplate = ({ children }) => {
  const [rotate, setRotate] = useState(false);
  const [totalDeg, setTotalDeg] = useState(0);

  const rotateRoulette = () => {
    const selectedIdx = Math.floor(Math.random() * 7);
    const additionalDeg = 22.5 * (2 * (1 - selectedIdx) + 1);
    const totalDeg = BASE_ROTATE_DEG + additionalDeg;
    setTotalDeg(totalDeg);
    setRotate(!rotate);
  };
  return (
    <>
      <Container>
        <Arrow />
        <RouletteTemplateBlock
          rotate={rotate}
          loopAnimationOptions={loopAnimationOptions}
          totalDeg={totalDeg}
        >
          {children}
        </RouletteTemplateBlock>
        <RouletteButton onClick={rotateRoulette}>가즈아!!!</RouletteButton>
      </Container>
    </>
  );
};

export default RouletteTemplate;
