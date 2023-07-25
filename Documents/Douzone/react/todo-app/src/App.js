import './App.css';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import useModel from './useModel';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0,
      title: '리엑트의 기초 알아보기 할일 ' + i,
    });
  }
  return array;
};

function App() {
  const model = useModel({
    list: createBulkTodos(),
  });

  return (
    <TodoTemplate>
      <TodoInsert insertTodo={model.insertTodo} />
      <TodoList model={model} />
    </TodoTemplate>
  );
}

export default App;
