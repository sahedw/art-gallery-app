import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <li>{title}</li>
      <li>
        <Image src={image} alt="art-piece" width={300} height={200} />
      </li>
      <li>{artist}</li>
    </>
  );
}
