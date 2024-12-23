import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { BaseLogo } from "../../logos";
import { SidebarUser } from "./sidebar-user";
import { auth } from "@/lib/auth";
import { SidebarMenus } from "./sidebar-menus";

export const SidebarBackend = async () => {
  const session = await auth();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-2">
          <div className="rounded-lg bg-primary">
            <BaseLogo link="/dashboard" className="w-6 h-6 " />
          </div>
          <span className="text-primary font-medium">Kmazon</span>
        </div>
      </SidebarHeader>
      <SidebarMenus />
      <SidebarSeparator/>
      <SidebarFooter>
        <SidebarUser user={session?.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};
