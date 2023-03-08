import React from "react";
import Image from "next/image";
import ArtPiecePreview from "../ArtPiecePreview/index";

export default function ArtPieces({ pieces }) {
  return pieces.map((piece) => {
    return (
      <ul key={piece.slug}>
        <ArtPiecePreview piece={piece} />
      </ul>
    );
  });
}
