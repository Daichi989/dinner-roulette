import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import Link from "next/link";

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav({items}: MobileNavProps) {
  return(
  <div className="fixed top-16 md:hidden bg-secondary z-50 shadow-md rounded-lg p-4 animate-in fade-in-0 slide-in-from-left-8 
  ">
    <div>
      <Link href={"/"} className="font-bold">{siteConfig.name} </Link>
      <nav className="flex gap-4 mt-2">
        {items.map((item, i) => (
          <Link
            key={i} 
            href={item.href}
            className="font-medium hover:text-foreground/50">
            {item.title}
            </Link>
          ))}
      </nav>
    </div>
  </div>
)}