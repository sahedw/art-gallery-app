import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
`;
const StyledListItem = styled.li``;

export default function Navigation() {
  return (
    <>
      <StyledList>
        <StyledListItem>
          <Link href="/">Spotlight</Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="/art-pieces">Pieces</Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="#">Favorites</Link>
        </StyledListItem>
      </StyledList>
    </>
  );
}
