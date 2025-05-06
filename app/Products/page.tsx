'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  title: string;
  description: string;
  category: string;
  type: string;
  image: string;
  allImages?: string[]; // new field for image group
}

const groupedProducts = [
  {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks and angular support junctions in structural and fabrication works.",
    category: "Fabrication",
    type: "Corner Piece",
    images: Array.from({ length: 8 }, (_, i) => `/Images/products/newprod/${12 + i}.jpg`)
  },
  {
    title: "Washers",
    description: "Flat washers used in mechanical assemblies to distribute load and reduce wear.",
    category: "Fasteners",
    type: "Washer",
    images: [1, 2].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Tie Rods",
    description: "Structural rods used in construction to support tension and integrity.",
    category: "Construction",
    type: "Tie Rods",
    images: [3, 4, 5, 6, 7].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Construction Bolts",
    description: "Bolts used in heavy construction projects to hold components together securely.",
    category: "Construction",
    type: "Construction Bolts",
    images: [8, 9, 10, 11].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Nuts",
    description: "Metal nuts used with bolts to fasten structural components.",
    category: "Fasteners",
    type: "Nuts",
    images: [20, 21].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Plain Bolts",
    description: "Standard bolts used for general-purpose fastening in assemblies.",
    category: "Fasteners",
    type: "Plain Bolt",
    images: [22, 23, 24].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Pipes",
    description: "Metal pipes used in plumbing, construction and structural applications.",
    category: "Fabrication",
    type: "Pipes",
    images: [25, 26, 27].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Cross Members",
    description: "Structural cross members used in frameworks to provide strength and support.",
    category: "Fabrication",
    type: "Cross Member",
    images: [28, 29, 30, 31].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Assembly Parts",
    description: "Components used in mechanical and industrial assemblies.",
    category: "Fabrication",
    type: "Assembly Parts",
    images: [32, 33].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Hexagon Headed Bolt",
    description: "Bolts with hexagonal heads for better grip and torque application.",
    category: "Fasteners",
    type: "Hexagon Headed Bolt",
    images: [34, 35, 36].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Fabrication",
    type: "Tubular Pipes",
    images: [37, 38].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Hook Stand SPG",
    description: "Stand components used in scaffoldings or machinery fixtures.",
    category: "Fabrication",
    type: "Hook Stand SPG",
    images: [39, 40].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Collars",
    description: "Mechanical collars used to position or locate components on shafts.",
    category: "Fasteners",
    type: "Collar",
    images: [41, 42, 43].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Tubular Parts - Tractor",
    description: "Tubular mechanical parts used in tractors and agricultural machinery.",
    category: "Automotive",
    type: "Tubular Part - Tractor",
    images: [44, 45].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Tubular Parts - Automotive",
    description: "Tubular mechanical parts used in automotive applications.",
    category: "Automotive",
    type: "Tubular Part - Automotive",
    images: [46, 47, 48].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Laser Cutting and CNC Bending Parts",
    description: "High-precision laser cutting and CNC bending for fabricated components.",
    category: "Fabrication",
    type: "Laser Cutting & CNC Bending Parts",
    images: Array.from({ length: 28 }, (_, i) => `/Images/products/newprod/${49 + i}.jpg`)
  }
];


const types = ["All", ...new Set(groupedProducts.map((p) => p.category))];

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const filtered =
    filter === "All"
      ? groupedProducts
      : groupedProducts.filter((p) => p.category === filter);

  const handleNext = () => {
    if (selectedProduct) {
      setImageIndex((prev) =>
        selectedProduct.allImages && prev < selectedProduct.allImages.length - 1 ? prev + 1 : 0
      );
    }
  };

  const handlePrev = () => {
    if (selectedProduct) {
      setImageIndex((prev) =>
        selectedProduct.allImages && prev > 0 ? prev - 1 : (selectedProduct.allImages?.length || 1) - 1
      );
    }
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Products & Capabilities</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Specializing in high-precision auto components and fabricated parts, MAC delivers zero-defect manufacturing solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {types.map((type) => (
            <Button
              key={type}
              variant={filter === type ? "default" : "outline"}
              onClick={() => setFilter(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product, idx) => {
            const mainImage = product.images[0];
            return (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-4">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={mainImage}
                      alt={product.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{product.description}</p>
                  <Button
                    variant="link"
                    className="mt-3 text-red-500"
                    onClick={() => {
                      setSelectedProduct({ ...product, image: mainImage, allImages: product.images });
                      setImageIndex(0);
                    }}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Modal for Carousel View */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-200 via-green-100 to-purple-100 bg-opacity-70 backdrop-blur-md">

          <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full p-4">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-black z-10"
            >
              <X size={24} />
            </button>

            {/* Carousel Controls */}
            <div className="relative w-full h-64 mb-4 flex items-center justify-center">
              {selectedProduct.allImages && selectedProduct.allImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 z-10 text-gray-700 hover:text-black"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 z-10 text-gray-700 hover:text-black"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
              <Image
                src={selectedProduct.allImages?.[imageIndex] || "/placeholder.jpg"}
                alt={selectedProduct.title}
                fill
                style={{ objectFit: "contain" }}
                className="rounded"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800">{selectedProduct.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{selectedProduct.description}</p>
          </div>
        </div>
      )
      }
    </section >
  );
}
