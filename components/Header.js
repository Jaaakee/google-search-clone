import { useRouter } from "next/router";
import { useRef } from "react";

import Image from "next/image";
import { MicrophoneIcon, SearchIcon, ViewGridIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-[#202124]">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full dark:bg-[#202124] dark:caret-white dark:text-white focus:outline-none"
            type="text"
          />

          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer
                transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />

          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <div className="ml-auto flex items-center">
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 dark:fill-white dark:hover:bg-gray-600 cursor-pointer"/>
          <Avatar url="https://i.stack.imgur.com/34AD2.jpg" />
        </div>
      </div>
      
        {/* Header Options */}
        <HeaderOptions />
    </header>
  );
}

export default Header;
