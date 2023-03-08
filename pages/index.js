import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/index";
import Spotlight from "../components/Spotlight";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(handleRandomPick());
  function handleRandomPick() {
    const randomArtNumber = Math.floor(Math.random() * data.length);
    return randomArtNumber;
  }
  return (
    <div>
      <Spotlight image={data.imageSource} artist={data.artist} />
      <ArtPieces pieces={data} />
    </div>
  );
}
