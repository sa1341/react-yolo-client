import React from "react";
import { useRouletteState } from "components/Roulette/RouletteContext";
import RouletteFood from "components/Roulette/RouletteFood";

const RouletteFoodList = () => {
  const rouletteContext = useRouletteState();
  const foodList = rouletteContext.map((food) => <RouletteFood food={food} />);
  return <>{foodList}</>;
};

export default RouletteFoodList;
