import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRenderer } from "react-dom/test-utils";
import TodoItem from "../common/TodoItem";
import { done, todo } from "./testUtils";

describe("should return each item of to do task", () => {
  test("should return", () => {
    render(<TodoItem  todo={todo.at(0)}/>);
    const theFirsDiv = screen.getByRole("the__item");
    expect(theFirsDiv).toBeInTheDocument();
  });

  //TO-DO : Find to test snapshot
  test("should return an chekbox by an input", () => {
    render(<TodoItem todo={todo.at(0)} />);
    const checked = screen.getByRole("checkbox")
    expect(checked).toBeInTheDocument();
  });

  test("should return a simple  checkbox", () => {
    render(<TodoItem todo={todo.at(0)}/>);
    const actual = screen.getByRole("checkbox");
    expect(actual).toBeInTheDocument();
  });

  test("should checked the checkbox", () => {
    render(<TodoItem todo={done.at(0)}/>);
    const actual = screen.getByRole("checkbox");
    expect(actual).toBeChecked();
  });

  test("should return the item value", () => {
    render(<TodoItem todo={todo.at(0)} />);
    console.log(todo.at(0).value);
    const toLabelValue = screen.findByRole("todovalue");
    console.log(toLabelValue);
    expect(toLabelValue).toBeInTheDocument();
  });

  test("should return a remover button to remove done task", () => {
    render(<TodoItem todo={done.at(0)} />);
    const actualStatus = screen.getByRole("remove_area");
    expect(actualStatus).toContainHTML(
      '<p class="pointer"  role="remove_area">x</p>'
    );
  });

});
