import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodoItems = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "FETCH":
      return state.concat(action.todo);
    case "TodoDatePicker":
      state = [];
      return state.concat(action.todo);
    case "CREATE":
      console.log(action.todo.key);
      console.log(action.todo.id);
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodoItems);
  const nextId = useRef(1);

  /*
  useEffect(() => {
    console.log("fetch TodoItems");
    const fetchTodoItems = async () => {
      try {
        const response = await axios.get("/api/v1/todos");
        console.log(response.data);
        dispatch({ type: "FETCH", todo: response.data });
      } catch (e) {
        console.log(e);
      }
    };
    fetchTodoItems();
  }, []);
  */

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
