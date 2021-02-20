import React from "react";
import styled from "styled-components";
import { useTodoState } from "components/TodoList/TodoContext";
import TodoItem from "components/TodoList/TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoItemList = () => {
  const todos = useTodoState();
  const todoItemList = todos.map((todoItem) => (
    <TodoItem
      key={todoItem.id}
      id={todoItem.id}
      text={todoItem.text}
      isDone={todoItem.isDone}
    />
  ));

  return <TodoListBlock>{todoItemList}</TodoListBlock>;
};

export default TodoItemList;
