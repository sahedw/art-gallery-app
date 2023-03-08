import GlobalStyle from "../styles";
import useSWR from "swr";
import { createContext } from "react";

export const DataContext = createContext();

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  return (
    <>
      <GlobalStyle />
      <DataContext.Provider value={{ data, error, isLoading }}>
        <Component {...pageProps} />
      </DataContext.Provider>
    </>
  );
}
