'use client';
import React, { useState } from 'react';

const services = [
  {
    category: 'FABRICATION',
    title: 'Laser Cutting Machine – 3KW',
    description: 'Our high-precision 3KW laser cutting machine enables fast and accurate cutting of sheet metals and tubular materials. It delivers clean edges, intricate shapes, and consistent quality across high-volume production, making it ideal for automotive, industrial, and custom fabrication needs.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/laser-cutting.mp4',
    count: 1,
  },
  {
    category: 'AUTO TURNED COMPONENTS',
    title: 'TRAUB Machines',
    description: 'Precision automatic lathes ideal for high-volume production of complex components. These machines are built to handle intricate designs with speed and accuracy, ensuring high-quality output in mass production settings.',
    image: '/Images/machines/thread.jpg',
    video: '/videos/traub.mp4',
    count: 11,
  },

  // TUBE PROCESSING (4)
  {
    category: 'TUBE PROCESSING',
    title: 'SPM Tube Cutting Machines',
    description: 'Automated machines designed to cut tubes precisely up to 50 mm diameter. Ideal for industries that require accurate cutting of tubes for various applications, including automotive, construction, and manufacturing.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/tube-cutting.mp4',
    count: 2,
  },
  {
    category: 'TUBE PROCESSING',
    title: 'Dia Reducing Machine',
    description: 'Reduces the diameter of rods or tubes without compromising strength. This machine ensures uniformity in tube size and is used widely in metalworking and tubing industries.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/dia-reducing.mp4',
    count: 1,
  },
  {
    category: 'TUBE PROCESSING',
    title: 'SPM ID OD Chamfering Machine',
    description: 'Used for internal and external chamfering of cylindrical components up to 50 mm. This machine is designed to prepare edges for threading or welding, improving product quality and ease of assembly.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/chamfering.mp4',
    count: 1,
  },

  // DRILLING & TAPPING (5)
  {
    category: 'DRILLING & TAPPING',
    title: 'SPM Drilling Machines',
    description: 'Special Purpose Machines for precision drilling applications. These machines offer high precision and repeatability for drilling holes in materials such as metal, plastic, and composite.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/drilling.mp4',
    count: 2,
  },
  {
    category: 'DRILLING & TAPPING',
    title: 'SPM Tapping Machine',
    description: 'Used for accurate internal thread cutting. With high speed and accuracy, these machines are essential for producing threaded holes in components for assembly.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/tapping.mp4',
    count: 1,
  },
  {
    category: 'DRILLING & TAPPING',
    title: 'SPM Hole Chamfering Machines',
    description: 'Ideal for deburring and chamfering drilled holes. This machine helps remove sharp edges and ensures smooth operation for parts requiring precise finishes.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/hole-chamfering.mp4',
    count: 2,
  },

  // SHEET METAL FABRICATION (2)
  {
    category: 'SHEET METAL FABRICATION',
    title: 'Laser Cutting 3KW Machine',
    description: 'High precision fiber laser cutter with 3KW power for complex designs. This machine is perfect for cutting intricate shapes in metals like stainless steel, aluminum, and mild steel.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/laser.mp4',
    count: 1,
  },
  {
    category: 'SHEET METAL FABRICATION',
    title: 'CNC Bending Machine',
    description: 'Computer-controlled machine for high-accuracy metal bending. The CNC bending machine is used in industries for bending metals into precise angles and shapes as per product specifications.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/bending.mp4',
    count: 1,
  },

  // THREADING & WELDING (3)
  {
    category: 'THREADING & WELDING',
    title: 'Thread Rolling Machines',
    description: 'Machines designed for high-quality thread formation using rolling technique. Thread rolling is a process that forms threads through deformation, making parts stronger and more durable.',
    image: '/Images/machines/thread.jpg',
    video: '/videos/thread-rolling.mp4',
    count: 2,
  },
  {
    category: 'THREADING & WELDING',
    title: '200 KVA Resistance Welding Machine',
    description: 'High-power welding machine used for joining metal parts with resistance heating. This machine offers precision and consistency in welding parts like automotive components and electrical connections.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/welding.mp4',
    count: 1,
  },

  // SECONDARY OPERATIONS (5)
  {
    category: 'SECONDARY OPERATIONS',
    title: 'Secondary Operation Machines',
    description: 'Used for secondary machining operations such as finishing, shaping, or drilling. These machines provide essential post-processing tasks for enhancing component quality and finishing.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/secondary.mp4',
    count: 4,
  },
  {
    category: 'SECONDARY OPERATIONS',
    title: 'SPM Rod Cutting Machine',
    description: 'For fast and accurate cutting of rods up to 16 mm diameter. The SPM rod cutting machine helps streamline production in industries that require precise rod lengths for assembly.',
    image: '/Images/machines/laser.jpg',
    video: '/videos/rod-cutting.mp4',
    count: 1,
  },
];

const ServicesSection = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="text-center mb-16">
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
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-50">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={service.image}
                  alt={service.title}
                />
                <div className="p-4">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {service.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
                    {service.title}
                  </h1>
                  <p className="leading-relaxed mb-4 text-sm">{service.description}</p>
                  {/* <p className="text-sm text-gray-500 mb-1">Quantity:  {service.count.toString().padStart(2, '0')}</p> */}

                  <div className="text-sm font-semibold text-gray-700">
                    Number of Machines : {service.count.toString().padStart(2, '0')}
                  </div>
                  {service.video && (
                    <div className="flex items-center flex-wrap mt-4">
                      <button
                        className="text-red-700 hover:text-red-500 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0"
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
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

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
