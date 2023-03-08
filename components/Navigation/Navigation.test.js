import Navigation from ".";
import { render, screen } from "@testing-library/react";

test(`navigation link labeled "Spotlight" is displayed`, () => {
  render(<Navigation />);
  const navigationSpotlight = screen.getByText("Spotlight");
  expect(navigationSpotlight).toBeInTheDocument();
});

test(`navigation link labeled "Pieces" is displayed`, () => {
  render(<Navigation />);
  const navigationPieces = screen.getByText("Pieces");
  expect(navigationPieces).toBeInTheDocument();
});
