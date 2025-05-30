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
    description: "Used for assembling metal frameworks, in electrical enclosure bodies it provides angular support in structural and fabrication works.",
    category: "Fabrication",
    type: "Corner Piece",
    images: [79, 12, 13, 14, 15, 16, 17, 18, 19, 78].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks, electrical enclosure body and angular support junctions in structural and fabrication works.",
    category: "Corner Bracket",
    type: "Corner Piece",
    images: [78, 12, 13, 14, 15, 16, 17, 18, 19, 79].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Washers",
    description: "Flat washers used in mechanical assemblies to distribute load and reduce wear.",
    category: "Services",
    type: "Washer",
    images: [1, 2].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Tie Rods",
    description: "Structural rods used in Cable drums to support tension.",
    category: "Automobile Parts",
    type: "Tie Rods",
    images: [3, 4, 5, 6, 7].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Construction Bolts",
    description: "Bolts used in heavy construction projects to hold components together securely and helps in strength of the buildings.",
    category: "Bolts",
    type: "Construction Bolts",
    images: [8, 9, 10, 11].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [22, 23, 24].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Pipes",
    description: "In two wheeler parts, automotive industry.",
    category: "Automobile Parts",
    type: "Pipes",
    images: [25, 26, 27].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Cross Members",
    description: "Structural cross members used in frameworks to provide strength and support.",
    category: "Tubular Parts",
    type: "Cross Member",
    images: [28, 29, 30, 31].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Assembly Parts",
    description: "Components used in mechanical and industrial assemblies.",
    category: "Turned Parts",
    type: "Assembly Parts",
    images: [32, 33].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Hexagon Headed Bolt",
    description: "Bolts with hexagonal heads for better grip and torque application.",
    category: "Bolts",
    type: "Hexagon Headed Bolt",
    images: [34, 35, 36].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [37, 38].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Hook Stand SPG",
    description: "Stand components used in scaffoldings or machinery fixtures.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [39, 40].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Collars",
    description: "Mechanical collars used to position or locate components on shafts.",
    category: "Tubular Parts",
    type: "Collar",
    images: [41, 42, 43].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Tubular Parts - Tractor",
    description: "Tubular mechanical parts used in tractors and agricultural machinery.",
    category: "Automobile Parts",
    type: "Tubular Part - Tractor",
    images: [44, 45].map(i => `/Images/products/newprod/${i}.jpg`)
  },
  {
    title: "Tubular Parts - Automotive",
    description: "Tubular mechanical parts used in automotive applications.",
    category: "Automobile Parts",
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
                  <div className="relative w-full  h-48 mb-4">
                    <Image
                      src={mainImage}
                      alt={product.title}
                      fill
                      style={{ objectFit: "contain" }}
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

          <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-5xl w-full p-6">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-black z-10"
            >
              <X size={24} />
            </button>

            {/* Carousel Controls */}
            <div className="relative w-full h-[60vh] sm:h-[80vh] max-h-[600px] mb-6 flex items-center justify-center px-4">
              {selectedProduct.allImages && selectedProduct.allImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 z-10 text-gray-700 hover:text-black bg-white/80 rounded-full p-1"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 z-10 text-gray-700 hover:text-black bg-white/80 rounded-full p-1"
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


            <h3 className="text-xl text-center font-semibold text-gray-800">{selectedProduct.title}</h3>
            <p className="text-sm text-center text-gray-600 mt-2">{selectedProduct.description}</p>
          </div>
        </div>
      )
      }
    </section >
  );
}
