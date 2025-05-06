'use client';

import Image from 'next/image';
import { PlayCircle, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const fullText = " Industrial Precision Components";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed] = useState(100);


  const galleryItems = [
    {
      title: "Precision Laser Cut",
      subtitle: "Laser Cutting",
      description: "Advanced laser cutting delivering clean, accurate finishes for various components.",
      image: "Images/gal/1.jpg",
    },
    {
      title: "Robotic Precision",
      subtitle: "CNC Bending",
      description: "Fully automated CNC bending ensures uniformity and strength in all parts.",
      image: "Images/gal/2.jpg",
    },
    {
      title: "Strength in Steel",
      subtitle: "Tie Rod Manufacturing",
      description: "Tie rods crafted with tensile strength for construction and automotive use.",
      image: "Images/gal/3.jpg",
    },
    {
      title: "Heat Bond",
      subtitle: "Welding Process",
      description: "Expert welding techniques used to fuse structural elements for long-term durability.",
      image: "Images/gal/4.jpg",
    },
    {
      title: "Final Touch",
      subtitle: "Quality Check",
      description: "Thorough quality inspections before shipping ensure the highest standards.",
      image: "Images/gal/5.jpg",
    },
    {
      title: "Packed to Protect",
      subtitle: "Packaging Line",
      description: "Secure packaging ensures damage-free delivery and product safety.",
      image: "Images/gal/6.jpg",
    },
    {
      title: "Bending Power",
      subtitle: "Heavy Machinery",
      description: "High-capacity machines bending metals with accuracy and minimal waste.",
      image: "Images/gal/7.jpg",
    },
    {
      title: "Solid Foundation",
      subtitle: "Mounting Brackets",
      description: "Sturdy brackets designed to support large frameworks.",
      image: "Images/gal/8.jpg",
    },
    {
      title: "Load Tested",
      subtitle: "Stress Testing",
      description: "Mechanical stress tests verify durability under extreme conditions.",
      image: "Images/gal/9.jpg",
    },
    {
      title: "Wireframe Assembly",
      subtitle: "Structural Framework",
      description: "Assembled wireframes built to precise dimensional tolerances.",
      image: "Images/gal/10.jpg",
    },
    {
      title: "Sealed Strong",
      subtitle: "Gasket Application",
      description: "Installation of seals and gaskets to prevent leaks and improve longevity.",
      image: "Images/gal/11.jpg",
    },
    {
      title: "Clean Cut",
      subtitle: "Sheet Metal Processing",
      description: "Smooth sheet metal processing for housing and enclosures.",
      image: "Images/gal/12.jpg",
    },
    {
      title: "Fasten Right",
      subtitle: "Assembly Fasteners",
      description: "Precision fasteners for high-stress mechanical joins.",
      image: "Images/gal/13.jpg",
    },
    {
      title: "Even Finish",
      subtitle: "Surface Polishing",
      description: "Polishing machines used for a clean, corrosion-resistant surface finish.",
      image: "Images/gal/14.jpg",
    },
    {
      title: "Every Nut Counts",
      subtitle: "Component Storage",
      description: "Organized inventory of critical nuts and bolts ready for assembly.",
      image: "Images/gal/15.jpg",
    },
    {
      title: "Automated Drill",
      subtitle: "Precision Drilling",
      description: "Multi-head drills provide consistent holes with minimal error.",
      image: "Images/gal/16.jpg",
    },
    {
      title: "Seamless Integration",
      subtitle: "Fabrication Assembly",
      description: "Components merged to form complete units for industrial systems.",
      image: "Images/gal/17.jpg",
    },
    {
      title: "Rigidity Guaranteed",
      subtitle: "Cross Members",
      description: "Reinforced cross members support mechanical stability in structures.",
      image: "Images/gal/18.jpg",
    },
    {
      title: "Fluid Flow",
      subtitle: "Tubular Systems",
      description: "Precision tubes routed for fluid and air movement in machines.",
      image: "Images/gal/19.jpg",
    },
    {
      title: "Stacked Smart",
      subtitle: "Inventory Management",
      description: "Smart racking and stacking solutions for space-saving storage.",
      image: "Images/gal/20.jpg",
    },
    {
      title: "Fixture Ready",
      subtitle: "Tooling Setup",
      description: "Custom fixtures and jigs used for consistent production runs.",
      image: "Images/gal/21.jpg",
    },
    {
      title: "Heavy Duty Support",
      subtitle: "Corner Brackets",
      description: "Corner brackets that deliver high-load support for metal frames.",
      image: "Images/gal/22.jpg",
    },
    {
      title: "Steel Spine",
      subtitle: "Backbone Rods",
      description: "Backbone components for load transfer in chassis systems.",
      image: "Images/gal/23.jpg",
    },
    {
      title: "Detailed Edges",
      subtitle: "Fine Cutting",
      description: "Edges cut with laser precision for complex patterns and fittings.",
      image: "Images/gal/24.jpg",
    },
    {
      title: "Hook Mount",
      subtitle: "Hanging Solutions",
      description: "Hooks and holders integrated for storage and hanging needs.",
      image: "Images/gal/25.jpg",
    },
    {
      title: "Pipe Bending",
      subtitle: "Tubular Fabrication",
      description: "Precision-bent pipes formed for assembly in complex systems.",
      image: "Images/gal/26.jpg",
    },
    {
      title: "Ready for Transport",
      subtitle: "Final Goods",
      description: "Goods packed and stacked, ready to be dispatched across markets.",
      image: "Images/gal/27.jpg",
    },
    {
      title: "Axle Core",
      subtitle: "Rotational Elements",
      description: "Core axles fabricated to support rotation and balance.",
      image: "Images/gal/28.jpg",
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
      title: "Clean and Coated",
      subtitle: "Surface Treatment",
      description: "Protective coatings applied to fight rust and abrasion.",
      image: "Images/gal/40.jpg",
    },
    {
      title: "Press Fit",
      subtitle: "Part Joining",
      description: "Press-fit operations joining critical pieces without welding.",
      image: "Images/gal/41.jpg",
    },
    {
      title: "Logistics Ready",
      subtitle: "Shipping Bay",
      description: "Finished parts ready to be shipped with full documentation.",
      image: "Images/gal/42.jpg",
    },
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = fullText;
      const updatedText = isDeleting
        ? current.substring(0, displayedText.length - 1)
        : current.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, loopNum]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [galleryItems.length]);
  return (
    <section className="relative bg-white text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center">
        {/* Left: Text Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight text-gray-900 leading-snug mb-6">
            <span className="block">Manufacturer of Automotive and</span>
            <span className="block text-red-400 min-h-[2.5rem]">{displayedText}<span className="animate-pulse">|</span></span>
          </h1>

          <p className="mb-8 text-lg text-gray-700 text-justify mr-6">
            Maruthi Auto Components is a leading manufacturer of high-quality precision-turned and tubular automotive parts, including SAG rods, tie rods, anchor bolts, headed and straight-cut bolts. We also specialize in the production of electrical enclosure body corner pieces, as well as laser-cut and CNC-bent components. In addition to manufacturing, we offer job work services for laser cutting and bending. Backed by over 35 years of industry expertise and ISO certification, expert in 5S and Lean Management System, we are committed to delivering excellence in every component we produce.
          </p>

          <div className="flex flex-wrap gap-4 mb-4 justify-center md:justify-start">
            <button
              onClick={() => setShowVideo(true)}
              className="bg-red-600 inline-flex py-3 px-5 rounded-lg items-center text-white hover:bg-red-700 transition"
            >
              <PlayCircle className="w-6 h-6" />
              <span className="ml-3 flex flex-col items-start leading-none">
                <span className="text-xs">Watch</span>
                <span className="font-medium">Company Video</span>
              </span>
            </button>

            <button
              onClick={() => setShowCertificate(true)}
              className="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 transition"
            >
              <Award className="w-6 h-6 text-red-600" />
              <span className="ml-3 flex flex-col items-start leading-none">
                <span className="text-xs">To View</span>
                <span className="font-medium text-gray-800">ISO Certificate</span>
              </span>
            </button>
          </div>

          <p className="text-sm text-gray-500">
            ISO Certified | Clients: Indo Autotech, Havells, Surin Automotive & more.
          </p>
        </div>

        <div className="md:w-1/2 w-full flex flex-col items-center gap-4">
          <img
            src={galleryItems[carouselIndex].image}
            alt={galleryItems[carouselIndex].subtitle}
            width={600}
            height={500}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>


      {/* Video Modal */}
      {
        showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-4xl bg-white/10 rounded-xl overflow-hidden shadow-lg">
              <video controls autoPlay className="w-full h-full rounded-lg">
                <source src="/Images/videos/5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-white text-xl bg-black/60 hover:bg-red-600 transition rounded-full w-10 h-10 flex items-center justify-center"
                aria-label="Close Video"
              >
                ✕
              </button>
            </div>
          </div>
        )
      }

      {/* Certificate Modal */}
      {
        showCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <div className="relative w-98 max-w-xl bg-white rounded-xl p-6 shadow-lg">
              <Image
                src="/Images/certificate/certificate4.png"
                alt="ISO Certificate"
                width={600}
                height={800}
                className="object-contain w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute top-2 right-2 text-black text-xl bg-white hover:bg-red-600 hover:text-white transition rounded-full w-10 h-10 flex items-center justify-center"
                aria-label="Close Certificate"
              >
                ✕
              </button>
            </div>
          </div>
        )
      }
    </section >
  );
}
