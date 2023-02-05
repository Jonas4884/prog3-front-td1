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
    <div className='todo__item todo__value' role={"the__item"}>
      <input name="todo" type='checkbox' className='pointer' onClick={toDone} checked={todo.status === TodoStatus.DONE} id={todo.id.toString()} />
      <label htmlFor="todo"  className='item__value' role={"todovalue"}>{todo.value}</label>
      {todo.status === TodoStatus.DONE && (
        <p className='pointer'  role={"remove_area"} onClick={remove}>
          x
        </p>
      )}
    </div>
  );
};

export default TodoItem;
