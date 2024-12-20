("");
import { signOut } from "next-auth/react";
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
import {
  BadgeCheck,
  ChevronDown,
  CreditCard,
  Heart,
  ListOrdered,
  LogOut,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";

const Profile = ({ user }: any) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className=" focus:outline-none hover:bg-[#2a2a2a] hover:text-white text-white bg-primary flex items-center space-x-3  px-2 py-1.5 rounded-sm">
          <Avatar className="w-7 h-7 rounded-sm">
            <AvatarImage src={user.image} />
            <AvatarFallback className="rounded-sm text-xs bg-[#2a2a2a] border border-[#181818]">
              {user.name.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
          <span className="text-white text-[12px] hidden md:block">
            {user.name}
          </span>
          <ChevronDown className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[200px] w-auto" align="end">
          <DropdownMenuLabel className="flex items-center space-x-2">
            <Avatar className="w-6 h-6 rounded-sm">
              <AvatarImage src={user.image} />

              <AvatarFallback className="rounded-sm text-xs bg-gray-300">
                {user.name?.slice(0, 1)}
              </AvatarFallback>
            </Avatar>
            <span className="text-gray-600 text-[12px] font-medium">
              {user.name}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="my-1.5">
            <Link href="/" className="w-full flex items-center space-x-2">
              <BadgeCheck className="size-4" />
              <span className="text-xs">Your account</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="my-1.5">
            <Link href="/" className="w-full flex items-center space-x-2">
              <Heart className="size-4" />
              <span className="text-xs">Your wishlists</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="my-1.5">
            <Link href="/" className="w-full flex items-center space-x-2">
              <ShoppingBag className="size-4" />
              <span className="text-xs">Your carts</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="my-1.5">
            <Link href="/" className="w-full flex items-center space-x-2">
              <ListOrdered className="size-4" />
              <span className="text-xs">Your orders</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="my-1.5">
            <Link href="/" className="w-full flex items-center space-x-2">
              <CreditCard className="size-4" />
              <span className="text-xs">Billing</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button
              onClick={async () => await signOut()}
              variant="ghost"
              size="sm"
              className="py-1 px-0 h-4 w-full text-left flex justify-start"
            >
              <LogOut className="size-4" />
              <span className="text-xs font-normal">Log out</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
