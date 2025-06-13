import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12 bg-yellow-200">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">晩ごはんどうする？</h1>
            <p className="text-muted-foreground">今日の晩ごはんはこれで決まり！</p>
            <div className="flex gap-4">
                <Link href="/auth/signup" className={cn(buttonVariants({ size: "lg" }))}>
                    はじめる
                </Link>
            </div>
        </div>
      </section>

      <section></section>
      
      <section className="flex flex-col items-center bg-yellow-200">
        <p className="text-muted-foreground">developed by Daichi</p>
        <img src="line_vegetable.png" className=""/>
      </section>
    
    </>
  );
}