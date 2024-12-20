"use client";

import { BaseLogo } from "@/components/layouts/logos";
import SearchBar from "./_components/search-bar";
import DropdownLang from "./_components/dropdown-lang";
import Profile from "./_components/profile";
import { EnIcon, KhIcon } from "@/components/icons/flags";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const langauges = [
  {
    icon: <EnIcon />,
    label: "English",
    value: "EN",
  },
  {
    icon: <KhIcon />,
    label: "Khmer",
    value: "KH",
  },
];

const Navbar =  ({ categories }: CategoryModelProps) => {

  const { data: session } =  useSession()

  return (
    <nav className="md:px-5 px-2 flex items-center justify-between bg-primary py-1.5">
      {/* logo */}
      <div className="flex items-center md:w-[20%] ">
        <BaseLogo link="/" className="w-14 md:w-10" />
        <span className="text-white font-medium">Kmazon</span>
      </div>
      {/* logo */}
      {/* search */}
      <SearchBar categories={categories} />
      {/* search */}
      {/* lang and profile */}
      <div className="md:w-[35%] w-[20%] flex items-center justify-end space-x-5 md:pl-5 pl-1">
        <div className="md:block hidden">
          <DropdownLang langauges={langauges} />
        </div>
        <div className="relative">
          <div className="p-1 bg-rose-500 absolute rounded-full left-1 top-1.5 border border-primary"></div>
          <Button
            size={"icon"}
            className="hover:bg-[#2a2a2a] hover:text-white bg-primary text-white"
          >
            <Heart />
          </Button>
        </div>
        <div className="relative">
          <div className="p-1 min-w-3.5 w-auto h-3.5 bg-rose-500 absolute rounded-full left-[10%] top-1 text-[7px] text-white text-center items-center flex justify-center border border-primary">
            <span>5</span>
          </div>

          <Button className="hover:bg-[#2a2a2a] hover:text-white bg-primary text-white">
            <ShoppingBag className="size-6" />
          </Button>
        </div>
          {!session ? (<Button asChild>
            <Link href="sign-in">Sign in</Link>
          </Button>): (<Profile user={session?.user} />) }

      </div>
      {/* lang and profile */}
    </nav>
  );
};

export default Navbar;
