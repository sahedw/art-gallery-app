import React from "react";
import Navigation from "../Navigation";
import styled from "styled-components";

export default function Layout() {
  const StyledNav = styled.nav`
    position: fixed;
    bottom: 0;
    background-color: grey;
    height: 80px;
    width: 100%;
  `;

  return (
    <StyledNav>
      <Navigation />
    </StyledNav>
  );
}
