import { marketingConfig } from "@/config/marketing";
import { NavItem } from "@/types";
import Link from "next/link";

interface MainNavProps {
  items?: NavItem[],
  children?: React.ReactNode;
}


export default function MainNav({items}:MainNavProps){
  return (
    <div className="flex items-center md:gap-10 px-10">
        <Link href="/" className="hidden md:flex items-center space-x-2">
            <span className="font-bold">
                Dinner roulette
            </span>
        </Link>
        <nav className="md:flex gap-4 hidden">
            {items?.map((item,index)=>(
                <Link 
                key={index}
                href={item.href} 
                className="text-lg sm:text-sm font-medium hover:text-foreground/50">{item.title}</Link>
            ))}
        </nav>
    </div>
  )
}
