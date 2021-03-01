import React, { useReducer, createContext, useContext } from "react";

const rouletteState = [
  {
    id: 0,
    foodName: "북청",
    color: "lightcoral",
    segmentDeg: "0deg",
    isEdit: "false",
  },
  {
    id: 1,
    foodName: "맥도날드",
    color: "LightSlateGray",
    segmentDeg: "45deg",
    isEdit: "false",
  },
  {
    id: 2,
    foodName: "제비면가",
    color: "lightgreen",
    segmentDeg: "90deg",
    isEdit: "false",
  },
  {
    id: 3,
    foodName: "소호",
    color: "lightseagreen",
    segmentDeg: "135deg",
    isEdit: "false",
  },
  {
    id: 4,
    foodName: "소공동",
    color: "lightgoldenrodyellow",
    segmentDeg: "180deg",
    isEdit: "false",
  },
  {
    id: 5,
    foodName: "북어천국",
    color: "lightsalmon",
    segmentDeg: "225deg",
    isEdit: "false",
  },
  {
    id: 6,
    foodName: "이태리 김치찌개",
    color: "lightpink",
    segmentDeg: "270deg",
    isEdit: "false",
  },
  {
    id: 7,
    foodName: "굶기",
    color: "#dddddd",
    segmentDeg: "315deg",
    isEdit: "false",
  },
];

function rouletteReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      console.log("id: ", action.id);
      return state.map((foodItem) =>
        foodItem.id === action.id
          ? { ...foodItem, isEdit: !foodItem.isEdit }
          : foodItem
      );
    case "MODIFY":
      console.log("id: ", action.id);
      console.log("foodName: ", action.foodName);
      return state.map((foodItem) =>
        foodItem.id === action.id
          ? { ...foodItem, isEdit: !foodItem.isEdit, foodName: action.foodName }
          : foodItem
      );
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
    throw new Error("Cannot find RouletteStateProvider");
  }
  return context;
};

export const useRouletteDispatch = () => {
  const context = useContext(RouletteDispatchContext);
  if (!context) {
    throw new Error("Cannot find RouletteDispatchProvider");
  }
  return context;
};
