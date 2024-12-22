import { HeaderBackend, SidebarBackend } from "@/components/layouts/backend";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function BackendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <SidebarBackend />
      <SidebarInset>
        <HeaderBackend />
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
