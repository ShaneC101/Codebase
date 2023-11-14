"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Search from "./search";
import { AiOutlineSearch } from "react-icons/ai";
import { GlobalContext } from "@/app/context";

export default function Navbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter();
  const pathName = usePathname();

  const {setPageLoader} = useContext(GlobalContext);

  const menuItems = [
    {
      id: "home",
      tite: "Home",
      path: "/browse",
    },
    {
      id: "tv",
      tite: "TV",
      path: "/tv",
    },
    {
      id: "movies",
      tite: "Movies",
      path: "/movies",
    },
    {
      id: "my-list",
      tite: "My List",
      path: "/mylist",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrolly > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <header
        className={`header ${isScrolled && "bg-[#141414]"} hover:bg-[#141414]`}
      >
        <div className="flex items-center space-x-2 md:space-x-10">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            alt="NETFLIX"
            className="cursor-pointer object-contain"
            onClick={() => router.push("/browse")}
          />
          <ul className="hidden md:space-x-4 md:flex cursor-pointer">
            {menuItems.map((item) => (
              <li
                className="cursor-pointer text-[16px] font-light text-[#e5e5e5] transistion duration-[.4s] hover:text-[#b3b3b3]"
                key={item.id}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-light flex items-center space-x-4 text-sm">
          {showSearchBar ? (
            <Search
              pathName={pathName}
              router={router}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setPageLoader={setPageLoader}
              setShowSearchBar={setShowSearchBar}
            />
          ) : (
            <AiOutlineSearch conClick={()=>setShowSearchBar(true)} className="hidden sm:inline sm:w-6 sm:h-6 cursor-pointer" />
          )}
        </div>
      </header>
    </div>
  );
}
