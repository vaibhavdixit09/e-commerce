import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import signup from "../../../../public/signup.png";

export default function Buyer_signup() {
  return (
    <div className="grid lg:grid-cols-2 min-h-[90vh] w-full dark:bg-background dark:text-foreground">
      <div className="relative hidden lg:block">
        <img
          src={signup.src}
          alt="Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20" />
      </div>
      <div className="flex items-center justify-center bg-transparent">
        <div className="mx-auto w-full max-w-lg space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline" prefetch={false}>
                Sign in
              </Link>
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input className="" id="username" required />
            </div>

            {/* Phone and Email in one row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input className="" id="phone" type="tel" required />
              </div>
            </div>

            {/* Shop Name and Password in one row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  className=""
                  id="confirm-password"
                  type="password"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input className="" id="password" type="password" required />
              </div>
            </div>

            {/* Shop Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Shop Address</Label>
              <Textarea id="address" required />
            </div>
            <Button
              type="submit"
              className="text-white font-bold w-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
