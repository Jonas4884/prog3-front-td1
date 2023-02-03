import { render, screen } from "@testing-library/react"
import {user} from "@testing-library/user-event"
import TodoForm from "../common/TodoForm"

describe('should return the todo add task', () => { 

    test('should the input placeholder', () => {
        render(<TodoForm/>)
        const thePlaceholder = screen.getByPlaceholderText("Add new task")
        expect(thePlaceholder).toBeInTheDocument();
     })

     test('should return a label value', () => {
        render(<TodoForm/>)
        const toHaveaLabel = screen.getByLabelText("Press enter to add Task");
        expect(toHaveaLabel).toBeInTheDocument();
      })

      test('should return a value after focusing on input',  () => {
          const addTodo = "jadd okoko"

        render(<TodoForm add={[addTodo]}/>)
        const thePlaceholder = screen.getByPlaceholderText("Add new task")
        expect(thePlaceholder).toBeInTheDocument();
        expect(addTodo).toBeInTheDocument();
      })

      
      test('should disapear the input on enter typing',  () => {
        const addTodo = "jadd okoko"
      render(<TodoForm add={[addTodo]}/>)
      const thePlaceholder = screen.getByPlaceholderText("Add new task")
      thePlaceholder.onmouseenter()
      expect(thePlaceholder).toBeInTheDocument();
     expect(addTodo).not.toBeInTheDocument();
    })

    
      

      
 })