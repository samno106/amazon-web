import { BaseLogo } from "@/components/layouts/logos";
import SearchBar from "./_components/search-bar";
import DropdownLang from "./_components/dropdown-lang";
import Profile from "./_components/profile";
import { EnIcon, KhIcon } from "@/components/icons/flags";

const categories = [
  {
    name: "All",
    code: "all",
  },
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
];

const langauges = [
  {
    icon: <EnIcon/>,
    label: "English",
    value: "EN",
  },
  {
    icon: <KhIcon/>,
    label: "Khmer",
    value: "KH",
  },
];

const Navbar = () => {
  return (
    <nav className="px-5 flex items-center justify-between bg-primary py-1.5">
      {/* logo */}
      <div className="flex items-center w-[20%] ">
        <BaseLogo link="/" className=" w-10" />
        <span className="text-white font-medium">Kmazon</span>
      </div>
      {/* logo */}
      {/* search */}
      <SearchBar categories={categories} />
      {/* search */}
      {/* lang and profile */}
      <div className="w-[30%] flex items-center justify-end space-x-5 pl-5">
        <DropdownLang langauges={langauges} />
        <Profile />
      </div>
      {/* lang and profile */}
    </nav>
  );
};

export default Navbar;
