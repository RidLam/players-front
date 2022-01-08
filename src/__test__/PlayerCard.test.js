import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import PlayerCard from "../components/PlayerCard";

describe(('Player Card'), () =>{
  const player ={
    "id": 52,
    "firstname": "Novak",
    "lastname": "Djokovic",
    "shortname": "N.DJO",
    "sex": "M",
    "country": {
      "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/Serbie.png",
      "code": "SRB"
    },
    "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/Djokovic.jpg",
    "data": {
      "rank": 2,
      "points": 2542,
      "weight": 80000,
      "height": 188,
      "age": 31,
      "last": [1, 1, 1, 1, 1]
    }
  };
  render(<PlayerCard player={player}/>);
  it("should have a heading", () => {
      const headingElement = screen.getByRole('heading', { level: 4});
      expect(headingElement).toBeInTheDocument();
  });

  it(('should have a rank paragraph'), () => {
    render(<PlayerCard player={player}/>);
    const paragraphElement = screen.getByText(/N: 2/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

