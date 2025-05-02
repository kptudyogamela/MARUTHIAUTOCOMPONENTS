'use client'
import React, { useState } from 'react';

const services = [
  {
    category: 'AUTO TURNED COMPONENTS',
    title: 'Precision Machining',
    description:
      'Manufacturing of precision auto-turned components and tubular parts using advanced TRAUB and turning setups.',
    video: '/Images/videos/4.mp4',
    image: '/Images/services/7.jpg',
  },
  {
    category: 'FABRICATION & SHEET METAL',
    title: 'Laser Cutting & CNC Bending',
    description:
      'Laser cutting (3KW) and CNC bending (110T) for automotive and industrial needs, including sheet metal job work.',
    video: '/Images/videos/4.mp4',
    image: '/Images/services/7.jpg',
  },
  {
    category: 'ANCHORING & FASTENERS',
    title: 'Thread Rolling & Bolts',
    description:
      'Manufacture of tie rods, anchor bolts, and slag rods with threading, reducing, and chamfering for structural assemblies.',
    video: '/Images/videos/4.mp4',
    image: '/Images/services/7.jpg',
  },
  {
    category: 'ELECTRICAL ENCLOSURE COMPONENTS',
    title: 'Corner Piece Manufacturing',
    description:
      'Fabrication of enclosure body parts and custom sheet metal pieces for electrical housing and structural systems.',
    video: '/Images/videos/4.mp4',
    image: '/Images/services/7.jpg',
  },
  {
    category: 'IN-HOUSE MACHINING',
    title: 'Turning, Drilling, Threading, Chamfering',
    description:
      'Comprehensive machining support with dedicated tools for turning, drilling, chamfering, and threading under one roof.',
    video: '/Images/videos/4.mp4',
    image: '/Images/services/7.jpg',
  },
  {
    category: 'JOB WORK SERVICES',
    title: 'Laser Cutting & Sheet Bending',
    description:
      'Customized laser cutting and bending jobs as per client drawings. Cost-effective solution for one-time and repeat orders.',
    video: '/Images/videos/4.mp4',
    image: '/Images/services/7.jpg',
  },
];

const ServicesSection = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Services</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            MAC offers end-to-end manufacturing solutions ranging from precision turned parts to sheet metal fabrication and structural fasteners.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <div className="p-4 md:w-1/3" key={index}>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={service.image}
                  alt={service.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {service.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {service.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{service.description}</p>
                  <div className="flex items-center flex-wrap">
                    <button
                      className="text-red-800 hover:text-red-400 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0"
                      onClick={() => setVideoSrc(service.video)}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {videoSrc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden shadow-lg">
              <video controls autoPlay className="w-full h-auto">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => setVideoSrc(null)}
                className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 hover:bg-red-600 transition rounded-full w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
