import './App.css';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import useModel from './useModel';

function App() {
  const model = useModel({
    list: [
      {
        id: 0,
        checked: false,
        title: '리엑트의 기초 알아보기 할일',
      },
    ],
  });

  return (
    <TodoTemplate>
      <TodoInsert insertTodo={model.insertTodo} />
      <TodoList
        todos={model.state.list}
        removeTodo={model.removeTodo}
        checkedTodo={model.checkTodo}
      />
    </TodoTemplate>
  );
}

export default App;
