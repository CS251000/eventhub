"use client"
import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { features, solutions } from "@/data/datas";

  import { SignInButton,SignedOut,SignedIn,UserButton } from '@clerk/nextjs'
import Image from "next/image";

export default function Nav() {
  return (
    <header className=" inset-x-0 top-0 -z-10 block">
      <nav
        className="flex items-center justify-center px-4 py-0 lg:px-10 bg-gray-900 "
      >
        <div className="flex lg:flex-1">
          <Link href={"/"}>
            <span className="-m-1.5 p-1.5">
              <span className="sr-only">EventHub</span>
              <Image
                alt="logo"
                src="/assets/images/logo2.png"
                height={200}
                width={250}
              />
            </span>
          </Link>
        </div>

        <NavigationMenu>
      <NavigationMenuList>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col ">
              {features.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col ">
              {solutions.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
          
          
        </NavigationMenuItem>
        <NavigationMenuItem>
          
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/aboutus">
              About Us
            </NavigationMenuLink>
          
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

        <div className=" lg:flex lg:flex-1 lg:justify-around">
          <Link href={'/myworkspaces'}>
        <Button>My Workspaces</Button>
        </Link>

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
        </div>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

