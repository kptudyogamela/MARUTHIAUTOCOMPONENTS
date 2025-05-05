'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const certificateData = [
  { title: "ISO 9001:2015 (Blank Template)", img: '/Images/certificate/certificate1.png' },
  { title: "Certificate of Appreciation - Rittal", img: '/Images/certificate/certificate2.png' },
  { title: "EGAC Accreditation Logo", img: '/Images/certificate/certificate3.png' },
  { title: "ISO 9001:2015 - Maruthi Auto Components", img: '/Images/certificate/certificate4.png' },
];

const certificates = [
  {
    src: '/Images/certificate/certificate1.png',
    alt: 'ISO Certificate',
    description: 'ISO Certified until July 2025',
  },
  {
    src: '/Images/certificate/certificate2.png',
    alt: 'Environmental Compliance',
    description: 'Environmentally Compliant until Dec 2025',
  },
  {
    src: '/Images/certificate/certificate3.png',
    alt: 'Quality Assurance',
    description: 'Quality Assurance Certified until Mar 2026',
  },
  {
    src: '/Images/certificate/certificate4.png',
    alt: 'Customer Satisfaction',
    description: 'Customer Satisfaction Award - 2024',
  },
];

export default function Certification() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % certificates.length);
    }, 1000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleCertificates = [
    certificates[startIndex],
    certificates[(startIndex + 1) % certificates.length],
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Certifications & Quality Commitment
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Discover our dedication to excellence through globally recognized certifications, ensuring unmatched quality and customer trust.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-5">
          {certificateData.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-4">
              <h3 className="text-xl font-semibold text-center mb-2">{cert.title}</h3>
              <img src={cert.img} alt={cert.title} className="rounded-lg w-full object-contain max-h-[100px]" />
            </div>
          ))}
        </div>

        {/* Rotating Certificates (2 at a time) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mb-12 transition-all duration-700 ease-in-out">
          {visibleCertificates.map((cert, idx) => (
            <div
              key={idx}
              className="relative border border-gray-200 rounded-2xl shadow-2xl p-4 bg-gradient-to-br from-red-100 via-white to-red-200 overflow-hidden flex flex-col items-center justify-center backdrop-blur-sm bg-opacity-70 hover:shadow-red-400 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-red-100/20 to-transparent pointer-events-none" />

              <Image
                src={cert.src}
                alt={cert.alt}
                width={200}
                height={300}
                className="object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-1">{cert.alt}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            </div>

          ))}
        </div>

      </div>
    </section >
  );
}
