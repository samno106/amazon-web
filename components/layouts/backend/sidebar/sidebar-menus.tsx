"use client";

import { Banknote, BringToFront, Calendar, CircleDollarSign, Folder, FolderKanban, Home, Inbox, Layers2, LayoutGrid, Package, PackageSearch, Receipt, Search, Settings, ShoppingBag, SquareKanban, User2, Users2 } from "lucide-react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    head:"General",
    menu:[
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutGrid,
      },
      {
        title: "Category",
        url: "/dashboard/category",
        icon: Layers2,
      },
    ]
  },
  {
    head:"Product",
    menu:[
      {
        title: "Products",
        url: "/dashboard/product",
        icon: Package,
      },
      {
        title: "Products Feature",
        url: "#",
        icon: PackageSearch,
      },
      {
        title: "Attribute",
        url: "#",
        icon: FolderKanban,
      },
      {
        title: "Attribute Type",
        url: "#",
        icon: SquareKanban,
      },
      {
        title: "Order",
        url: "#",
        icon: ShoppingBag,
      },
      {
        title: "Payment",
        url: "#",
        icon: CircleDollarSign,
      },
    ]
  },
  {
    head:"Other",
    menu:[
      {
        title: "Dicount",
        url: "#",
        icon: Receipt,
      },
      {
        title: "Currency",
        url: "#",
        icon: Banknote,
      },
     
    ]
  },
  {
    head:"Access Control",
    menu:[
      {
        title: "Users",
        url: "#",
        icon: User2,
      },
      {
        title: "Customers",
        url: "#",
        icon: Users2,
      },
     
    ]
  }
  
];
export function SidebarMenus() {

  const pathname = usePathname()

  return (
    <SidebarContent>
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
        {
          items.map((item,index)=>(
            <div key={index}>
               <SidebarGroupLabel className="text-[10px]">{item.head}</SidebarGroupLabel>
               <SidebarGroupContent>
                <SidebarMenu>
                  {item.menu.map((menu) => (
                    <SidebarMenuItem key={menu.title} >
                      <SidebarMenuButton asChild isActive={pathname === menu.url ?true:false}>
                        <Link href={menu.url} replace={false}>
                          <div className="w-3">
                          <menu.icon className="w-3.5"/>
                          </div>
                          <span className="text-[11px] font-medium">{menu.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </div>
          ))
        }
       
        
      </SidebarGroup>
    </SidebarContent>
  );
}
