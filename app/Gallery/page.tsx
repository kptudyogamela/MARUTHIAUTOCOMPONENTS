'use client';

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function GalleryPage() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const galleryItems = [
    {
      title: "Precision Laser Cut",
      subtitle: "Laser Cutting",
      description: "Advanced laser cutting delivering clean, accurate finishes for various components.",
      image: "Images/gal/1.JPG",
    },
    {
      title: "Robotic Precision",
      subtitle: "CNC Bending",
      description: "Fully automated CNC bending ensures uniformity and strength in all parts.",
      image: "Images/gal/2.JPG",
    },
    {
      title: "Strength in Steel",
      subtitle: "Tie Rod Manufacturing",
      description: "Tie rods crafted with tensile strength for construction and automotive use.",
      image: "Images/gal/3.JPG",
    },
    {
      title: "Heat Bond",
      subtitle: "Welding Process",
      description: "Expert welding techniques used to fuse structural elements for long-term durability.",
      image: "Images/gal/4.JPG",
    },
    {
      title: "Final Touch",
      subtitle: "Quality Check",
      description: "Thorough quality inspections before shipping ensure the highest standards.",
      image: "Images/gal/5.JPG",
    },
    {
      title: "Packed to Protect",
      subtitle: "Packaging Line",
      description: "Secure packaging ensures damage-free delivery and product safety.",
      image: "Images/gal/6.JPG",
    },
    {
      title: "Bending Power",
      subtitle: "Heavy Machinery",
      description: "High-capacity machines bending metals with accuracy and minimal waste.",
      image: "Images/gal/7.JPG",
    },
    {
      title: "Solid Foundation",
      subtitle: "Mounting Brackets",
      description: "Sturdy brackets designed to support large frameworks.",
      image: "Images/gal/8.JPG",
    },
    {
      title: "Load Tested",
      subtitle: "Stress Testing",
      description: "Mechanical stress tests verify durability under extreme conditions.",
      image: "Images/gal/9.JPG",
    },
    {
      title: "Wireframe Assembly",
      subtitle: "Structural Framework",
      description: "Assembled wireframes built to precise dimensional tolerances.",
      image: "Images/gal/10.JPG",
    },
    {
      title: "Sealed Strong",
      subtitle: "Gasket Application",
      description: "Installation of seals and gaskets to prevent leaks and improve longevity.",
      image: "Images/gal/11.JPG",
    },
    {
      title: "Clean Cut",
      subtitle: "Sheet Metal Processing",
      description: "Smooth sheet metal processing for housing and enclosures.",
      image: "Images/gal/12.JPG",
    },
    {
      title: "Fasten Right",
      subtitle: "Assembly Fasteners",
      description: "Precision fasteners for high-stress mechanical joins.",
      image: "Images/gal/13.JPG",
    },
    {
      title: "Even Finish",
      subtitle: "Surface Polishing",
      description: "Polishing machines used for a clean, corrosion-resistant surface finish.",
      image: "Images/gal/14.JPG",
    },
    {
      title: "Every Nut Counts",
      subtitle: "Component Storage",
      description: "Organized inventory of critical nuts and bolts ready for assembly.",
      image: "Images/gal/15.JPG",
    },
    {
      title: "Automated Drill",
      subtitle: "Precision Drilling",
      description: "Multi-head drills provide consistent holes with minimal error.",
      image: "Images/gal/16.JPG",
    },
    {
      title: "Seamless Integration",
      subtitle: "Fabrication Assembly",
      description: "Components merged to form complete units for industrial systems.",
      image: "Images/gal/17.JPG",
    },
    {
      title: "Rigidity Guaranteed",
      subtitle: "Cross Members",
      description: "Reinforced cross members support mechanical stability in structures.",
      image: "Images/gal/18.JPG",
    },
    {
      title: "Fluid Flow",
      subtitle: "Tubular Systems",
      description: "Precision tubes routed for fluid and air movement in machines.",
      image: "Images/gal/19.JPG",
    },
    {
      title: "Stacked Smart",
      subtitle: "Inventory Management",
      description: "Smart racking and stacking solutions for space-saving storage.",
      image: "Images/gal/20.JPG",
    },
    {
      title: "Fixture Ready",
      subtitle: "Tooling Setup",
      description: "Custom fixtures and jigs used for consistent production runs.",
      image: "Images/gal/21.JPG",
    },
    {
      title: "Heavy Duty Support",
      subtitle: "Corner Brackets",
      description: "Corner brackets that deliver high-load support for metal frames.",
      image: "Images/gal/22.JPG",
    },
    {
      title: "Steel Spine",
      subtitle: "Backbone Rods",
      description: "Backbone components for load transfer in chassis systems.",
      image: "Images/gal/23.JPG",
    },
    {
      title: "Detailed Edges",
      subtitle: "Fine Cutting",
      description: "Edges cut with laser precision for complex patterns and fittings.",
      image: "Images/gal/24.JPG",
    },
    {
      title: "Hook Mount",
      subtitle: "Hanging Solutions",
      description: "Hooks and holders integrated for storage and hanging needs.",
      image: "Images/gal/25.JPG",
    },
    {
      title: "Pipe Bending",
      subtitle: "Tubular Fabrication",
      description: "Precision-bent pipes formed for assembly in complex systems.",
      image: "Images/gal/26.JPG",
    },
    {
      title: "Ready for Transport",
      subtitle: "Final Goods",
      description: "Goods packed and stacked, ready to be dispatched across markets.",
      image: "Images/gal/27.JPG",
    },
    {
      title: "Axle Core",
      subtitle: "Rotational Elements",
      description: "Core axles fabricated to support rotation and balance.",
      image: "Images/gal/28.JPG",
    },

    {
      title: "Shielded Process",
      subtitle: "Protective Welding",
      description: "Shielded welding ensures no atmospheric contamination.",
      image: "Images/gal/31.jpg",
    },
    {
      title: "Perfect Round",
      subtitle: "Ring Components",
      description: "Rings forged for mechanical seals and bearing applications.",
      image: "Images/gal/32.jpg",
    },
    {
      title: "Framework Assembly",
      subtitle: "Chassis Building",
      description: "Large component framework for industrial vehicles assembled.",
      image: "Images/gal/33.jpg",
    },
    {
      title: "Bolted Secure",
      subtitle: "Heavy Bolts",
      description: "Large bolts installed with torque control for firm attachment.",
      image: "Images/gal/34.jpg",
    },
    {
      title: "Precision Press",
      subtitle: "Hydraulic Press",
      description: "Press machines shaping and flattening metal sheets efficiently.",
      image: "Images/gal/35.jpg",
    },
    {
      title: "Inventory Precision",
      subtitle: "Parts Management",
      description: "Barcode-based inventory system streamlining the workflow.",
      image: "Images/gal/36.jpg",
    },
    {
      title: "Assembly Belt",
      subtitle: "Production Line",
      description: "Continuous assembly belts for high-volume component fitting.",
      image: "Images/gal/37.jpg",
    },
    {
      title: "Marking ID",
      subtitle: "Part Identification",
      description: "Laser marking for permanent and readable component IDs.",
      image: "Images/gal/38.jpg",
    },
    {
      title: "Clean and Coated",
      subtitle: "Surface Treatment",
      description: "Protective coatings applied to fight rust and abrasion.",
      image: "Images/gal/40.png",
    },
    {
      title: "Press Fit",
      subtitle: "Part Joining",
      description: "Press-fit operations joining critical pieces without welding.",
      image: "Images/gal/41.png",
    },
    {
      title: "Logistics Ready",
      subtitle: "Shipping Bay",
      description: "Finished parts ready to be shipped with full documentation.",
      image: "Images/gal/42.png",
    },
  ];


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            MAC Factory & Process Gallery
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            A glimpse into the infrastructure, production, and people that power
            Maruthi Auto Components.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="lg:w-1/3 sm:w-1/2 p-4">
              <div
                className="flex relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setModalImage(item.image)}
              >
                <img
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-600 mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-red-400 transition"
            aria-label="Close"
          >
            <IoClose />
          </button>
          <img
            src={modalImage}
            alt="Full View"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
