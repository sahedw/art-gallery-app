import ArtPieceDetails from ".";
import { screen, render } from "@testing-library/react";
import { useRouter } from "next/router";

const title = "Painting Title";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("The art piece title is displayed", () => {
  render(<ArtPieceDetails title="Painting Title" />);
  const artPieceDetailsTitle = screen.getByText("Painting Title");
  expect(artPieceDetailsTitle).toBeInTheDocument();
});
