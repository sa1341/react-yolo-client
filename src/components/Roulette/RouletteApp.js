import React, { useState } from "react";
import "./Roulette.css";
import styled, { css, keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
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
      border: 1px solid #38d9a9;
      color: #38d9a9;
      animation-duration: ${props.loopAnimationOptions.duration};
      animation-timing-function: ${props.loopAnimationOptions.easing};
      animation-name: ${slideUp};
      animation-fill-mode: ${props.loopAnimationOptions.fill};
    `}
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
    <div className="container">
      <div className="arrow"></div>
      <RouletteTemplate
        isAnimate={isAnimate}
        loopAnimation={loopAnimation}
        loopAnimationOptions={loopAnimationOptions}
      >
        <div className="fill fill_1">
          <div className="content">북청</div>
        </div>
        <div className="fill fill_2">
          <div className="content">X</div>
        </div>
        <div className="fill fill_3">
          <div className="content">코엔라면</div>
        </div>
        <div className="fill fill_4">
          <div className="content"></div>
        </div>
        <div className="fill fill_5">
          <div className="content"></div>
        </div>
        <div className="fill fill_6">
          <div className="content"></div>
        </div>
        <div className="fill fill_7">
          <div className="content"></div>
        </div>
        <div className="fill fill_8">
          <div className="content">소호반점</div>
        </div>
        <div className="line line_1"></div>
        <div className="line line_2"></div>
        <div className="line line_3"></div>
        <div className="line line_4"></div>
      </RouletteTemplate>
      <button className="trigger" onClick={onClickTrigger}>
        가즈아!!
      </button>
    </div>
  );
};

export default RouletteApp;
