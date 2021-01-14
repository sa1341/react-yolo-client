import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate.js';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette.js';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: '  리액트 소개', checked: false },
      { id: 1, text: '  리액트 소개', checked: true },
      { id: 2, text: '  리액트 소개', checked: false }
    ],
    color: '#343a40'
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사
    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSelectColor = (color) => {
    console.log('selected Color', color);
    this.setState({
      color
    });
  }

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
        <TodoListTemplate 
          palette={(
           <Palette 
             colors={colors}
             selected={color}
             onSelect={handleSelectColor}
           />
          )} 
          form={(
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
          />)}
        >
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodoListTemplate>
    );
  }
}

export default App;