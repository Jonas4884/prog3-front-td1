import { TodoStatus } from "./utils/status";


const TodoItem = (props) => {
  const { onDone, todo, onRemove } = props;

  const toDone = () => {
    onDone && onDone(todo.id);
  };

  const remove = () => {
    onRemove && onRemove(todo.id);
  };

  return (
    <div className='todo__item todo__value'>
      <input type='checkbox' className='pointer' onClick={toDone} checked={todo.status === TodoStatus.DONE} id={todo.id.toString()} />
      <label className='item__value'>{todo.value}</label>
      {todo.status === TodoStatus.DONE && (
        <p className='ml-2 pointer' onClick={remove}>
          x
        </p>
      )}
    </div>
  );
};

export default TodoItem;
