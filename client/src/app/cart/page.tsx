"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Cozy Blanket",
      price: 29.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Autumn Mug",
      price: 12.99,
      quantity: 1,
    },
    {
      id: 3,
      name: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 1,
    },
  ]);
  const handleAddToCart = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleRemoveFromCart = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="bg-black text-muted-foreground min-h-screen flex flex-col">
      <main className="container mx-auto px-4 md:px-6 py-12 flex-1">
        <h1 className="text-xl md:text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border-2 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                  style={{ aspectRatio: "80/80", objectFit: "cover" }}
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-muted-foreground">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </Button>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    +
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    -
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="py-2">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="bg-yellow-400 p-3 text-black text-base font-semibold rounded-md">
            Total: ${total.toFixed(2)}
          </p>
          <Button className="py-6 bg-green-400 text-black text-base font-semibold rounded-md">
            Checkout
          </Button>
        </div>
      </footer>
    </div>
  );
}
