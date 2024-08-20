import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Homepage/Nav";
import MobileNav from "@/components/Homepage/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EventHub",
  description: "Conduct and manage events with ease",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          {/* Navbar section */}
          <header>
            <div className="hidden lg:block">
              <Nav />
            </div>
            <div className="block lg:hidden">
              <MobileNav />
            </div>
          </header>

          {/* Main content section */}
          <div className="flex-grow ">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
