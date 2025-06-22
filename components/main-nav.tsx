"use client";

import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import Link from "next/link";

interface MainNavProps {
  items: NavItem[],
  children?: React.ReactNode;
}


export default function MainNav({}:MainNavProps){

  return (
    <div className="flex items-center md:gap-10 px-5">
        <Link href="/" className=" flex items-center space-x-2 ">
            <img src="nabe.png" alt="アイコン"/>
            <span className="font-bold hidden md:inline">
                {siteConfig.name}
            </span>
        </Link>
    </div>
  )
}
