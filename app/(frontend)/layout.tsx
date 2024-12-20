import { Header } from "@/components/layouts/frontend";
import { FrontendModalProvider } from "@/providers/frontend-modal-provider";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <FrontendModalProvider />
      <Header />
      <main>{children}</main>
    </div>
  );
}
