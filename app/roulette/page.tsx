"use client"

import MainNav from "@/components/main-nav";
import CookingRoulette from "@/components/roulette";
import SiteFooter from "@/components/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import Link from "next/link";


export default function Page(){
  return(
    <>
        <div className="h-16 px-4 flex items-center justify-between ">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center gap-4">
            <Link href={"/recipe"} className={cn(buttonVariants({size: "sm"}),"px-4 bg-orange-400")} >＋レシピを書く</Link>
            <button className={cn(buttonVariants({variant:"secondary", size: "sm"}),"px-4 cursor-pointer")}
                      onClick={()=>{signOut({callbackUrl: "/"}
                      )}}
              >ログアウト</button>
          </nav>
        </div>
    <CookingRoulette />
    <SiteFooter/>
    </>
  )  
}
