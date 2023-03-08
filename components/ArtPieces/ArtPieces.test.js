import ArtPieces from ".";
import { render, screen } from "@testing-library/react";

const mockData = [
  {
    slug: "orange-red-and-green",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    artist: "John Doe",
    name: "Fake Gemälde",
  },
];

test("All art pieces are displayed as a list", () => {
  render(<ArtPieces pieces={mockData} />);
  const artPieces = screen.getByRole("list");
  expect(artPieces).toBeInTheDocument();
});

/* test("renders a heading", () => {
    render(<TemperatureUnitConverter />);
    const heading = screen.getByRole("heading", {
      name: /temperature unit converter/i,
    });
    expect(heading).toBeInTheDocument();
  });  */
