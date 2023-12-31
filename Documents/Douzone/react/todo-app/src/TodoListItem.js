import React, { useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, removeTodo, checkedTodo, style }) => {
  const { title, checked } = todo;

  const onClickRemove = useCallback((e) => {
    removeTodo(todo.id);
  });

  const onClickCheck = (e) => {
    checkedTodo(todo.id);
  };

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className={cn('checkbox', { checked })} onClick={onClickCheck}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{title}</div>
        </div>
        <div className="remove" onClick={onClickRemove}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
