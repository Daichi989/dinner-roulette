"use client";

import MobileNav from "@/components/mobile-nav";
import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import Link from "next/link";
import { useState } from "react";

interface MainNavProps {
  items: NavItem[],
  children?: React.ReactNode;
}


export default function MainNav({items}:MainNavProps){
const[showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <div className="flex items-center md:gap-10 px-5">
        <Link href="/" className=" flex items-center space-x-2 ">
            <img src="nabe.png" alt="アイコン"/>
            <span className="font-bold">
                {siteConfig.name}
            </span>
        </Link>
        <nav className="md:flex gap-4 hidden">
            {/* {items?.map((item,index)=>(
                <Link 
                key={index}
                href={item.href} 
                className="text-lg sm:text-sm font-medium hover:text-foreground/50">{item.title}</Link>
            ))} */}
        </nav>
        {/* <div>
          <button className="md:hidden flex items-center gap-2 cursor-pointer" onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              <img src="nabe.png" />
              <span>メニュー</span>
          </button>
        </div> */}
        {showMobileMenu && <MobileNav items={items} />}
    </div>
  )
}
