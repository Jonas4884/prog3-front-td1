import { useState } from 'react';
import { TodoStatus } from './utils/status';



const TodoForm = (props) => {
  const [Todo, setTodoValue] = useState('');
  const { add } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Todo.length > 0) {
      add({ id: new Date().getTime(), status: TodoStatus.TODO, value: Todo });
      setTodoValue('');
    }
  };

  const handleChange = (event) => {
    setTodoValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input  className='todo__input' placeholder='Add new task' name='name' id='name' value={Todo} type='text' onChange={handleChange} />
        <label htmlFor="name" className='form__label'>Press enter to add Task</label>
    </form>
  );
};

export default TodoForm;
