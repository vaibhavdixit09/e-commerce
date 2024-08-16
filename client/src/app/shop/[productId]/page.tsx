"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import noImg from "../../../../public/6714987.jpg";
import Link from "next/link";
import { Router } from "next/router";
export default function Product_page() {
  return (
    <div className="grid gap-8 md:grid-cols-2 items-start max-w-6xl mx-auto p-4 md:p-12">
      <div className="grid gap-6">
        <Carousel className="rounded-lg overflow-hidden">
          <CarouselContent>
            <CarouselItem>
              <img
                src={noImg.src}
                width={800}
                height={600}
                alt="Product Image"
                className="aspect-video object-cover w-full"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={noImg.src}
                width={800}
                height={600}
                alt="Product Image"
                className="aspect-video object-cover w-full"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                width={800}
                height={600}
                alt="Product Image"
                className="aspect-video object-cover w-full"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 text-muted-foreground hover:bg-background/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <ChevronLeftIcon className="h-5 w-5" />
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 text-muted-foreground hover:bg-background/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <ChevronRightIcon className="h-5 w-5" />
          </CarouselNext>
        </Carousel>
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold">Acme Prism T-Shirt</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">
              4.3 (123 reviews)
            </span>
          </div>
        </div>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">Product Description</h2>
          <p className="text-muted-foreground">
            Introducing the Acme Prism T-Shirt, a perfect blend of style and
            comfort for the modern individual. This tee is crafted with a
            meticulous composition of 60% combed ringspun cotton and 40%
            polyester jersey, ensuring a soft and breathable fabric that feels
            gentle against the skin.
          </p>
          <p className="text-muted-foreground">
            The combed ringspun cotton provides a luxurious feel while enhancing
            durability, making this shirt a reliable choice for everyday wear.
            The polyester component adds resilience and shape retention,
            ensuring the shirt maintains its form even after multiple washes.
            Whether you're out for a casual day with friends or hitting the gym,
            the Acme Prism T-Shirt is designed to keep you looking and feeling
            great.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold">$49.99</div>
            <div className="flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Sold by Acme Inc.</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button size="lg" className="flex-1  p-2">
              Add to Cart
            </Button>
            <Button size="lg" className="flex-1 p-2">
              See reviews
            </Button>
          </div>

          <Button
            size="lg"
            className="flex-1 p-2 bg-yellow-500 text-white font-bold"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
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

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
