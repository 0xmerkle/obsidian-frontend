import React from 'react'
import { Connector, useConnectors, useStarknet } from '@starknet-react/core';
import {Button, Box} from "@chakra-ui/react"
const ConnectWallet: React.FC = () => {
  const { connect, connectors, disconnect } = useConnectors();
  const {account} = useStarknet()
  return (
    <Box gridArea={'c'}   backgroundColor='whitesmoke' borderRadius={'10px'}>
       {account ? (
        <div>
          <p>Connected Account: {account}</p>
          <Button onClick={disconnect}>Disconnect</Button>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '2rem' }}>
          {connectors.map((connector) =>
            connector.available() ? (
              <Box key={connector.id()}>
                <Button key={connector.id()} onClick={() => connect(connector)}>
                  Connect {connector.name()}
                </Button>
              </Box>
            ) : <Box height={200} width={300}>No supported wallets in this browser</Box>
          )}
        </div>
      )}
    </Box>
  )
}

export default ConnectWallet;