import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import noImg from "../../public/6714987.jpg";
import userPlaceholder from "../../public/userPlaceholder.png";
export default function Home() {
  const customerData = [
    {
      name: "vaibhav dixit",
      review:
        "good product amet, consectetur adipisicing elit. Repellat tempore en",
      photoUrl: userPlaceholder.src,
    },
    {
      name: "Arjun Dubey",
      review:
        "Nice platform Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat tempore enim nemo.",
      photoUrl: userPlaceholder.src,
    },
    {
      name: "vaibhav dixit",
      review: "good product amet, consectetur adipisicing",
      photoUrl: userPlaceholder.src,
    },
  ];
  const categories = [
    {
      name: "Fashion",
      icon: (
        <svg
          className="text-pink-600 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          {" "}
          <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z" />
        </svg>
      ),
    },
    {
      name: "Electronics",
      icon: (
        <svg
          className="text-green-600 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          {" "}
          <path d="M96 0C78.3 0 64 14.3 64 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32l0 96 64 0 0-96c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c0 77.4 55 142 128 156.8l0 67.2c0 17.7 14.3 32 32 32s32-14.3 32-32l0-67.2c12.3-2.5 24.1-6.4 35.1-11.5c-2.1-10.8-3.1-21.9-3.1-33.3c0-80.3 53.8-148 127.3-169.2c.5-2.2 .7-4.5 .7-6.8c0-17.7-14.3-32-32-32L32 160zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm47.9-225c4.3 3.7 5.4 9.9 2.6 14.9L452.4 356l35.6 0c5.2 0 9.8 3.3 11.4 8.2s-.1 10.3-4.2 13.4l-96 72c-4.5 3.4-10.8 3.2-15.1-.6s-5.4-9.9-2.6-14.9L411.6 380 376 380c-5.2 0-9.8-3.3-11.4-8.2s.1-10.3 4.2-13.4l96-72c4.5-3.4 10.8-3.2 15.1 .6z" />
        </svg>
      ),
    },
    {
      name: "Sports",
      icon: (
        <svg
          className="text-red-600 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          {" "}
          <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z" />
        </svg>
      ),
    },
    {
      name: "Educational",
      icon: (
        <svg
          className="text-slate-200  fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          {" "}
          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z" />
        </svg>
      ),
    },
    {
      name: "Kitchen",
      icon: (
        <svg
          className="text-yellow-600 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          {" "}
          <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112l71.8 0c8.8-9.8 21.6-16 35.8-16l104 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-104 0c-14.2 0-27-6.2-35.8-16l-71.8 0zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24l0 8 96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-240 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l96 0 0-8c0-13.3 10.7-24 24-24zM288 464l0-112 224 0 0 112c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48zM48 320l80 0 16 0 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-80c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0 32 16 0zM24 464l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
        </svg>
      ),
    },
    {
      name: "Home",
      icon: (
        <svg
          className="text-blue-600 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          {" "}
          <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185l0-121c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32l0 36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64 0 24c0 22.1 17.9 40 40 40l24 0 32.5 0c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1l16 0c22.1 0 40-17.9 40-40l0-16.2c.3-2.6 .5-5.3 .5-8.1l-.7-160.2 32 0z" />
        </svg>
      ),
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
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
                Featured Products
              </h2>
              <Link
                href="#"
                className=" hover:underline bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent"
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
                      <Button className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 text-white font-bold  hover:shadow-md hover:shadow-gray-400 transition-shadow duration-15000">
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
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
                Shop by Category
              </h2>
              <Link
                href="#"
                className=" hover:underline bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {categories.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="group flex flex-col items-center gap-2 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
                  prefetch={false}
                >
                  {/* {item.icon} */}
                  <div className="h-16 w-16 rounded-full bg-muted p-4 transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
                Special Offers
              </h2>
              <Link
                href="#"
                className=" hover:underline bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent"
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
                    <p className="text-muted-foreground text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Button className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 text-white font-bold  hover:shadow-md hover:shadow-gray-400 transition-shadow duration-15000">
                        Shop Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* about us */}
        <section className="py-12 lg:py-20 bg-muted">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
                  About Us
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed ">
                  We are a team of passionate designers and developers who are
                  dedicated to creating beautiful and functional digital
                  experiences. Our mission is to empower businesses and
                  individuals to achieve their goals through innovative
                  technology solutions. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio nam unde eos tempore ullam nulla
                  maiores corrupti natus ex deleniti rem blanditiis cum,
                  repellendus dolorum totam magni asperiores tenetur quae ipsam
                  temporibus! Magni!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={customerData[0].photoUrl}
                    width={100}
                    height={100}
                    alt="John Doe"
                    className="rounded-full"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">John Doe</h3>
                    <p className="text-muted-foreground">Co-Founder, CEO</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={customerData[0].photoUrl}
                    width={100}
                    height={100}
                    alt="Jane Smith"
                    className="rounded-full"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Jane Smith</h3>
                    <p className="text-muted-foreground">Co-Founder, CTO</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={customerData[0].photoUrl}
                    width={100}
                    height={100}
                    alt="Michael Johnson"
                    className="rounded-full"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-medium">Michael Johnson</h3>
                    <p className="text-muted-foreground">Lead Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact */}
        <section className="py-12 lg:py-20 ">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
              <form className="grid gap-6">
                <div className="grid gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" />
                </div>
                <Button type="submit" className="justify-self-start">
                  Submit
                </Button>
              </form>{" "}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
                  Contact Us
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We'd love to hear from you! Fill out the form below and we'll
                  get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* testimonial */}
        <section className="py-12 lg:py-20 bg-muted">
          <div className="container">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
                What Our Customers Say
              </h2>
              <Link
                href="#"
                className="text-primary hover:underline"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {customerData.map((item, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <img
                        src={item.photoUrl}
                        alt={`${item.name}`}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full object-cover"
                        style={{ aspectRatio: "48/48", objectFit: "cover" }}
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-muted-foreground">Verified Buyer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="bg-muted py-8 text-muted-foreground">
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
      </footer> */}
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
