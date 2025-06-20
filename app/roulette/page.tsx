import MainNav from "@/components/main-nav";
import CookingRoulette from "@/components/roulette";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function Page(){
  return(
    <>
        <div className="h-16 px-4 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center gap-4">
            <Link href={"/login"} className={cn(buttonVariants({variant:"secondary", size: "sm"}),"px-4")} >アイコン</Link>
            <Link href={"/roulette"} className={cn(buttonVariants({size: "sm"}),"px-4 bg-orange-400")} >＋レシピを書く</Link>
          </nav>
        </div>
    <CookingRoulette />
    </>
  )  
}
