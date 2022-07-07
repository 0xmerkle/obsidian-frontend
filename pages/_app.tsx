import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  StarknetProvider,
  getInstalledInjectedConnectors,
} from "@starknet-react/core";

function MyApp({ Component, pageProps }: AppProps) {
  const connectors = getInstalledInjectedConnectors();

  return (
    <StarknetProvider>
      <Component {...pageProps} />
    </StarknetProvider>
  );
}

export default MyApp;
