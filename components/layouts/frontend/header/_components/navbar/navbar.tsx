"use client";

import { BaseLogo } from "@/components/layouts/logos";
import SearchBar from "./_components/search-bar";
import DropdownLang from "./_components/dropdown-lang";
import Profile from "./_components/profile";
import { EnIcon, KhIcon } from "@/components/icons/flags";
import axios from "axios";
import { useEffect, useState } from "react";

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

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    axios
      .get("http://localhost:1337/api/categories?sort[0]=name")
      .then(({ data }) => {
        setCategories(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

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
      <div className="md:w-[30%] w-[20%] flex items-center justify-end space-x-5 md:pl-5 pl-1">
        <div className="md:block hidden">
          <DropdownLang langauges={langauges} />
        </div>
        <Profile />
      </div>
      {/* lang and profile */}
    </nav>
  );
};

export default Navbar;
