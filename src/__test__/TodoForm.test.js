import { fireEvent, render, screen } from "@testing-library/react";
import userEvent, { user } from "@testing-library/user-event";
import TodoForm from "../common/TodoForm";
import renderer from 'react-test-renderer'
describe("should return the todo add task", () => {
  test("should the input placeholder", () => {
    render(<TodoForm />);
    const thePlaceholder = screen.getByPlaceholderText("Add new task");
    expect(thePlaceholder).toBeInTheDocument();
  });

  test("should return a label value", () => {
    render(<TodoForm />);
    const toHaveaLabel = screen.getByLabelText("Press enter to add Task");
    expect(toHaveaLabel).toBeInTheDocument();
  });

  test("should return an input", () => {
    const addTodo = "jadd okoko";

    render(<TodoForm add={[addTodo]} />);
    const thePlaceholder = screen.getByPlaceholderText("Add new task");
    expect(thePlaceholder).toBeInTheDocument();
  });
 
  test("should can focus on the blank", () => {
    render(<TodoForm />);
    const input = document.querySelector("input")
    input.focus();
    expect(document.activeElement).toBe(input);
  });

  test("should can input on the blank", () => {
    render(<TodoForm />);
    const thePlaceholder = screen.getByPlaceholderText("Add new task");
    userEvent.type(thePlaceholder, "addnew todo");
    expect(thePlaceholder).toHaveValue();
  });

  test("should disapear the input on enter typing", () => {
    const addTodo = "jadd okoko";
    render(<TodoForm add={[]} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: addTodo } });
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    expect(input.innerHTML).toBe("");
  });

  test('should map a snapshot', () => { 
    const renderComponent = renderer.create(<TodoForm/>).toJSON();
    expect(renderComponent).toMatchSnapshot();
   })
});
