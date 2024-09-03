import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import { ThemeProvider } from "@/components/providers";
import AppWalletProvider from "@/components/appWalletProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChainRent",
  description: "ChainRent: Where NFTs Work for You",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color="#fff" height={2} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AppWalletProvider>{children}</AppWalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
