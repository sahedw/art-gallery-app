import React from "react";
import { useContext } from "react";
import { DataContext } from "../../pages/_app";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px;
`;

export default function ArtPieceDetails({ image, artist, title, year, genre }) {
  const router = useRouter();

  function handleClick() {
    router.push(`/art-pieces/`);
  }

  return (
    <>
      <StyledButton onClick={handleClick}>Back to all</StyledButton>
      <h4>{title}</h4>
      <p>
        <em>{year}</em>
      </p>
      <Image src={image} width={300} height={200} alt="picked artwork" />
      <p>{genre}</p>
      <p>
        <strong>{artist}</strong>
      </p>
    </>
  );
}
