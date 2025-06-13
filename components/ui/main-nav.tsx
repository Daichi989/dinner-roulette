import Link from "next/link";

export default function MainNav(){
  return (
    <div className="flex items-center md:gap-10 px-10">
        <Link href="/" className="hidden md:flex items-center space-x-2">
            <span className="font-bold">
                Dinner roulette
            </span>
        </Link>
        <nav className="md:flex gap-4 hidden">
            <Link href={"#feature"} className="text-lg sm:text-sm font-medium hover:text-foreground/50">特徴</Link>
            <Link href={"/blog"} className="text-lg sm:text-sm font-medium hover:text-foreground/50">ブログ</Link>
            <Link href={"/price"} className="text-lg sm:text-sm font-medium hover:text-foreground/50">価格</Link>
        </nav>
    </div>
  )
}
