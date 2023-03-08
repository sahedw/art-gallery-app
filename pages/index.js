import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/index";
import Spotlight from "../components/Spotlight";
import { useContext } from "react";
import { DataContext } from "./_app";

export default function SpotlightPage() {
  const { isLoading, data, error } = useContext(DataContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const randomNumberFromArray = handleRandomPick();

  function handleRandomPick() {
    const randomArtNumber = Math.floor(Math.random() * data.length);
    return randomArtNumber;
  }
  return (
    <div>
      <Spotlight
        image={data[randomNumberFromArray].imageSource}
        artist={data[randomNumberFromArray].artist}
      />
      {/* <ArtPieces pieces={data} /> */}
    </div>
  );
}
