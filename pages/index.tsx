import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css';

import dynamic from 'next/dynamic'

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent/AblyChatComponent'), { ssr: false });

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>obsidan</title>
        <meta name="description" content="On-chain messaging primitive " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AblyChatComponent/>

      <footer className={styles.footer}>
        <a>
          Obsidian
        </a>
      </footer>
    </div>
  )
}

export default Home
