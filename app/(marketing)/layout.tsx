import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MainNav from "@/components/ui/main-nav";
import { marketingConfig } from "@/config/marketing";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-yellow-200">
      <header className="z-40">
        <div className="h-16 px-4 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav className="flex items-center gap-4">
            <Link href={"/auth/login"} className={cn(buttonVariants({variant:"secondary", size: "sm"}),"px-4")} >ログイン</Link>
            <Link href={"/auth/signup"} className={cn(buttonVariants({variant:"secondary", size: "sm"}),"px-4")} >＋レシピを書く</Link>
          </nav>
        </div>
      </header>

      <main>
        {children}
      </main>
    </div>
  )
}