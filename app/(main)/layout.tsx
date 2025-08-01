import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MainNav from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";
import SiteFooter from "@/components/site-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-yellow-200">
      <header className="fixed top-0 left-0 w-full z-40 bg-yellow-200 px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center gap-4">
            <Link href={"/login"} className={cn(buttonVariants({variant:"secondary", size: "sm"}),"px-4")} >ログイン</Link>
            <Link href={"/login"} className={cn(buttonVariants({size: "sm"}),"px-4 bg-orange-400")} >＋レシピを書く</Link>
          </nav>
        </div>
      </header>

      <main>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}