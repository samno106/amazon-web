import { HeaderBackend, SidebarBackend } from "@/components/layouts/backend";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { BackendModalProvider } from "@/providers/backend-modal-provider";

export default function BackendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
    <BackendModalProvider/>
      <SidebarProvider>
        <SidebarBackend />
        <SidebarInset>
          <HeaderBackend />
          <main className="py-3 px-5">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
    
 
  );
}
