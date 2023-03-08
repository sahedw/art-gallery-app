import React from "react";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DataContext } from "../_app";

export default function ArtDetail() {
  const { data } = useContext(DataContext);
  const router = useRouter();
  const pickedArtPiece = data?.find((slug) => slug === router.query.slug);
  console.log(router.query.slug);
  return <ArtPieceDetails />;
}
