import React, { useReducer, createContext, useContext } from "react";

const rouletteState = [
  {
    foodName: "북청",
    color: "lightcoral",
    segmentDeg: "0deg",
    isEdit: "false",
  },
  {
    foodName: "맥도날드",
    color: "#dddddd",
    segmentDeg: "45deg",
    isEdit: "false",
  },
  {
    foodName: "제비면가",
    color: "lightgreen",
    segmentDeg: "90deg",
    isEdit: "false",
  },
  {
    foodName: "소호",
    color: "lightseagreen",
    segmentDeg: "135deg",
    isEdit: "false",
  },
  {
    foodName: "소공동",
    color: "#dddddd",
    segmentDeg: "180deg",
    isEdit: "false",
  },
  {
    foodName: "북어천국",
    color: "lightsalmon",
    segmentDeg: "225deg",
    isEdit: "false",
  },
  {
    foodName: "이태리 김치찌개",
    color: "lightpink",
    segmentDeg: "270deg",
    isEdit: "false",
  },
  { foodName: "굶기", color: "#dddddd", segmentDeg: "315deg", isEdit: "false" },
];

function rouletteReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      alert("수정 모드!!");
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
