import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createRenderer } from "react-dom/test-utils"
import TodoItem from "../common/TodoItem"
import { done, todo } from "./testUtils"


describe('should return each item of to do task', () => { 
    
    test('should return', () => { 
        render(<TodoItem/>)
        // eslint-disable-next-line testing-library/await-async-query
        const theFirsDiv = screen.findByTestId("the__item");
        expect(theFirsDiv).toBeInTheDocument();
     })


     //TO-DO : Find to test snapshot
     test('should return an chekbox by an input', () => { 
        render(<TodoItem/>)
      })

      test('should return the checkbox', () => {
        render(<TodoItem/>)
        const actual =screen.getByRole("checkbox");
        expect(actual).not.toBeChecked();
        expect(actual).toBeInTheDocument();
       })


    test('should checked the checkbox', () => { 
        render(<TodoItem/>)
        const actual = screen.getByRole("checkbox");
        actual.click()
        expect(actual).toBeChecked();
     })


     test('should return the item value', () => { 
        const onDone = jest.fn();
        const onRemove = jest.fn();
       render(<TodoItem todo={[todo]} onDone={onDone} onRemove={onRemove}/>) 
        const toLabelValue = screen.getByLabelText("todo");
        expect(todo.filter(todo=>todo.value===toLabelValue)).not.toBeEmpty();
     })

     test('should return a remover button to remove done task', () => {
        render(<TodoItem todo={[done]}/>)
        const actualStatus = screen.getByRole("remove__area")
        expect(actualStatus).toContainHTML('<p className="pointer"  role={"remove_area"} onClick={remove}>x</p>')
      })

    test('should remove item onClick', () => { 
        const remove = jest.fn();
        const actualStatus = screen.getByRole("remove__area")
        render(<TodoItem todo={[done]} onRemove={remove}/>)
         userEvent.click(actualStatus)
       expect(done).toContainEqual([]);
     })
     
 })