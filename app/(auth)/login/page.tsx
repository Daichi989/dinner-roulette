import UserAuthForm from "@/components/user-auth-form";
import { siteConfig } from "@/config/site";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-yellow-200">
      <div className="mx-auto w-full max-w-sm flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 pb-4">
          <img src="icon.png" />
                    <span className="font-bold text-xl">
                        {siteConfig.name}
                    </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            新規登録またはログイン
          </h1>
        </div>

        <UserAuthForm />
      </div>
    </div>
  );
}