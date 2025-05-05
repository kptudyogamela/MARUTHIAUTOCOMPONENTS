'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "Precision Turned Components",
    description:
      "Manufactured with high accuracy using TRAUB and SPM machines, ideal for automobile and electrical industry applications.",
    category: "Automobile",
    type: "Turned Parts",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    title: "Laser Cutting & CNC Bending",
    description:
      "With 3KW laser cutting and 110T CNC bending, we provide high-precision fabrication for both automotive and non-automotive sectors.",
    category: "Fabrication",
    type: "Laser Cutting & CNC Bending Parts",
    icon: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </>
    ),
  },
  {
    title: "Foundation Bolts & Tubular Parts",
    description:
      "Engineered components including tie rods, slag rods, and foundation bolts, tailored to customer requirements with stringent quality control.",
    category: "Construction",
    type: "Bolts",
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
  {
    title: "Custom Tubular Section",
    description:
      "High-strength tubular components tailored for automotive frames and structural applications.",
    category: "Automobile",
    type: "Tubular Parts",
    icon: (
      <>
        <path d="M3 12h18" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Corner Bracket Piece",
    description:
      "Used for assembling metal frameworks and angular support junctions.",
    category: "Fabrication",
    type: "Corner Piece",
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M4 12h8v8" />
      </>
    ),
  },
];

const types = ["All", ...new Set(products.map((p) => p.type))];

export default function Products() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? products : products.filter((p) => p.type === filter);

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
                  <div className="bg-red-100 text-red-500 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      {product.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <Button variant="link" className="mt-3 text-red-500">
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
    </section>
  );
}
