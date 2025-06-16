import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function UserAuthForm(){
  return(
    <div>
        <form>
            <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-1">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input id="email" placeholder="name@example.com" type="email" />
                </div>
                <button className={cn(buttonVariants())} >メールアドレスでログイン</button>
            </div>
        </form>
    </div>
  )
}
