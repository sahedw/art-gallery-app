import React from "react";
import { useSWR } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArtPieceDataContextProvider({ children }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  return (
    <ArtPieceDataContextProvider.Provider value={{ data, error, isLoading }}>
      {children}
    </ArtPieceDataContextProvider.Provider>
  );
}
