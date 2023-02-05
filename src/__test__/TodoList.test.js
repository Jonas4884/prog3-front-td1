import { render, screen } from "@testing-library/react";
import TodoItemList from "../common/TodoList";
import TodoForm from "../common/TodoForm";
import { TodoStatus } from "../common/utils/status";
import { done, todo } from "./testUtils";
import { useState } from "react";

describe("the entire test for the list", () => {
  // TODO : this first would be a snapshot test
  test("it should return the value of generic todo list", () => {
    render(<TodoItemList todos={todo} todoStatus={TodoStatus.DONE} />);
    const theactualValue = screen.getByRole("todo__array");

    // TODO : handle that it is a heading
    const theHeading = screen.getByRole("heading");
    expect(theactualValue).toBeInTheDocument();
  });

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

  //TODO : have checking test
  // TODO : onDone/toDone test
  // TODO : oneremove
});
