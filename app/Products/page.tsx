'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Corner Bracket Piece",
    description:
      "Used for assembling metal frameworks and angular support junctions in structural and fabrication works.",
    category: "Fabrication",
    type: "Corner Piece",
    image: "/images/products/1.png"
  },
  {
    title: "Anchor Bolts",
    description:
      "Precision-manufactured bolts used for securing structures to concrete foundations, ensuring strong and reliable anchoring.",
    category: "Construction",
    type: "Anchor Bolts",
    image: "/images/products/2.jpg"
  },
  {
    title: "Headed Bolts",
    description:
      "Heavy-duty bolts with heads for use in structural and industrial assemblies, meeting high-torque applications.",
    category: "Turned Parts",
    type: "Headed Bolts",
    image: "/images/products/3.jpg"
  },
  {
    title: "Precision Turned Components",
    description:
      "Manufactured with high accuracy using TRAUB and SPM machines, ideal for automobile and electrical industry applications.",
    category: "Tubular Parts",
    type: "Turned Parts",
    image: "/images/products/4.jpg"
  },
  {
    title: "Custom Tubular Section",
    description:
      "High-strength tubular components tailored for automotive frames and structural applications.",
    category: "Tubular Parts",
    type: "Tubular Parts",
    image: "/images/products/5.jpg"
  },
  {
    title: "Assembly Parts",
    description:
      "Pre-assembled components tailored to client requirements, reducing on-site labor and increasing efficiency.",
    category: "Automobile",
    type: "Assembly Parts",
    image: "/images/products/6.jpg"
  },
  {
    title: "Bolt Cushions",
    description:
      "Vibration-dampening components used with bolts to protect assemblies from shock and loosening.",
    category: "Turned Parts",
    type: "Bolt Cushions",
    image: "/images/products/7.jpg"
  },
  {
    title: "Laser Cutting & CNC Bending",
    description:
      "With 3KW laser cutting and 110T CNC bending, we provide high-precision fabrication for both automotive and non-automotive sectors.",
    category: "Fabrication",
    type: "Laser Cutting & CNC Bending Parts",
    image: "/images/products/8.jpg"
  },
  {
    title: "Tie Rods & Slag Rods",
    description:
      "Engineered rods for structural and machinery support applications, including customized specifications.",
    category: "Construction",
    type: "Tie Rods",
    image: "/images/products/9.jpg"
  },
  {
    title: "Laser Job Works",
    description:
      "High-quality laser job cutting services for sheet metal and custom parts with precise detailing and clean finish.",
    category: "Services",
    type: "Laser Job Parts",
    image: "/images/products/1.jpg"
  },
];

const types = ["All", ...new Set(products.map((p) => p.category))];

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="py-16 bg-white">
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="bg-red-100 text-red-500 w-16 h-16 flex items-center justify-center rounded-full mb-4 overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={64}
                        height={64}
                        className="object-cover rounded-full"
                      />
                    ) : (
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                      >
                        {product.image}
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <Button
                    variant="link"
                    className="mt-3 text-red-500"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
              View All Products
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full relative overflow-hidden">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{selectedProduct.title}</h3>
              <p className="text-gray-500 mb-4">{selectedProduct.description}</p>
              <div className="w-full h-64 relative">
                <Image
                  src={selectedProduct.image || `/images/${selectedProduct.type.replace(/\s+/g, "-").toLowerCase()}.jpg`}
                  alt={selectedProduct.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
