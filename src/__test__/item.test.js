import { render, screen } from "@testing-library/react"
import { createRenderer } from "react-dom/test-utils"
import TodoItem from "../common/TodoItem"


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
        const actual =screen.findByRole("checkbox");
        expect(actual).not.toBeChecked();
        expect(actual).toBeInTheDocument();
       })

 })