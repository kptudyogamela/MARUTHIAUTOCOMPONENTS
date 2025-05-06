'use client';

import Image from 'next/image';

const customers = [
  { name: 'Indo Autotech', logo: '/Images/trusted/logo1.png' },
  { name: 'Havells', logo: '/Images/trusted/logo2.png' },
  { name: 'Surin Automotive', logo: '/Images/trusted/logo3.png' },
  { name: 'Nahars Engineering', logo: '/Images/trusted/logo7.png' },
  { name: 'Rittal India', logo: '/Images/trusted/logo4.png' },
  { name: 'Badve Engineering', logo: '/Images/trusted/logo5.png' },
  { name: 'Nahars Engineering', logo: '/Images/trusted/logo8.png' },
  { name: 'Nahars Engineering', logo: '/Images/trusted/logo6.png' },
  { name: 'Nahars Engineering', logo: '/Images/trusted/logo9.png' },
];

export default function TrustedByCarousel() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Trusted By
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Our clients include some of the most respected names in the industry who count on us for uncompromising precision and quality.
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-red-500 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {customers.map((client, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-4 w-full flex justify-center items-center transition-transform hover:scale-105"
            >
              <div className="relative w-[100px] h-[60px] sm:w-[120px] sm:h-[80px]">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
