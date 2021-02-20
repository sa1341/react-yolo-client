import React, { Component } from "react";
import TodoListTemplate from "components/Test/TodoListTemplate.js";
import Form from "components/Test/Form";
import TodoItemList from "components/Test/TodoItemList";
import Palette from "components/Test/Palette.js";
import Counter from "components/Test/Counter";
import Info from "components/Test/Info";

// 컴포넌트 외부에서 상수 변수 선언
const colors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

class App extends Component {
  id = 3;

  state = {
    input: "",
    todos: [
      { id: 0, text: "  리액트 소개", checked: false },
      { id: 1, text: "  리액트 소개", checked: true },
      { id: 2, text: "  리액트 소개", checked: false },
    ],
    color: "#343a40",
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사
    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  handleSelectColor = (color) => {
    console.log("selected Color", color);
    this.setState({
      color,
    });
  };

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor,
    } = this;
    return (
      <div>
        <Info />
        <Counter />
        <TodoListTemplate
          palette={
            <Palette
              colors={colors}
              selected={color}
              onSelect={handleSelectColor}
            />
          }
          form={
            <Form
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
              color={color}
            />
          }
        >
          <TodoItemList /* 여는 태그와 닫는 태그가 있는 JSX 표현에서 두 태그 사이의 내용은props.children이라는 특수한 prop으로 넘겨집니다.*/
            todos={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
