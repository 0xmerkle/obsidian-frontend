import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { StarknetProvider, getInstalledInjectedConnectors, InjectedConnector } from '@starknet-react/core';
import { ChakraProvider } from '@chakra-ui/react';

import { extendTheme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: '#776037',
        800: '#AF9F5D',
        700: '#f5f5f5',
    },
};

const theme = extendTheme({ colors });

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
                <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </StarknetProvider>
        );
    }
    return (
        <StarknetProvider connectors={starknetConnectors}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </StarknetProvider>
    );
}

export default MyApp;
