import React from "react";
import Image from "next/image";
import ArtPiecePreview from "../ArtPiecePreview/index";

export default function ArtPieces({ pieces }) {
  /* if (!pieces) return <p>Loading art pieces...</p>; */

  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview slug={piece.slug} key={piece.slug} piece={piece} />
        );
      })}
    </ul>
  );
}
