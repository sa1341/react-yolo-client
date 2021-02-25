import React, { useReducer, createContext, useContext } from "react";

const rouletteState = [
  { foodName: "북청", color: "lightcoral", segmentDeg: "0deg" },
  { foodName: "맥도날드", color: "#dddddd", segmentDeg: "45deg" },
  { foodName: "제비면가", color: "lightgreen", segmentDeg: "90deg" },
  { foodName: "소호", color: "lightseagreen", segmentDeg: "135deg" },
  { foodName: "소공동", color: "#dddddd", segmentDeg: "180deg" },
  { foodName: "북어천국", color: "lightsalmon", segmentDeg: "225deg" },
  { foodName: "이태리 김치찌개", color: "lightpink", segmentDeg: "270deg" },
  { foodName: "굶기", color: "#dddddd", segmentDeg: "315deg" },
];

function rouletteReducer(state, action) {
  switch (action.type) {
    case "rotateRoulette":
      return state;
    default:
      return null;
  }
}

const RouletteStateContext = createContext();
const RouletteDispatchContext = createContext();

export const RouletteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rouletteReducer, rouletteState);

  return (
    <>
      <RouletteStateContext.Provider value={state}>
        <RouletteDispatchContext.Provider value={dispatch}>
          {children}
        </RouletteDispatchContext.Provider>
      </RouletteStateContext.Provider>
    </>
  );
};

export const useRouletteState = () => {
  const context = useContext(RouletteStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useRouletteDispatch = () => {
  const context = useContext(RouletteDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
