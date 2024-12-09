import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Profile = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className=" focus:outline-none hover:bg-[#2a2a2a] hover:text-white text-white bg-primary flex items-center space-x-3  px-2 py-1.5 rounded-sm">
          <Avatar className="w-7 h-7 rounded-sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>
          <span className="text-white text-[12px]">Khit Samno</span>
          <ChevronDown className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
