"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export const HeaderBackend = () => {

  const parthname = usePathname();

  return (
    <header className="flex h-10 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
          {parthname.split("/").length > 2 && (
            <>
            <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href={"/"+parthname.split("/")[1]} className=" capitalize text-xs">
            {parthname.split("/")[1]}
            </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            </>
            
          )}

          {
            parthname.split("/").length >=3 ?
            (
              <BreadcrumbItem>
              <BreadcrumbPage className=" capitalize text-xs">
              {parthname.split("/")[2]}
              </BreadcrumbPage>
            </BreadcrumbItem>
            ):(
              <BreadcrumbItem>
              <BreadcrumbPage className=" capitalize text-xs">
              {parthname.split("/")[1]}
              </BreadcrumbPage>
            </BreadcrumbItem>
            )
          }

          {/* {parthname.split("/").length} */}
            
            
            
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
};
export default HeaderBackend;
