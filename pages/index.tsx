import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css';

import dynamic from 'next/dynamic'
import ConnectWallet from '../components/ConnectWallet/ConnectWallet';
import PageContainer from '../components/Layout/PageContainer';
import { Box } from '@chakra-ui/react';

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent/AblyChatComponent'), { ssr: false });

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>obsidan</title>
        <meta name="description" content="On-chain messaging primitive " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        {/* <Box gridArea={'c'} h="100px"> */}
        <ConnectWallet />

        {/* </Box> */}
      <AblyChatComponent/>
      </PageContainer>


    </div>
  )
}

export default Home
