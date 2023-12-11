import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quicks",
  description: "Messaging & To-do List app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} w-screen h-screen bg-chats-green`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
