import React from "react";
import Image from "next/image";

export default function Spotlight({ image, artist }) {
  return (
    <ul>
      <li>
        <Image src={image} width={300} height={200} />
        <p>{artist}</p>
      </li>
    </ul>
  );
}
