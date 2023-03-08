import Image from "next/image";

export default function ArtPiecePreview({ piece }) {
  return (
    <>
      <li key={piece.slug}>
        <h4>{piece.name}</h4>
        <Image
          src={piece.imageSource}
          alt="art-piece"
          width={300}
          height={200}
        />
        <p>{piece.artist}</p>
      </li>
    </>
  );
}
