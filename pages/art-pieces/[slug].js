import React from "react";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "../_app";

export default function ArtDetail() {
  const { data } = useContext(DataContext);
  const router = useRouter();
  const artPiece = data?.find(({ slug }) => slug === router.query.slug);

  if (!artPiece) {
    return <h4>Sorry but -{router.query.slug}- is not a working keyword</h4>;
  }
  return (
    <>
      <ArtPieceDetails
        artist={artPiece.artist}
        image={artPiece.imageSource}
        title={artPiece.name}
        year={artPiece.year}
        genre={artPiece.genre}
      />
    </>
  );
}
