import React from "react";
import ArtPieces from "../../components/ArtPieces";
import { useContext } from "react";
import { DataContext } from "../_app";
import styled from "styled-components";

export default function ArtPiecesPage() {
  const { data } = useContext(DataContext);
  const StyledSection = styled.section`
    margin-bottom: 100px;
  `;
  return (
    <StyledSection>
      <ArtPieces pieces={data} />
    </StyledSection>
  );
}
