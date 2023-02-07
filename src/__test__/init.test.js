import { render, screen } from "@testing-library/react";
import TodoItem from "../common/TodoItem";
import { done, todo } from "./testUtils";
import renderer from 'react-test-renderer'
import userEvent from "@testing-library/user-event";
import App from "../App";
import { useState } from "react";

describe('should return main interface', () => {
    test('should return title TODO', () => { 
        render(<App/>);
        const titleTorender = screen.getByText("TODO");
    expect(titleTorender).toBeInTheDocument();
     })

    test('should return title DONE', () => { 
        render(<App/>);
        const titleTorender = screen.getByText("DONE");
    expect(titleTorender).toBeInTheDocument();
     })
     test('should match the initiate snapshot', () => { 
        const renderComponent = renderer.create(<App/>).toJSON();
        expect(renderComponent).toMatchSnapshot()
      })

     test("should remove item onClick", () => {
        useState = jest.fn()
        const [todos, setTodos] = useState([]);
        const removeTodo = (todoId) => {
            setTodos(currentTodos => currentTodos.filter(todo => todo.id !== todoId));
          };
        render(<TodoItem todo={todos.at(0)} onRemove={removeTodo} />);
        const actualStatus = screen.getByRole("remove_area");
        userEvent.click(actualStatus);
        expect(done.at(0).value).not.toBeInTheDocument();
      });
});