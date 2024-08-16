"use client";

import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";

export default function Component() {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    price: { min: 0, max: 1000 },
    rating: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    {
      id: 1,
      name: "Acme Sunglasses",
      description: "Stylish and durable sunglasses",
      price: 49.99,
      rating: 4.5,
      category: "Accessories",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Comfort Sneakers",
      description: "Lightweight and cushioned sneakers",
      price: 79.99,
      rating: 4.2,
      category: "Shoes",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Cozy Hoodie",
      description: "Soft and warm hooded sweatshirt",
      price: 39.99,
      rating: 4.7,
      category: "Clothing",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Durable Backpack",
      description: "Spacious and sturdy backpack",
      price: 59.99,
      rating: 4.3,
      category: "Accessories",
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "Elegant Dress",
      description: "Stylish and flattering dress",
      price: 89.99,
      rating: 4.6,
      category: "Clothing",
      image: "/placeholder.svg",
    },
    {
      id: 6,
      name: "Fitness Tracker",
      description: "Comprehensive fitness tracking device",
      price: 99.99,
      rating: 4.4,
      category: "Electronics",
      image: "/placeholder.svg",
    },
    {
      id: 7,
      name: "Fitness Tracker",
      description: "Comprehensive fitness tracking device",
      price: 99.99,
      rating: 4.4,
      category: "Electronics",
      image: "/placeholder.svg",
    },
    {
      id: 8,
      name: "Fitness Tracker",
      description: "Comprehensive fitness tracking device",
      price: 99.99,
      rating: 4.4,
      category: "Electronics",
      image: "/placeholder.svg",
    },
    {
      id: 9,
      name: "Fitness Tracker",
      description: "Comprehensive fitness tracking device",
      price: 99.99,
      rating: 4.4,
      category: "Electronics",
      image: "/placeholder.svg",
    },
  ];
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const { category, price, rating } = selectedFilters;
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category.length === 0 || category.includes(product.category)) &&
        price.min <= product.price &&
        product.price <= price.max &&
        (rating === 0 || product.rating >= rating)
      );
    });
  }, [selectedFilters, searchTerm]);
  const handleCategoryFilter = (category) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      category: prevFilters.category.includes(category)
        ? prevFilters.category.filter((c) => c !== category)
        : [...prevFilters.category, category],
    }));
  };
  const handlePriceFilter = (min, max) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      price: { min, max },
    }));
  };
  const handleRatingFilter = (rating) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      rating,
    }));
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="grid grid-cols-1  md:grid-cols-[300px_1fr] gap-8 p-4 md:p-8">
      <div className="bg-gray-900 shadow-md p-6 h-[90vh] sticky top-0">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <label htmlFor="search" className="block font-medium mb-2">
            Search
          </label>
          <Input
            id="search"
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-medium mb-2">
            Category
          </label>
          <div className="grid grid-cols-2 gap-2">
            <Label className="flex items-center gap-2">
              <Checkbox
                id="category-accessories"
                checked={selectedFilters.category.includes("Accessories")}
                onCheckedChange={() => handleCategoryFilter("Accessories")}
              />
              Accessories
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox
                id="category-shoes"
                checked={selectedFilters.category.includes("Shoes")}
                onCheckedChange={() => handleCategoryFilter("Shoes")}
              />
              Shoes
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox
                id="category-clothing"
                checked={selectedFilters.category.includes("Clothing")}
                onCheckedChange={() => handleCategoryFilter("Clothing")}
              />
              Clothing
            </Label>
            <Label className="flex items-center gap-2">
              <Checkbox
                id="category-electronics"
                checked={selectedFilters.category.includes("Electronics")}
                onCheckedChange={() => handleCategoryFilter("Electronics")}
              />
              Electronics
            </Label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-2">
            Price Range
          </label>
          <div className="flex items-center gap-4">
            <Input
              id="price-min"
              type="number"
              placeholder="Min"
              value={selectedFilters.price.min}
              onChange={(e) =>
                handlePriceFilter(
                  Number(e.target.value),
                  selectedFilters.price.max
                )
              }
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
            <span>-</span>
            <Input
              id="price-max"
              type="number"
              placeholder="Max"
              value={selectedFilters.price.max}
              onChange={(e) =>
                handlePriceFilter(
                  selectedFilters.price.min,
                  Number(e.target.value)
                )
              }
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block font-medium mb-2">
            Rating
          </label>
          <Select
            id="rating"
            value={selectedFilters.rating}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            onValueChange={(e) => handleRatingFilter(Number(e.target.value))}
          >
            <option value={0}>All</option>
            <option value={4}>4 stars and above</option>
            <option value={3}>3 stars and above</option>
            <option value={2}>2 stars and above</option>
            <option value={1}>1 star and above</option>
          </Select>
        </div>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            onClick={() => router.push(`/shop/${product.id}`)}
            key={product.id}
            className="bg-gray-900 rounded-lg h-fit  shadow-md "
          >
            <img
              src="/placeholder.svg"
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-2">{product.description}</p>
              <div className="flex items-center mb-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <StarIcon className="w-5 h-5" />
                  ))}
                  {product.rating % 1 !== 0 && (
                    <StarHalfIcon className="w-5 h-5" />
                  )}
                </div>
                <span className="ml-2 text-gray-500">
                  ({product.rating.toFixed(1)})
                </span>
              </div>
              <div className="text-2xl font-bold">
                ${product.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StarHalfIcon(props) {
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
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
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
