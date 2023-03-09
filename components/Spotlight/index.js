import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Spotlight({ slug, image, artist }) {
  return (
    <ul>
      <li>
        <Link href={`/art-pieces/${slug}`}>
          <Image
            src={image}
            width={300}
            height={200}
            alt="picture of the day"
          />
        </Link>
        <p>{artist}</p>
      </li>
    </ul>
  );
}
