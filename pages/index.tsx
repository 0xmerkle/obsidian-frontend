import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import dynamic from "next/dynamic";

const AblyChatComponent = dynamic(
  () => import("../components/AblyChatComponent/AblyChatComponent"),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full p-8">
      <Head>
        <title>obsidan</title>
        <meta name="description" content="On-chain messaging primitive " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative h-full w-full">
        <div className="flex  w-full justify-center bg-sky-500">
          <div className="flex h-fit rounded-md border-8 border-stone-800 bg-stone-500 px-8 py-4 text-2xl font-bold text-white shadow-md">
            DAY 1 | 60s
          </div>
        </div>
        <div className="absolute bottom-0 left-0 flex w-[32rem] flex-col space-y-4">
          <div className="flex h-36 w-full flex-row space-x-2 rounded-md bg-stone-800 p-2 shadow-md">
            <div className="flex h-full w-full flex-col rounded-md bg-stone-500 p-2">
              <p className="font-bold text-white">Dead</p>

              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-orange-400"></div>
                <p className="text-xs text-white">Sandra: Killer</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-orange-400"></div>
                <p className="text-xs text-white">Alfred: Innocent</p>
              </div>
            </div>
            <div className="flex h-full w-full flex-col overflow-scroll rounded-md bg-stone-500 p-2">
              <p className="font-bold text-white">Alive</p>

              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-white"></div>
                <p className="text-xs text-white">Soju</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-white"></div>
                <p className="text-xs text-white">Cheikh</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-white"></div>
                <p className="text-xs text-white">Merk</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-white"></div>
                <p className="text-xs text-white">Caleb</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-white"></div>
                <p className="text-xs text-white">Merk</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-white"></div>
                <p className="text-xs text-white">Caleb</p>
              </div>
            </div>
          </div>
          <div className="flex h-72 w-full flex-col space-y-2 rounded-md bg-stone-800 p-2 shadow-md">
            <div className="flex h-full w-full flex-col space-y-2 rounded-md bg-stone-500 p-4">
              <div className="flex w-full flex-row items-center justify-start rounded-md bg-orange-600 px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-orange-400"></div>
                <p className="text-xs text-white">lmao 6 ur a troll</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-sky-400"></div>
                <p className="text-xs text-white">why???</p>
              </div>
              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-red-400"></div>
                <p className="text-xs text-white">bc 7 8 9</p>
              </div>
            </div>
            <div className="h-fit w-full rounded-md bg-stone-500 py-1 px-4">
              <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                <div className="mr-4 h-6 w-6 rounded-full bg-red-400"></div>
                <p className="text-xs text-white">Enter our chat HERE...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 flex w-[32rem] flex-col space-y-4">
          <div className="h-36 w-full rounded-md bg-stone-500 shadow-md"></div>
          <div className="h-72 w-full rounded-md bg-stone-500 shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
