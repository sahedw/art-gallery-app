import GlobalStyle from "../styles";
import { createContext } from "react";
import ArtPieceDataContextProvider from "../contexts/ArtPieceDataContext.js";

export const ArtPiecesDataContext = createContext();

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ArtPieceDataContextProvider>
        <Component {...pageProps} />
      </ArtPieceDataContextProvider>
    </>
  );
}
