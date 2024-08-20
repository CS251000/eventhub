"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Bars3Icon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { features, solutions } from "@/data/datas";
import { SignInButton,SignedOut,SignedIn,UserButton } from '@clerk/nextjs'
import Link from "next/link";
import Image from "next/image";

function ListItem({ title, href, description }) {
  return (
    <li>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-100"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
          {description}
        </p>
      </Link>
    </li>
  );
}

export default function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const handleBack = () => {
    if (solutionsOpen) setSolutionsOpen(false);
    else if (featuresOpen) setFeaturesOpen(false);
    else setMobileMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-100 flex items-center justify-between p-4 z-10">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="text-sm font-semibold leading-6 text-blue-100">
            Log in <span aria-hidden="true">&rarr;</span>
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <div className="flex items-center">
        <Link href="/" className="mr-auto">
          <span className="sr-only">EventHub</span>
          <Image
            src={"/assets/images/logo2.png"}
            alt="logo"
            height={180}
            width={200}
          />
        </Link>
      </div>

      <>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex items-center justify-between p-4">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt="logo"
                  src={"/assets/images/logo2.png"}
                  height={150}
                  width={180}
                />
              </Link>
              <button
                type="button"
                onClick={handleBack}
                className="-m-2.5 rounded-md p-2.5 text-gray-100"
              >
                <span className="sr-only">Close menu</span>
                <ArrowLeftIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-100/10">
                <div className="space-y-2 py-6">
                  {!featuresOpen && !solutionsOpen && (
                    <>
                      <button
                        className="block w-full text-left -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                        onClick={() => setFeaturesOpen(true)}
                      >
                        Features
                      </button>
                      <button
                        className="block w-full text-left -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                        onClick={() => setSolutionsOpen(true)}
                      >
                        Solutions
                      </button>
                      <Link href={'/aboutus'}>
                      <button
                        className="block w-full text-left -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-800"
                      >
                        About Us
                      </button>
                      </Link>
                    </>
                  )}
                  {featuresOpen && (
                    <ul className="space-y-2 py-6">
                      {features.map((feature) => (
                        <ListItem
                          key={feature.title}
                          title={feature.title}
                          href={feature.href}
                          description={feature.description}
                        />
                      ))}
                    </ul>
                  )}
                  {solutionsOpen && (
                    <ul className="space-y-2 py-6">
                      {solutions.map((solution) => (
                        <ListItem
                          key={solution.title}
                          title={solution.title}
                          href={solution.href}
                          description={solution.description}
                        />
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </>
    </div>
  );
}

