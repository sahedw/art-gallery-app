import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

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

  console.log(data);

  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
