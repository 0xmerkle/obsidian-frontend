import React from 'react';
import { Connector, useConnectors, useStarknet } from '@starknet-react/core';
import { Button, Box, Text } from '@chakra-ui/react';
const ConnectWallet: React.FC = () => {
    const { connect, connectors, disconnect } = useConnectors();
    const { account } = useStarknet();
    return (
        <Box gridArea={'c'} borderRadius={'10px'} maxWidth="">
            {account ? (
                <>
                    <Box width={'500px'} minWidth={'300px'} noOfLines={2}>
                        <Text>Connected Account: {account}</Text>
                    </Box>
                    <Button onClick={disconnect}>Disconnect</Button>
                </>
            ) : (
                <Box gridArea={'c'} display="flex" gap="2rem" maxWidth={'500px'} margin={'10px'}>
                    {connectors.map((connector) =>
                        connector.available() ? (
                            <Box key={connector.id()} gridArea="c">
                                <Button key={connector.id()} onClick={() => connect(connector)}>
                                    Connect {connector.name()}
                                </Button>
                            </Box>
                        ) : (
                            <Box height={200} width={300}>
                                No supported wallets in this browser
                            </Box>
                        ),
                    )}
                </Box>
            )}
        </Box>
    );
};

export default ConnectWallet;
