import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "components/TodoList/TodoTemplate";
import TodoHead from "components/TodoList/TodoHead";
import TodoItemList from "components/TodoList/TodoItemList";
import TodoCreate from "components/TodoList/TodoCreate";
import { TodoProvider } from "components/TodoList/TodoContext";
import TodoDatePicker from "components/TodoList/TodoDatePicker";

const TodoApp = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;

  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoItemList />
          <TodoCreate />
        </TodoTemplate>
        <TodoDatePicker />
      </TodoProvider>
    </>
  );
};

export default TodoApp;
