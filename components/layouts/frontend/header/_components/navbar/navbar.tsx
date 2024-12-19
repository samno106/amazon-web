"use client";

import { BaseLogo } from "@/components/layouts/logos";
import SearchBar from "./_components/search-bar";
import DropdownLang from "./_components/dropdown-lang";
import Profile from "./_components/profile";
import { EnIcon, KhIcon } from "@/components/icons/flags";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";

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

const Navbar = ({ categories }: CategoryModelProps) => {
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
            <div className="p-1 bg-rose-500 absolute rounded-full left-1.5 top-2.5 border border-primary"></div>
            <Button
              size={"icon"}
              className="hover:bg-[#2a2a2a] hover:text-white bg-primary text-white">
              <Heart />
            </Button>
          </div>
          <div className="relative">
            <div className="min-w-3.5 w-auto h-3.5 bg-rose-500 absolute rounded-full left-1 top-1 text-[8px] text-white text-center items-center flex justify-center border border-primary">
             <span>25+</span>
            </div>
            <Button
              size={"icon"}
              className="hover:bg-[#2a2a2a] hover:text-white bg-primary text-white">
              <ShoppingBag/>
            </Button>
          </div>
       
        <Profile />
      </div>
      {/* lang and profile */}
    </nav>
  );
};

export default Navbar;
