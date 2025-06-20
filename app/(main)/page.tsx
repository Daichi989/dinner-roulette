import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12 min-h-screen">
  <div className="flex flex-col items-center gap-4 mt-16">
    <div className="relative w-full max-w-2xl aspect-[1280/360]"> {/* アスペクト比を固定 */}
      <Image
        src="/夜ご飯.png"
        alt="夜ご飯の画像"
        fill
        priority
        className="object-contain animate-in fade-in-0 slide-in-from-top-8 duration-1500"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAYAAACqPZ51AAAABklEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    <p className="text-muted-foreground">困ったらルーレットで決めちゃおう！</p>
    <div className="flex gap-4">
      <Link href="/roulette" className={cn(buttonVariants({ size: "lg" }),"bg-orange-400")}>
        はじめる
      </Link>
    </div>
    <p className="text-4xl font-bold pt-10">こんな時ありませんか？</p>
    <img src="DinnerRouletteまんが.png" 
       alt="まんが" 
       className="w-200 "
       />
       <Link href="/roulette" className={cn(buttonVariants({ size: "lg" }),"bg-orange-400")}>
        はじめる
      </Link>
  </div>
 
</section>
    
    </>
  );
}