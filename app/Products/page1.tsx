'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
interface Product {
  title: string;
  description: string;
  category: string;
  type: string;
  images: string[]; // Array of image URLs
}


const products = [
  // --- Original Items ---
  {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks and angular support junctions in structural and fabrication works.",
    category: "Fabrication",
    type: "Corner Piece",
    image: "/Images/products/1.png"
  },
  {
    title: "Anchor Bolts",
    description: "Precision-manufactured bolts used for securing structures to concrete foundations, ensuring strong and reliable anchoring.",
    category: "Construction",
    type: "Anchor Bolts",
    image: "/Images/products/2.jpg"
  },
  {
    title: "Headed Bolts",
    description: "Heavy-duty bolts with heads for use in structural and industrial assemblies, meeting high-torque applications.",
    category: "Turned Parts",
    type: "Headed Bolts",
    image: "/Images/products/3.jpg"
  },
  {
    title: "Precision Turned Components",
    description: "Manufactured with high accuracy using TRAUB and SPM machines, ideal for automobile and electrical industry applications.",
    category: "Tubular Parts",
    type: "Turned Parts",
    image: "/Images/products/4.jpg"
  },
  {
    title: "Custom Tubular Section",
    description: "High-strength tubular components tailored for automotive frames and structural applications.",
    category: "Tubular Parts",
    type: "Tubular Parts",
    image: "/Images/products/5.jpg"
  },
  {
    title: "Assembly Parts",
    description: "Pre-assembled components tailored to client requirements, reducing on-site labor and increasing efficiency.",
    category: "Automobile",
    type: "Assembly Parts",
    image: "/Images/products/6.jpg"
  },
  {
    title: "Bolt Cushions",
    description: "Vibration-dampening components used with bolts to protect assemblies from shock and loosening.",
    category: "Turned Parts",
    type: "Bolt Cushions",
    image: "/Images/products/7.jpg"
  },
  {
    title: "Laser Cutting & CNC Bending",
    description: "With 3KW laser cutting and 110T CNC bending, we provide high-precision fabrication for both automotive and non-automotive sectors.",
    category: "Fabrication",
    type: "Laser Cutting & CNC Bending Parts",
    image: "/Images/products/8.jpg"
  },
  {
    title: "Tie Rods & Slag Rods",
    description: "Engineered rods for structural and machinery support applications, including customized specifications.",
    category: "Construction",
    type: "Tie Rods",
    image: "/Images/products/9.jpg"
  },
  {
    title: "Laser Job Works",
    description: "High-quality laser job cutting services for sheet metal and custom parts with precise detailing and clean finish.",
    category: "Services",
    type: "Laser Job Parts",
    image: "/Images/products/con1.jpg"
  },
  {
    title: "Heavy-Duty Bolt",
    description: "Rugged construction bolt designed for securing large industrial structures.",
    category: "Construction",
    type: "Construction Bolt",
    image: "/Images/products/con2.jpg"
  },
  {
    title: "Industrial Bolt with Nut",
    description: "Industrial-grade bolt with nut assembly, providing robust connection for heavy load applications.",
    category: "Construction",
    type: "Construction Bolt",
    image: "/Images/products/con3.jpg"
  },
  {
    title: "Threaded Rod Bolt",
    description: "Fully threaded bolt ideal for structural bonding and support in construction projects.",
    category: "Construction",
    type: "Construction Bolt",
    image: "/Images/products/tub1.jpg"
  },
  {
    title: "Tubular Frame Section",
    description: "Precision tubular steel frame used in chassis and machine frames.",
    category: "Tubular Parts",
    type: "Tubular Frame",
    image: "/Images/products/tub2.jpg"
  },
  {
    title: "Custom Tubular Fabrication",
    description: "Fabricated tubular parts crafted for specific automotive or structural needs.",
    category: "Tubular Parts",
    type: "Tubular Fabrication",
    image: "/Images/products/tub3.jpg"
  },
  {
    title: "High-Strength Pipe",
    description: "Industrial-grade pipe section built for pressure and durability in mechanical systems.",
    category: "Tubular Parts",
    type: "High-Strength Pipe",
    image: "/Images/products/tur1.jpg"
  },
  {
    title: "Machined Shaft Component",
    description: "Turned part produced with micron-level accuracy, ideal for motion and rotary applications.",
    category: "Turned Parts",
    type: "Machined Shaft",
    image: "/Images/products/tur2.jpg"
  },

  // --- New Items (simplified entries with default category/type based on title) ---
  ...[
    { title: 'Washers', images: [1, 2], category: 'Fasteners', type: 'Washer' },
    { title: 'Tie Rods', images: [3, 4, 5, 6, 7], category: 'Construction', type: 'Tie Rods' },
    { title: 'Construction Bolts', images: [8, 9, 10, 11], category: 'Construction', type: 'Construction Bolt' },
    { title: 'Corner Piece', images: [12, 13, 14, 15, 16, 17, 18, 19], category: 'Fabrication', type: 'Corner Piece' },
    { title: 'Nuts', images: [20, 21], category: 'Fasteners', type: 'Nut' },
    { title: 'Plain Bolt', images: [22, 23, 24], category: 'Construction', type: 'Plain Bolt' },
    { title: 'Pipes', images: [25, 26, 27], category: 'Tubular Parts', type: 'Pipe' },
    { title: 'Cross Member', images: [28, 29, 30, 31], category: 'Automobile', type: 'Cross Member' },
    { title: 'Assembly Parts', images: [32, 33], category: 'Automobile', type: 'Assembly Parts' },
    { title: 'Hexagon Headed Bolt', images: [34, 35, 36], category: 'Fasteners', type: 'Hex Bolt' },
    { title: 'Tubular Pipes', images: [37, 38], category: 'Tubular Parts', type: 'Pipe' },
    { title: 'Hook Stand SPG', images: [39, 40], category: 'Accessories', type: 'Hook Stand' },
    { title: 'Collar', images: [41, 42, 43], category: 'Accessories', type: 'Collar' },
    { title: 'Tubular Part - Tractor Parts', images: [44, 45], category: 'Tubular Parts', type: 'Tractor Part' },
    { title: 'Tubular Part - Automotive Parts', images: [46, 47, 48], category: 'Tubular Parts', type: 'Automotive Part' },
    { title: 'Laser Cutting and CNC Bending Parts', images: Array.from({ length: 49 - 1 + 28 }, (_, i) => i + 49), category: 'Fabrication', type: 'Laser Cutting & CNC Bending Parts' }
  ].flatMap(({ title, images, category, type }) =>
    images.map(i => ({
      title,
      description: "",
      category,
      type,
      image: `/Images/products/newprod/${i}.jpg`
    }))
  )
];




const types = ["All", ...new Set(products.map((p) => p.category))];

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = filter === "All" ? products : products.filter((p) => p.category === filter);

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
          {filtered.map((product, idx) => (
            product && (
              <Card key={idx} className="hover:shadow-lg transition">
                <CardContent className="p-4">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={product.image || "/placeholder.jpg"}
                      alt={product.title || "Product Image"}
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
                    onClick={() => setSelectedProduct(product)}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>

      {/* Modal for Product Image */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full p-4">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-black z-10"
            >
              <X size={24} />
            </button>

            <div className="relative w-full h-64 mb-4">
              <Image
                src={selectedProduct.image || "/placeholder.jpg"}
                alt={selectedProduct.title || "Product Image"}
                fill
                style={{ objectFit: "contain" }}
                className="rounded"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{selectedProduct.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </section>

  );
}