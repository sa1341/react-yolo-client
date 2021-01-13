import React, { Component } from 'react';
import Palette from './Palette';
import './TodoListTemplate.css';


const TodoListTemplate = ({form, children, palette}) => {   
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할일
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;