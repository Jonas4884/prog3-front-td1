import { render, screen } from "@testing-library/react";
import App from "../App";


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
});