"use client"
import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
  } from '@heroicons/react/20/solid'
  import { SignInButton,SignedOut,SignedIn,UserButton } from '@clerk/nextjs'
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
  
  export default function NavBar() {
    return (
      <div className="flex items-center justify-between py-2 px-10 bg-blue-800 ">
        <div className="min-w-0 flex-1">
          <Link href={'/'}>
          <Image
          src={'/assets/images/logo2.png'}
          alt='logo'
          height={120}
          width={180}
          />
          </Link>
          
        </div>
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
    )
  }
  