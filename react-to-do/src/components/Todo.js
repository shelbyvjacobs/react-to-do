import React from 'react';

const Todo = ({text, completed, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="done-button">&#10003;</button>
            <button className="delete-button" onClick={deleteHandler}>X</button>
        </div>
    );
};

export default Todo;