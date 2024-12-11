import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
const categories = [
  {
    name: "Mens",
    code: "mens",
  },
  {
    name: "Womens",
    code: "womens",
  },
  {
    name: "Kids",
    code: "kids",
  },
  {
    name: "Computer",
    code: "computer",
  },
  {
    name: "Mobile Phone",
    code: "mobile-phone",
  },
  {
    name: "Feshion",
    code: "feshion",
  },
];
const NavCategory = () => {
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
        {categories.map((category, index) => (
          <li key={index} className="text-xs text-white ">
            <Link href={"/"} className="w-full py-2 px-2.5 hover:bg-[#464646] text-nowrap">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavCategory;
