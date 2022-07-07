import React from 'react';
import { Connector, useConnectors, useStarknet } from '@starknet-react/core';
const ConnectWallet: React.FC = () => {
    const { connect, connectors, disconnect } = useConnectors();
    const { account } = useStarknet();
    return (
        <div style={{ borderRadius: '10px', backgroundColor: 'whitesmoke', width: '30%', textAlign: 'center' }}>
            {account ? (
                <>
                    <div style={{ width: '500px', minWidth: '300px', maxLines: 2 }}>
                        <p>Connected Account: {account}</p>
                    </div>
                    <button
                        style={{
                            borderRadius: '10px',
                            fontWeight: 'bold',
                        }}
                        onClick={disconnect}
                    >
                        Disconnect
                    </button>
                </>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        maxWidth: '500px',
                        margin: '10px',
                        justifyContent: 'center',
                    }}
                >
                    {connectors.map((connector) =>
                        connector.available() ? (
                            <div key={connector.id()}>
                                <button key={connector.id()} onClick={() => connect(connector)}>
                                    Connect {connector.name()}
                                </button>
                            </div>
                        ) : (
                            <div>No supported wallets in this browser</div>
                        ),
                    )}
                </div>
            )}
        </div>
    );
};

export default ConnectWallet;
