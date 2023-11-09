"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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
            onClick={()=> router.push('/browse')}
          />
        </div>
      </header>
    </div>
  );
}
