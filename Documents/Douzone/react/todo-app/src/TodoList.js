import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, removeTodo, checkedTodo }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          checkedTodo={checkedTodo}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
