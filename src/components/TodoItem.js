import React from 'react';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <div className="todo-content">
        <div className="todo-header">
          <div className="todo-title">{todo.text}</div>
          <div className="todo-actions">
            <button onClick={() => completeTodo(index)}>{todo.isCompleted ? 'Undo' : 'Complete'}</button>
            <button onClick={() => removeTodo(index)}>x</button>
          </div>
        </div>
        <div className="todo-details">
          <div className="todo-tag">{todo.tag}</div>
          <div className="todo-due-date">{todo.dueDate}</div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
