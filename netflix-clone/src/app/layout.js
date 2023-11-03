import NextAuthProvider from "@/auth-provider";
import { GlobalLayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Inter } from "next/font/google";
import GlobalState from "./context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState>{children}</GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}