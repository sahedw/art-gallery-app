import React from "react";
import Image from "next/image";
import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <section>
      {pieces.map((piece) => {
        return (
          <ul key={piece.slug}>
            <ArtPiecePreview
              image={piece.imageSource}
              artist={piece.artist}
              title={piece.name}
            />
          </ul>
        );
      })}
    </section>
  );
}
