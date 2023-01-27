import TodoItem from './TodoItem';

const TodoItemList = (props) => {
  const { todoStatus, todos, onDone, onRemove, actions } = props;
  const currentTodos = todos.filter(todo => todo.status === todoStatus);
  return (
    <div className='todo__array' style={{ padding: '.5rem' }}>
      <h1>{todoStatus.toString().toUpperCase()}</h1>
      <div className='actions'>{actions}</div>
      <div>
        {currentTodos.length > 0 ? (
          currentTodos.map((todo, index) => <TodoItem onRemove={onRemove} key={'input' + index + todo.id} todo={todo} onDone={onDone} />)
        ) : (
          <p className='message-mutted'>No task</p>
        )}
      </div>
    </div>
  );
};

export default TodoItemList;
