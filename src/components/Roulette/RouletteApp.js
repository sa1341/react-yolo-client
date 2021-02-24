import React from "react";
import { createGlobalStyle } from "styled-components";
import { RouletteProvider } from "components/Roulette/RouletteContext";
import RouletteTemplate from "components/Roulette/RouletteTemplate";
import RouletteFoodList from "components/Roulette/RouletteFoodList";
import RouletteLine from "components/Roulette/RouletteLine";

const GlobalStyle = createGlobalStyle`
body {
  font-family: sans-serif;
  background: #e9ecef;
}
`;

const lineDegs = ["45deg", "90deg", "135deg", "180deg"];

const RouletteApp = () => {
  return (
    <>
      <RouletteProvider>
        <GlobalStyle />
        <RouletteTemplate>
          <RouletteFoodList />
          <RouletteLine lineDegs={lineDegs} />
        </RouletteTemplate>
      </RouletteProvider>
    </>
  );
};

export default RouletteApp;
