import React from "react";
import ArtPieces from "../../components/ArtPieces";
import { useContext } from "react";
import { DataContext } from "../_app";

export default function ArtPiecesPage() {
  const { data } = useContext(DataContext);
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
