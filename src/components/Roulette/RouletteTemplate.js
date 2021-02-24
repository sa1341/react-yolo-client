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

const loopAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(620deg);
  }
`;

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
      animation-name: ${loopAnimation};
      animation-fill-mode: ${props.loopAnimationOptions.fill};
      border: 1px solid #38d9a9;
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
`;

const RouletteTemplate = ({ children }) => {
  const [rotate, setRotate] = useState(false);
  const rotateRoulette = () => setRotate(!rotate);

  return (
    <>
      <Container>
        <Arrow />
        <RouletteTemplateBlock>{children}</RouletteTemplateBlock>
        <RouletteButton rotate={rotate} onClick={rotateRoulette}>
          가즈아!!!
        </RouletteButton>
      </Container>
    </>
  );
};

export default RouletteTemplate;
