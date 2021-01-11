import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({ id, text, checekd }) => (
                <TodoItem
                  id={id}
                  text={text}
                  checekd={checekd}
                  onToggle={onToggle}
                  onRemove={onRemove}
                  key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;