import HomeHero from "@/components/Homepage/Hero";
import Image from "next/image";
import MobileNav from "@/components/Homepage/MobileNav";
import Nav from "@/components/Homepage/Nav";

export default function Home() {
  return (
    
    <div className="bg-gray-900 text-gray-100">
      <div className="flex flex-col ">
        <div className="block lg:hidden "><MobileNav/></div>
        <div className="hidden lg:block"><Nav/></div>
        </div>
    
    </div>
    
  );
}
