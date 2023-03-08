import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ slug, piece }) {
  return (
    <>
      <li key={piece.slug}>
        <h4>{piece.name}</h4>
        <Link href={`/art-pieces/${slug}`}>
          <Image
            src={piece.imageSource}
            alt="art-piece"
            width={300}
            height={200}
          />
        </Link>

        <p>{piece.artist}</p>
      </li>
    </>
  );
}
