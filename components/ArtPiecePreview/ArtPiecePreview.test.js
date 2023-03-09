import ArtPiecePreview from ".";
import { screen, render } from "@testing-library/react";

const mockData = {
  slug: "orange-red-and-green",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  artist: "John Doe",
  name: "Fake Art",
};

test("Each art piece's title is displayed", () => {
  render(<ArtPiecePreview piece={mockData} />);
  const artPiecePreviewTitle = screen.getByRole("heading", {
    name: mockData.name,
  });
  expect(artPiecePreviewTitle).toBeInTheDocument();
});

test("Each art piece's image is displayed", () => {
  render(<ArtPiecePreview alt="art-piece" piece={mockData} />);
  const artPiecePreviewImage = screen.getByRole("img");
  expect(artPiecePreviewImage).toBeInTheDocument();
});

test("Each art piece's artist is displayed", () => {
  render(<ArtPiecePreview piece={mockData} />);
  const artPiecePreviewArtist = screen.getByText(mockData.artist);
  expect(artPiecePreviewArtist).toBeInTheDocument();
});
