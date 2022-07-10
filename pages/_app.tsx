import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  StarknetProvider,
  getInstalledInjectedConnectors,
  InjectedConnector
} from "@starknet-react/core";
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);
    const [starknetConnectors, setStarknetConnectors] = useState<InjectedConnector[]>([]);
    useEffect(() => {
        const connectors = getInstalledInjectedConnectors();
        setStarknetConnectors(connectors);
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    const connectors = getInstalledInjectedConnectors();
    if (typeof window === 'undefined') {
        return <></>;
    } else {
        return (
            <StarknetProvider connectors={starknetConnectors}>

                    <Component {...pageProps} />

            </StarknetProvider>
        );
    }
    // return (
    //     <StarknetProvider connectors={starknetConnectors}>
    //         <ChakraProvider theme={theme}>
    //             <Component {...pageProps} />
    //         </ChakraProvider>
    //     </StarknetProvider>
    // );
}

export default MyApp;
