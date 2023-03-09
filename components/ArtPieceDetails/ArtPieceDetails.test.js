import ArtPieceDetails from ".";
import { screen, render } from "@testing-library/react";
import { useRouter } from "next/router";
const mockData = {
  slug: "orange-red-and-green",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  artist: "John Doe",
  name: "Fake Art",
};

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("The art piece title is displayed", () => {
  render(<ArtPieceDetails title="Painting Title" />);
  const artPieceDetailsTitle = screen.getByText("Painting Title");
  expect(artPieceDetailsTitle).toBeInTheDocument();
});

test("The art piece image is displayed", () => {
  render(<ArtPieceDetails image={mockData} />);
  const artPieceDetailsImage = screen.getByRole("img");
  expect(artPieceDetailsImage).toBeInTheDocument();
});

test("The art piece artist is displayed", () => {
  render(<ArtPieceDetails artist="John Doe" />);
  const artPieceDetailsArtist = screen.getByText("John Doe");
  expect(artPieceDetailsArtist).toBeInTheDocument();
});

test("The art piece year is displayed", () => {
  render(<ArtPieceDetails year="2023" />);
  const artPieceDetailsYear = screen.getByText("2023");
  expect(artPieceDetailsYear).toBeInTheDocument();
});

test("The art piece genre is displayed", () => {
  render(<ArtPieceDetails genre="abstract" />);
  const artPieceDetailsGenre = screen.getByText("abstract");
  expect(artPieceDetailsGenre).toBeInTheDocument();
});

test("The back-button is displayed", () => {
  render(<ArtPieceDetails />);
  const artPieceDetailsButton = screen.getByRole("button");
  expect(artPieceDetailsButton).toBeInTheDocument();
});
