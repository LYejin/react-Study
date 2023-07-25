import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';

const TodoList = ({ model }) => {
  const rowRenderer = ({ index, key, style }) => {
    const todo = model.state.list[index];
    return (
      <TodoListItem
        todo={todo}
        key={key}
        removeTodo={model.removeTodo}
        changeChecked={model.changeChecked}
        style={style}
      />
    );
  };
  return (
    // <div className="TodoList">
    //   {todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       key={todo.id}
    //       removeTodo={removeTodo}
    //       checkedTodo={checkedTodo}
    //     />
    //   ))}
    // </div>
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={model.state.list.length}
      rowHeight={57} // 하나의 크기, border 포함
      rowRenderer={rowRenderer}
      //list={model.state.list} 이게 중요한 게 아니었당
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
