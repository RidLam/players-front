import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import PlayerDetails from "../components/PlayerDetails";

describe(('Testing PlayerDetails component'), () =>{
  it(('should have a heading level 3'), () => {
    render(<PlayerDetails />);
    const paragraphElement = screen.getByRole('heading', { level: 3 });
    expect(paragraphElement).toBeInTheDocument();
  });

  it(('should have a paragraph Player details:'), () => {
    render(<PlayerDetails />);
    const paragraphElement = screen.getByText(/Player details:/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

