"use client";
import {
 SignInButton,
 SignOutButton,
 SignUpButton,
 useClerk,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Header = () => {
 const { user } = useClerk();
 return (
  <nav className="relative flex w-full items-center justify-between bg-inherit py-4 shadow-sm shadow-neutral-700/10">
   <div className="container mx-auto">
    <div className="flex w-full flex-wrap items-center justify-between">
     <div className="flex items-center">
      <Link className="text-white text-xl" href="/">
       Note-Keeper
      </Link>
     </div>
     {user ? (
      <div className="my-1 flex items-center gap-2">
       <div className="h-10 w-10 rounded-full flex items-center justify-center border-blue-800 border">
        <span>
         {`${
          user.firstName && user.lastName
           ? `${user.firstName
             .slice(0, 1)
             .toUpperCase()}${user.lastName
             .slice(0, 1)
             .toUpperCase()}`
           : user.username || ""
         }`}
        </span>
       </div>
       <SignOutButton />
      </div>
     ) : (
      <div className="my-1 flex items-center gap-2">
       <SignInButton />
       <SignUpButton />
      </div>
     )}
    </div>
   </div>
  </nav>
 );
};
export default Header;