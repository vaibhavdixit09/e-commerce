import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import login from "../../../../public/login.png";

export default function Login() {
  return (
    <div className="grid lg:grid-cols-2 min-h-[90vh] w-full dark:bg-background dark:text-foreground">
      <div className="relative hidden lg:block">
        <img
          src={login.src}
          alt="Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20" />
      </div>
      <div className="flex items-center justify-center bg-transparent">
        <div className="mx-auto w-full max-w-lg space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login to your account</h1>
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="underline" prefetch={false}>
                Signup
              </Link>
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className=""
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="space-y-2 ">
              <Label htmlFor="password">Password</Label>
              <Input className="" id="password" type="password" required />
            </div>

            <Button
              type="submit"
              className="  text-white font-bold w-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
