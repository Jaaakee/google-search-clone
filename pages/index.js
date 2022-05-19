import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import Avatar from "../components/Avatar";
import MainFooter from "../components/MainFooter";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const { transcript } = useSpeechRecognition();
  
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="dark:bg-[#202124] flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Header */}
      <header className="flex w-full p-2 pl-6 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <a href="https://github.com/jakeva/google-search-clone">
            <p className="link dark:text-white">About</p>
          </a>
          <p className="link dark:text-white">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link dark:text-white">Gmail</p>
          <p className="link dark:text-white">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 fill-[#5f6368] dark:fill-white dark:hover:bg-gray-600 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://i.stack.imgur.com/34AD2.jpg" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />

        <div
          className="flex w-full mt-5
        hover:shadow-lg focus-within:shadow-lg max-w-md
        rounded-full border border-gray-200 px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            defaultValue={transcript}
            key={`transcript:${transcript}`}
            className="flex-grow dark:bg-[#202124] dark:caret-white dark:text-white focus:outline-none"
          />
          <MicrophoneIcon
            onClick={SpeechRecognition.startListening}
            className="h-5 text-blue-500 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button
            onClick={search}
            className="btn dark:bg-[#303134] dark:text-white"
          >
            Google Search
          </button>
          <button
            onClick={search}
            className="btn dark:bg-[#303134] dark:text-white"
          >
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <MainFooter />
    </div>
  );
}
