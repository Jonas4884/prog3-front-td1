import { render, screen } from "@testing-library/react";
import TodoItemList from "../common/TodoList";
import TodoForm from "../common/TodoForm";
import { TodoStatus } from "../common/utils/status";
import { done, todo } from "./testUtils";
import renderer from 'react-test-renderer'
import userEvent from "@testing-library/user-event";

describe("the entire test for the list", () => {
  test("it should return the value of generic todo list", () => {
    render(<TodoItemList todos={todo} todoStatus={TodoStatus.DONE} />);
    const theactualValue = screen.getByRole("todo__array");

    expect(theactualValue).toBeInTheDocument();
  });
  test('should match todoitem snapshot', () => { 
    const renderComponent = renderer.create(<TodoItemList todos={todo} todoStatus={TodoStatus.DONE} />).toJSON();
    expect(renderComponent).toMatchSnapshot();
   })


  test("it should return the title for todo", () => {
    render(<TodoItemList todoStatus={TodoStatus.TODO} todos={todo} />);
    const titleTodo = screen.getByText("TODO");
    expect(titleTodo).toBeInTheDocument();
  });

  test("it should return action to to-do", () => {
    const addTodo = jest.autoMockOn();
    render(
      <TodoItemList
        actions={<TodoForm add={addTodo} />}
        todoStatus={TodoStatus.TODO}
        todos={todo}
      />
    );
    const actionArea = screen.getByRole("application");
    expect(actionArea).not.toBeEmpty();
  });

  test("it shouldn't return value if todo haven't task", () => {
    render(<TodoItemList todos={done} todoStatus={TodoStatus.TODO} />);
    const notaskActual = screen.getByText("No task");
    expect(notaskActual).toBeInTheDocument();
  });

  test("it should return a list of all todo", () => {
    render(
      <div>
        <TodoItemList todos={todo} todoStatus={TodoStatus.TODO} />
        <TodoItemList todos={todo} todoStatus={TodoStatus.DONE} />
      </div>
    );
    const renderItems1 = screen.getByText(todo[0].value);
    const renderItems2 = screen.getByText(todo[1].value);
    const renderItems3 = screen.getByText(todo[2].value);
    const renderItems4 = screen.getByText(todo[3].value);

    expect(renderItems1.innerHTML).toBe("task 1");
    expect(renderItems2.innerHTML).toBe("task 2");
    expect(renderItems3.innerHTML).toBe("task 3");
    expect(renderItems4.innerHTML).toBe("task 4");
  });

  test('When todo status === DONE', () => {
    const handleRemove = jest.fn(id => id);
    const todoToRemove = done[0];
    const todoMock = jest.fn();
    const toDone = jest.fn();
   
    render(
      <TodoItemList
        key= {todo.at(0).id}
        todoStatus={TodoStatus.DONE}
        todos={todo}
        actions={<TodoForm add={todoMock} />}
        onDone={toDone}
        onRemove={handleRemove}
      />
    );
    screen.getByText(TodoStatus.DONE.toString().toLocaleUpperCase());
    expect(screen.queryByText('No task')).toBeNull();
    userEvent.click(screen.getByRole("remove_area"));
    expect(handleRemove.mock.results[0].value).toEqual(todoToRemove.id);
  });


});
