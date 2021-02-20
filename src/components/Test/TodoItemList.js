import React from "react";
import TodoItem from "components/Test/TodoItem";

const TodoItemList = ({ todos, onToggle, onRemove }) => {
  const todoList = todos.map(({ id, text, checked, color }) => (
    <TodoItem
      id={id}
      text={text}
      checked={checked}
      color={color}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  ));
  console.log("TodoList rendering...");
  return <div>{todoList}</div>;
};

export default React.memo(TodoItemList);
