import { useState } from 'react';
import TodoItemList from './common/TodoList';
import TodoForm from './common/TodoForm';
import { TodoStatus } from './common/utils/status';
import './assets/index1.css';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(currentTodos => [...currentTodos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== todoId));
  };

  const doneTodo = (todoId) => {
    const editTodos = (currentTodos) => {
      return currentTodos.map(todo => (todo.id !== todoId ? todo : { ...todo, status: TodoStatus.DONE }));
    };
    setTodos(editTodos);
  };

  return (
    <div className='container__around'>
      <div className='todo__list__content'>
        <TodoItemList actions={<TodoForm add={addTodo} />} todoStatus={TodoStatus.TODO} todos={todos} onDone={doneTodo} />
        <TodoItemList todoStatus={TodoStatus.DONE} todos={todos} onDone={doneTodo} onRemove={removeTodo} />
        <p>{
          
          JSON.stringify(todos)
          }</p>
      </div>
    </div>
  );
}

export default App;
