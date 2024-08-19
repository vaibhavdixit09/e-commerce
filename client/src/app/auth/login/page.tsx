"use client";

import { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import login from "../../../../public/login.png";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response: any = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      } else {
        console.log("user logged in successfully", response);
        window.location.href = "/auth/signup";
      }
    } catch (err) {
      console.log(err);
    }

    console.log("Form submitted:", formData);
  };

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
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-lg space-y-6"
        >
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
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="userType">Role</Label>
              <Input
                id="userType"
                type="text"
                required
                value={formData.userType}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className="text-white font-bold w-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
