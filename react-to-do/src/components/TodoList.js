import React from 'react';
import Todo from '../components/Todo'

const TodoList = ({todos, setTodos}) => {
  
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo text={todo.text} key={todo.id} completed={todo.completed} todo={todo} todos={todos} setTodos={setTodos}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;