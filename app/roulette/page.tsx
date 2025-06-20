"use client"

import MainNav from "@/components/main-nav";
import CookingRoulette from "@/components/roulette";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";


export default function Page(){
  return(
    <>
        <div className="h-16 px-4 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center gap-4">
            <button className={cn(buttonVariants({variant:"secondary", size: "sm"}),"px-4")}
                    onClick={()=>{signOut({callbackUrl: "/"})}}
             >ログアウト</button>
          </nav>
        </div>
    <CookingRoulette />
    </>
  )  
}
