import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import noImg from "../../public/6714987.jpg";
export default function Home() {
  const categories = [
    {
      name: "Fashion",
      icons: {},
    },
    {
      name: "Electronics",
    },
    {
      name: "Sports",
    },
    {
      name: "Educational",
    },
    {
      name: "Books",
    },
    {
      name: "Home",
    },
  ];
  return (
    <div className="dark:bg-muted">
      <main>
        <section className=" relative h-[650px] w-full overflow-hidden  bg-transparent">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/videoplayback.mp4" // Update with your video path
            autoPlay
            muted
            loop
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          {/* <div className="relative z-10 flex   flex-col items-start justify-end h-full text-center text-white">
            <h1 className="text-4xl md:text-4xl font-bold mb-4">
              Unmissable Summer Sale!
            </h1>
            <p className="text-lg md:text-lg font-thin mb-8 text-start">
              Dive into a world of exceptional deals and exclusive offers! This
              summer, <br />
              <span className="font-semibold text-yellow-400">
                unlock up to 60% off
              </span>
              on our premium collection. Don’t miss out on these <br />
              limited-time offers—
              <span className="font-bold">shop now</span> and experience the
              ultimate in savings and style...
            </p>
            <a
              href="#"
              className="bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-primary-dark"
            >
              Shop Now
            </a>
          </div> */}
        </section>
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="h-full">
                  <Link href="#" prefetch={false}>
                    <img
                      src={noImg.src}
                      alt={`Product ${item}`}
                      width={400}
                      height={400}
                      className="aspect-square w-full rounded-t-md object-cover"
                    />
                  </Link>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Link
                        href="#"
                        className="text-lg font-semibold"
                        prefetch={false}
                      >
                        Product {item}
                      </Link>
                      <span className="text-primary">$49.99</span>
                    </div>
                    <p className="text-muted-foreground text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="mt-4 flex justify-center ">
                      <Button className=" bg-pink-600 text-white hover:bg-pink-600/90">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* category section  */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Shop by Category</h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {categories.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="group flex flex-col items-center gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  <div className="h-16 w-16 rounded-full bg-muted p-4 transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <ComponentIcon className="h-full w-full" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Special Offers</h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="h-full">
                  <Link href="#" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      alt={`Offer ${item}`}
                      width={400}
                      height={400}
                      className="aspect-square w-full rounded-t-md object-cover"
                    />
                  </Link>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Link
                        href="#"
                        className="text-lg font-semibold"
                        prefetch={false}
                      >
                        Offer {item}
                      </Link>
                      <span className="text-primary">$29.99</span>
                    </div>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Shop Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 lg:py-20 bg-muted">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold">What Our Customers Say</h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <img
                        src="/placeholder.svg"
                        alt={`Customer ${item}`}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                        style={{ aspectRatio: "48/48", objectFit: "cover" }}
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          Customer {item}
                        </h3>
                        <p className="text-muted-foreground">Verified Buyer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed ut\n perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium\n doloremque laudantium."
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8 text-muted-foreground">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Acme Store</span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Contact
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              FAQ
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
          <p className="text-sm">
            &copy; 2024 Acme Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ComponentIcon(props) {
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
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function FileType2Icon(props) {
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
      <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M2 13v-1h6v1" />
      <path d="M5 12v6" />
      <path d="M4 18h2" />
    </svg>
  );
}

function Heading3Icon(props) {
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
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
      <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
    </svg>
  );
}

function Heading4Icon(props) {
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
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17 10v4h4" />
      <path d="M21 10v8" />
    </svg>
  );
}

function Heading5Icon(props) {
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
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17 13v-3h4" />
      <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />
    </svg>
  );
}

function Heading6Icon(props) {
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
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <circle cx="19" cy="16" r="2" />
      <path d="M20 10c-2 2-3 3.5-3 6" />
    </svg>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function TypeIcon(props) {
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
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
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
