"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export default function Review() {
  return (
    <div className="min-h-screen bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/shop/1"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            prefetch={false}
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoveVerticalIcon className="w-5 h-5" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Acme Wireless Headphones
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">
                4.3 out of 5
              </span>
            </div>
            <p className="text-muted-foreground mb-8">
              Immerse yourself in high-quality audio with our Acme Wireless
              Headphones. Featuring advanced noise-cancelling technology, a
              comfortable design, and long-lasting battery life, these
              headphones are perfect for music lovers, commuters, and anyone who
              wants to enjoy their audio in peace.
            </p>
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4">Customer Reviews</h2>
              <div className="space-y-6 ">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Sarah Johnson</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I've been using these headphones for a few weeks now and
                      I'm really impressed with the sound quality and
                      noise-cancelling capabilities. They're comfortable to wear
                      for long periods and the battery life is excellent.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Sarah Johnson</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I've been using these headphones for a few weeks now and
                      I'm really impressed with the sound quality and
                      noise-cancelling capabilities. They're comfortable to wear
                      for long periods and the battery life is excellent.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Sarah Johnson</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I've been using these headphones for a few weeks now and
                      I'm really impressed with the sound quality and
                      noise-cancelling capabilities. They're comfortable to wear
                      for long periods and the battery life is excellent.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Sarah Johnson</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      I've been using these headphones for a few weeks now and
                      I'm really impressed with the sound quality and
                      noise-cancelling capabilities. They're comfortable to wear
                      for long periods and the battery life is excellent.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Alex Smith</h3>
                      <div className="flex items-center gap-0.5">
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-primary" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      These headphones are a game-changer for me. The sound
                      quality is incredible, and the noise-cancelling feature is
                      a lifesaver when I'm working in a busy office. Highly
                      recommended!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              variant="outline"
              className="w-full"
            >
              Back to top
            </Button>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6 h-fit sticky top-0">
            <h2 className="text-lg font-bold mb-4">Add a Review</h2>
            <form className=" p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <Label htmlFor="rating" className="text-gray-300 font-semibold">
                  Rating
                </Label>
                <div className="flex items-center gap-3 mt-2">
                  <RadioGroup
                    id="rating"
                    defaultValue="4"
                    className="flex space-x-4"
                  >
                    <label className="flex items-center">
                      <RadioGroupItem
                        id="rating-1"
                        value="1"
                        className="w-5 h-5 text-gray-300 bg-gray-700 border-gray-600 focus:ring-indigo-500 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-gray-400">1</span>
                    </label>
                    <label className="flex items-center">
                      <RadioGroupItem
                        id="rating-2"
                        value="2"
                        className="w-5 h-5 text-gray-300 bg-gray-700 border-gray-600 focus:ring-indigo-500 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-gray-400">2</span>
                    </label>
                    <label className="flex items-center">
                      <RadioGroupItem
                        id="rating-3"
                        value="3"
                        className="w-5 h-5 text-gray-300 bg-gray-700 border-gray-600 focus:ring-indigo-500 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-gray-400">3</span>
                    </label>
                    <label className="flex items-center">
                      <RadioGroupItem
                        id="rating-4"
                        value="4"
                        className="w-5 h-5 text-gray-300 bg-gray-700 border-gray-600 focus:ring-indigo-500 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-gray-400">4</span>
                    </label>
                    <label className="flex items-center">
                      <RadioGroupItem
                        id="rating-5"
                        value="5"
                        className="w-5 h-5 text-gray-300 bg-gray-700 border-gray-600 focus:ring-indigo-500 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-gray-400">5</span>
                    </label>
                  </RadioGroup>
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="review" className="text-gray-300 font-semibold">
                  Review
                </Label>
                <Textarea
                  id="review"
                  rows={5}
                  className="w-full p-3 mt-2 bg-black text-gray-200 placeholder-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500"
                  placeholder="Write your review here..."
                />
              </div>

              <Button
                type="submit"
                className="w-full p-6 mt-4 text-white bg-gradient-to-r font-bold from-pink-600 via-pink-500 to-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Submit Review
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function MoveVerticalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
