import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12 min-h-screen">
        <div className="flex flex-col items-center gap-4 mt-16">
            <img src="夜ご飯.png" className="md:w-1/2 animate-in fade-in-0 slide-in-from-top-8 duration-1500"/>
            <p className="text-muted-foreground">そんな時はルーレットで決めちゃおう！</p>
            <div className="flex gap-4">
                <Link href="/register" className={cn(buttonVariants({ size: "lg" }),"bg-orange-400")}>
                    はじめる
                </Link>
            </div>
        </div>
      </section>
    </>
  );
}