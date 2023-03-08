import React from "react";
import Image from "next/image";
import ArtPiecePreview from "../ArtPiecePreview/index";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return <ArtPiecePreview key={piece.slug} piece={piece} />;
      })}
    </ul>
  );
}
