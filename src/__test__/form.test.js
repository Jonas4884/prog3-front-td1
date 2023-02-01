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
      
 })