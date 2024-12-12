"use client";

import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const NavCategory = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    axios
      .get("http://localhost:1337/api/categories")
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
    <div className="w-full px-5 bg-primary/90 border-t border-[#424242] flex items-center space-x-3 md:overflow-hidden overflow-scroll">
      <Button
        size="sm"
        variant={"ghost"}
        className="rounded-none text-white hover:bg-[#464646] hover:text-white"
      >
        <LayoutGrid className="size-3" />
        <span>All</span>
      </Button>
      <ul className="flex items-center space-x-3">
        {categories
          .filter((item) => item["name"] !== "All")
          .map((category, index) => (
            <li key={index} className="text-xs text-white ">
              <Link
                href={category["slug"]}
                className="w-full py-2 px-2.5 hover:bg-[#464646] text-nowrap"
              >
                {category["name"]}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavCategory;
