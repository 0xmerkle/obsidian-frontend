import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import dynamic from 'next/dynamic';
import ConnectWallet from '../components/ConnectWallet/ConnectWallet';
import PageContainer from '../components/Layout/PageContainer';
import Image from 'next/image';

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent/AblyChatComponent'), { ssr: false });

const Home: NextPage = () => {
    return (
        <div className="mx-auto overflow-x-hidden">
            <Head>
                <title>obsidan</title>
                <meta name="description" content="On-chain messaging primitive " />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image alt="" className="h-screen w-full object-cover" layout="fill" src="/bg.jpg" />
            <div className="h-screen w-full p-8">
                <div className="relative h-full w-full">
                    <div className="flex w-full justify-center">
                        <div className="flex h-fit flex-row items-center justify-center space-x-4 rounded-md bg-lava-texture px-8 py-4 text-2xl text-white shadow-md">
                            <p className="font-bold">Day 1</p> <div className="h-4 w-px bg-white" /> <p>60s</p>
                        </div>
                    </div>
                    <ConnectWallet />
                    <div className="absolute bottom-0 left-0 flex w-[32rem] flex-col space-y-4">
                        <div className="flex h-12 w-full flex-row space-x-2 rounded-md bg-lava-texture p-2 shadow-md">
                            <div className="flex h-full w-full items-center rounded-md bg-stone-500 p-2 text-white shadow-inner">
                                <span>
                                    You are <b className="text-green-400 text-shadow-md">innocent.</b>
                                </span>
                            </div>
                        </div>
                        <div className="flex h-36 w-full flex-row space-x-2 rounded-md bg-lava-texture p-2 shadow-md">
                            <div className="flex h-full w-full flex-col rounded-md bg-stone-500 p-2 shadow-inner">
                                <p className="font-alagard font-bold text-white">Dead</p>
                                <div className="mb-2 h-px w-full bg-white" />

                                <div className="h-full overflow-scroll scrollbar-thin scrollbar-thumb-stone-600 scrollbar-track-stone-900">
                                    <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                                        <ProfileIcon image={'/soju.png'} />
                                        <p className="text-xs text-white">
                                            Caleb: <b className="text-red-400 text-shadow-md">Killer</b>
                                        </p>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                                        <ProfileIcon image={'/soju.png'} />
                                        <p className="text-xs text-white text-shadow-md">
                                            Soju: <b className="text-green-400">Innocent</b>
                                        </p>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-start rounded-md px-2 py-1 ">
                                        <ProfileIcon image={'/soju.png'} />
                                        <p className="text-xs text-white text-shadow-md">
                                            Cheikh: <b className="text-green-400">Innocent</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-full w-full flex-col rounded-md bg-stone-500	 p-2 shadow-inner">
                                <p className="font-bold text-white">Alive</p>
                                <div className="mb-2 h-px w-full bg-white" />

                                <div className="h-full overflow-scroll scrollbar-thin scrollbar-thumb-stone-600 scrollbar-track-stone-900">
                                    <div className="flex w-full flex-row items-center justify-between rounded-md py-1 pl-2 pr-4 ">
                                        <div className="flex flex-row items-center space-x-1">
                                            <ProfileIcon image={'/soju.png'} />
                                            <p className="text-xs text-white">Soju</p>
                                        </div>
                                        <button className="rounded-full bg-stone-600 px-2 py-0.5 text-xs text-white text-shadow-md">
                                            Vote
                                        </button>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-between rounded-md py-1 pl-2 pr-4 ">
                                        <div className="flex flex-row items-center space-x-1">
                                            <ProfileIcon image={'/merkle.png'} />
                                            <p className="text-xs text-white">Merkle</p>
                                        </div>
                                        <button className="rounded-full bg-stone-600 px-2 py-0.5 text-xs text-white text-shadow-md">
                                            Vote
                                        </button>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-between rounded-md py-1 pl-2 pr-4 ">
                                        <div className="flex flex-row items-center space-x-1">
                                            <ProfileIcon image={'/cheikh.jpeg'} />
                                            <p className="text-xs text-white">Cheikh</p>
                                        </div>
                                        <button className="rounded-full bg-stone-600 px-2 py-0.5 text-xs text-white text-shadow-md">
                                            Vote
                                        </button>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-between rounded-md py-1 pl-2 pr-4 ">
                                        <div className="flex flex-row items-center space-x-1">
                                            <ProfileIcon image={'/soju.png'} />
                                            <p className="text-xs text-white">Caleb</p>
                                        </div>
                                        <button className="rounded-full bg-stone-600 px-2 py-0.5 text-xs text-white text-shadow-md">
                                            Vote
                                        </button>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-between rounded-md py-1 pl-2 pr-4 ">
                                        <div className="flex flex-row items-center space-x-1">
                                            <ProfileIcon image={'/cheikh.jpeg'} />
                                            <p className="text-xs text-white">Cheikh</p>
                                        </div>
                                        <button className="rounded-full bg-stone-600 px-2 py-0.5 text-xs text-white text-shadow-md">
                                            Vote
                                        </button>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-between rounded-md py-1 pl-2 pr-4 ">
                                        <div className="flex flex-row items-center space-x-1">
                                            <ProfileIcon image={'/soju.png'} />
                                            <p className="text-xs text-white">Caleb</p>
                                        </div>
                                        <button className="rounded-full bg-stone-600 px-2 py-0.5 text-xs text-white text-shadow-md">
                                            Vote
                                        </button>
                                    </div>
                                    <div className="flex w-full flex-row items-center justify-between rounded-md py-1 pl-2 pr-4 ">
                                        <div className="flex flex-row items-center space-x-1">
                                            <ProfileIcon image={'/merkle.png'} />
                                            <p className="text-xs text-white">Merkle</p>
                                        </div>
                                        <button className="rounded-full bg-stone-600 px-2 py-0.5 text-xs text-white text-shadow-md">
                                            Vote
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-72 w-full rounded-md bg-lava-texture p-2 shadow-md">
                            <AblyChatComponent />
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 flex w-[32rem] flex-col space-y-4">
                        <div className="flex h-36 w-full items-center justify-center rounded-md bg-stone-500 shadow-md">
                            <h1 className="text-4xl text-white">Discussion</h1>
                        </div>
                        <div className="h-72 w-full rounded-md bg-stone-500 shadow-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export interface ProfileIconProps {
    image: string;
}

export const ProfileIcon = ({ image }: ProfileIconProps) => {
    return (
        <div className="relative mr-4 h-6 w-6">
            <Image alt="" src={image} layout="fill" className="h-full w-full rounded-full object-cover" />
        </div>
    );
};

export default Home;
