import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgeCheck, ChevronDown, CreditCard, ListOrdered, LogOut } from "lucide-react";
import Link from "next/link";

const Profile = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className=" focus:outline-none hover:bg-[#2a2a2a] hover:text-white text-white bg-primary flex items-center space-x-3  px-2 py-1.5 rounded-sm">
          <Avatar className="w-7 h-7 rounded-sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>
          <span className="text-white text-[12px] hidden md:block">Khit Samno</span>
          <ChevronDown className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[200px] w-auto" align="end">
          <DropdownMenuLabel className="flex items-center space-x-2">
          <Avatar className="w-6 h-6 rounded-sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>
          <span className="text-gray-600 text-[12px] font-medium">Khit Samno</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="my-1.5">
            <Link href="/" className="w-full flex items-center space-x-2">
              <BadgeCheck className="size-4"/>
              <span className="text-xs">Your account</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="my-1.5">
          <Link href="/" className="w-full flex items-center space-x-2">
              <ListOrdered className="size-4"/>
              <span className="text-xs">Your orders</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="my-1.5">
            <Link href="/" className="w-full flex items-center space-x-2">
              <CreditCard className="size-4"/>
              <span className="text-xs">Billing</span>
            </Link></DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button variant="ghost" size="sm" className="py-1 px-0 h-4 w-full text-left flex justify-start">
                <LogOut className="size-4"/>
                <span className="text-xs font-normal">Log out</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
