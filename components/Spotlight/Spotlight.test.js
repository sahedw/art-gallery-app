import Spotlight from ".";
import { screen, render } from "@testing-library/react";

const mockData = {
  slug: "orange-red-and-green",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  artist: "John Doe",
  name: "Fake Gemälde",
};

test("The art piece's image is displayed", () => {
  render(<Spotlight image={mockData.imageSource} />);
  const randomArtPieceImage = screen.getByRole("img");
  expect(randomArtPieceImage).toBeInTheDocument();
});

test("The art piece's artist is displayed", () => {
  render(<Spotlight artist={mockData.artist} />);
  const randomArtPieceArtist = screen.getByText(mockData.artist);
  expect(randomArtPieceArtist).toBeInTheDocument();
});
