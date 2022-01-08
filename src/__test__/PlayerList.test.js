import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import PlayerList from "../components/PlayerList";

describe(('Testing PlayerList component'), () =>{
  it(('should have a heading leval 3'), () => {
    render(<PlayerList />);
    const paragraphElement = screen.getByRole('heading', { level: 3 });
    expect(paragraphElement).toBeInTheDocument();
  });

  it(('should have a paragraph Players list'), () => {
    render(<PlayerList />);
    const paragraphElement = screen.getByText(/Players list/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

