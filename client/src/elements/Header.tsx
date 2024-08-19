"use client";

import Link from "next/link";
import logo from "../../public/title logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import ProfileDropdown from "./ProfileDropdown";
import { useAppSelector } from "@/lib/store/hooks";

export default function Header() {
  const cartLength = 0;
  return (
    <header className="w-full  bg-black text-muted-foreground">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <img src={logo.src} className="w-10 h-10" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="relative hidden lg:block">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-8 w-full"
          />
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/"
            className="hover:underline  hover:underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Shop Now
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:underline hover:underline-offset-4"
            prefetch={false}
          >
            Contact Us
          </Link>

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link
                href="#"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                prefetch={false}
              >
                Categories
                <ChevronDownIcon className="h-4 w-4" />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <Link href="#" prefetch={false}>
                  Electronics
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" prefetch={false}>
                  Fashion
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" prefetch={false}>
                  Home &amp; Garden
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="#" prefetch={false}>
                  Sports &amp; Outdoors
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/auth/login"
            className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Register
          </Link>
          <Link
            href="/auth/become-seller"
            className="inline-flex h-9 items-center justify-center rounded-md text-white bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 hover:bg-pink-700 px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Become a Seller
          </Link>
        </div>
        <Link href="/cart" prefetch={false}>
          <div className="relative py-2">
            <div className="t-0 absolute left-3">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                {cartLength}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="file: mt-4 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </Link>
        <div className="flex justify-center items-center h-screen ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-black shadow-lg rounded-md p-2">
              <Link href="/profile">
                <DropdownMenuItem className="cursor-pointer p-2 rounded-md ">
                  Account
                </DropdownMenuItem>
              </Link>
              <Link href="/">
                <DropdownMenuItem className="cursor-pointer p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
                  Logout
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* <ProfileDropdown></ProfileDropdown> */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-muted text-muted-foreground">
            <div className="flex flex-col gap-6 px-4 py-6">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 w-full"
                />
              </div>
              <nav className="grid gap-2">
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  <HomeIcon className="h-5 w-5" />
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  <InfoIcon className="h-5 w-5" />
                  About
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  <MailIcon className="h-5 w-5" />
                  Contact Us
                </Link>
                <Collapsible className="grid gap-2">
                  <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground">
                    <div className="flex items-center gap-2">
                      <LayoutGridIcon className="h-5 w-5" />
                      Categories
                    </div>
                    <ChevronDownIcon className="h-5 w-5" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="grid gap-2 px-3">
                      <Link
                        href="#"
                        className="rounded-md py-2 hover:bg-accent/50 hover:text-accent-foreground"
                        prefetch={false}
                      >
                        Electronics
                      </Link>
                      <Link
                        href="#"
                        className="rounded-md py-2 hover:bg-accent/50 hover:text-accent-foreground"
                        prefetch={false}
                      >
                        Fashion
                      </Link>
                      <Link
                        href="#"
                        className="rounded-md py-2 hover:bg-accent/50 hover:text-accent-foreground"
                        prefetch={false}
                      >
                        Home &amp; Garden
                      </Link>
                      <Link
                        href="#"
                        className="rounded-md py-2 hover:bg-accent/50 hover:text-accent-foreground"
                        prefetch={false}
                      >
                        Sports &amp; Outdoors
                      </Link>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </nav>
              <div className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Login
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Register
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input text-white px-4 text-sm font-medium shadow-sm transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 hover:bg-pink-700 "
                  prefetch={false}
                >
                  Become a Seller
                </Link>
                <Link href="/cart" prefetch={false}>
                  <div className="relative py-2">
                    <div className="t-0 absolute left-3">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        3
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="file: mt-4 h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
