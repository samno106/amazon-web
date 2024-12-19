import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Amazon Web",
  description: "Online Salling Products",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
